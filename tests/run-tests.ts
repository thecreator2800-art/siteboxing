import assert from 'node:assert/strict';
import {
  LEAD_DUPLICATE_COOLDOWN_MS,
  LEAD_MIN_INTERVAL_MS,
  LEAD_WINDOW_MS,
  checkRateLimit,
  cleanupOldEntries,
  isPlainObject,
  normalizePhone,
} from '../lead-utils.ts';

type TestCase = {
  name: string;
  run: () => void;
};

const tests: TestCase[] = [
  {
    name: 'normalizePhone accepts Russian phone formats',
    run: () => {
      assert.deepEqual(normalizePhone('+7 (995) 250-96-36'), { ok: true, value: '9952509636' });
      assert.deepEqual(normalizePhone('8 995 250 96 36'), { ok: true, value: '9952509636' });
      assert.deepEqual(normalizePhone('9952509636'), { ok: true, value: '9952509636' });
    },
  },
  {
    name: 'normalizePhone rejects invalid values',
    run: () => {
      assert.deepEqual(normalizePhone(''), { ok: false });
      assert.deepEqual(normalizePhone('1234567890'), { ok: false });
      assert.deepEqual(normalizePhone('0000000000'), { ok: false });
      assert.deepEqual(normalizePhone('1111111111'), { ok: false });
      assert.deepEqual(normalizePhone('abc'), { ok: false });
      assert.deepEqual(normalizePhone(null), { ok: false });
    },
  },
  {
    name: 'isPlainObject only accepts plain objects',
    run: () => {
      assert.equal(isPlainObject({ phone: '123' }), true);
      assert.equal(isPlainObject([]), false);
      assert.equal(isPlainObject(null), false);
      assert.equal(isPlainObject('text'), false);
    },
  },
  {
    name: 'checkRateLimit blocks too frequent requests and resets window',
    run: () => {
      const store = new Map();
      const now = 1_000_000;

      assert.deepEqual(checkRateLimit(store, '1.1.1.1', now), { allowed: true });
      assert.deepEqual(checkRateLimit(store, '1.1.1.1', now + LEAD_MIN_INTERVAL_MS - 1), { allowed: false });
      assert.deepEqual(checkRateLimit(store, '1.1.1.1', now + LEAD_WINDOW_MS + 1), { allowed: true });
    },
  },
  {
    name: 'cleanupOldEntries removes expired records',
    run: () => {
      const rateStore = new Map([
        ['ip-old', { windowStart: 0, count: 5, lastRequestAt: 0 }],
        ['ip-fresh', { windowStart: LEAD_WINDOW_MS, count: 1, lastRequestAt: LEAD_WINDOW_MS }],
      ]);
      const now = LEAD_WINDOW_MS * 2 + 1;
      const duplicateStore = new Map([
        ['old', 0],
        ['fresh', now - LEAD_DUPLICATE_COOLDOWN_MS + 1],
      ]);

      cleanupOldEntries(rateStore, duplicateStore, now);

      assert.equal(rateStore.has('ip-old'), false);
      assert.equal(rateStore.has('ip-fresh'), true);
      assert.equal(duplicateStore.has('old'), false);
      assert.equal(duplicateStore.has('fresh'), true);
    },
  },
];

let passed = 0;

for (const test of tests) {
  try {
    test.run();
    passed += 1;
    console.log(`PASS ${test.name}`);
  } catch (error) {
    console.error(`FAIL ${test.name}`);
    console.error(error);
    process.exit(1);
  }
}

console.log(`Passed ${passed}/${tests.length} tests`);

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../constants';

export const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full relative">
      <div className="bg-white p-6 md:p-12 shadow-2xl border border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center gap-4 mb-10 md:mb-16">
            <div className="flex items-center gap-2 text-black font-bold uppercase tracking-widest text-[10px] md:text-xs">
              <div className="w-8 h-[2px] bg-black" />
              Ответы на вопросы
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-black">
              Часто задаваемые <br /> <span className="text-gray-400">вопросы</span>
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <div key={item.q} className="border-b border-gray-100">
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full py-6 flex justify-between items-center text-left group"
                >
                  <h3 className="text-sm md:text-lg font-black uppercase tracking-tighter pr-4 group-hover:text-[#FFD700] transition-colors">
                    {item.q}
                  </h3>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${activeFaq === index ? 'rotate-180 text-[#FFD700]' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-gray-500 text-sm md:text-base leading-relaxed tracking-tight max-w-3xl">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

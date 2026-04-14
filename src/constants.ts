import {
  ContactBenefit,
  FaqItem,
  FeatureCard,
  MenuItem,
  PricingPlan,
  ReviewCard,
  TrainingFormatCard,
} from './types';
import tarif1 from './assets/images/formats/tarif1.jpg';
import tarif2 from './assets/images/formats/tarif2.jpg';
import tarif3 from './assets/images/formats/tarif3.jpg';
import tarif4 from './assets/images/formats/tarif4.jpg';
import otziv1 from './assets/images/reviews/otziv1.png';
import otziv2 from './assets/images/reviews/otziv2.png';
import otziv3 from './assets/images/reviews/otziv3.png';
import otziv4 from './assets/images/reviews/otziv4.png';
import otziv5 from './assets/images/reviews/otziv5.png';
import otziv6 from './assets/images/reviews/otziv6.png';
import slider1 from './assets/images/trainer/slider1.jpg';
import slider2 from './assets/images/trainer/slider2.jpg';
import slider3 from './assets/images/trainer/slider3.jpg';
import slider4 from './assets/images/trainer/slider4.jpg';
import slider5 from './assets/images/trainer/slider5.jpg';
import prem1 from './assets/images/features/prem1.jpg';
import prem2 from './assets/images/features/prem2.jpg';
import prem3 from './assets/images/features/prem3.jpg';
import prem4 from './assets/images/features/prem4.jpg';

export const MENU_ITEMS: MenuItem[] = [
  { name: 'Форматы', href: '#formats' },
  { name: 'Отзывы', href: '#reviews' },
  { name: 'Тренер', href: '#trainer' },
  { name: 'Цены', href: '#prices' },
  { name: 'Карта', href: '#contacts' },
  { name: 'FAQ', href: '#faq' },
];

export const FEATURE_CARDS: FeatureCard[] = [
  {
    title: 'Можно с нуля новичкам',
    desc: 'Программа адаптирована для тех, кто никогда не стоял в паре',
    image: prem1,
    delay: 0.1,
  },
  {
    title: 'Индивидуальный подход',
    desc: 'Тренировки строятся исходя из ваших целей и физической формы',
    image: prem2,
    delay: 0.2,
  },
  {
    title: 'Удобная локация',
    desc: 'Зал находится в центре города с удобной транспортной развязкой',
    image: prem3,
    delay: 0.3,
  },
  {
    title: 'Тренирует мастер спорта',
    desc: 'Занятия проводит сертифицированный тренер с боевым опытом',
    image: prem4,
    delay: 0.4,
  },
];

export const TRAINING_FORMAT_CARDS: TrainingFormatCard[] = [
  {
    title: 'Персональные занятия',
    desc: 'Максимальная концентрация на вашей технике и результате. Тренер работает только с вами.',
    price: '1500 ₽',
    image: tarif1,
    icon: 'personal',
  },
  {
    title: 'Групповые тренировки',
    desc: 'Работа в команде, соревновательный дух и поддержка единомышленников.',
    price: '3500 ₽',
    image: tarif2,
    icon: 'group',
  },
  {
    title: 'Парные тренировки',
    desc: 'Приходите с другом или партнером. Эффективность персоналки с поддержкой близкого человека.',
    price: '1000 ₽',
    image: tarif3,
    icon: 'pair',
  },
  {
    title: 'Женские тренировки',
    desc: 'Специальная программа: бокс для здоровья, стройности и уверенности в себе.',
    price: '1500 ₽',
    image: tarif4,
    icon: 'women',
  },
];

export const CLIENT_REVIEWS: ReviewCard[] = [
  {
    name: 'Максим',
    text: 'Спонтанно пришел на пробную тренировку и по итогу продолжил заниматься. Максим отличный тренер и прекрасный человек, так что если выбираете или сомневаетесь - не сомневайтесь)',
    rating: 5,
    avatar: otziv1,
  },
  {
    name: 'Андрей',
    text: 'Профессиональный тренер , с большим опытом в спорте .\nОбъясняет все максимально доходчиво.\nХожу на индивидуальные тренировки, всем доволен\nРекомендую!!!',
    rating: 5,
    avatar: otziv2,
  },
  {
    name: 'Виталий',
    text: 'Отличный тренер и человек! Работает на результат, а не как некоторые тренера лишь бы денежки давали.\nРезультат есть и его видно 🤝',
    rating: 5,
    avatar: otziv3,
  },
  {
    name: 'Тимур',
    text: 'Огромное спасибо Максиму!\nТренировка была проведена на очень высоком уровне\nГрамотно оценивает возможности своих новых учеников)\nСпасибо!\nПриду ещё раз!',
    rating: 5,
    avatar: otziv4,
  },
  {
    name: 'Николя Бранте',
    text: 'Отличный тренер, рассказал все по факту, была как теория так и практика, веселые дружные ребята занимаются, новичкам уделяется особое внимание и помощь, очевидно буду ходить сюда, уже оплатил себе весь месяц. Остался доволен и под хорошим впечатлением после первого раза',
    rating: 5,
    avatar: otziv5,
  },
  {
    name: 'Анастасия',
    text: 'К данному тренеру обращался мой муж. Максим хороший специалист в своем деле, помог со всеми вопросами и подобрал подходящую тренировку. Можете обращаться даже если нет опыта совсем, муж доволен',
    rating: 5,
    avatar: otziv6,
  },
];

export const TRAINER_IMAGES = [slider1, slider2, slider3, slider4, slider5];

export const TRAINER_ADVANTAGES = [
  'Постановка техники с нуля',
  'Индивидуальный подход',
  'Индивидуальный план питания',
  'Функциональный тренинг',
  'Психология победителя',
  'Работа на результат',
];

export const CONTACT_BENEFITS: ContactBenefit[] = [
  { title: 'Всё включено', desc: 'Выдаем перчатки и шлемы — просто возьмите форму.' },
  { title: 'Безопасно', desc: 'Никаких спаррингов на первом этапе — только техника и ОФП.' },
  { title: 'Индивидуально', desc: 'Разберем ваши цели и составим график под ваш ритм.' },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Пробная',
    prices: { 1: '0', 8: '0', 12: '0' },
    features: ['Знакомство с тренером', 'Оценка уровня подготовки', 'Базовая техника', 'План тренировок'],
    button: 'ЗАПИСАТЬСЯ',
    popular: false,
    isTrial: true,
  },
  {
    name: 'Персональный',
    prices: { 1: '1 500', 8: '11 200', 12: '15 600' },
    features: ['Личный график', 'Коррекция питания', 'Глубокая проработка техники', 'Индивидуальный темп'],
    button: 'ЗАПИСАТЬСЯ',
    popular: true,
  },
  {
    name: 'Парные занятия',
    prices: { 1: '1 000', 8: '7 200', 12: '9 600' },
    features: ['Тренировка вдвоем', 'Поддержка партнера', 'Парная прогрессия', 'Индивидуальный подход'],
    button: 'ЗАПИСАТЬСЯ',
    popular: false,
    priceNote: 'цена с человека',
  },
  {
    name: 'Групповой',
    prices: { 1: '3 500', 8: '3 500', 12: '3 500' },
    features: ['Работа в группе', 'Общая выносливость', 'Спарринги (по желанию)', 'Совместная работа'],
    button: 'ЗАПИСАТЬСЯ',
    popular: false,
    priceNote: 'цена за месяц',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'Бокс — это безопасно?',
    a: 'Да, при правильном подходе. На тренировках используются перчатки, бинты и защитное снаряжение. Спарринги проводятся только по желанию и под контролем тренера. Основной акцент — техника, а не травмы.',
  },
  {
    q: 'Можно ли заниматься без опыта и физической подготовки?',
    a: 'Конечно. Большинство приходят с нуля. Тренировки выстроены так, чтобы постепенно развивать форму без перегрузок.',
  },
  {
    q: 'Нужно ли покупать экипировку?',
    a: 'На первое время — нет. Всё необходимое мы предоставим. Позже можно приобрести личные бинты и перчатки для комфорта и гигиены.',
  },
  {
    q: 'Можно ли похудеть с помощью бокса?',
    a: 'Да. Бокс — одна из самых эффективных тренировок для сжигания калорий. Вы улучшите выносливость, подтянете тело и ускорите обмен веществ.',
  },
  {
    q: 'Есть ли тренировки без спаррингов?',
    a: 'Да. Вы можете тренироваться без контакта — только техника, работа на мешках и физическая подготовка. Спарринги — по желанию.',
  },
];

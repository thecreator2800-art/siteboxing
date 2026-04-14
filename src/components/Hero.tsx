import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { FEATURE_CARDS } from '../constants';
import { TelegramIcon, VKIcon } from './Icons';
import heroImage from '../assets/images/hero/1ecran.jpg';

export const Hero = () => {
  return (
    <>
      <div id="hero-section" className="w-full bg-[#141414] text-white p-6 md:p-10 lg:p-12 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:px-4 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:py-3 relative overflow-hidden shadow-2xl flex flex-col justify-end min-h-[calc(100dvh-82px)] md:min-h-[calc(100dvh-107px)] [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:min-h-[calc(100dvh-64px)]">
        <img
          src={heroImage}
          alt="Boxing Training"
          className="absolute inset-0 w-full h-full object-cover object-[62%_center] xl:object-right pointer-events-none select-none"
          style={{ filter: 'brightness(0.85)' }}
          draggable="false"
        />

        <main className="w-full relative z-10">
          <motion.div
            id="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col gap-[14px] md:gap-[22px] [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:gap-3"
          >
            <div className="flex">
              <div className="backdrop-blur-2xl bg-white/5 border border-white/10 px-4 md:px-6 py-2 md:py-3 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:px-3 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:py-1.5 rounded-full flex items-center gap-2 md:gap-3 shadow-[0_8px_32px_0_rgba(255,255,255,0.05)] group">
                <motion.div whileHover={{ scale: 1.2, rotate: 10 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
                  <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#FFD700]" />
                </motion.div>
                <span className="text-[9px] md:text-xs [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:text-[8px] text-white font-bold font-sans tracking-widest uppercase">
                  г. Воронеж, Брянский проезд, 8
                </span>
              </div>
            </div>

            <h1 id="hero-title" className="text-[clamp(1.2rem,6.8vw,2.1rem)] sm:text-5xl md:text-[clamp(2.6rem,5.4vw,3.625rem)] lg:text-6xl xl:text-7xl [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:text-[clamp(1rem,4.4vw,1.5rem)] font-black leading-[1.06] tracking-tighter uppercase whitespace-nowrap">
              Занятие боксом <br />
              в городе Воронеж <br />
              с мастером спорта
            </h1>

            <p className="max-w-[34rem] md:max-w-[42rem] lg:max-w-none text-[12px] sm:text-[15px] md:text-[17px] lg:text-[19px] xl:text-base [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:max-w-[500px] [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:text-[11px] text-gray-400 leading-tight md:leading-snug font-medium tracking-tight relative -top-[1px]">
              Получите бесплатно консультацию и месячный план занятий от тренера
            </p>

            <div className="flex flex-col md:flex-row items-stretch gap-2 w-full [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:max-w-[520px]">
              <motion.a
                id="hero-button"
                href="#contact-form"
                whileHover={{ backgroundColor: '#FFD700', filter: 'brightness(1.1)', boxShadow: '0 0 30px rgba(255, 215, 0, 0.4)' }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="flex-1 md:flex-none relative overflow-hidden bg-[#FFD700] text-black px-4 sm:px-6 md:px-10 py-4 md:py-0 md:h-[84px] lg:h-[96px] [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:px-3 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:py-2.5 font-black text-[13px] xs:text-[14px] sm:text-xl md:text-2xl [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:text-[12px] cursor-pointer group tracking-tighter whitespace-nowrap uppercase flex items-center justify-center"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer pointer-events-none" />
                <span className="relative z-10">ПОЛУЧИТЬ ПРОБНУЮ ТРЕНИРОВКУ</span>
              </motion.a>

              <div className="flex items-stretch gap-2 h-[52px] [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:h-[42px] md:hidden">
                <a
                  href="https://t.me/Zharkih97"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center bg-[#199ADA] text-white hover:brightness-110 transition-all shadow-lg px-4"
                >
                  <TelegramIcon className="w-6 md:w-8 h-6 md:h-8 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:w-5 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:h-5" />
                </a>
                <a
                  href="https://vk.com/zharkih97"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center bg-[#2787F5] text-white hover:brightness-110 transition-all shadow-lg px-4"
                >
                  <VKIcon className="w-6 md:w-8 h-6 md:h-8 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:w-5 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:h-5 scale-[1.2] -translate-y-[1px]" />
                </a>
              </div>

              <div className="hidden md:flex items-stretch gap-2 self-stretch">
                <a
                  href="https://t.me/Zharkih97"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[84px] h-[84px] lg:w-[96px] lg:h-[96px] flex items-center justify-center bg-[#199ADA] text-white hover:brightness-110 transition-all shadow-lg"
                >
                  <TelegramIcon className="w-6 md:w-8 h-6 md:h-8" />
                </a>
                <a
                  href="https://vk.com/zharkih97"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[84px] h-[84px] lg:w-[96px] lg:h-[96px] flex items-center justify-center bg-[#2787F5] text-white hover:brightness-110 transition-all shadow-lg"
                >
                  <VKIcon className="w-6 md:w-8 h-6 md:h-8 scale-[1.2] -translate-y-[1px]" />
                </a>
              </div>
            </div>
          </motion.div>

          <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-l from-red-600/10 to-transparent blur-3xl" />
          </div>
        </main>
      </div>

      <div className="w-full relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:grid-cols-4 gap-[5px] md:gap-[10px]">
          {FEATURE_CARDS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.delay }}
              className="group relative aspect-square [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:aspect-auto [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:h-[150px] bg-[#141414] p-4 xs:p-6 md:p-8 lg:p-5 xl:p-8 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:p-3 flex flex-col justify-between overflow-hidden shadow-2xl transition-transform duration-300 xl:hover:-translate-y-2"
            >
              <div className="absolute inset-0 w-full h-full transition-transform duration-700 xl:group-hover:scale-110">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-60 xl:opacity-40 xl:group-hover:opacity-60 transition-opacity" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/60 to-transparent" />
              </div>

              <span className="absolute -right-4 -bottom-8 text-9xl font-black text-[#FFD700]/[0.05] xl:text-white/[0.03] xl:group-hover:text-[#FFD700]/[0.05] transition-colors select-none">
                0{index + 1}
              </span>

              <div className="relative z-10">
                <h3 className="text-base xs:text-lg md:text-xl lg:text-lg xl:text-3xl [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:text-[12px] font-black text-white uppercase leading-tight mb-2 md:mb-4 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:mb-1 tracking-tighter">
                  {item.title}
                </h3>
              </div>

              <div className="relative z-10">
                <p className="text-[10px] xs:text-xs sm:text-sm lg:text-xs xl:text-sm [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:text-[9px] text-gray-300 xl:text-gray-400 xl:group-hover:text-gray-300 transition-colors font-medium leading-tight md:leading-relaxed tracking-tight line-clamp-3 md:line-clamp-4 lg:line-clamp-4 xl:line-clamp-5">
                  {item.desc}
                </p>
                <div className="mt-2 md:mt-6 w-full xl:w-12 h-0.5 md:h-1 bg-[#FFD700] xl:group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

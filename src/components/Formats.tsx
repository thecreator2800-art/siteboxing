import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { TRAINING_FORMAT_CARDS } from '../constants';
import { useMinWidth } from '../hooks/useMinWidth';
import personalIcon from '../assets/images/format-icons/user.png';
import pairIcon from '../assets/images/format-icons/group-1.png';
import groupIcon from '../assets/images/format-icons/community-1.png';
import womenIcon from '../assets/images/format-icons/girl-photoroom.png';

const FORMAT_ICON_MAP = {
  personal: personalIcon,
  pair: pairIcon,
  group: groupIcon,
  women: womenIcon,
} as const;

export const Formats = () => {
  const canHoverCards = useMinWidth(1280);

  return (
    <section id="formats" className="w-full relative">
      <div className="bg-[#141414] text-white p-6 md:p-12 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:p-4 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:mb-6 gap-6 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:gap-3">
          <div className="flex flex-col gap-4 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:gap-2">
            <div className="flex items-center gap-2 text-[#FFD700] font-bold uppercase tracking-widest text-[10px] md:text-xs">
              <div className="w-8 h-[2px] bg-[#FFD700]" />
              Выберите свой путь
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:text-3xl font-black uppercase tracking-tighter leading-none">
              Форматы <br /> тренировок
            </h2>
          </div>
          <p className="block md:hidden xl:block [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:hidden text-gray-400 text-sm md:text-base max-w-md font-medium leading-tight tracking-tight">
            Мы предлагаем различные варианты занятий, чтобы каждый мог найти подходящий темп и атмосферу
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:grid-cols-2 gap-[5px] md:gap-[10px]">
          {TRAINING_FORMAT_CARDS.map((format, index) => (
            <motion.div
              key={format.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => document.getElementById('prices')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative h-[300px] sm:h-[340px] md:h-auto md:aspect-square lg:aspect-auto lg:h-[340px] xl:h-[380px] [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:h-[180px] overflow-hidden bg-black flex flex-col justify-end p-6 md:p-8 lg:p-7 xl:p-8 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:p-3 cursor-pointer"
            >
              <img src={format.image} alt={format.title} className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale xl:grayscale xl:group-hover:grayscale-0 xl:group-hover:scale-105 transition-all duration-700 md:grayscale-0 md:scale-100" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="relative z-10 flex flex-col h-full justify-end [@media(min-width:768px)_and_(max-width:1023px)_and_(orientation:portrait)]:items-start">
                <div className="flex items-center gap-3 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:gap-2 mb-4 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:mb-3 [@media(min-width:768px)_and_(max-width:1023px)_and_(orientation:portrait)]:mb-4">
                  <div className="w-10 h-10 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:w-8 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:h-8 bg-[#FFD700] text-black rounded-sm flex items-center justify-center relative">
                    <img
                      src={FORMAT_ICON_MAP[format.icon]}
                      alt={format.title}
                      className={`w-6 h-6 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:w-[18px] [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:h-[18px] object-contain ${
                        format.icon === 'pair'
                          ? 'translate-y-px'
                          : format.icon === 'group'
                            ? 'translate-y-px scale-[1.2]'
                            : format.icon === 'women'
                              ? 'scale-[1.04]'
                              : ''
                      }`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <span className="text-[#FFD700] font-bold text-sm [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:text-[11px] uppercase tracking-widest">{format.price}</span>
                </div>
                <div className="min-h-[64px] md:min-h-[84px] lg:min-h-[72px] [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:min-h-[40px] [@media(min-width:768px)_and_(max-width:1023px)_and_(orientation:portrait)]:min-h-[68px] flex items-end mb-2 md:mb-3 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:mb-2 [@media(min-width:768px)_and_(max-width:1023px)_and_(orientation:portrait)]:mb-4">
                  <h3 className="text-2xl md:text-2xl lg:text-[30px] xl:text-3xl [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:text-base font-black uppercase tracking-tighter leading-tight">{format.title}</h3>
                </div>
                <div className="hidden md:block h-[64px] lg:h-[56px] xl:h-[64px] [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:h-[32px] [@media(min-width:768px)_and_(max-width:1023px)_and_(orientation:portrait)]:hidden">
                  <p className="text-gray-300 text-xs md:text-sm [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:text-[9px] font-medium leading-relaxed max-w-sm opacity-100 xl:opacity-0 xl:group-hover:opacity-100 transition-opacity duration-300 tracking-tight line-clamp-2">
                    {format.desc}
                  </p>
                </div>

                <motion.button
                  whileHover={canHoverCards ? { x: 10 } : {}}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    document.getElementById('prices')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="mt-2 md:mt-3 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:mt-2 [@media(min-width:768px)_and_(max-width:1023px)_and_(orientation:portrait)]:mt-4 flex items-center gap-2 text-white font-bold text-xs [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:text-[10px] tracking-tighter group/btn uppercase"
                >
                  ПОДРОБНЕЕ
                  <ArrowUpRight className="w-4 h-4 text-[#FFD700] group-hover/btn:rotate-45 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Formats;

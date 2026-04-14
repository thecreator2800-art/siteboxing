import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TRAINER_ADVANTAGES, TRAINER_IMAGES } from '../constants';
import ydo from '../assets/images/trainer/ydo.png';

export const Trainer = () => {
  const [currentTrainerSlide, setCurrentTrainerSlide] = useState(0);

  const nextTrainerSlide = () => {
    setCurrentTrainerSlide((prev) => (prev + 1) % TRAINER_IMAGES.length);
  };

  const prevTrainerSlide = () => {
    setCurrentTrainerSlide((prev) => (prev - 1 + TRAINER_IMAGES.length) % TRAINER_IMAGES.length);
  };

  return (
    <section id="trainer" className="w-full relative shadow-2xl">
      <div className="bg-[#141414] text-white p-6 md:p-12 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:p-4 border border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#FFD700]/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:grid-cols-2 gap-12 lg:gap-12 xl:gap-24 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:gap-5 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:gap-3 relative group"
            >
              <div className="relative aspect-square md:aspect-[4/5] xl:aspect-[4/4.5] landscape:max-h-[300px] [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:aspect-[1/0.86] [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:max-h-[210px] lg:landscape:max-h-none overflow-hidden border-2 border-[#FFD700]/20 bg-black">
                <motion.div className="flex h-full" animate={{ x: `-${currentTrainerSlide * 100}%` }} transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}>
                  {TRAINER_IMAGES.map((src, i) => (
                    <div key={src} className="w-full h-full flex-shrink-0">
                      <img src={src} alt={`Тренер Максим Жарких - Фото ${i + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </motion.div>

                <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity z-20 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:opacity-100">
                  <button onClick={prevTrainerSlide} className="w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-[#FFD700] hover:text-black transition-colors">
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button onClick={nextTrainerSlide} className="w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-[#FFD700] hover:text-black transition-colors">
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {TRAINER_IMAGES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentTrainerSlide(i)}
                      className={`w-1.5 h-1.5 rounded-full transition-all ${currentTrainerSlide === i ? 'bg-[#FFD700] w-4' : 'bg-white/30'}`}
                    />
                  ))}
                </div>
              </div>

              <div className="relative w-full overflow-hidden [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:max-w-[260px]">
                <img src={ydo} alt="Удостоверение Мастер Спорта" className="w-full h-auto object-contain" referrerPolicy="no-referrer" />
              </div>

              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#FFD700] pointer-events-none" />
            </motion.div>

            <div className="flex flex-col justify-center gap-8 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:gap-4">
              <div className="space-y-4 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:space-y-2">
                <div className="flex items-center gap-3 text-[#FFD700] font-bold uppercase tracking-widest text-xs md:text-sm">
                  <div className="w-12 h-[2px] bg-[#FFD700]" />
                  Тренер и наставник
                </div>
                <h2 className="text-5xl md:text-6xl lg:text-6xl xl:text-8xl [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:text-4xl font-black uppercase tracking-tighter leading-none">
                  Максим <br />
                  <span className="text-[#FFD700]">Жарких</span>
                </h2>
                <p className="text-gray-400 text-base md:text-base lg:text-lg [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:text-sm leading-relaxed max-w-xl font-medium tracking-tight border-l-2 border-[#FFD700]/30 pl-4 md:pl-5 lg:pl-6 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:pl-4">
                  Объясняю технику, контролирую нагрузку, веду к результату шагами.
                  Моя цель — не просто научить вас бить, а развить дисциплину,
                  выносливость и уверенность в себе.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:gap-4">
                <div className="flex flex-col">
                  <span className="text-5xl md:text-6xl [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:text-4xl font-black text-white tracking-tighter">74+</span>
                  <span className="text-xs font-black uppercase tracking-widest text-[#FFD700] mt-1">Воспитанников</span>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mt-1">подготовлено</p>
                </div>
                <div className="flex flex-col">
                  <span className="text-5xl md:text-6xl [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:text-4xl font-black text-white tracking-tighter">10+</span>
                  <span className="text-xs font-black uppercase tracking-widest text-[#FFD700] mt-1">Лет Опыта</span>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mt-1">Тренерской деятельности</p>
                </div>
              </div>

              <div className="space-y-6 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:space-y-3">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-500">Почему выбирают меня:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:gap-2">
                  {TRAINER_ADVANTAGES.map((advantage) => (
                    <div key={advantage} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#FFD700] rotate-45" />
                      <span className="text-xs md:text-sm [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:text-[11px] font-bold uppercase tracking-tight text-gray-200">{advantage}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:pt-1">
                <motion.a
                  href="#contact-form"
                  whileHover={{ backgroundColor: '#FFD700', filter: 'brightness(1.2)', boxShadow: '0 0 50px rgba(255, 215, 0, 0.7)' }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="w-full sm:w-auto lg:w-fit relative overflow-hidden bg-[#FFD700] text-black px-8 md:px-12 py-4 md:py-5 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:px-6 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:py-3 font-black text-sm [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:text-xs cursor-pointer group uppercase tracking-tighter flex items-center justify-center whitespace-nowrap"
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer pointer-events-none" />
                  <span className="relative z-10">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainer;

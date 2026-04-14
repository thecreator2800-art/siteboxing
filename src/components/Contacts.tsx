import { motion } from 'motion/react';
import { MapPin, Phone, Zap } from 'lucide-react';

export const Contacts = () => {
  return (
    <section id="contacts" className="w-full relative">
      <div className="bg-[#141414] text-white p-6 md:p-12 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:p-4 shadow-2xl border border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-20 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:gap-5">
          <div className="flex flex-col justify-between gap-12 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:gap-5">
            <div className="flex flex-col gap-8 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:gap-4">
              <div className="flex flex-col gap-4 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:gap-2">
                <div className="flex items-center gap-2 text-[#FFD700] font-bold uppercase tracking-widest text-[10px] md:text-xs">
                  <div className="w-8 h-[2px] bg-[#FFD700]" />
                  Как нас найти
                </div>
                <h2 className="text-4xl md:text-[clamp(2.35rem,6.1vw,3.75rem)] lg:text-7xl [@media(min-width:768px)_and_(max-width:1180px)_and_(orientation:landscape)]:text-[clamp(1.95rem,4.8vw,2.7rem)] [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:text-3xl font-black uppercase tracking-tighter leading-none">
                  Контакты <br /> и карта
                </h2>
              </div>

              <div className="space-y-8 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:space-y-4">
                <div className="flex items-start gap-4 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:gap-3 group">
                  <div className="w-12 h-12 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:w-9 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:h-9 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-colors">
                    <MapPin className="w-6 h-6 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:w-5 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:h-5 text-[#FFD700]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Адрес зала</span>
                    <span className="text-xs sm:text-sm md:text-base [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:text-[11px] font-bold uppercase tracking-tighter leading-tight">
                      г. Воронеж, <br className="sm:hidden" /> Брянский проезд, 8
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:gap-3 group">
                  <div className="w-12 h-12 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:w-9 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:h-9 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-colors">
                    <Phone className="w-6 h-6 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:w-5 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:h-5 text-[#FFD700]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Телефон</span>
                    <span className="text-sm md:text-base font-bold uppercase tracking-tighter">+7 (995) 250 96 36</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:gap-3 group">
                  <div className="w-12 h-12 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:w-9 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:h-9 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-colors">
                    <Zap className="w-6 h-6 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:w-5 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:h-5 text-[#FFD700]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Режим работы</span>
                    <span className="text-sm md:text-base font-bold uppercase tracking-tighter">Пн-Вс: 08:00 — 21:00</span>
                  </div>
                </div>
              </div>
            </div>

            <motion.a
              href="#contact-form"
              whileHover={{ backgroundColor: '#FFD700', filter: 'brightness(1.2)', boxShadow: '0 0 40px rgba(255, 215, 0, 0.7)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="w-full py-5 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:py-3 bg-[#FFD700] text-black font-black uppercase tracking-tighter text-sm [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:text-[11px] relative overflow-hidden group flex items-center justify-center"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer pointer-events-none" />
              <span className="relative z-10">ПОЛУЧИТЬ ПРОБНУЮ ТРЕНИРОВКУ</span>
            </motion.a>
          </div>

          <div className="relative w-full aspect-video lg:aspect-auto lg:h-full min-h-[400px] [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:min-h-[240px] bg-white/5 border border-white/10 overflow-hidden group">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A40159f710caac8422b15876d319fb390102379cee35eecd82983a8f3497b43fb&source=constructor"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;

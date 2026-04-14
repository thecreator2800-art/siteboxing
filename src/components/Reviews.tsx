import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { CLIENT_REVIEWS } from '../constants';
import avitoLogo from '../assets/images/logos/avito-logo.png';

export const Reviews = () => {
  return (
    <section id="reviews" className="w-full relative">
      <div className="bg-white p-6 md:p-12 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:p-4 shadow-2xl border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:mb-6 gap-6 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:gap-3">
          <div className="flex flex-col gap-4 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:gap-2">
            <div className="flex items-center gap-2 text-black font-bold uppercase tracking-widest text-[10px] md:text-xs">
              <div className="w-8 h-[2px] bg-black" />
              Что говорят о нас
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:text-3xl font-black uppercase tracking-tighter leading-none text-black">
              Отзывы <br /> клиентов
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:grid-cols-3 gap-[10px] [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:gap-[6px]">
          {CLIENT_REVIEWS.map((review) => (
            <motion.div key={review.name} className="bg-[#f8f8f8] pt-8 px-[22px] pb-[22px] [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:pt-4 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:px-3 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:pb-3 flex flex-col border border-gray-100 group relative">
              <div className="flex items-center gap-4 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:gap-2 mb-6 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:mb-3">
                <div className="w-12 h-12 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:w-9 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:h-9 rounded-full flex items-center justify-center text-gray-400 font-black text-xl shrink-0 overflow-hidden">
                  <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h4 className="font-black uppercase tracking-tighter text-black text-lg [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:text-sm">{review.name}</h4>
              </div>

              <div className="flex-grow flex flex-col justify-center">
                <p className="text-gray-700 font-medium leading-relaxed italic mb-6 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:mb-3 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:text-[11px] tracking-tight">"{review.text}"</p>
              </div>

              <div className="mt-auto flex items-center justify-between">
                <div className="flex text-[#FFD700]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:w-4 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:h-4 fill-current" />
                  ))}
                </div>
                <div className="h-5 md:h-6 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:h-4 flex items-center">
                  <img src={avitoLogo} alt="Avito" className="h-full w-auto object-contain opacity-80" referrerPolicy="no-referrer" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:mt-5 flex justify-end">
          <motion.a
            href="#contact-form"
            whileHover={{ backgroundColor: '#FFD700', filter: 'brightness(1.2)', boxShadow: '0 0 40px rgba(255, 215, 0, 0.7)' }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto relative overflow-hidden bg-[#FFD700] text-black px-8 md:px-12 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:px-6 py-4 md:py-5 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:py-3 text-xs md:text-sm [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:text-[11px] font-black uppercase tracking-tighter cursor-pointer group flex items-center justify-center"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer pointer-events-none" />
            <span className="relative z-10">СМОТРЕТЬ БОЛЬШЕ ОТЗЫВОВ</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

import { useState } from 'react';
import { motion } from 'motion/react';
import { PRICING_PLANS } from '../constants';
import { useMinWidth } from '../hooks/useMinWidth';

export const Pricing = () => {
  const [sessionCount, setSessionCount] = useState<1 | 8 | 12>(1);
  const canHoverCards = useMinWidth(1280);

  return (
    <section id="prices" className="w-full relative shadow-2xl">
      <div className="bg-[#fafafa] p-6 md:p-12 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:p-4 border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:mb-6 gap-6 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:gap-3">
          <div className="flex flex-col gap-4 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:gap-2">
            <div className="flex items-center gap-2 text-black font-bold uppercase tracking-widest text-[10px] md:text-xs">
              <div className="w-8 h-[2px] bg-black" />
              Выберите свой формат
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:text-3xl font-black uppercase tracking-tighter leading-none text-black">
              Абонементы <br /> и цены
            </h2>
          </div>
          <p className="block md:hidden xl:block [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:hidden text-gray-500 text-sm md:text-base max-w-md font-medium leading-tight tracking-tight">
            Инвестируйте в свое здоровье и навыки. Мы подобрали оптимальные условия для каждого уровня подготовки.
          </p>
        </div>

        <div className="flex flex-col gap-12 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:gap-6 mb-16 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:mb-8">
          <div className="flex justify-center">
            <div className="inline-flex p-1 bg-gray-100 rounded-sm w-full sm:w-auto">
              {[1, 8, 12].map((count) => (
                <button
                  key={count}
                  onClick={() => setSessionCount(count as 1 | 8 | 12)}
                  className={`flex-1 sm:flex-none px-4 sm:px-10 py-3 sm:py-3 text-[10px] md:text-xs font-black uppercase tracking-tighter transition-all ${
                    sessionCount === count ? 'bg-[#141414] text-white shadow-lg' : 'text-gray-400 hover:text-black'
                  }`}
                >
                  {count} {count === 1 ? 'занятие' : 'занятий'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:grid-cols-2 gap-[15px] md:gap-[10px]">
            {PRICING_PLANS.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.05 } }}
                whileHover={{
                  y: canHoverCards ? -15 : 0,
                  boxShadow: canHoverCards ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                  transition: { duration: 0.25, ease: 'easeOut' },
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className={`relative flex flex-col p-8 md:p-10 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:p-5 border cursor-pointer ${
                  plan.popular ? 'bg-[#141414] text-white border-[#FFD700] shadow-xl' : 'bg-white text-black border-gray-200 shadow-xl xl:hover:border-[#FFD700]/50'
                } group z-10 xl:hover:z-20`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFD700] text-black px-4 py-1 text-[10px] font-black uppercase tracking-widest">
                    ПОПУЛЯРНО
                  </div>
                )}

                <div className="mb-8">
                  <h3 className={`text-xl font-black uppercase tracking-tighter mb-2 ${plan.popular ? 'text-[#FFD700]' : 'text-black'}`}>{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-black tracking-tighter">{plan.isTrial ? '0' : plan.prices[sessionCount]}</span>
                    <span className="text-lg font-bold">₽</span>
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${plan.popular ? 'text-gray-500' : 'text-gray-400'}`}>
                    {plan.priceNote ? plan.priceNote : plan.isTrial ? 'Первое занятие' : `${sessionCount} ${sessionCount === 1 ? 'занятие' : 'занятий'}`}
                  </span>
                </div>

                <div className="flex-grow space-y-4 mb-10">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full ${plan.popular ? 'bg-[#FFD700]' : 'bg-black'}`} />
                      <span className="text-xs md:text-sm font-medium uppercase tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.a
                  href="#contact-form"
                  whileHover={{ backgroundColor: '#FFD700', filter: 'brightness(1.2)', boxShadow: '0 0 40px rgba(255, 215, 0, 0.7)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full max-w-[238px] mx-auto py-[14px] md:py-[18px] text-xs font-black tracking-tighter border-2 border-[#FFD700] transition-colors uppercase bg-[#FFD700] text-black relative overflow-hidden group flex items-center justify-center"
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer pointer-events-none" />
                  <span className="relative z-10">{plan.button}</span>
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

import { AnimatePresence, motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { CONTACT_BENEFITS } from '../constants';
import { useMinWidth } from '../hooks/useMinWidth';
import { useLeadForm } from '../hooks/useLeadForm';
import { TelegramIcon, VKIcon } from './Icons';
import formBackgroundImage from '../assets/images/form/fon-form.jpg';
import formTrainerImage from '../assets/images/form/trener-form.png';

interface LeadFormProps {
  setIsPrivacyOpen: (isOpen: boolean) => void;
}

const LeadForm = ({ setIsPrivacyOpen }: LeadFormProps) => {
  const canHoverMessengerButtons = useMinWidth(1024);
  const {
    phoneNumber,
    website,
    handlePhoneChange,
    handleWebsiteChange,
    handleSubmit,
    isSubmitting,
    phoneError,
    submitError,
    submitSuccess,
  } = useLeadForm();

  return (
    <section id="contact-form" className="w-full relative bg-[#0A0A0A] py-12 md:py-10 lg:py-12 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:py-6 shadow-2xl">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img src={formBackgroundImage} alt="Boxing Gym Background" className="w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 via-transparent to-[#0A0A0A]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/40 via-transparent to-[#0A0A0A]/40" />
      </div>

      <div className="w-full p-6 md:p-10 lg:p-12 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:p-4 relative z-10">
        <div className="flex flex-col lg:flex-row [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:flex-row items-center justify-between gap-12 lg:gap-0 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:gap-5">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full lg:w-[560px] xl:w-[580px] [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:w-[48%] space-y-6 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:space-y-3 text-left">
            <div className="space-y-4">
              <div className="flex items-center justify-start gap-2 text-[#FFD700] font-bold uppercase tracking-[0.3em] text-[10px]">
                <div className="w-8 h-[2px] bg-[#FFD700]" />
                Бесплатное вводное занятие
              </div>
              <h2 className="text-3xl xs:text-5xl md:text-[clamp(2.75rem,5vw,3rem)] lg:text-[2.6rem] xl:text-5xl 2xl:text-6xl [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:text-3xl font-black text-white leading-[1.1] uppercase tracking-tighter xl:whitespace-nowrap">
                Поставьте свой <br />
                первый удар <br />
                с профи
              </h2>
              <p className="text-base md:text-xl [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:text-sm text-gray-400 font-medium max-w-lg mx-0 leading-tight">
                За 60 минут вы освоите базу, оцените атмосферу зала и получите персональный план развития.
              </p>
            </div>

            <div className="space-y-6 pt-4 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:space-y-3 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:pt-1">
              {CONTACT_BENEFITS.map((benefit, idx) => (
                <motion.div key={benefit.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }} className="flex items-center gap-5 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:gap-3 group">
                  <div className="flex-shrink-0 w-12 h-12 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:w-9 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-colors">
                    <CheckCircle2 className="w-6 h-6 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:w-5 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:h-5 text-[#FFD700]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-wider text-base [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:text-sm">{benefit.title}</h4>
                    <p className="text-gray-300 text-sm [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:text-[11px] mt-1.5 leading-relaxed font-medium">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-6 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:pt-2">
              <div className="inline-flex items-center gap-3 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:gap-2 px-4 py-2 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:px-3 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:py-1.5 bg-[#FFD700]/10 border border-[#FFD700]/20 rounded-full">
                <div className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse" />
                <span className="text-[9px] sm:text-[10px] font-black text-[#FFD700] uppercase tracking-widest">Осталось 4 свободных места на этой неделе</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full lg:w-[460px] xl:w-[480px] [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:w-[52%] relative z-10 landscape:mt-8 lg:landscape:mt-0 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:mt-0">
            <div className="backdrop-blur-2xl bg-black/60 px-8 md:px-12 py-[17px] md:py-[33px] [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:px-5 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:py-4 border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.5)] relative overflow-hidden">
              <div className="flex flex-col h-full relative z-10">
                <div className="text-center flex flex-col items-center pt-2">
                  <h3 className="text-[clamp(0.78rem,3.9vw,0.98rem)] md:text-[18px] lg:text-[18px] xl:text-2xl [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:text-[13px] font-black text-white leading-tight uppercase tracking-tighter mb-6 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:mb-3 xl:whitespace-nowrap">
                    Оставьте заявку на <br /> бесплатную консультацию
                  </h3>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-6">Напишите нам в удобный для вас мессенджер</p>
                  <div className="flex flex-col sm:flex-row gap-3 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:gap-2 w-full mb-8 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:mb-4">
                    <motion.a
                      whileHover={canHoverMessengerButtons ? { scale: 1.02 } : {}}
                      whileTap={canHoverMessengerButtons ? { scale: 0.98 } : {}}
                      href="https://t.me/Zharkih97"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1 group flex items-center justify-center gap-3 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:gap-2 h-[54px] sm:h-[53.9931px] [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:h-[44px] px-6 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:px-4 bg-[#24A1DE] sm:bg-white/5 border border-white/10 hover:bg-[#24A1DE] hover:border-[#24A1DE] transition-all duration-300 leading-none"
                    >
                      <TelegramIcon className="w-6 h-6 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:w-5 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:h-5 text-white sm:text-[#24A1DE] group-hover:text-white transition-colors" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-white sm:text-gray-300 group-hover:text-white translate-y-[1px]">Telegram</span>
                    </motion.a>
                    <motion.a
                      whileHover={canHoverMessengerButtons ? { scale: 1.02 } : {}}
                      whileTap={canHoverMessengerButtons ? { scale: 0.98 } : {}}
                      href="https://vk.com/zharkih97"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1 group flex items-center justify-center gap-[11px] [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:gap-2 h-[54px] sm:h-[53.9931px] [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:h-[44px] px-6 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:px-4 bg-[#2787F5] sm:bg-white/5 border border-white/10 hover:bg-[#2787F5] hover:border-[#2787F5] transition-all duration-300 leading-none"
                    >
                      <VKIcon className="w-6 h-6 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:w-5 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:h-5 text-white sm:text-[#2787F5] group-hover:text-white transition-colors scale-110 translate-x-[1px] -translate-y-[1px]" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-white sm:text-gray-300 group-hover:text-white translate-y-[1px]">ВКонтакте</span>
                    </motion.a>
                  </div>
                </div>

                <div className="relative w-full flex items-center gap-4 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:gap-2 mb-8 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:mb-4">
                  <div className="h-[1px] flex-1 bg-white/10" />
                  <span className="text-[9px] font-black text-gray-600 uppercase tracking-[0.2em] whitespace-nowrap">Или через форму</span>
                  <div className="h-[1px] flex-1 bg-white/10" />
                </div>

                <form className="space-y-4 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:space-y-3" onSubmit={handleSubmit}>
                  <div className="absolute -left-[9999px] -top-[9999px] opacity-0 pointer-events-none" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      id="website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={website}
                      onChange={handleWebsiteChange}
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="relative group">
                      <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#FFD700] font-black text-lg">+7</div>
                      <input
                        type="tel"
                        value={phoneNumber}
                        onChange={handlePhoneChange}
                        placeholder="(___) ___-__-__"
                        disabled={isSubmitting}
                        className={`w-full bg-white/5 border ${phoneError || submitError ? 'border-red-500/50' : 'border-white/10'} px-14 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:px-12 h-[53.9931px] [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:h-[44px] text-lg [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:text-base font-black tracking-[0.1em] text-white placeholder:text-white/20 focus:border-white/20 focus:bg-white/10 outline-none transition-all disabled:opacity-50`}
                      />
                    </div>
                    <AnimatePresence>
                      {phoneError && (
                        <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-[10px] text-red-500 font-bold uppercase tracking-wider ml-1">
                          {phoneError}
                        </motion.p>
                      )}
                      {submitError && (
                        <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-[10px] text-red-500 font-bold uppercase tracking-wider ml-1">
                          {submitError}
                        </motion.p>
                      )}
                      {submitSuccess && (
                        <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-[10px] text-green-500 font-bold uppercase tracking-wider ml-1">
                          Спасибо! Мы скоро свяжемся с вами
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="space-y-4">
                    <motion.button
                      whileHover={!isSubmitting && canHoverMessengerButtons ? { backgroundColor: '#FFD700', filter: 'brightness(1.2)', boxShadow: '0 0 40px rgba(255, 215, 0, 0.7)' } : {}}
                      whileTap={!isSubmitting && canHoverMessengerButtons ? { scale: 0.95 } : {}}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#FFD700] text-black h-[54px] [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:h-[44px] md:h-auto py-0 md:py-5 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:text-[11px] text-sm font-black uppercase tracking-tighter leading-none shadow-xl relative overflow-hidden group flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer pointer-events-none" />
                      <span className="relative z-10">{isSubmitting ? 'ОТПРАВКА...' : 'ПОЛУЧИТЬ ПЛАН ТРЕНИРОВОК'}</span>
                    </motion.button>

                    <div className="flex flex-col items-center gap-2">
                      <p className="text-center flex flex-col items-center gap-[5px]">
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Нажимая кнопку</span>
                        <span className="text-[8px] text-gray-600 uppercase tracking-widest leading-relaxed">
                          вы соглашаетесь на <span onClick={() => setIsPrivacyOpen(true)} className="underline cursor-pointer hover:text-white">обработку персональных данных</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: 'easeOut' }} className="hidden [@media(min-width:1536px)_and_(min-height:860px)_and_(hover:hover)_and_(pointer:fine)]:flex absolute left-1/2 -translate-x-1/2 bottom-0 w-full max-w-3xl h-full pointer-events-none items-end justify-center z-20">
        <img src={formTrainerImage} alt="Тренер Максим Жарких" className="h-full w-auto block object-contain object-bottom" />
      </motion.div>
    </section>
  );
};

export default LeadForm;

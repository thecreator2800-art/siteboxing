import { motion } from 'motion/react';
import { Mail } from 'lucide-react';
import { MENU_ITEMS } from '../constants';
import { TelegramIcon, VKIcon } from './Icons';
import logoImage from '../assets/images/logos/logo.png';

interface FooterProps {
  setIsPrivacyOpen: (isOpen: boolean) => void;
}

export const Footer = ({ setIsPrivacyOpen }: FooterProps) => {
  return (
    <footer className="w-full bg-[#141414] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 overflow-hidden shrink-0">
                  <img src={logoImage} alt="Boxing Logo" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                </div>
                <div className="font-black text-xl tracking-tighter uppercase">
                  <span>BOXING</span>
                  <span className="text-[#FFD700]">VRN</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-auto">
              <a href="https://t.me/Zharkih97" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/10 text-white hover:bg-white/20 transition-all">
                <TelegramIcon className="w-5 h-5" />
              </a>
              <a href="https://vk.com/zharkih97" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/10 text-white hover:bg-white/20 transition-all">
                <VKIcon className="w-5 h-5" />
              </a>
              <a href="mailto:Zharkih97@mail.ru" className="w-10 h-10 flex items-center justify-center bg-white/10 text-white hover:bg-white/20 transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-[#FFD700]">Навигация</h4>
            <ul className="space-y-3">
              {MENU_ITEMS.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-xs uppercase font-bold text-gray-400 hover:text-white transition-colors tracking-tight">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-[#FFD700]">Контакты</h4>
            <div className="space-y-4">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-black text-gray-600 tracking-widest">Телефон</span>
                <span className="text-sm font-bold tracking-tighter">+7 (995) 250 96 36</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-black text-gray-600 tracking-widest">Адрес</span>
                <span className="text-sm font-bold uppercase tracking-tighter">г. Воронеж, Брянский проезд, 8</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-black text-gray-600 tracking-widest">Email</span>
                <span className="text-sm font-bold tracking-tighter">Zharkih97@mail.ru</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-[#FFD700]">Остались вопросы?</h4>
            <p className="text-gray-500 text-xs font-bold leading-relaxed tracking-tight">
              Оставьте заявку на бесплатную консультацию, и мы свяжемся с вами в течение 15 минут.
            </p>

            <motion.a
              href="#contact-form"
              whileHover={{ backgroundColor: '#FFD700', filter: 'brightness(1.2)', boxShadow: '0 0 40px rgba(255, 215, 0, 0.7)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="w-full max-w-[240px] py-4 bg-[#FFD700] text-black font-black uppercase tracking-tighter text-sm relative overflow-hidden group flex items-center justify-center"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer pointer-events-none" />
              <span className="relative z-10">ЗАКАЗАТЬ ЗВОНОК</span>
            </motion.a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">© 2026 BOXINGVRN. ВСЕ ПРАВА ЗАЩИЩЕНЫ.</span>
          <div className="flex gap-8">
            <button onClick={() => setIsPrivacyOpen(true)} className="text-[10px] font-bold text-gray-600 hover:text-white uppercase tracking-widest transition-colors cursor-pointer">
              Политика конфиденциальности
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

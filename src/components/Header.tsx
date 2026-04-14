import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { MenuItem } from '../types';
import logoImage from '../assets/images/logos/logo.png';
import phoneIcon from '../assets/images/icons/phone.svg';

interface HeaderProps {
  isScrolled: boolean;
  isMenuOpen: boolean;
  menuItems: MenuItem[];
  onToggleMenu: () => void;
  onCloseMenu: () => void;
}

export const Header = ({
  isScrolled,
  isMenuOpen,
  menuItems,
  onToggleMenu,
  onCloseMenu,
}: HeaderProps) => {
  return (
    <>
      <div className={`w-full fixed top-0 z-50 transition-all duration-300 ${isScrolled ? 'pt-0 px-0' : 'pt-[5px] px-[5px] sm:px-[15px] md:px-[20px] lg:px-[30px] [@media(min-width:768px)_and_(max-width:1180px)_and_(orientation:landscape)]:pt-[10px] [@media(min-width:768px)_and_(max-width:1180px)_and_(orientation:landscape)]:px-[10px]'}`}>
        <div className={`w-full bg-[#141414] text-white px-4 sm:px-6 [@media(min-width:768px)_and_(max-width:1180px)_and_(orientation:landscape)]:px-4 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:px-3 py-3 md:py-4 [@media(min-width:768px)_and_(max-width:1180px)_and_(orientation:landscape)]:py-3 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:py-2 shadow-2xl transition-all duration-300 ${isScrolled ? 'shadow-black/50' : ''}`}>
          <nav className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2 sm:gap-3 flex-1">
              <div className="shrink-0 flex items-center justify-center w-10 h-10 xs:w-12 xs:h-12 md:w-[60px] md:h-[60px] [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:w-9 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:h-9 overflow-hidden">
                <img
                  src={logoImage}
                  alt="Boxing Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center font-black text-base xs:text-lg md:text-xl [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:text-sm tracking-tighter uppercase">
                <span className="text-white">BOXING</span>
                <span className="text-[#FFD700]">VRN</span>
              </div>
            </div>

            <div id="desktop-menu" className="hidden xl:flex items-center justify-center gap-4 2xl:gap-8 text-[14px] 2xl:text-[16px] font-medium text-gray-300 font-sans flex-none">
              {menuItems.map((item) => (
                <a key={item.name} href={item.href} className="hover:text-white transition-colors uppercase tracking-tight whitespace-nowrap">
                  {item.name}
                </a>
              ))}
            </div>

            <div className="flex items-center justify-end gap-2 sm:gap-3 md:gap-4 2xl:gap-8 flex-1">
              <div className="flex items-center gap-4 md:gap-6">
                <div className="hidden lg:flex flex-col items-end leading-tight">
                  <div className="flex items-center gap-1.5 text-[11px] text-gray-400 font-medium font-sans">
                    <span className="w-1 h-1 bg-[#FFD700] rounded-full" />
                    <span className="whitespace-nowrap uppercase tracking-widest">С Пн-Вс: 8:00 до 21:00</span>
                  </div>
                  <a href="tel:+79952509636" className="text-base font-bold text-white tracking-tighter whitespace-nowrap hover:text-[#FFD700] transition-colors">+7 (995) 250 96 36</a>
                </div>

                <motion.a
                  href="tel:+79952509636"
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="flex sm:hidden bg-[#FFD700] text-black w-[34px] h-[34px] [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:w-[30px] [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:h-[30px] font-black shadow-sm items-center justify-center relative overflow-hidden group shrink-0"
                  aria-label="Позвонить"
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer pointer-events-none" />
                  <img src={phoneIcon} alt="" className="relative z-10 w-4 h-4 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:w-3.5 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:h-3.5 object-contain" />
                </motion.a>

                <motion.a
                  href="#contact-form"
                  whileHover={{
                    backgroundColor: '#FFD700',
                    filter: 'brightness(1.2)',
                    boxShadow: '0 0 40px rgba(255, 215, 0, 0.7)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="hidden sm:flex bg-[#FFD700] text-black px-6 2xl:px-8 h-[40px] text-xs 2xl:text-sm font-black cursor-pointer whitespace-nowrap shadow-sm uppercase tracking-tighter items-center justify-center relative overflow-hidden group"
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer pointer-events-none" />
                  <span className="relative z-10">Вам перезвонить?</span>
                </motion.a>
              </div>

              <motion.button
                id="mobile-menu-toggle"
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0 }}
                onClick={onToggleMenu}
                className="xl:hidden p-2 text-white hover:text-[#FFD700]"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onCloseMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] xl:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] sm:w-[350px] [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:w-[240px] bg-[#141414] z-[70] xl:hidden shadow-2xl flex flex-col p-8 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:p-5"
            >
              <div className="flex justify-between items-center mb-12 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:mb-6">
                <div className="flex items-center gap-3 font-black text-xl tracking-tighter uppercase">
                  <div className="flex items-center">
                    <span className="text-white">BOXING</span>
                    <span className="text-[#FFD700]">VRN</span>
                  </div>
                </div>
                <button onClick={onCloseMenu} className="text-white hover:text-[#FFD700] transition-none">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-6 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:gap-4 mb-auto">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={onCloseMenu}
                    className="text-base [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:text-sm font-bold text-gray-300 hover:text-white transition-colors uppercase tracking-widest"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <div className="mt-12 pt-8 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:mt-6 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:pt-5 border-t border-white/10 flex flex-col gap-6 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:gap-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-xs text-gray-500 font-medium uppercase">
                    <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full" />
                    С Пн-Вс: 8:00 до 21:00
                  </div>
                  <a href="tel:+79952509636" className="text-xl [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:text-lg font-black text-white">+7 (995) 250 96 36</a>
                </div>
                <motion.a
                  href="#contact-form"
                  onClick={onCloseMenu}
                  whileHover={{
                    backgroundColor: '#FFD700',
                    filter: 'brightness(1.2)',
                    boxShadow: '0 0 40px rgba(255, 215, 0, 0.7)',
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="w-full bg-[#FFD700] text-black py-4 [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:py-3 font-black uppercase tracking-tighter text-sm [@media(max-width:932px)_and_(max-height:500px)_and_(orientation:landscape)]:text-xs relative overflow-hidden group flex items-center justify-center"
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer pointer-events-none" />
                  <span className="relative z-10">Вам перезвонить?</span>
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

import { Suspense, lazy, useEffect, useState } from 'react';
import { MENU_ITEMS } from './constants';
import { FAQ } from './components/FAQ';
import { Contacts } from './components/Contacts';
import { Footer } from './components/Footer';
import { Formats } from './components/Formats';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import LeadForm from './components/LeadForm';
import { Pricing } from './components/Pricing';
import { Reviews } from './components/Reviews';
import { Trainer } from './components/Trainer';

const PrivacyModal = lazy(() =>
  import('./components/PrivacyModal').then((module) => ({ default: module.PrivacyModal })),
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center overflow-x-hidden">
      <Header
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        menuItems={MENU_ITEMS}
        onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
        onCloseMenu={() => setIsMenuOpen(false)}
      />

      <div id="main-content-wrapper" className={`w-full flex flex-col items-center px-[5px] sm:px-[15px] md:px-[20px] lg:px-[30px] [@media(min-width:768px)_and_(max-width:1180px)_and_(orientation:landscape)]:px-[10px] gap-[10px] transition-all duration-300 box-border ${isScrolled ? 'pt-[64px] xs:pt-[72px] md:pt-[97px]' : 'pt-[69px] xs:pt-[77px] md:pt-[102px] [@media(max-width:639px)_and_(orientation:portrait)]:pt-[74px]'}`}>
        <Hero />
        <Formats />
        <Reviews />
        <Trainer />
        <LeadForm setIsPrivacyOpen={setIsPrivacyOpen} />
        <Pricing />
        <Contacts />
        <FAQ />
        <Footer setIsPrivacyOpen={setIsPrivacyOpen} />
      </div>

      <Suspense fallback={null}>
        <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      </Suspense>
    </div>
  );
}

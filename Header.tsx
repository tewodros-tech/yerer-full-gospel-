import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IconLookup } from './IconLookup';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenLiveStream: () => void;
}

export function Header({ activeTab, setActiveTab, onOpenLiveStream }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Our Church' },
    { id: 'ministries', label: 'Ministries' },
    { id: 'sermons', label: 'Sermons' },
    { id: 'events', label: 'Events' },
    { id: 'prayer', label: 'Prayer Wall' },
    { id: 'giving', label: 'Giving' }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    // Smooth scroll back to top of main container
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-stone-50/95 backdrop-blur-md shadow-sm border-b border-[#ecece4] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Church Logo & Title */}
        <button
          id="btn-logo-home"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left group transition-transform focus:outline-none"
        >
          <div className="h-10 w-10 bg-gold-500 rounded-full flex items-center justify-center text-white font-serif text-lg font-bold shadow-sm group-hover:bg-gold-600 transition-colors">
            የ
          </div>
          <div>
            <h1 className="text-lg md:text-xl font-serif font-black tracking-tight text-[#2d2d24] group-hover:text-gold-500 transition-colors leading-none">
              የረር ሙሉወንጌል
            </h1>
            <p className="text-[9px] md:text-[10px] font-sans tracking-widest uppercase text-gold-500 font-semibold mt-0.5 whitespace-nowrap">
              YERER FULL GOSPEL
            </p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 font-sans text-sm font-medium transition-colors rounded-md focus:outline-none ${
                  isActive
                    ? 'text-cream-950 font-semibold'
                    : 'text-[#6b6b5e] hover:text-[#2d2d24]'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeHeaderIndicator"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-gold-500 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Live Stream Button & Call Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="btn-live-stream"
            onClick={onOpenLiveStream}
            className="flex items-center gap-2 bg-[#E64B4B]/10 hover:bg-[#E64B4B]/15 text-[#D12B2B] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E64B4B] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D12B2B]"></span>
            </span>
            Live Stream
          </button>

          <button
            id="btn-header-visit"
            onClick={() => handleNavClick('giving')}
            className="bg-gold-500 hover:bg-gold-600 active:bg-gold-600 text-stone-50 font-sans font-medium text-xs tracking-wider uppercase px-6 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
          >
            Give Online
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          id="btn-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-md text-[#6b6b5e] hover:bg-[#ecece4]/40 transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          <IconLookup name={mobileMenuOpen ? 'X' : 'Users'} className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
            className="lg:hidden absolute top-[100%] left-0 right-0 bg-stone-50 border-b border-[#ecece4] shadow-lg py-5 px-6 flex flex-col gap-3"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-md font-sans font-medium text-base transition-colors ${
                      isActive
                        ? 'bg-gold-100 text-[#2d2d24] border-l-4 border-gold-500 pl-3'
                        : 'text-[#6b6b5e] hover:bg-[#ecece4]/20 hover:text-[#2d2d24]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="border-t border-[#ecece4] pt-4 flex flex-col gap-3">
              <button
                id="btn-mobile-live"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLiveStream();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#E64B4B]/10 hover:bg-[#E64B4B]/15 text-[#D12B2B] py-3 rounded-md text-sm font-semibold uppercase tracking-wider"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E64B4B] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D12B2B]"></span>
                </span>
                Sanctuary Live Stream
              </button>

              <button
                id="btn-mobile-give"
                onClick={() => handleNavClick('giving')}
                className="w-full bg-gold-500 hover:bg-gold-600 text-stone-50 py-3 rounded-md text-sm font-semibold uppercase tracking-wider shadow-sm"
              >
                Support Grace (Give Online)
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

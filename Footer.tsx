import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CHURCH_DETAILS } from '../data';
import { IconLookup } from './IconLookup';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const [subEmail, setSubEmail] = useState('');
  const [isSubbed, setIsSubbed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subEmail) return;

    setIsSubbed(true);
    setTimeout(() => {
      setSubEmail('');
    }, 1500);
  };

  return (
    <footer id="main-footer" className="bg-[#2d2d24] text-[#fbfbfb] border-t-2 border-[#3d3d34] pt-20 pb-10 text-left select-none relative overflow-hidden">
      
      {/* Background design glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold-500/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-[#3d3d34] pb-16">
        
        {/* Cul 1: About branded summary */}
        <div className="md:col-span-4 flex flex-col gap-4 text-left">
          <div className="flex items-center gap-2.5 text-left">
            <div className="h-10 w-10 bg-gold-500 rounded-full flex items-center justify-center text-white font-serif text-lg font-bold">
              የ
            </div>
            <div>
              <h4 className="text-xl font-serif font-black tracking-tight text-stone-50 leading-none">
                የረር ሙሉወንጌል
              </h4>
              <p className="text-[10px] font-sans tracking-widest uppercase text-gold-500 font-semibold mt-0.5">
                YERER FULL GOSPEL
              </p>
            </div>
          </div>
          
          <p className="font-sans text-xs text-stone-300/80 leading-relaxed max-w-sm mt-2">
            We are a multi-generational team centered on scripture, striving to love Addis Ababa and share the everlasting Gospel of Jesus Christ with everyone we contact.
          </p>

          <address className="not-italic flex flex-col gap-2 mt-4 text-xs font-sans text-stone-300">
            <div className="flex gap-2 items-start select-all">
              <IconLookup name="MapPin" className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" />
              <span>{CHURCH_DETAILS.address}</span>
            </div>
            <div className="flex gap-2 items-center select-all">
              <IconLookup name="Phone" className="h-4 w-4 text-gold-500 shrink-0" />
              <span>{CHURCH_DETAILS.phone}</span>
            </div>
            <div className="flex gap-2 items-center select-all">
              <IconLookup name="Mail" className="h-4 w-4 text-gold-500 shrink-0" />
              <span className="font-mono text-xs">{CHURCH_DETAILS.email}</span>
            </div>
          </address>
        </div>

        {/* Cul 2: Quick Links */}
        <div className="md:col-span-2 text-left">
          <h5 className="font-serif text-sm font-semibold text-gold-500 uppercase tracking-widest border-b border-[#3d3d34] pb-2 mb-4">
            Navigation
          </h5>
          <nav className="flex flex-col gap-2.5 text-xs font-sans text-stone-300">
            <button id="footer-link-home" onClick={() => onNavigate('home')} className="hover:text-gold-500 text-left transition-colors focus:outline-none">Home Splash</button>
            <button id="footer-link-about" onClick={() => onNavigate('about')} className="hover:text-gold-500 text-left transition-colors focus:outline-none">Our Beliefs</button>
            <button id="footer-link-ministries" onClick={() => onNavigate('ministries')} className="hover:text-gold-500 text-left transition-colors focus:outline-none">Ministries</button>
            <button id="footer-link-sermons" onClick={() => onNavigate('sermons')} className="hover:text-gold-500 text-left transition-colors focus:outline-none">Sermon Deck</button>
            <button id="footer-link-events" onClick={() => onNavigate('events')} className="hover:text-gold-500 text-left transition-colors focus:outline-none">Gatherings</button>
            <button id="footer-link-prayer" onClick={() => onNavigate('prayer')} className="hover:text-gold-500 text-left transition-colors focus:outline-none">Prayer Wall</button>
          </nav>
        </div>

        {/* Cul 3: Services Times */}
        <div className="md:col-span-3 text-left">
          <h5 className="font-serif text-sm font-semibold text-gold-500 uppercase tracking-widest border-b border-[#3d3d34] pb-2 mb-4">
            Service Hours
          </h5>
          <ul className="flex flex-col gap-3 font-sans text-xs text-stone-300">
            {CHURCH_DETAILS.serviceTimes.map((item, idx) => (
              <li key={idx} id={`footer-service-time-${idx}`}>
                <strong className="text-gold-200 block">{item.day}</strong>
                <span className="text-stone-300/80 mt-1 block">{item.time}</span>
                <span className="text-stone-400 mt-1 block text-[10px] italic">{item.description}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cul 4: Newsletter */}
        <div className="md:col-span-3 text-left">
          <h5 className="font-serif text-sm font-semibold text-gold-500 uppercase tracking-widest border-b border-[#3d3d34] pb-2 mb-4">
            Sowing Seeds Letter
          </h5>
          <p className="font-sans text-xs text-stone-300/80 leading-relaxed mb-4">
            Get encouragement, pastor journals, and event invitations directly in your inbox.
          </p>

          {isSubbed ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-gold-500/10 border border-gold-500/20 p-3.5 rounded-md"
            >
              <h6 className="font-serif text-xs font-bold text-gold-500 flex items-center gap-1">
                <IconLookup name="Check" className="h-4 w-4" />
                Subscription Processed!
              </h6>
              <p className="font-sans text-[10px] text-stone-400 mt-1">
                Welcome to our weekly loop list. Email verification issued.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubscribe} id="footer-newsletter-form" className="space-y-2">
              <input
                type="email"
                required
                value={subEmail}
                onChange={(e) => setSubEmail(e.target.value)}
                className="w-full bg-stone-50/5 border border-white/10 rounded-md px-3.5 py-2.5 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-gold-500 transition-colors"
                placeholder="example@email.com"
              />
              <button
                type="submit"
                id="btn-footer-sub"
                className="w-full py-2.5 bg-gold-500 hover:bg-gold-600 active:bg-gold-600 text-[#2d2d24] font-sans font-bold text-[10px] uppercase tracking-widest rounded-md shadow-md transition-colors"
              >
                Join Loop List
              </button>
            </form>
          )}
        </div>

      </div>

      {/* Copy elements */}
      <div id="footer-bottom-copy" className="max-w-7xl mx-auto px-4 md:px-8 mt-10 pt-2 flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans text-stone-400/80 tracking-wide">
        <p>
          &copy; {new Date().getFullYear()} የረር ሙሉወንጌል ቤተክርስቲያን (Yerer Full Gospel Church). All spiritual rights reserved. ADDIS ABABA, ETHIOPIA.
        </p>
        <div className="flex gap-4.5 mt-4 sm:mt-0 uppercase tracking-widest font-bold text-[9px] text-gold-500">
          <a href="#privacy" className="hover:text-gold-600 transition-colors">Privacy</a>
          <span>&middot;</span>
          <a href="#terms" className="hover:text-gold-600 transition-colors">Doctrinal Terms</a>
          <span>&middot;</span>
          <a href="#tithes" onClick={() => onNavigate('giving')} className="hover:text-gold-600 transition-colors">Online Giving</a>
        </div>
      </div>
    </footer>
  );
}

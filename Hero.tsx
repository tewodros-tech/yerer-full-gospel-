import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HERO_IMAGE, CHURCH_DETAILS } from '../data';
import { IconLookup } from './IconLookup';

interface HeroProps {
  onNavigate: (tab: string) => void;
  onOpenLiveStream: () => void;
}

const INSIGHT_VERSES = [
  { text: "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God.", cite: "Ephesians 2:8" },
  { text: "But grow in the grace and knowledge of our Lord and Savior Jesus Christ. To him be the glory both now and to the day of eternity.", cite: "2 Peter 3:18" },
  { text: "Let us then with confidence draw near to the throne of grace, that we may receive mercy and find grace to help in time of need.", cite: "Hebrews 4:16" },
  { text: "The Lord is gracious and righteous; our God is full of compassion.", cite: "Psalm 116:5" }
];

export function Hero({ onNavigate, onOpenLiveStream }: HeroProps) {
  const [verseIdx, setVerseIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVerseIdx((prev) => (prev + 1) % INSIGHT_VERSES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero-section" className="relative min-h-[95vh] md:min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden bg-cream-950">
      {/* Background Hero Image with Deep Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Yerer Full Gospel Church Sanctuary"
          className="w-full h-full object-cover scale-102 filter brightness-[0.34] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cream-950 via-cream-950/40 to-black/50" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-grow">
        {/* Left Column: Welcoming Text & Verse slider */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 px-3.5 py-1.5 rounded-full w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
            <span className="text-xs font-sans uppercase tracking-[0.1em] text-gold-500 font-bold">
              እንኳን በደህና መጡ — Welcome to Yerer Full Gospel Church
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-stone-50 md:leading-[1.1] leading-[1.12]"
          >
            A Place to <span className="text-gold-200 italic font-normal">Belong</span>, <br className="hidden sm:inline" />
            Grow & <span className="text-gold-500">Serve</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg md:text-xl font-light text-stone-300 max-w-xl font-sans leading-relaxed"
          >
            We are a warm, active, bible-centered community. No matter where you are in your spiritual journey, there is a seat for you at our table.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex flex-wrap items-center gap-4 mt-2"
          >
            <button
              id="hero-btn-about"
              onClick={() => onNavigate('about')}
              className="px-6 py-3.5 bg-gold-500 hover:bg-gold-600 active:bg-gold-600 text-[#2d2d24] font-sans font-semibold text-sm tracking-widest uppercase rounded-md shadow-lg hover:shadow-xl transition-all duration-200"
            >
              I'm New Here
            </button>
            <button
              id="hero-btn-sermons"
              onClick={() => onNavigate('sermons')}
              className="px-8 py-3.5 border border-stone-300 hover:border-white text-stone-300 hover:text-white font-sans font-semibold text-sm tracking-widest uppercase rounded-full bg-black/20 hover:bg-black/40 transition-all duration-200"
            >
              Watch Sermons
            </button>
          </motion.div>

          {/* Scripture Verse Slider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 border-l border-gold-500/40 pl-5 max-w-lg min-h-[90px] flex flex-col justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={verseIdx}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.4 }}
              >
                <p className="font-serif italic text-base text-stone-300/90 leading-relaxed font-light">
                  "{INSIGHT_VERSES[verseIdx].text}"
                </p>
                <p className="text-sm font-sans uppercase tracking-widest text-gold-500 font-bold mt-1.5">
                  &mdash; {INSIGHT_VERSES[verseIdx].cite}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Right Column: Key Times & Location Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 bg-stone-50/98 backdrop-blur-sm shadow-2xl rounded-md p-6 md:p-8 text-[#2d2d24] border border-[#ecece4]"
        >
          <div className="flex items-center gap-2 text-gold-500 border-b border-[#ecece4] pb-4.5 mb-5">
            <IconLookup name="Clock" className="h-6 w-6 stroke-[1.8]" />
            <h3 className="font-serif text-2xl font-bold">Worship Services</h3>
          </div>

          <div className="flex flex-col gap-6">
            {CHURCH_DETAILS.serviceTimes.map((item, idx) => (
              <div key={idx} id={`service-time-${idx}`} className="flex gap-4 items-start select-none">
                <div className="p-2.5 rounded-full bg-gold-100/60 border border-gold-200 text-gold-600 mt-0.5">
                  <IconLookup name="Calendar" className="h-[18px] w-[18px]" />
                </div>
                <div className="flex-1 text-left">
                  <span className="font-sans text-xs uppercase tracking-wider font-bold text-gold-600">
                    {item.day}
                  </span>
                  <h4 className="font-serif text-lg font-bold leading-tight mt-0.5">
                    {item.time}
                  </h4>
                  <p className="font-sans text-sm text-[#6b6b5e] mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="flex gap-4 items-start select-none border-t border-[#ecece4]/80 pt-5">
              <div className="p-2.5 rounded-full bg-gold-100/60 border border-gold-200 text-gold-600 mt-0.5">
                <IconLookup name="MapPin" className="h-[18px] w-[18px]" />
              </div>
              <div className="flex-1 text-left">
                <span className="font-sans text-xs uppercase tracking-wider font-bold text-gold-600">
                  Join Us In Person
                </span>
                <h4 className="font-serif text-base font-bold leading-tight mt-0.5">
                  Valleys Heights Campus
                </h4>
                <p className="font-sans text-sm text-[#6b6b5e] mt-0.5">
                  {CHURCH_DETAILS.address}
                </p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(CHURCH_DETAILS.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-sans uppercase font-bold text-gold-500 hover:text-gold-600 transition-colors mt-2"
                >
                  Get Directions
                  <IconLookup name="ArrowRight" className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-2.5">
            <button
              id="hero-join-live"
              onClick={onOpenLiveStream}
              className="w-full flex items-center justify-center gap-2 border-2 border-[#D12B2B] hover:bg-[#D12B2B]/5 text-[#D12B2B] py-3 text-xs font-semibold uppercase tracking-widest rounded-md transition-all duration-200"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[#D12B2B] animate-pulse" />
              Watch Today's Live BroadCast
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Wave bottom divider representing flowing waters */}
      <div id="hero-divider" className="absolute bottom-0 left-0 right-0 h-10 bg-stone-50 select-none pointer-events-none" style={{ clipPath: 'ellipse(60% 70% at 50% 100%)' }}></div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { INSTALLED_MINISTRIES } from '../data';
import { IconLookup } from './IconLookup';

export function Ministries() {
  const [activeMinistryId, setActiveMinistryId] = useState<string>(INSTALLED_MINISTRIES[0].id);
  const [inquireName, setInquireName] = useState('');
  const [inquireEmail, setInquireEmail] = useState('');
  const [inquireMessage, setInquireMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const selectedMinistry = INSTALLED_MINISTRIES.find(m => m.id === activeMinistryId) || INSTALLED_MINISTRIES[0];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquireName || !inquireEmail) return;

    setIsSubmitted(true);
    setTimeout(() => {
      // Clear inputs
      setInquireName('');
      setInquireEmail('');
      setInquireMessage('');
    }, 1500);
  };

  return (
    <section id="ministries-section" className="py-20 bg-stone-50 text-left">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Intro */}
        <div className="max-w-3xl mb-16 select-none">
          <span className="text-xs font-sans uppercase tracking-[0.25em] text-gold-500 font-bold block mb-2">
            Involved & Connected
          </span>
          <h2 className="text-3xl md:text-5xl font-serif">
            Ministries for Every <span className="italic text-gold-600 font-normal">Season of Life</span>
          </h2>
          <p className="font-sans text-base text-[#6b6b5e] leading-relaxed mt-4">
            At Grace, there is room for everyone to connect, learn, and offer their creative, helper, or administrative gifts to build up God’s Kingdom. Explore our central departments below.
          </p>
        </div>

        {/* Big layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive list of ministries */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {INSTALLED_MINISTRIES.map((m) => {
              const mdActive = activeMinistryId === m.id;
              return (
                <button
                  key={m.id}
                  id={`ministry-tab-${m.id}`}
                  onClick={() => {
                    setActiveMinistryId(m.id);
                    setIsSubmitted(false);
                  }}
                  className={`w-full flex items-center gap-4 p-5 rounded-md border text-left transition-all duration-200 focus:outline-none ${
                    mdActive
                      ? 'bg-white border-gold-500 shadow-lg ring-2 ring-gold-500/10 pl-6'
                      : 'bg-white/60 hover:bg-white border-[#ecece4] hover:shadow-sm'
                  }`}
                >
                  <div className={`p-3 rounded-full flex items-center justify-center transition-colors ${
                    mdActive ? 'bg-gold-500 text-white' : 'bg-gold-100 text-gold-600'
                  }`}>
                    <IconLookup name={m.iconName} className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className={`font-serif text-lg font-bold leading-tight ${
                      mdActive ? 'text-gold-600' : 'text-[#2d2d24]'
                    }`}>
                      {m.title}
                    </h4>
                    <p className="font-sans text-xs text-[#6b6b5e] mt-1 line-clamp-1">
                      {m.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Rich detail display panel */}
          <div className="lg:col-span-8 bg-white border border-[#ecece4] shadow-xl p-6 md:p-10 rounded-md relative overflow-hidden min-h-[540px] flex flex-col justify-between">
            {/* Background design accents mimicking sacred layouts */}
            <div className="absolute top-0 right-0 w-28 h-28 bg-gold-200/20 rounded-bl-full pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMinistry.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex-grow flex flex-col justify-between gap-10"
              >
                <div>
                  <div className="flex gap-4 items-center mb-6">
                    <div className="p-4 rounded-full bg-gold-100 text-gold-500 flex items-center justify-center">
                      <IconLookup name={selectedMinistry.iconName} className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl md:text-3.5xl font-bold">
                        {selectedMinistry.title}
                      </h3>
                      <p className="font-sans text-xs tracking-wider uppercase text-gold-500 font-bold mt-0.5">
                        Church Department & Community Support
                      </p>
                    </div>
                  </div>

                  <p className="font-sans text-base text-[#3a3a34] leading-relaxed mb-6 font-light">
                    {selectedMinistry.longDescription}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#ecece4]/60 pt-6 mb-8 text-sm text-[#6b6b5e]">
                    <div className="flex gap-3 items-center">
                      <div className="text-gold-500">
                        <IconLookup name="Clock" className="h-[18px] w-[18px]" />
                      </div>
                      <div className="text-left">
                        <span className="font-sans text-[11px] uppercase tracking-wider font-bold text-gold-600 block leading-none">
                          Gathering Schedule
                        </span>
                        <span className="font-serif text-sm font-semibold mt-1 block">
                          {selectedMinistry.schedule}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-3 items-center">
                      <div className="text-gold-500">
                        <IconLookup name="Mail" className="h-[18px] w-[18px]" />
                      </div>
                      <div className="text-left">
                        <span className="font-sans text-[11px] uppercase tracking-wider font-bold text-gold-600 block leading-none">
                          Department Contact
                        </span>
                        <span className="font-sans text-xs tracking-wide select-all mt-1 block font-medium">
                          {selectedMinistry.contact}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub-Interactive Component: Inquiry / Interest Signup Form */}
                <div className="border-t border-[#ecece4] bg-stone-50/50 p-6 -mx-6 -mb-6 md:-mx-10 md:-mb-10 rounded-b-sm">
                  <h4 className="font-serif text-lg font-bold mb-4 flex items-center gap-2">
                    <IconLookup name="Flame" className="h-5 w-5 text-gold-500" />
                    Interested in {selectedMinistry.title}? Get Connected!
                  </h4>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="bg-gold-100/60 border border-gold-200 rounded-md p-6 text-center select-none"
                    >
                      <span className="inline-flex items-center justify-center p-2.5 rounded-full bg-gold-600 text-white mb-3 shadow-md">
                        <IconLookup name="Check" className="h-6 w-6 stroke-[3]" />
                      </span>
                      <h4 className="font-serif text-xl font-bold text-cream-950">
                        Awesome Journey Awaits!
                      </h4>
                      <p className="font-sans text-sm text-[#6b6b5e] mt-1.5 max-w-md mx-auto">
                        Inquiry received. A representative from the <strong className="text-[#2d2d24]">{selectedMinistry.title}</strong> team will email you at <strong className="text-gold-600 select-all font-mono text-xs">{inquireEmail}</strong> within 48 hours. God bless!
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleInquirySubmit} id="ministry-inquiry-form" className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="text-left">
                          <label htmlFor="inquire-name" className="block text-xs font-sans font-bold uppercase tracking-wider text-gold-600 mb-1">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            id="inquire-name"
                            value={inquireName}
                            onChange={(e) => setInquireName(e.target.value)}
                            className="w-full bg-white border border-[#ecece4] rounded-md px-4 py-2 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-gold-500/30 transition-shadow text-[#2d2d24]"
                            placeholder="John Doe"
                          />
                        </div>

                        <div className="text-left">
                          <label htmlFor="inquire-email" className="block text-xs font-sans font-bold uppercase tracking-wider text-gold-600 mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            id="inquire-email"
                            value={inquireEmail}
                            onChange={(e) => setInquireEmail(e.target.value)}
                            className="w-full bg-white border border-[#ecece4] rounded-md px-4 py-2 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-gold-500/30 transition-shadow text-[#2d2d24]"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="text-left">
                        <label htmlFor="inquire-message" className="block text-xs font-sans font-bold uppercase tracking-wider text-gold-600 mb-1">
                          A short note (Optional)
                        </label>
                        <textarea
                          id="inquire-message"
                          value={inquireMessage}
                          onChange={(e) => setInquireMessage(e.target.value)}
                          rows={2}
                          className="w-full bg-white border border-[#ecece4] rounded-md px-4 py-2 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-gold-500/30 transition-shadow text-[#2d2d24]"
                          placeholder="Hey! I would love to join your next group meeting or rehearsal..."
                        />
                      </div>

                      <div className="flex justify-end pt-1">
                        <button
                          type="submit"
                          id="submit-inquiry-btn"
                          className="px-6 py-2.5 bg-cream-950 hover:bg-gold-500 active:bg-gold-500 text-stone-50 hover:text-white font-sans font-bold text-xs uppercase tracking-widest rounded-md shadow-md transition-all duration-300"
                        >
                          Request Information
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}

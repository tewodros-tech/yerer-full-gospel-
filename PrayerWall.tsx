import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PrayerRequest } from '../types';
import { IconLookup } from './IconLookup';

const DEFAULT_PRAYERS: PrayerRequest[] = [
  {
    id: 'pr-1',
    name: 'Brother Thomas',
    content: 'Please pray for my cousin Arthur, who is undergoing critical spinal column surgery this coming Tuesday in Seattle. We ask the Lord to steady the surgical team’s hands and bring rapid healing.',
    isAnonymous: false,
    date: 'June 18, 2026',
    isApproved: true,
    prayerCount: 16
  },
  {
    id: 'pr-2',
    name: 'Anonymous',
    content: 'Healing and wisdom. Navigating a tough transition in our work career, and asking for divine doors to open and peace that transcends human understanding to guard our hearts.',
    isAnonymous: true,
    date: 'June 17, 2026',
    isApproved: true,
    prayerCount: 22
  },
  {
    id: 'pr-3',
    name: 'Deacon Hannah',
    content: 'Praise report! Little Clara is back home from the pediatrician clinic and her fever has completely broken. Thank you for all who offered prayers last week &mdash; God is so faithful!',
    isAnonymous: false,
    date: 'June 15, 2026',
    isApproved: true,
    prayerCount: 31
  },
  {
    id: 'pr-4',
    name: 'Evelyn Cole',
    content: 'Prayers for our upcoming Middle School Velocity Camp starting next month. We desire spiritual safety, hearts aligned to grace, and that many students encounter the real love of Jesus.',
    isAnonymous: false,
    date: 'June 14, 2026',
    isApproved: true,
    prayerCount: 19
  }
];

export function PrayerWall() {
  const [prayers, setPrayers] = useState<PrayerRequest[]>(() => {
    const cached = localStorage.getItem('grace_church_prayers');
    return cached ? JSON.parse(cached) : DEFAULT_PRAYERS;
  });

  const [inputName, setInputName] = useState('');
  const [inputContent, setInputContent] = useState('');
  const [isAnon, setIsAnon] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState(false);

  useEffect(() => {
    localStorage.setItem('grace_church_prayers', JSON.stringify(prayers));
  }, [prayers]);

  const handleCreateRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputContent) return;

    const newPr: PrayerRequest = {
      id: `pr-${Date.now()}`,
      name: isAnon ? 'Anonymous' : (inputName || 'Friend'),
      content: inputContent,
      isAnonymous: isAnon,
      date: 'Just Now',
      isApproved: true,
      prayerCount: 0
    };

    setPrayers([newPr, ...prayers]);
    setInputName('');
    setInputContent('');
    setIsAnon(false);
    setSubmittedMessage(true);
    
    setTimeout(() => {
      setSubmittedMessage(false);
      setShowForm(false);
    }, 2800);
  };

  const handleIncrementPrayer = (id: string) => {
    setPrayers(prev => prev.map(pr => {
      if (pr.id === id) {
        return { ...pr, prayerCount: pr.prayerCount + 1 };
      }
      return pr;
    }));
  };

  return (
    <section id="prayer-wall" className="py-20 bg-stone-50 text-left">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 select-none">
          <div className="lg:col-span-8 text-left">
            <span className="text-xs font-sans uppercase tracking-[0.25em] text-gold-500 font-bold block mb-2">
              Lifting One Another Up
            </span>
            <h2 className="text-3xl md:text-5xl font-serif">
              Yerer Full Gospel <span className="italic text-gold-600 font-normal">Prayer Wall</span>
            </h2>
            <p className="font-sans text-sm text-[#6b6b5e] leading-relaxed mt-2.5">
              "Carry each other’s burdens, and in this way you will fulfill the law of Christ" &mdash; Galatians 6:2. <br/>
              Our virtual prayer wall links our church family. Post anonymous or signed requests, and stand in prayer for others by clicking "I Prayed for This".
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <button
              id="btn-trigger-prayer-form"
              onClick={() => setShowForm(!showForm)}
              className="px-6 py-3.5 bg-gold-500 hover:bg-gold-600 active:bg-gold-600 text-cream-950 font-sans font-bold text-xs uppercase tracking-widest rounded-md shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              {showForm ? 'View Active Prayers' : 'Submit Prayer Request'}
            </button>
          </div>
        </div>

        {/* Outer Layout container grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Submit form block */}
          <AnimatePresence>
            {showForm && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:col-span-12 border border-[#ecece4] bg-[#fdfcf8] p-6 md:p-8 rounded-md overflow-hidden text-left"
              >
                <h4 className="font-serif text-xl font-bold mb-4 flex items-center gap-2 border-b border-[#ecece4]/80 pb-2">
                  <IconLookup name="Flame" className="h-5 w-5 text-gold-500" />
                  What can we pray for today?
                </h4>

                {submittedMessage ? (
                  <motion.div
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    className="bg-gold-100 border border-gold-200 rounded-md p-6 text-center select-none"
                  >
                    <span className="p-2.5 text-white bg-gold-600 rounded-full inline-flex items-center justify-center mb-3">
                      <IconLookup name="Check" className="h-5 w-5 stroke-[3]" />
                    </span>
                    <h5 className="font-serif text-lg font-bold">Prayer Request Submitted</h5>
                    <p className="font-sans text-sm text-[#6b6b5e] mt-1">
                      Your prayer request was successfully placed on our public wall. Our pastoral staff and intercessory groups will pray over this!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleCreateRequest} id="add-prayer-form" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      
                      <div className="text-left">
                        <label htmlFor="prayer-name-input" className="block text-xs font-sans font-bold uppercase tracking-wider text-gold-600 mb-1">
                          Your Name {isAnon ? '(Hidden)' : ''}
                        </label>
                        <input
                          type="text"
                          id="prayer-name-input"
                          disabled={isAnon}
                          value={inputName}
                          onChange={(e) => setInputName(e.target.value)}
                          className="w-full bg-white disabled:bg-stone-50 disabled:text-stone-400 border border-[#ecece4] rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/30 text-[#2d2d24]"
                          placeholder={isAnon ? 'Anonymous' : 'e.g. Mary Vance'}
                        />
                      </div>

                      {/* Checkbox */}
                      <div className="flex items-center gap-3 pt-6 select-none">
                        <input
                          type="checkbox"
                          id="prayer-anon-check"
                          checked={isAnon}
                          onChange={(e) => setIsAnon(e.target.checked)}
                          className="accent-gold-500 h-4.5 w-4.5 rounded-md border-stone-300 focus:outline-none focus:ring-2 focus:ring-gold-500/30"
                        />
                        <label htmlFor="prayer-anon-check" className="text-xs font-sans font-bold uppercase tracking-wider text-stone-600 cursor-pointer">
                          Submit this prayer anonymously
                        </label>
                      </div>
                    </div>

                    <div className="text-left">
                      <label htmlFor="prayer-content" className="block text-xs font-sans font-bold uppercase tracking-wider text-gold-600 mb-1">
                        Your Prayer Request or Praise Report *
                      </label>
                      <textarea
                        required
                        id="prayer-content"
                        value={inputContent}
                        onChange={(e) => setInputContent(e.target.value)}
                        rows={3}
                        className="w-full bg-white border border-[#ecece4] rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/30 text-[#2d2d24]"
                        placeholder="Write your request clearly here... (e.g., healing, salvation, comfort, peace, thanks)"
                      />
                    </div>

                    <div className="flex justify-end gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        className="px-5 py-2.5 border border-[#ecece4] hover:bg-[#ecece4]/20 text-[#6b6b5e] rounded-md text-xs font-semibold uppercase tracking-widest"
                      >
                        Cancel
                      </button>

                      <button
                        type="submit"
                        id="btn-confirm-prayer-submit"
                        className="px-6 py-2.5 bg-cream-950 hover:bg-gold-500 text-stone-50 font-sans font-bold text-xs uppercase tracking-widest rounded-md shadow-md transition-shadow"
                      >
                        Publish Request
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Active wall display lists */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {prayers.map((pr) => (
              <motion.div
                key={pr.id}
                id={`prayer-card-${pr.id}`}
                layout
                className="bg-white border border-[#ecece4] hover:border-gold-500/40 p-6 md:p-8 rounded-2xl shadow-sm flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#ecece4]/50 pb-3 mb-4 select-none">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-gold-100 flex items-center justify-center text-xs text-gold-600 font-bold uppercase">
                        {pr.name.slice(0, 2)}
                      </div>
                      <div>
                        <h5 className="font-serif text-sm font-extrabold text-[#2d2d24]">
                          {pr.name}
                        </h5>
                        <p className="text-[10px] font-sans text-stone-400">
                          Posted: {pr.date}
                        </p>
                      </div>
                    </div>

                    {pr.content.toLowerCase().includes('praise') && (
                      <span className="px-2.5 py-1 bg-[#EEFDF3] text-[#147936] rounded-full text-[9px] font-sans font-bold uppercase tracking-wider">
                        Praise Report
                      </span>
                    )}
                  </div>

                  <p className="font-sans text-sm text-[#3a3a34] leading-relaxed font-light italic text-left">
                    "{pr.content}"
                  </p>
                </div>

                {/* Pray feedback count */}
                <div className="border-t border-[#ecece4]/50 pt-4 mt-6 flex items-center justify-between select-none">
                  <span className="text-xs font-sans text-[#6b6b5e] font-medium">
                    {pr.prayerCount > 0 ? (
                      <em className="font-serif italic font-semibold text-gold-500">
                        {pr.prayerCount} {pr.prayerCount === 1 ? 'person is' : 'people are'} praying
                      </em>
                    ) : (
                      <span className="text-stone-400">Be first to pray</span>
                    )}
                  </span>

                  <button
                    id={`btn-pray-for-${pr.id}`}
                    onClick={() => handleIncrementPrayer(pr.id)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-gold-500/30 text-gold-600 hover:bg-gold-500/10 active:bg-gold-500/20 text-xs font-sans font-bold tracking-wider uppercase transition-colors"
                  >
                    <IconLookup name="Heart" className="h-[13px] w-[13px] fill-gold-500" />
                    I Prayed For This
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

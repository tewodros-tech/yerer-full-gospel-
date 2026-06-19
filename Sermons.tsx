import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { INSTALLED_SERMONS } from '../data';
import { Sermon } from '../types';
import { IconLookup } from './IconLookup';

export function Sermons() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSermon, setActiveSermon] = useState<Sermon>(INSTALLED_SERMONS[0]);
  const [showNotes, setShowNotes] = useState<boolean>(false);
  
  // Custom Player States
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playProgress, setPlayProgress] = useState<number>(12); // Simulated percentage
  const [playerExpanded, setPlayerExpanded] = useState<boolean>(false);
  
  // Simulated audio play timeline timer
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setPlayProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);

  // Handle active sermon change and reset states
  const handleSelectSermon = (sermon: Sermon) => {
    setActiveSermon(sermon);
    setIsPlaying(false);
    setPlayProgress(0);
    setShowNotes(false);
    setPlayerExpanded(true);
    // Scroll smoothly to active player
    const playerTarget = document.getElementById('sermon-player-box');
    if (playerTarget) {
      playerTarget.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const categories = ['All', 'Sunday Service', 'Grace Series', 'Worship', 'Outreach & Missions'];

  const filteredSermons = INSTALLED_SERMONS.filter((sermon) => {
    const matchesCategory = selectedCategory === 'All' || sermon.category === selectedCategory;
    const matchesSearch =
      sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.scripture.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="sermon-archive" className="py-20 bg-stone-50 text-left">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title / Intro */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-xl select-none text-left">
            <span className="text-xs font-sans uppercase tracking-[0.25em] text-gold-500 font-bold block mb-2">
              Scripture-Rich Teaching
            </span>
            <h2 className="text-3xl md:text-5xl font-serif">
              Sermon Library & Notes
            </h2>
            <p className="font-sans text-sm text-[#6b6b5e] leading-relaxed mt-2">
              Browse weekly expositions by Pastor Joseph Vance, Sarah Sterling, and guests. Play audios, review outline summaries, and dive deep into scripture study.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              id="sermon-search"
              placeholder="Search title, speaker, scripture..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#ecece4] rounded-full pl-5 pr-10 py-2.5 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-gold-500/30 transition-all text-[#2d2d24] shadow-sm"
            />
            <span className="absolute right-3.5 top-3 text-[#6b6b5e]">
              <IconLookup name="Search" className="h-4 w-4" />
            </span>
          </div>
        </div>

        {/* Category filters */}
        <div id="category-filters-row" className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-2 select-none">
          {categories.map((cat) => {
            const isSel = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4.5 py-1.5 rounded-full text-xs font-sans font-semibold tracking-wider transition-all duration-200 uppercase whitespace-nowrap ${
                  isSel
                    ? 'bg-gold-500 text-cream-950 shadow-md'
                    : 'bg-white border border-[#ecece4] text-[#6b6b5e] hover:bg-gold-100/30'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Big visual player (Active Sermon) */}
        <div
          id="sermon-player-box"
          className="bg-[#2d2d24] text-[#fbfbfb] border border-[#3d3d34] rounded-md p-6 md:p-10 shadow-2xl mb-12 relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10"
        >
          {/* Background visuals (Spiritual ambiance glow waves) */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/5 rounded-full filter blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gold-600/5 rounded-full filter blur-[100px] pointer-events-none" />

          {/* Player Graphic (Sanctuary Window sketch look) */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-gold-100/5 border border-gold-500/10 rounded-md p-6 relative select-none">
            <div className="absolute top-4 right-4 text-gold-500/40 opacity-80">
              <IconLookup name="Volume2" className="h-12 w-12" />
            </div>

            <div className="h-32 flex items-center justify-center border-b border-gold-500/15 pb-4">
              {/* Pulsing Animated Waveform when playing */}
              <div className="flex items-end gap-1.5 h-16 w-32 border-[#3d3d34]/60 pt-4.5 justify-center">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((bar) => {
                  let heightMultiplier = [0.4, 0.7, 0.3, 0.9, 0.6, 1.0, 0.5, 0.8, 0.2, 0.65, 0.4];
                  return (
                    <span
                      key={bar}
                      className="bg-gold-500/70 w-1 rounded-full transition-all duration-300"
                      style={{
                        height: isPlaying ? `${heightMultiplier[bar - 1] * 100}%` : '15%',
                        animation: isPlaying ? `bounce 1.${bar % 3}s infinite ease-in-out` : 'none',
                        animationDelay: `${bar * 0.1}s`
                      }}
                    />
                  );
                })}
              </div>
            </div>

            <div className="mt-5 text-left">
              <span className="text-[10px] font-sans tracking-[0.2em] uppercase font-bold text-gold-500 block mb-1">
                EXPOSITION SERIES
              </span>
              <h4 className="font-serif text-lg font-bold text-stone-50 truncate leading-snug">
                {activeSermon.category}
              </h4>
              <p className="font-sans text-xs text-stone-400 mt-1 select-all">
                Scripture: <span className="text-gold-200 font-semibold">{activeSermon.scripture}</span>
              </p>
            </div>
          </div>

          {/* Player Controls & Info */}
          <div className="lg:col-span-8 flex flex-col justify-between text-left">
            <div>
              <div className="flex flex-wrap items-center gap-3.5 mb-3">
                <span className="px-3.5 py-1.5 bg-[#ffffff]/10 text-[#ffffff] rounded-full text-[10px] font-sans font-bold uppercase tracking-widest leading-none">
                  {activeSermon.speaker}
                </span>
                <span className="text-xs text-stone-400 font-sans tracking-wide">
                  Published: {activeSermon.date}
                </span>
                <span className="text-xs text-stone-400 font-sans tracking-wide">
                  Duration: {activeSermon.duration} mins
                </span>
              </div>

              <h3 className="font-serif text-3xl md:text-4.5xl font-bold text-stone-50 leading-tight mb-4">
                {activeSermon.title}
              </h3>
              <p className="font-sans text-base text-stone-300/90 font-light leading-relaxed max-w-xl mb-6">
                {activeSermon.excerpt}
              </p>
            </div>

            {/* Custom Interactive Player Interface */}
            <div className="bg-stone-50/5 border border-white/5 rounded-md p-4 text-stone-100 select-none">
              <div className="flex items-center justify-between gap-6">
                {/* Play button */}
                <button
                  id="btn-sermon-play-toggle"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="h-14 w-14 bg-gold-500 hover:bg-gold-600 active:bg-gold-600 text-[#2d2d24] rounded-full flex items-center justify-center focus:outline-none transition-colors shadow-lg shadow-gold-500/10 cursor-pointer"
                >
                  <IconLookup name={isPlaying ? 'X' : 'Play'} className={`h-6 w-6 text-[#2d2d24] stroke-[2.5] ${!isPlaying ? 'translate-x-[2px]' : ''}`} />
                </button>

                {/* Progress bar */}
                <div className="flex-1">
                  <div className="flex items-center justify-between text-xs text-stone-300 mb-1.5 font-mono">
                    <span>
                      {isPlaying
                        ? `0${Math.floor((playProgress / 100) * 38)}:${Math.floor(((playProgress / 100) * 38 * 60) % 60).toString().padStart(2, '0')}`
                        : '00:00'}
                    </span>
                    <span className="text-stone-400">/{activeSermon.duration}</span>
                  </div>
                  
                  {/* Custom progress rail */}
                  <div
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const clickX = e.clientX - rect.left;
                      const percentage = Math.round((clickX / rect.width) * 100);
                      setPlayProgress(percentage);
                    }}
                    className="h-1.5 bg-stone-300/20 hover:bg-stone-300/30 rounded-full cursor-pointer overflow-hidden transition-colors"
                  >
                    <div
                      className="bg-gold-500 h-full rounded-full transition-all duration-300"
                      style={{ width: `${playProgress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Speaker message */}
              {isPlaying && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xs text-gold-500 mt-2 font-mono flex items-center gap-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-ping inline-block" />
                  Streaming devotional high-fidelity sanctuary audio track...
                </motion.p>
              )}
            </div>

            {/* Expander Sermon outline & interactive files */}
            <div className="flex flex-wrap items-center gap-3.5 mt-6 border-t border-white/5 pt-5 select-none">
              {activeSermon.notes && (
                <button
                  id="btn-toggle-sermon-notes"
                  onClick={() => setShowNotes(!showNotes)}
                  className="inline-flex items-center gap-2 text-xs font-sans uppercase font-bold tracking-wider text-gold-500 hover:text-gold-600 transition-colors"
                >
                  <IconLookup name="FileText" className="h-4 w-4" />
                  {showNotes ? 'Hide Study Outline' : 'View Study Outline'}
                  <IconLookup name={showNotes ? 'ChevronDown' : 'ChevronRight'} className="h-3.5 w-3.5" />
                </button>
              )}

              <button
                id="btn-mock-notes-download"
                onClick={() => {
                  alert("Sermon Study Guide (PDF) file download started in fallback browser sandbox. Content includes full Mark 4 scripture readings, group icebreaker ideas, and devotionals.");
                }}
                className="inline-flex items-center gap-2 text-xs font-sans uppercase font-bold tracking-wider text-stone-300 hover:text-white transition-colors ml-auto"
              >
                <IconLookup name="BookOpen" className="h-3.5 w-3.5 text-gold-500" />
                Study PDF
              </button>
            </div>
          </div>
        </div>

        {/* Sermon study notes area */}
        <AnimatePresence>
          {showNotes && activeSermon.notes && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-gold-100/30 border border-[#ecece4] rounded-md p-6 md:p-8 text-left mb-12"
            >
              <h4 className="font-serif text-xl font-bold mb-4 border-b border-[#ecece4] pb-2 text-gold-600 flex items-center gap-2">
                <IconLookup name="BookOpen" className="h-5 w-5" />
                Sermon Outline: {activeSermon.title}
              </h4>
              <p className="font-mono text-xs text-gold-600/90 font-bold tracking-wide uppercase mb-3">
                Scripture Reference: {activeSermon.scripture} &mdash; Exposition Notes
              </p>
              <pre className="whitespace-pre-wrap font-sans text-sm text-[#3a3a34] leading-relaxed font-light">
                {activeSermon.notes}
              </pre>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Library list */}
        <h4 className="font-serif text-2xl font-bold mb-6 select-none border-b border-[#ecece4] pb-2 text-left">
          All Teachings ({filteredSermons.length})
        </h4>

        {filteredSermons.length === 0 ? (
          <div className="bg-white border rounded-md p-12 text-center select-none shadow-sm">
            <span className="p-3 bg-stone-100 rounded-full text-gold-500 inline-block mb-3">
              <IconLookup name="Clock" className="h-6 w-6" />
            </span>
            <h5 className="font-serif text-lg font-bold">No sermons found</h5>
            <p className="font-sans text-xs text-[#6b6b5e] mt-1 max-w-sm mx-auto">
              We couldn't find any teaching files matching "{searchQuery}" in category "{selectedCategory}".
            </p>
          </div>
        ) : (
          <div id="sermons-grid" className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {filteredSermons.map((sermon) => {
              const isActive = activeSermon.id === sermon.id;
              return (
                <div
                  key={sermon.id}
                  id={`sermon-card-${sermon.id}`}
                  className={`bg-white border-2 rounded-md p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer text-left ${
                    isActive ? 'border-gold-500 shadow-md ring-2 ring-gold-500/5' : 'border-[#ecece4]/80 hover:border-[#ecece4]'
                  }`}
                  onClick={() => handleSelectSermon(sermon)}
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-gold-600 font-sans tracking-wide font-bold mb-2 uppercase">
                      <span>{sermon.category}</span>
                      <span>{sermon.duration} min</span>
                    </div>

                    <h4 className="font-serif text-xl font-bold text-[#2d2d24] group-hover:text-gold-500 transition-colors leading-snug">
                      {sermon.title}
                    </h4>
                    <p className="font-sans text-xs text-gold-600 font-bold mt-1 shadow-none">
                      {sermon.scripture}
                    </p>
                    <p className="font-sans text-sm text-[#6b6b5e] mt-3 leading-relaxed font-light line-clamp-2">
                      {sermon.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-[#ecece4]/60 pt-4 mt-5 select-none text-xs text-[#6b6b5e]">
                    <div className="flex items-center gap-2">
                      <span className="font-bold font-sans text-cream-950">
                        {sermon.speaker}
                      </span>
                      <span className="text-[#a59b8d]">&bull;</span>
                      <span>{sermon.date}</span>
                    </div>

                    <span className="inline-flex items-center gap-1 font-sans font-bold text-gold-500 hover:text-gold-600 transition-colors uppercase tracking-wider text-[11px]">
                      Listen Teach
                      <IconLookup name="Play" className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}

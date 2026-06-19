import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { INSTALLED_EVENTS } from '../data';
import { ChurchEvent } from '../types';
import { IconLookup } from './IconLookup';

export function Events() {
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [registerEvent, setRegisterEvent] = useState<ChurchEvent | null>(null);
  
  // Registration form inputs
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regAdultTickets, setRegAdultTickets] = useState('1');
  const [regKidsTickets, setRegKidsTickets] = useState('0');
  const [regNotes, setRegNotes] = useState('');
  const [registeredReceipt, setRegisteredReceipt] = useState<{
    serial: string;
    holder: string;
    adults: number;
    kids: number;
    eventTitle: string;
  } | null>(null);

  const categories = ['All', 'Worship', 'Community', 'Youth & Kids', 'Outreach', 'Study'];

  const filteredEvents = INSTALLED_EVENTS.filter((ev) => {
    return selectedCat === 'All' || ev.category === selectedCat;
  });

  const handleOpenRegistration = (ev: ChurchEvent) => {
    setRegisterEvent(ev);
    setRegisteredReceipt(null);
    setRegName('');
    setRegEmail('');
    setRegAdultTickets('1');
    setRegKidsTickets('0');
    setRegNotes('');
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regName || !regEmail || !registerEvent) return;

    const receiptSerial = `GRC-${Math.floor(100000 + Math.random() * 900000)}`;
    setRegisteredReceipt({
      serial: receiptSerial,
      holder: regName,
      adults: parseInt(regAdultTickets) || 1,
      kids: parseInt(regKidsTickets) || 0,
      eventTitle: registerEvent.title
    });
  };

  return (
    <section id="events-calendar" className="py-20 bg-stone-50 text-left">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Intro */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-xl text-left">
            <span className="text-xs font-sans uppercase tracking-[0.25em] text-gold-500 font-bold block mb-2">
              Our Shared Calendar
            </span>
            <h2 className="text-3xl md:text-5xl font-serif">
              Upcoming Gatherings
            </h2>
            <p className="font-sans text-sm text-[#6b6b5e] leading-relaxed mt-2">
              Christian community happens inside and outside sanctuary layouts. Join us for picnics, studies, youth camps, and outreach clinics. Save the dates!
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 select-none overflow-x-auto pb-1 max-w-full">
            {categories.map((cat) => {
              const isSel = selectedCat === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`px-4 py-1.5 rounded-full text-[11px] font-sans font-bold uppercase tracking-wider transition-all duration-200 ${
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
        </div>

        {/* Events list */}
        {filteredEvents.length === 0 ? (
          <div className="bg-white border text-center p-12 rounded-md shadow-sm select-none">
            <span className="p-3 bg-stone-100 text-gold-500 inline-block rounded-full mb-3">
              <IconLookup name="Calendar" className="h-6 w-6" />
            </span>
            <h5 className="font-serif text-lg font-bold">No events scheduled</h5>
            <p className="font-sans text-xs text-[#6b6b5e] mt-1 max-w-sm mx-auto">
              There are no upcoming activities listed under the "{selectedCat}" category right now. Please check back soon or contact info@yererfullgospel.org!
            </p>
          </div>
        ) : (
          <div id="events-grid-layout" className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {filteredEvents.map((ev) => (
              <div
                key={ev.id}
                id={`event-card-${ev.id}`}
                className="bg-white border border-[#ecece4] hover:border-gold-500/50 shadow-sm hover:shadow-xl transition-all duration-300 rounded-md p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3 select-none">
                    <span className="px-3 py-1 bg-gold-100 text-gold-600 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider">
                      {ev.category}
                    </span>

                    {ev.registrationRequired && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-sans text-gold-500 font-bold uppercase tracking-wider">
                        <IconLookup name="Lock" className="h-[13px] w-[13px]" />
                        RSVP Required
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-2.5xl font-bold text-[#2d2d24] leading-snug">
                    {ev.title}
                  </h3>
                  <p className="font-sans text-sm text-[#6b6b5e] leading-relaxed mt-3.5 font-light">
                    {ev.description}
                  </p>

                  <div className="space-y-2 border-t border-[#ecece4]/60 pt-4 mt-6 text-sm text-[#6b6b5e] select-all">
                    <div className="flex items-center gap-3">
                      <IconLookup name="Clock" className="h-[15px] w-[15px] text-gold-500" />
                      <div>
                        <strong className="text-[#2d2d24] font-sans font-semibold text-xs block leading-none">
                          {ev.date}
                        </strong>
                        <span className="text-xs font-sans tracking-tight block mt-1 text-[#6b6b5e]">
                          {ev.time}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-1">
                      <IconLookup name="MapPin" className="h-[15px] w-[15px] text-gold-500" />
                      <span className="text-xs font-sans">
                        {ev.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#ecece4]/60 pt-4 mt-6 flex items-center justify-between select-none">
                  <button
                    id={`btn-calendar-add-${ev.id}`}
                    onClick={() => {
                      alert(`Calendar reminder for "${ev.title}" created. Syncing as .ics file for Google Calendar & Apple Calendar calendars.`);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-sans font-bold text-gold-500 hover:text-gold-600 transition-colors uppercase tracking-wider"
                  >
                    <IconLookup name="Calendar" className="h-4 w-4" />
                    Add Calendar
                  </button>

                  <button
                    id={`btn-event-rsvp-${ev.id}`}
                    onClick={() => handleOpenRegistration(ev)}
                    className="px-5 py-2.5 bg-cream-950 hover:bg-gold-500 active:bg-gold-500 text-stone-50 hover:text-white font-sans font-semibold text-xs uppercase tracking-widest rounded-md shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    {ev.registrationRequired ? 'RSVP Ticket' : 'Tell Us You\'re Coming'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Shared Registration Modal Backdrop / Overlay */}
        <AnimatePresence>
          {registerEvent && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setRegisterEvent(null)}
                className="absolute inset-0 bg-cream-950/70 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ duration: 0.25 }}
                className="relative bg-stone-50 max-w-lg w-full rounded-md border border-[#ecece4] shadow-2xl overflow-hidden text-[#2d2d24]"
              >
                {/* Header card banner */}
                <div className="bg-[#2d2d24] text-stone-100 p-6 flex justify-between items-start border-b border-[#3d3d34] select-none">
                  <div>
                    <span className="text-[10px] font-sans tracking-[0.2em] uppercase font-bold text-gold-500 block mb-1">
                      Event Registration
                    </span>
                    <h3 className="font-serif text-2xl font-bold pr-6 text-stone-50">
                      {registerEvent.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setRegisterEvent(null)}
                    className="text-stone-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <IconLookup name="X" className="h-5 w-5" />
                  </button>
                </div>

                {registeredReceipt ? (
                  /* Stunning virtual pass receipt block */
                  <div className="p-6 md:p-8 select-none text-center">
                    <span className="inline-flex items-center justify-center p-3 rounded-full bg-gold-500 text-white mb-4 shadow-xl">
                      <IconLookup name="Check" className="h-7 w-7 stroke-[3]" />
                    </span>
                    <h4 className="font-serif text-2xl font-black text-cream-950">
                      You are Confirmed!
                    </h4>
                    <p className="font-sans text-sm text-[#6b6b5e] mt-1">
                      Thank you for joining Yerer Full Gospel Church. A digital ticket pass was dispatched.
                    </p>

                    {/* Styled tickets border representation */}
                    <div className="my-8 border border-dashed border-gold-500/50 bg-[#fdfcf8] p-5.5 rounded-md relative text-left select-all">
                      <div className="absolute top-1/2 -left-3.5 h-7 w-7 bg-stone-50 border border-[#ecece4] rounded-full transform -translate-y-1/2" />
                      <div className="absolute top-1/2 -right-3.5 h-7 w-7 bg-stone-50 border border-[#ecece4] rounded-full transform -translate-y-1/2" />
                      
                      <div className="flex justify-between items-start text-xs font-mono text-gold-600 mb-2 font-bold tracking-wider uppercase">
                        <span>Yerer Full Gospel Church Entry Pass</span>
                        <span>{registeredReceipt.serial}</span>
                      </div>

                      <h5 className="font-serif text-lg font-bold text-cream-950 leading-tight">
                        {registeredReceipt.eventTitle}
                      </h5>

                      <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-[#ecece4]/60 text-xs text-[#6b6b5e]">
                        <div>
                          <span className="font-mono text-[9px] uppercase tracking-wider block text-gold-600">Attendee Name</span>
                          <strong className="font-sans text-stone-900 block mt-0.5">{registeredReceipt.holder}</strong>
                        </div>
                        <div>
                          <span className="font-mono text-[9px] uppercase tracking-wider block text-gold-600">Reserved Seats</span>
                          <strong className="font-sans text-stone-900 block mt-0.5">
                            {registeredReceipt.adults} Adults
                            {registeredReceipt.kids > 0 ? `, ${registeredReceipt.kids} Kids` : ''}
                          </strong>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-1.5 mt-4 text-xs text-[#6b6b5e]">
                        <div className="flex items-center gap-1.5 text-[11px]">
                          <IconLookup name="Clock" className="h-3.5 w-3.5 text-gold-500" />
                          <span>{registerEvent.date} ({registerEvent.time})</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px]">
                          <IconLookup name="MapPin" className="h-3.5 w-3.5 text-gold-500" />
                          <span>{registerEvent.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-[#6b6b5e]/80 bg-gold-100/50 p-3 rounded-md">
                      Please have this pass ready on your phone or printout when arriving. If you need modifications, please reach out to <strong className="text-stone-900 select-all font-mono">rsvp@yererfullgospel.org</strong> (order ref: {registeredReceipt.serial}).
                    </p>

                    <button
                      onClick={() => setRegisterEvent(null)}
                      className="w-full mt-6 py-3 bg-cream-950 hover:bg-gold-500 hover:text-white text-stone-50 font-sans font-bold text-xs uppercase tracking-widest rounded-md shadow-md transition-colors"
                    >
                      Close Confirmation
                    </button>
                  </div>
                ) : (
                  /* Form Input block */
                  <form onSubmit={handleRegisterSubmit} id="event-register-form" className="p-6 md:p-8 space-y-4">
                    <p className="text-sm font-sans text-[#6b6b5e] leading-relaxed">
                      We want to ensure we prepare adequate refreshments, programs, and seat setups for our attendees. Please complete details below:
                    </p>

                    <div className="text-left">
                      <label htmlFor="reg-name" className="block text-xs font-sans font-bold uppercase tracking-wider text-gold-600 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        id="reg-name"
                        value={regName}
                        onChange={(e) => setRegName(e.target.value)}
                        className="w-full bg-white border border-[#ecece4] rounded-md px-4 py-2.5 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-gold-500/30 text-[#2d2d24]"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="text-left">
                      <label htmlFor="reg-email" className="block text-xs font-sans font-bold uppercase tracking-wider text-gold-600 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        id="reg-email"
                        value={regEmail}
                        onChange={(e) => setRegEmail(e.target.value)}
                        className="w-full bg-white border border-[#ecece4] rounded-md px-4 py-2.5 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-gold-500/30 text-[#2d2d24]"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-left">
                        <label htmlFor="reg-adults" className="block text-xs font-sans font-bold uppercase tracking-wider text-gold-600 mb-1">
                          Adult Seats *
                        </label>
                        <select
                          id="reg-adults"
                          value={regAdultTickets}
                          onChange={(e) => setRegAdultTickets(e.target.value)}
                          className="w-full bg-white border border-[#ecece4] rounded-md px-4 py-2.5 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-gold-500/30 text-[#2d2d24] cursor-pointer"
                        >
                          <option value="1">1 Person</option>
                          <option value="2">2 People</option>
                          <option value="3">3 People</option>
                          <option value="4">4 People</option>
                          <option value="5">5+ People</option>
                        </select>
                      </div>

                      <div className="text-left">
                        <label htmlFor="reg-kids" className="block text-xs font-sans font-bold uppercase tracking-wider text-gold-600 mb-1">
                          Kids (under 12)
                        </label>
                        <select
                          id="reg-kids"
                          value={regKidsTickets}
                          onChange={(e) => setRegKidsTickets(e.target.value)}
                          className="w-full bg-white border border-[#ecece4] rounded-md px-4 py-2.5 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-gold-500/30 text-[#2d2d24] cursor-pointer"
                        >
                          <option value="0">None</option>
                          <option value="1">1 Kid</option>
                          <option value="2">2 Kids</option>
                          <option value="3">3 Kids</option>
                          <option value="4">4 Kids</option>
                          <option value="5">5+ Kids</option>
                        </select>
                      </div>
                    </div>

                    <div className="text-left">
                      <label htmlFor="reg-notes" className="block text-xs font-sans font-bold uppercase tracking-wider text-gold-600 mb-1">
                        Dietary restrictions / wheelchair seating etc.
                      </label>
                      <textarea
                        id="reg-notes"
                        value={regNotes}
                        onChange={(e) => setRegNotes(e.target.value)}
                        rows={2}
                        className="w-full bg-white border border-[#ecece4] rounded-md px-4 py-2.5 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-gold-500/30 text-[#2d2d24]"
                        placeholder="Need vegetarian lunch options, or close-to-stage seating..."
                      />
                    </div>

                    <div className="flex gap-3 justify-end pt-3">
                      <button
                        type="button"
                        onClick={() => setRegisterEvent(null)}
                        className="px-5 py-2.5 border border-[#ecece4] hover:bg-stone-100 text-[#6b6b5e] font-sans font-semibold text-xs tracking-widest uppercase rounded-md"
                      >
                        Cancel
                      </button>
                      
                      <button
                        type="submit"
                        id="btn-confirm-registration"
                        className="px-6 py-2.5 bg-gold-500 hover:bg-gold-600 active:bg-gold-600 text-[#2d2d24] font-sans font-bold text-xs uppercase tracking-widest rounded-md shadow-md transition-shadow"
                      >
                        Confirm Attendance
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

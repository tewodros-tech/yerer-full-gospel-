import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CHURCH_DETAILS, INSTALLED_STAFF, COMMUNITY_IMAGE } from '../data';
import { IconLookup } from './IconLookup';

const STATEMENT_BELIEFS = [
  {
    title: "Scripture",
    verse: "2 Timothy 3:16",
    summary: "We believe the Bible is the inspired, authoritative, and inerrant Word of God.",
    detail: "Written by human authors under the divine prompt of the Holy Spirit, scripture is our supreme guide of doctrine, practice, correction, and training in righteousness. It remains entirely relevant for everyday living."
  },
  {
    title: "The Trinity",
    verse: "Matthew 28:19",
    summary: "We believe in one God, eternally existent in three co-equal persons.",
    detail: "Our Father the Creator, the Son Jesus Christ our Redeemer, and the Holy Spirit our Comforter and Sanctifier. Each share identical essential attributes, yet act distinctively in creation, redemption, and sanctification."
  },
  {
    title: "Jesus Christ",
    verse: "Philippians 2:5-11",
    summary: "We believe in the fully divine and fully human nature of Jesus Christ.",
    detail: "Born of a virgin, lived a completely sinless life, died on the cross as an offering for our transgressions, was bodily resurrected on the third day, and ascended into heaven, from where He will return in glory."
  },
  {
    title: "Salvation by Grace",
    verse: "Ephesians 2:8-9",
    summary: "We believe salvation is a gift received by faith, entirely separate from personal works.",
    detail: "Through Christ’s atoning blood, individuals are reconciled to God. We are justified by grace through genuine faith, which triggers a transformation resulting in good deeds reflecting Jesus’s character."
  },
  {
    title: "The Church Community",
    verse: "Romans 12:4-5",
    summary: "We believe the Church is the living body of Christ, expressed locally and globally.",
    detail: "It is comprised of all who place faith in Jesus. The local church is called to assemble for worship, edify believers, administer holy baptism and communion, support families, and preach salvation to the end of the earth."
  }
];

export function About() {
  const [selectedBelief, setSelectedBelief] = useState<number | null>(0);

  return (
    <section id="about-section" className="py-20 bg-stone-50 text-left">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Welcome Block: Message & Photo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 flex flex-col gap-5">
            <span className="text-xs font-sans uppercase tracking-[0.25em] text-gold-500 font-bold block">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-5xl font-serif">
              A vibrant community rooted in <span className="italic text-gold-600 font-normal">the Gospel</span> & centered in <span className="text-gold-500 font-medium">Christ</span>.
            </h2>
            <p className="font-sans text-base text-[#6b6b5e] leading-relaxed mt-2.5">
              {CHURCH_DETAILS.pastorsMessage}
            </p>
            <p className="font-sans text-base text-[#6b6b5e] leading-relaxed">
              For many years, we have gathered in the Yerer region of Addis Ababa to worship, learn, share tears and triumphs, and serve our local neighborhoods under the grace of the Gospel. We seek to be a beacon of spiritual health, emotional healing, and practical assistance. We hope that when you walk through our doors, you feel of a family that welcomes you as you are.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="flex gap-3 items-start border border-[#ecece4] bg-[#fdfcf8] p-4.5 rounded-md">
                <span className="p-2.5 rounded-full bg-gold-100 text-gold-500 flex items-center justify-center">
                  <IconLookup name="Users" className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-serif text-lg font-bold">Worshipping Together</h4>
                  <p className="font-sans text-xs text-[#6b6b5e] mt-1">
                    Multi-generational worship celebrating ancient truths in contemporary voices.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start border border-[#ecece4] bg-[#fdfcf8] p-4.5 rounded-md">
                <span className="p-2.5 rounded-full bg-gold-100 text-gold-500 flex items-center justify-center">
                  <IconLookup name="HeartHandshake" className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-serif text-lg font-bold">Serving Collectively</h4>
                  <p className="font-sans text-xs text-[#6b6b5e] mt-1">
                    Taking hands outside chapel walls to supply food, counsel, and love.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-2 bg-gold-200/50 rounded-md -rotate-2 z-0" />
            <div className="relative z-10 bg-white p-3 border border-[#ecece4] shadow-xl rounded-md">
              <img
                src={COMMUNITY_IMAGE}
                alt="Yerer Full Gospel Fellowship Group Study"
                className="w-full h-auto rounded-md object-cover aspect-[4/3] filter brightness-95"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-gold-100/40 border border-[#ecece4]/85 rounded-md mt-3 text-center">
                <h5 className="font-serif text-sm font-semibold text-gold-600">
                  Ephesians 4:15
                </h5>
                <p className="font-serif italic text-base text-[#3a3a34]/90 text-sm mt-1">
                  "Rather, speaking the truth in love, we are to grow up in every way into him who is the head, into Christ..."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Statement of Faith (Interactive Accordion styled like old scriptures) */}
        <div className="bg-gold-100/40 border-y border-[#ecece4] py-20 px-4 md:px-12 -mx-4 md:-mx-8 mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start rounded-md select-none">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-gold-500 font-bold">
              What We Hold
            </span>
            <h3 className="text-3xl md:text-4xl font-serif font-bold">
              Statement of Beliefs
            </h3>
            <p className="font-sans text-sm text-[#6b6b5e] leading-relaxed">
              These theological pillars form the center of our doctrinal security. We seek to highlight the vital truths of the Christian faith clearly and lovingly.
            </p>
            <p className="font-sans text-xs text-gold-600/80 font-medium">
              Click on any belief item on the right to read details and corresponding scriptures.
            </p>
            <div className="h-[1px] bg-[#ecece4] w-1/3 mt-4" />
          </div>

          <div className="lg:col-span-7 flex flex-col gap-3">
            {STATEMENT_BELIEFS.map((belief, idx) => {
              const isOpen = selectedBelief === idx;
              return (
                <div
                  key={idx}
                  id={`belief-item-${idx}`}
                  onClick={() => setSelectedBelief(isOpen ? null : idx)}
                  className={`border border-[#ecece4] rounded-md bg-white overflow-hidden transition-all duration-300 cursor-pointer ${
                    isOpen ? 'ring-2 ring-gold-500/30 shadow-md' : 'hover:bg-gold-100/20'
                  }`}
                >
                  <div className="p-5 flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-lg font-bold text-[#2d2d24] flex items-center gap-2">
                        {belief.title} 
                        <span className="text-xs font-sans font-medium text-gold-500 tracking-wider">
                          ({belief.verse})
                        </span>
                      </h4>
                      <p className="font-sans text-sm text-[#6b6b5e] mt-0.5">
                        {belief.summary}
                      </p>
                    </div>
                    <span className="text-gold-500 ml-4">
                      <IconLookup
                        name={isOpen ? 'ChevronDown' : 'ChevronRight'}
                        className="h-5 w-5 transition-transform duration-200"
                      />
                    </span>
                  </div>

                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      transition={{ duration: 0.25 }}
                      className="px-5 pb-5 border-t border-[#ecece4]/40 pt-4.5 bg-stone-50/50"
                    >
                      <p className="font-sans text-sm text-[#6b6b5e] leading-relaxed font-light">
                        {belief.detail}
                      </p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 3: Pastoral Leadership */}
        <div id="pastor-team-section" className="text-center">
          <span className="text-xs font-sans uppercase tracking-[0.25em] text-gold-500 font-bold block mb-2">
            Our Pastoral Staff
          </span>
          <h3 className="text-3xl md:text-5xl font-serif mb-12">
            Guided by the Gospel & Servant Leadership
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {INSTALLED_STAFF.map((staff) => (
              <div
                key={staff.id}
                id={`staff-card-${staff.id}`}
                className="group bg-white border border-[#ecece4] rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5"
              >
                <div className="relative overflow-hidden aspect-[4/5] bg-stone-100">
                  <img
                    src={staff.image}
                    alt={staff.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-101 hover:scale-104"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <button
                      id={`btn-email-${staff.id}`}
                      onClick={() => window.location.href = `mailto:${staff.email}`}
                      className="bg-gold-500 hover:bg-gold-600 text-cream-950 font-sans font-semibold text-xs py-2 px-4 rounded-md transition-colors shadow-md flex items-center gap-1.5 uppercase tracking-wider"
                    >
                      <IconLookup name="Mail" className="h-3.5 w-3.5" />
                      Contact Pastor
                    </button>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow select-none bg-stone-50/50">
                  <span className="text-xs font-sans uppercase tracking-widest text-gold-500 font-bold">
                    {staff.role}
                  </span>
                  <h4 className="font-serif text-xl font-black text-[#2d2d24] mt-1">
                    {staff.name}
                  </h4>
                  <p className="font-sans text-sm text-[#6b6b5e] leading-relaxed mt-3 flex-grow">
                    {staff.bio}
                  </p>
                  
                  <div className="flex items-center gap-2.5 border-t border-[#ecece4]/60 pt-4 mt-5 text-[#6b6b5e]">
                    <IconLookup name="Mail" className="h-[15px] w-[15px] text-gold-500" />
                    <span className="text-xs font-mono select-all">
                      {staff.email}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

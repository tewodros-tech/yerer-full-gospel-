import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IconLookup } from './IconLookup';

const QUICK_AMOUNTS = [25, 50, 100, 250, 500];

export function Giving() {
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(100);
  const [customAmountStr, setCustomAmountStr] = useState('');
  const [frequency, setFrequency] = useState<'once' | 'weekly' | 'monthly'>('once');
  const [designation, setDesignation] = useState<string>('General Ministry Fund');
  
  // Checkout form details
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorZip, setDonorZip] = useState('');
  const [cardNo, setCardNo] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  
  // States
  const [isProcessing, setIsProcessing] = useState(false);
  const [donationReceipt, setDonationReceipt] = useState<{
    reference: string;
    amount: number;
    email: string;
    freq: string;
    dest: string;
    date: string;
  } | null>(null);

  const finalAmount = selectedAmount === 'custom' ? parseFloat(customAmountStr) || 0 : selectedAmount;

  const handleGivingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (finalAmount <= 0 || !donorName || !donorEmail) return;

    setIsProcessing(true);
    // Simulate payment merchant delay
    setTimeout(() => {
      setIsProcessing(false);
      const referenceCode = `TXN-${Math.floor(100000000 + Math.random() * 900000000)}`;
      setDonationReceipt({
        reference: referenceCode,
        amount: finalAmount,
        email: donorEmail,
        freq: frequency,
        dest: designation,
        date: new Date().toLocaleDateString()
      });
    }, 2000);
  };

  return (
    <section id="giving-portal" className="py-20 bg-stone-50 text-left">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 text-left">
            <span className="text-xs font-sans uppercase tracking-[0.25em] text-gold-500 font-bold block mb-2">
              Sowing Seeds of Hope
            </span>
            <h2 className="text-3xl md:text-5xl font-serif">
              Generosity That <span className="italic text-gold-600 font-normal">Transforms</span> Lives
            </h2>
            <p className="font-sans text-base text-[#6b6b5e] leading-relaxed mt-4">
              Thank you for partnering financially with the mission of Yerer Full Gospel Church. Because of your obedience and sacrificial tithes, we are able to support our local communities, fund children & youth ministries, care for those in need, and keep sanctuary doors open to all seekers.
            </p>

            <blockquote className="border-l-2 border-gold-500 pl-4 italic font-serif text-[#3a3a34]/90 text-sm mt-6">
              "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
              <cite className="font-sans tracking-widest font-bold uppercase text-[10px] text-gold-600 block mt-2 not-italic">
                &mdash; 2 Corinthians 9:7
              </cite>
            </blockquote>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white border border-[#ecece4] shadow-2xl rounded-md p-6 md:p-8 relative overflow-hidden">
              
              {/* Checkout Progress Overlay */}
              <AnimatePresence>
                {isProcessing && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#fdfcf8]/95 backdrop-blur-xs z-30 flex flex-col items-center justify-center p-6 text-center select-none"
                  >
                    <div className="relative flex h-16 w-16 mb-4">
                      {/* Beautiful Spinning Halo */}
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-500/30 opacity-75"></span>
                      <span className="relative inline-flex rounded-md h-16 w-16 border-4 border-gold-500 border-t-transparent rounded-full animate-spin"></span>
                    </div>

                    <h4 className="font-serif text-xl font-bold text-cream-950">
                      Processing Secure Merchant Gift...
                    </h4>
                    <p className="font-sans text-xs text-[#6b6b5e] mt-1 max-w-sm">
                      Encrypting payment details with high-level SSL and routing to church merchant. Standby, do not close this window...
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {donationReceipt ? (
                /* Styled Custom Digital Receipt Certificate */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="select-none text-center py-4"
                >
                  <span className="inline-flex items-center justify-center p-3.5 bg-gold-500 text-white rounded-full mb-4 shadow-xl">
                    <IconLookup name="Check" className="h-8 w-8 stroke-[3]" />
                  </span>
                  
                  <h3 className="font-serif text-2.5xl font-black text-cream-950">
                    A Heartfelt Thank You!
                  </h3>
                  <p className="font-sans text-sm text-[#6b6b5e] mt-1">
                    Your financial donation has been processed securely. A detailed deductible receipt was mailed.
                  </p>

                  <div className="my-8 border border-[#ecece4] bg-stone-50/50 rounded-md p-6 text-left relative font-sans">
                    <div className="flex justify-between border-b border-[#ecece4] pb-3 mb-4 text-xs font-mono text-gold-600 font-bold tracking-wider">
                      <span>YERER FULL GOSPEL DONATION RECEIPT</span>
                      <span>SECURE REF</span>
                    </div>

                    <div className="flex justify-between py-1.5 text-sm border-b border-[#ecece4]/40 select-all">
                      <span className="text-[#6b6b5e]">Donor Name</span>
                      <strong className="text-[#2d2d24] font-semibold">{donorName}</strong>
                    </div>
                    <div className="flex justify-between py-1.5 text-sm border-b border-[#ecece4]/40 select-all">
                      <span className="text-[#6b6b5e]">Gift Amount</span>
                      <strong className="text-gold-600 font-bold">${donationReceipt.amount.toFixed(2)}</strong>
                    </div>
                    <div className="flex justify-between py-1.5 text-sm border-b border-[#ecece4]/40 select-all">
                      <span className="text-[#6b6b5e]">Donation Frequency</span>
                      <strong className="text-[#2d2d24] font-semibold uppercase text-xs">{donationReceipt.freq}</strong>
                    </div>
                    <div className="flex justify-between py-1.5 text-sm border-b border-[#ecece4]/40 select-all">
                      <span className="text-[#6b6b5e]">Designated Allocation</span>
                      <strong className="text-[#2d2d24] font-semibold">{donationReceipt.dest}</strong>
                    </div>
                    <div className="flex justify-between py-1.5 text-sm border-b border-[#ecece4]/40 select-all">
                      <span className="text-[#6b6b5e]">Transaction Date</span>
                      <strong className="text-[#2d2d24] font-mono text-xs">{donationReceipt.date}</strong>
                    </div>
                    <div className="flex justify-between py-1.5 text-xs text-[#a59b8d] select-all">
                      <span>Transaction Code</span>
                      <span className="font-mono">{donationReceipt.reference}</span>
                    </div>
                  </div>

                  <div className="p-4 bg-gold-100/60 border border-gold-200 shadow-xs rounded-md mb-6 text-left">
                    <h5 className="font-serif text-sm font-bold text-gold-700 flex items-center gap-1.5">
                      <IconLookup name="BookOpen" className="h-4 w-4" />
                      Luke 6:38 Promise
                    </h5>
                    <p className="font-serif italic text-sm text-[#3a3a34]/90 text-xs mt-1 leading-relaxed">
                      "Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap..."
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setDonationReceipt(null);
                      setSelectedAmount(100);
                      setCustomAmountStr('');
                      setDonorName('');
                      setDonorEmail('');
                    }}
                    className="w-full py-3 bg-cream-950 hover:bg-gold-500 hover:text-white text-stone-50 font-sans font-bold text-xs uppercase tracking-widest rounded-full shadow-md transition-all duration-300"
                  >
                    Perform New Donation
                  </button>
                </motion.div>
              ) : (
                /* Form content */
                <form onSubmit={handleGivingSubmit} id="church-giving-form" className="space-y-6">
                  
                  {/* Select amount step */}
                  <div className="text-left select-none">
                    <label className="block text-xs font-sans font-bold uppercase tracking-wider text-gold-600 mb-3">
                      Select Donation Amount ($ USD) *
                    </label>

                    <div className="grid grid-cols-3 gap-3 mb-3">
                      {QUICK_AMOUNTS.map((amt) => {
                        const isSelected = selectedAmount === amt;
                        return (
                          <button
                            key={amt}
                            type="button"
                            onClick={() => {
                              setSelectedAmount(amt);
                              setCustomAmountStr('');
                            }}
                            className={`py-3.5 rounded-md border text-sm font-bold tracking-wider transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? 'bg-gold-500 border-gold-500 text-[#2d2d24] shadow-md shadow-gold-500/10'
                                : 'bg-stone-50 border-[#ecece4] text-[#6b6b5e] hover:bg-gold-100/30 hover:text-[#2d2d24]'
                            }`}
                          >
                            ${amt}
                          </button>
                        );
                      })}

                      {/* Custom selection trigger */}
                      <button
                        type="button"
                        onClick={() => setSelectedAmount('custom')}
                        className={`py-3.5 rounded-md border text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                          selectedAmount === 'custom'
                            ? 'bg-gold-500 border-gold-500 text-[#2d2d24] shadow-md shadow-gold-500/10'
                            : 'bg-stone-50 border-[#ecece4] text-[#6b6b5e] hover:bg-gold-100/30'
                        }`}
                      >
                        Custom
                      </button>
                    </div>

                    {/* Custom input panel if custom is selected */}
                    {selectedAmount === 'custom' && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative"
                      >
                        <span className="absolute left-4 top-2.5 text-stone-400 font-semibold">$</span>
                        <input
                          type="number"
                          required
                          value={customAmountStr}
                          onChange={(e) => setCustomAmountStr(e.target.value)}
                          className="w-full bg-white border border-[#ecece4] rounded-md pl-8 pr-16 py-2.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-gold-500/30 text-[#2d2d24]"
                          placeholder="0.00"
                        />
                        <span className="absolute right-4 top-3 text-[11px] font-sans text-[#a59b8d] font-bold">USD</span>
                      </motion.div>
                    )}
                  </div>

                  {/* Frequency and designation */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    <div>
                      <label htmlFor="giving-frequency" className="block text-xs font-sans font-bold uppercase tracking-wider text-gold-600 mb-1">
                        Donation Frequency
                      </label>
                      <select
                        id="giving-frequency"
                        value={frequency}
                        onChange={(e) => setFrequency(e.target.value as any)}
                        className="w-full bg-stone-50 border border-[#ecece4] rounded-md px-3.5 py-2.5 text-xs font-sans focus:outline-none focus:ring-2 focus:ring-gold-500/30 text-[#2d2d24] cursor-pointer"
                      >
                        <option value="once">Give One-Time</option>
                        <option value="weekly">Give Weekly</option>
                        <option value="monthly">Give Monthly</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="giving-allocation" className="block text-xs font-sans font-bold uppercase tracking-wider text-gold-600 mb-1">
                        Fund Designation
                      </label>
                      <select
                        id="giving-allocation"
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                        className="w-full bg-stone-50 border border-[#ecece4] rounded-md px-3.5 py-2.5 text-xs font-sans focus:outline-none focus:ring-2 focus:ring-gold-500/30 text-[#2d2d24] cursor-pointer"
                      >
                        <option value="General Ministry Fund">General Ministry Fund</option>
                        <option value="Global Missions Initiative">Global Missions Initiative</option>
                        <option value="Sanctuary Building Fund">Sanctuary Building Fund</option>
                        <option value="Benevolence / Welfare">Benevolence / Welfare</option>
                      </select>
                    </div>
                  </div>

                  {/* Donor Contact Details */}
                  <div className="space-y-3.5 text-left pt-3 border-t border-[#ecece4]/60">
                    <span className="block text-xs font-sans font-bold uppercase tracking-wider text-gold-600 select-none">
                      Donor Billing Details
                    </span>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          required
                          value={donorName}
                          onChange={(e) => setDonorName(e.target.value)}
                          className="w-full bg-white border border-[#ecece4] rounded-md px-4 py-2.5 text-xs font-sans focus:outline-none focus:ring-2 focus:ring-gold-500/30 text-[#2d2d24]"
                          placeholder="Cardholder Name *"
                        />
                      </div>

                      <div>
                        <input
                          type="email"
                          required
                          value={donorEmail}
                          onChange={(e) => setDonorEmail(e.target.value)}
                          className="w-full bg-white border border-[#ecece4] rounded-md px-4 py-2.5 text-xs font-sans focus:outline-none focus:ring-2 focus:ring-gold-500/30 text-[#2d2d24]"
                          placeholder="Your Email Address *"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                      <div className="md:col-span-2">
                        <input
                          type="text"
                          required
                          value={cardNo}
                          onChange={(e) => setCardNo(e.target.value)}
                          className="w-full bg-white border border-[#ecece4] rounded-md px-4 py-2.5 text-xs font-sans focus:outline-none focus:ring-2 focus:ring-gold-500/30 text-[#2d2d24]"
                          placeholder="Card Number *"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          required
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          className="w-full bg-white border border-[#ecece4] rounded-md px-4 py-2.5 text-xs font-sans focus:outline-none focus:ring-2 focus:ring-gold-500/30 text-[#2d2d24]"
                          placeholder="MM/YY *"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          required
                          value={cardCvv}
                          onChange={(e) => setCardCvv(e.target.value)}
                          className="w-full bg-white border border-[#ecece4] rounded-md px-4 py-2.5 text-xs font-sans focus:outline-none focus:ring-2 focus:ring-gold-500/30 text-[#2d2d24]"
                          placeholder="CVV *"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submission and secure indicators */}
                  <div className="border-t border-[#ecece4]/60 pt-5 text-left select-none">
                    <button
                      type="submit"
                      id="btn-confirm-giving-merchant"
                      className="w-full py-4.5 bg-cream-950 hover:bg-gold-500 active:bg-gold-500 text-stone-50 hover:text-[#2d2d24] font-sans font-bold text-xs uppercase tracking-widest rounded-md shadow-md transition-all duration-300"
                    >
                      Authorize secure gift of ${finalAmount.toFixed(2)}
                    </button>

                    <div className="flex items-center justify-center gap-2 text-stone-400 mt-4.5 text-[10px] uppercase font-sans font-bold tracking-wider">
                      <IconLookup name="Lock" className="h-4 w-4 text-gold-500" />
                      SECURE 256-BIT SSL REDIRECT &bull; PCI-DSS CERTIFIED MERCH
                    </div>
                  </div>
                </form>
              )}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

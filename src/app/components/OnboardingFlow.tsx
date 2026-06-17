import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Calendar, Cigarette, Package, DollarSign, Trophy, Bell, Crown } from 'lucide-react';
import type { UserData } from '../App';

interface OnboardingFlowProps {
  onComplete: () => void;
  userData: UserData;
  updateUserData: (data: Partial<UserData>) => void;
}

const currencies = [
  { code: 'IDR', symbol: 'Rp', name: 'Indonesian Rupiah' },
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'MYR', symbol: 'RM', name: 'Malaysian Ringgit' },
  { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
  { code: 'THB', symbol: '฿', name: 'Thai Baht' },
  { code: 'PHP', symbol: '₱', name: 'Philippine Peso' },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' },
];

const subscriptions = [
  { id: 'none', label: 'Free', price: '', desc: 'Basic tracking & stats', perks: ['Daily tracking', 'Basic stats', 'Health milestones'] },
  { id: '1month', label: '1 Month', price: '$4.99', desc: 'per month', perks: ['All Free features', 'Ranking board', 'User map', 'Duel mode'] },
  { id: '3months', label: '3 Months', price: '$12.99', desc: 'every 3 months', badge: 'Save 13%', perks: ['All Free features', 'Ranking board', 'User map', 'Duel mode'] },
  { id: '1year', label: '1 Year', price: '$39.99', desc: 'per year', badge: 'Save 33%', perks: ['All features', 'Priority support', 'Exclusive badges', 'Advanced stats'] },
];

function StepDots({ total, current }: { total: number; current: number }) {
  return (
    <div className="flex gap-2 justify-center my-4">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`transition-all duration-300 rounded-full ${
            i === current ? 'w-6 h-2.5 bg-[#8B4513]' : i < current ? 'w-2.5 h-2.5 bg-[#8B4513]/50' : 'w-2.5 h-2.5 bg-white/30'
          }`}
        />
      ))}
    </div>
  );
}

function CardWrapper({ children, step }: { children: React.ReactNode; step: number }) {
  return (
    <motion.div
      key={step}
      initial={{ x: 60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -60, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex-1 flex flex-col"
    >
      {children}
    </motion.div>
  );
}

export function OnboardingFlow({ onComplete, userData, updateUserData }: OnboardingFlowProps) {
  const [step, setStep] = useState(0);
  const [quitDate, setQuitDate] = useState<string>(
    userData.quitDate ? userData.quitDate.toISOString().split('T')[0] : new Date().toISOString().split('T')[0]
  );
  const [cigarettesPerDay, setCigarettesPerDay] = useState(userData.cigarettesPerDay || 10);
  const [cigarettesPerPack, setCigarettesPerPack] = useState(userData.cigarettesPerPack || 20);
  const [packPrice, setPackPrice] = useState(userData.packPrice?.toString() || '25000');
  const [currency, setCurrency] = useState(userData.currency || 'IDR');
  const [subscription, setSubscription] = useState<string>(userData.subscription || 'none');
  const [notifications, setNotifications] = useState(userData.notifications !== false);
  const [showCurrencyPicker, setShowCurrencyPicker] = useState(false);

  const totalSteps = 7;

  const currencyData = currencies.find(c => c.code === currency) || currencies[0];

  const daysSinceQuit = () => {
    const diff = Date.now() - new Date(quitDate).getTime();
    return Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
  };

  const cigs = daysSinceQuit() * cigarettesPerDay;
  const moneySaved = ((cigs / cigarettesPerPack) * parseFloat(packPrice || '0')).toFixed(0);

  const formatMoney = (amount: string) => {
    const num = parseFloat(amount);
    if (isNaN(num)) return `${currencyData.symbol}0`;
    if (currencyData.code === 'IDR') return `Rp ${num.toLocaleString('id-ID')}`;
    return `${currencyData.symbol}${num.toFixed(2)}`;
  };

  const next = () => {
    if (step < totalSteps - 1) setStep(step + 1);
    else handleComplete();
  };

  const back = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleComplete = () => {
    updateUserData({
      quitDate: new Date(quitDate),
      cigarettesPerDay,
      cigarettesPerPack,
      packPrice: parseFloat(packPrice) || 0,
      currency,
      currencySymbol: currencyData.symbol,
      subscription: subscription as UserData['subscription'],
      notifications,
    });
    onComplete();
  };

  const renderStep = () => {
    switch (step) {
      case 0: return (
        <CardWrapper step={0}>
          {/* Form 1: When did you quit */}
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <div className="w-20 h-20 rounded-full bg-[#8B4513]/30 flex items-center justify-center mb-6 border border-[#8B4513]/50">
              <Calendar size={36} className="text-[#8B4513]" />
            </div>
            <h2 className="text-white text-2xl font-extrabold text-center mb-2 font-['Exo',sans-serif] uppercase tracking-wide">
              When did you quit smoking?
            </h2>
            <p className="text-white/50 text-sm text-center mb-8 font-['Inter',sans-serif]">
              Pick the date you stopped smoking
            </p>
            <div className="w-full bg-[rgba(25,24,30,0.6)] backdrop-blur-sm rounded-[18px] p-4 border border-white/10">
              <input
                type="date"
                value={quitDate}
                onChange={(e) => setQuitDate(e.target.value)}
                max={new Date().toISOString().split('T')[0]}
                className="w-full bg-transparent text-white text-xl text-center outline-none font-['Inter',sans-serif] cursor-pointer"
                style={{ colorScheme: 'dark' }}
              />
            </div>
            {daysSinceQuit() > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 bg-[#8B4513]/20 border border-[#8B4513]/40 rounded-2xl p-4 w-full text-center"
              >
                <p className="text-white/60 text-sm font-['Inter',sans-serif]">You've been smoke-free for</p>
                <p className="text-white text-3xl font-bold font-['Exo',sans-serif]">{daysSinceQuit()} days</p>
              </motion.div>
            )}
          </div>
        </CardWrapper>
      );

      case 1: return (
        <CardWrapper step={1}>
          {/* Form 2: Cigarettes per day */}
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <div className="w-20 h-20 rounded-full bg-[#8B4513]/30 flex items-center justify-center mb-6 border border-[#8B4513]/50">
              <Cigarette size={36} className="text-[#8B4513]" />
            </div>
            <h2 className="text-white text-2xl font-extrabold text-center mb-2 font-['Exo',sans-serif] uppercase tracking-wide">
              How many cigarettes per day?
            </h2>
            <p className="text-white/50 text-sm text-center mb-8 font-['Inter',sans-serif]">
              How many cigarettes did you smoke daily?
            </p>

            {/* Big counter */}
            <div className="flex items-center gap-6 mb-8">
              <motion.button
                whileTap={{ scale: 0.85 }}
                onClick={() => setCigarettesPerDay(Math.max(1, cigarettesPerDay - 1))}
                className="w-14 h-14 rounded-full bg-[#8B4513] text-white text-2xl flex items-center justify-center font-bold active:bg-[#6e3610] transition-colors shadow-lg"
              >
                −
              </motion.button>
              <div className="text-center">
                <motion.p
                  key={cigarettesPerDay}
                  initial={{ scale: 1.2, opacity: 0.7 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-white text-6xl font-bold font-['Exo',sans-serif]"
                >
                  {cigarettesPerDay}
                </motion.p>
                <p className="text-white/50 text-sm font-['Inter',sans-serif]">per day</p>
              </div>
              <motion.button
                whileTap={{ scale: 0.85 }}
                onClick={() => setCigarettesPerDay(Math.min(100, cigarettesPerDay + 1))}
                className="w-14 h-14 rounded-full bg-[#8B4513] text-white text-2xl flex items-center justify-center font-bold active:bg-[#6e3610] transition-colors shadow-lg"
              >
                +
              </motion.button>
            </div>

            {/* Slider */}
            <div className="w-full">
              <input
                type="range"
                min="1"
                max="60"
                value={cigarettesPerDay}
                onChange={(e) => setCigarettesPerDay(parseInt(e.target.value))}
                className="w-full accent-[#8B4513] cursor-pointer"
              />
              <div className="flex justify-between text-white/40 text-xs font-['Inter',sans-serif] mt-1">
                <span>1</span>
                <span>30</span>
                <span>60</span>
              </div>
            </div>

            {/* Quick presets */}
            <div className="flex gap-3 mt-6 flex-wrap justify-center">
              {[5, 10, 15, 20, 30, 40].map((n) => (
                <motion.button
                  key={n}
                  whileTap={{ scale: 0.88 }}
                  onClick={() => setCigarettesPerDay(n)}
                  className={`px-4 py-2 rounded-full text-sm font-['Inter',sans-serif] transition-all ${
                    cigarettesPerDay === n
                      ? 'bg-[#8B4513] text-white'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  {n}
                </motion.button>
              ))}
            </div>
          </div>
        </CardWrapper>
      );

      case 2: return (
        <CardWrapper step={2}>
          {/* Form 3: Cigarettes per pack */}
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <div className="w-20 h-20 rounded-full bg-[#8B4513]/30 flex items-center justify-center mb-6 border border-[#8B4513]/50">
              <Package size={36} className="text-[#8B4513]" />
            </div>
            <h2 className="text-white text-2xl font-extrabold text-center mb-2 font-['Exo',sans-serif] uppercase tracking-wide">
              How many cigarettes in a pack?
            </h2>
            <p className="text-white/50 text-sm text-center mb-8 font-['Inter',sans-serif]">
              Select or enter your pack size
            </p>

            {/* Preset options */}
            <div className="grid grid-cols-3 gap-3 w-full mb-6">
              {[10, 12, 16, 20, 25, 30].map((n) => (
                <motion.button
                  key={n}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCigarettesPerPack(n)}
                  className={`py-5 rounded-2xl font-['Exo',sans-serif] text-xl font-bold transition-all ${
                    cigarettesPerPack === n
                      ? 'bg-[#8B4513] text-white shadow-lg scale-105'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  {n}
                </motion.button>
              ))}
            </div>

            {/* Custom input */}
            <div className="w-full bg-[rgba(25,24,30,0.6)] backdrop-blur-sm rounded-[18px] px-5 h-14 flex items-center border border-white/10">
              <input
                type="number"
                value={cigarettesPerPack}
                onChange={(e) => setCigarettesPerPack(parseInt(e.target.value) || 20)}
                placeholder="Custom amount"
                min="1"
                max="50"
                className="w-full bg-transparent text-white placeholder-[#cdcdcd] outline-none text-lg font-['Exo',sans-serif]"
              />
              <span className="text-white/50 text-sm font-['Inter',sans-serif] flex-shrink-0">per pack</span>
            </div>
          </div>
        </CardWrapper>
      );

      case 3: return (
        <CardWrapper step={3}>
          {/* Form 4: Pack price + currency */}
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <div className="w-20 h-20 rounded-full bg-[#8B4513]/30 flex items-center justify-center mb-6 border border-[#8B4513]/50">
              <DollarSign size={36} className="text-[#8B4513]" />
            </div>
            <h2 className="text-white text-2xl font-extrabold text-center mb-2 font-['Exo',sans-serif] uppercase tracking-wide">
              What's the price of a pack?
            </h2>
            <p className="text-white/50 text-sm text-center mb-8 font-['Inter',sans-serif]">
              We'll calculate how much money you're saving
            </p>

            {/* Currency selector */}
            <div className="w-full mb-4">
              <p className="text-white/50 text-xs mb-2 font-['Inter',sans-serif] px-1">Currency</p>
              <button
                onClick={() => setShowCurrencyPicker(!showCurrencyPicker)}
                className="w-full bg-[rgba(25,24,30,0.6)] backdrop-blur-sm rounded-[18px] px-5 h-14 flex items-center justify-between border border-white/10 active:scale-98 transition-all"
              >
                <span className="text-white text-lg font-['Exo',sans-serif]">
                  {currencyData.symbol} — {currencyData.name}
                </span>
                <ChevronRight size={20} className={`text-white/50 transition-transform ${showCurrencyPicker ? 'rotate-90' : ''}`} />
              </button>

              <AnimatePresence>
                {showCurrencyPicker && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden mt-2"
                  >
                    <div className="bg-[rgba(25,24,30,0.9)] rounded-[18px] border border-white/10 overflow-y-auto max-h-48">
                      {currencies.map((c) => (
                        <button
                          key={c.code}
                          onClick={() => { setCurrency(c.code); setShowCurrencyPicker(false); }}
                          className={`w-full text-left px-5 py-3 flex items-center gap-3 hover:bg-white/10 active:bg-white/20 transition-colors ${
                            currency === c.code ? 'bg-[#8B4513]/30' : ''
                          }`}
                        >
                          <span className="text-[#8B4513] font-bold w-8 font-['Exo',sans-serif]">{c.symbol}</span>
                          <span className="text-white text-sm font-['Inter',sans-serif]">{c.name}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Price input */}
            <div className="w-full">
              <p className="text-white/50 text-xs mb-2 font-['Inter',sans-serif] px-1">Pack price</p>
              <div className="bg-[rgba(25,24,30,0.6)] backdrop-blur-sm rounded-[18px] px-5 h-16 flex items-center border border-white/10 gap-3">
                <span className="text-[#8B4513] text-xl font-bold font-['Exo',sans-serif] flex-shrink-0">{currencyData.symbol}</span>
                <input
                  type="number"
                  value={packPrice}
                  onChange={(e) => setPackPrice(e.target.value)}
                  placeholder="0"
                  min="0"
                  className="flex-1 bg-transparent text-white placeholder-[#cdcdcd] outline-none text-xl font-['Exo',sans-serif] min-w-0"
                />
              </div>
            </div>
          </div>
        </CardWrapper>
      );

      case 4: return (
        <CardWrapper step={4}>
          {/* Form 5: Results */}
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="w-24 h-24 rounded-full bg-[#CD853F]/20 flex items-center justify-center mb-6 border-2 border-[#CD853F]"
            >
              <Trophy size={44} className="text-[#CD853F]" />
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-white text-2xl font-extrabold text-center mb-1 font-['Exo',sans-serif] uppercase tracking-wide"
            >
              Amazing Progress!
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[#CD853F] text-sm text-center mb-8 font-['Inter',sans-serif]"
            >
              Here's what you've achieved since quitting
            </motion.p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 w-full">
              {[
                { label: 'Days Smoke-Free', value: `${daysSinceQuit()}`, unit: 'days', color: '#8B4513' },
                { label: 'Cigarettes Avoided', value: cigs.toLocaleString(), unit: 'sticks', color: '#CD853F' },
                { label: 'Money Saved', value: formatMoney(moneySaved), unit: '', color: '#C19A6B' },
                { label: 'Life Regained', value: `${Math.round(cigs * 11 / 60)}`, unit: 'minutes', color: '#D2B48C' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="bg-[rgba(25,24,30,0.6)] backdrop-blur-sm rounded-2xl p-4 border border-white/10 text-center"
                >
                  <p className="text-2xl font-bold font-['Exo',sans-serif]" style={{ color: stat.color }}>
                    {stat.value}
                  </p>
                  {stat.unit && <p className="text-white/40 text-xs font-['Inter',sans-serif]">{stat.unit}</p>}
                  <p className="text-white/70 text-xs mt-1 font-['Inter',sans-serif]">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {daysSinceQuit() === 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-white/40 text-xs text-center mt-4 font-['Inter',sans-serif]"
              >
                Start date set to today. Stats will update as days pass!
              </motion.p>
            )}
          </div>
        </CardWrapper>
      );

      case 5: return (
        <CardWrapper step={5}>
          {/* Form 6: Subscription */}
          <div className="flex-1 flex flex-col px-5 py-2">
            <div className="text-center mb-4">
              <div className="w-16 h-16 rounded-full bg-[#8B4513]/30 flex items-center justify-center mb-3 mx-auto border border-[#8B4513]/50">
                <Crown size={30} className="text-[#8B4513]" />
              </div>
              <h2 className="text-white text-xl font-extrabold font-['Exo',sans-serif] uppercase tracking-wide">
                Boost Your Commitment
              </h2>
              <p className="text-white/50 text-xs mt-1 font-['Inter',sans-serif]">
                Unlock ranking & map features with premium
              </p>
            </div>

            <div className="space-y-3 flex-1 overflow-y-auto">
              {subscriptions.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => setSubscription(sub.id)}
                  className={`w-full text-left rounded-2xl p-4 transition-all active:scale-98 border-2 ${
                    subscription === sub.id
                      ? 'bg-[#8B4513]/30 border-[#8B4513]'
                      : 'bg-[rgba(25,24,30,0.4)] border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                        subscription === sub.id ? 'border-[#8B4513] bg-[#8B4513]' : 'border-white/30'
                      }`}>
                        {subscription === sub.id && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                      <span className="text-white font-bold font-['Exo',sans-serif] text-base">{sub.label}</span>
                      {sub.badge && (
                        <span className="bg-[#CD853F] text-white text-xs px-2 py-0.5 rounded-full font-['Inter',sans-serif]">
                          {sub.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-right">
                      {sub.price && <p className="text-[#8B4513] font-bold font-['Exo',sans-serif] text-base">{sub.price}</p>}
                      <p className="text-white/40 text-xs font-['Inter',sans-serif]">{sub.desc || 'Forever free'}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {sub.perks.map((p, i) => (
                      <span key={i} className="text-white/60 text-xs font-['Inter',sans-serif] bg-white/5 px-2 py-0.5 rounded-full">✓ {p}</span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </CardWrapper>
      );

      case 6: return (
        <CardWrapper step={6}>
          {/* Form 7: Notifications */}
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 250, damping: 20 }}
              className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 border-2 transition-all ${
                notifications ? 'bg-[#8B4513]/30 border-[#8B4513]' : 'bg-white/10 border-white/20'
              }`}
            >
              <Bell size={40} className={notifications ? 'text-[#8B4513]' : 'text-white/40'} />
            </motion.div>

            <h2 className="text-white text-2xl font-extrabold text-center mb-2 font-['Exo',sans-serif] uppercase tracking-wide">
              Health Notifications
            </h2>
            <p className="text-white/50 text-sm text-center mb-8 font-['Inter',sans-serif]">
              Get personalized health tips, milestone alerts, and daily motivation to keep you on track
            </p>

            {/* Toggle */}
            <button
              onClick={() => setNotifications(!notifications)}
              className={`relative w-20 h-10 rounded-full transition-all duration-300 active:scale-95 ${
                notifications ? 'bg-[#8B4513]' : 'bg-white/20'
              }`}
            >
              <motion.div
                animate={{ x: notifications ? 40 : 4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                className="absolute top-1 w-8 h-8 bg-white rounded-full shadow-md"
              />
            </button>

            <p className="text-white/70 mt-4 text-base font-['Exo',sans-serif]">
              {notifications ? 'Notifications Enabled ✓' : 'Notifications Disabled'}
            </p>

            {/* Notification types */}
            {notifications && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full mt-6 space-y-2"
              >
                {[
                  { emoji: '🎯', text: 'Daily check-in reminders' },
                  { emoji: '🏆', text: 'Milestone achievement alerts' },
                  { emoji: '💪', text: 'Motivational health tips' },
                  { emoji: '💰', text: 'Money saved updates' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl p-3">
                    <span className="text-xl">{item.emoji}</span>
                    <span className="text-white/70 text-sm font-['Inter',sans-serif]">{item.text}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </CardWrapper>
      );

      default: return null;
    }
  };

  return (
    <div
      className="relative h-full overflow-hidden flex flex-col"
      style={{ background: 'linear-gradient(180deg, #8B4513 0%, #3d3d3d 100%)' }}
    >
      {/* Decorative glow */}
      <div className="absolute top-[-40px] right-[-40px] w-48 h-48 rounded-full bg-[#CD853F] opacity-15 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center px-4 pt-[50px] pb-2">
        <button
          onClick={back}
          className={`w-10 h-10 flex items-center justify-center rounded-full active:bg-white/10 transition-colors ${step === 0 ? 'opacity-30 pointer-events-none' : ''}`}
        >
          <ChevronLeft size={24} strokeWidth={3} className="text-white" />
        </button>
        <div className="flex-1 text-center">
          <p className="text-white/60 text-sm font-['Inter',sans-serif]">Step {step + 1} of {totalSteps}</p>
        </div>
        <div className="w-10" />
      </div>

      {/* Progress dots */}
      <StepDots total={totalSteps} current={step} />

      {/* Step content */}
      <div className="flex-1 overflow-hidden flex flex-col">
        <AnimatePresence mode="wait">
          {renderStep()}
        </AnimatePresence>
      </div>

      {/* Next button */}
      <div className="px-6 pb-8 pt-4">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={next}
          className="w-full bg-[#8B4513] text-white py-4 rounded-[28px] font-['Exo',sans-serif] text-xl font-normal flex items-center justify-center gap-3 shadow-xl active:bg-[#6e3610] transition-all hover:bg-[#A0522D]"
        >
          {step === totalSteps - 1 ? 'Get Started' : (
            <>
              Next
              <ChevronRight size={22} />
            </>
          )}
        </motion.button>
      </div>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Settings, Bell, Heart, Zap, Crown, Map, Trophy, MessageCircle } from 'lucide-react';
import { BottomNav } from './BottomNav';
import type { UserData } from '../App';

interface DashboardProps {
  userData: UserData;
  navigate: (screen: string) => void;
}

const milestones = [
  { time: '20 min', label: 'Blood pressure normalizes', emoji: '❤️', mins: 20 },
  { time: '8 hrs', label: 'Oxygen levels recover', emoji: '🫁', mins: 480 },
  { time: '1 day', label: 'Heart attack risk down', emoji: '💪', mins: 1440 },
  { time: '2 days', label: 'Taste & smell improve', emoji: '👃', mins: 2880 },
  { time: '2 weeks', label: 'Circulation improves', emoji: '🩸', mins: 20160 },
  { time: '1 month', label: 'Lung function improves', emoji: '🌬️', mins: 43200 },
  { time: '3 months', label: 'Circulation restored', emoji: '🏃', mins: 129600 },
  { time: '1 year', label: 'Heart disease risk halved', emoji: '🏥', mins: 525600 },
];

const quickActions = [
  { id: 'achievements', emoji: '🏆', label: 'Achievements', color: '#A0522D', bg: 'rgba(160,82,45,0.15)' },
  { id: 'activity', emoji: '📋', label: 'Track Daily', color: '#CD853F', bg: 'rgba(205,133,63,0.15)' },
  { id: 'chat', emoji: '💬', label: 'Community', color: '#C19A6B', bg: 'rgba(193,154,107,0.15)' },
  { id: 'map', emoji: '🗺️', label: 'User Map', color: '#D2B48C', bg: 'rgba(210,180,140,0.15)', premium: true },
];

function formatTime(ms: number) {
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

export function Dashboard({ userData, navigate }: DashboardProps) {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  const quitDate = userData.quitDate || new Date();
  const elapsed = Math.max(0, now - quitDate.getTime());
  const { days, hours, minutes, seconds } = formatTime(elapsed);
  const totalMinutes = Math.floor(elapsed / 60000);

  const cPerDay = userData.cigarettesPerDay || 0;
  const cigarettesAvoided = Math.floor((elapsed / 86400000) * cPerDay);
  const moneySaved = userData.cigarettesPerPack > 0
    ? (cigarettesAvoided / userData.cigarettesPerPack) * (userData.packPrice || 0)
    : 0;
  const currencySymbol = userData.currencySymbol || 'Rp';
  const isPremium = userData.subscription !== 'none';

  const formatMoney = (amount: number) => {
    if (userData.currency === 'IDR') return `${currencySymbol} ${Math.floor(amount).toLocaleString('id-ID')}`;
    return `${currencySymbol}${amount.toFixed(2)}`;
  };

  const completedMilestones = milestones.filter(m => totalMinutes >= m.mins);
  const nextMilestone = milestones.find(m => totalMinutes < m.mins);
  const healthPct = Math.round((completedMilestones.length / milestones.length) * 100);

  const avatarEmoji = days >= 365 ? '🏆' : days >= 90 ? '👑' : days >= 30 ? '💪' : days >= 7 ? '⭐' : '🌱';

  return (
    <div className="relative h-full overflow-hidden" style={{ background: 'linear-gradient(180deg, #8B4513 0%, #3d3d3d 100%)' }}>
      {/* Decorative blobs */}
      <div className="absolute top-[-80px] right-[-80px] w-64 h-64 rounded-full opacity-20 blur-3xl" style={{ background: '#CD853F' }} />
      <div className="absolute bottom-20 left-[-60px] w-56 h-56 rounded-full opacity-15 blur-3xl" style={{ background: '#8B4513' }} />

      {/* Scrollable content */}
      <div className="absolute inset-0 overflow-y-auto pb-28" style={{ scrollbarWidth: 'none' }}>

        {/* Header */}
        <div className="px-5 pt-14 pb-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center text-2xl cursor-pointer"
            >
              {avatarEmoji}
            </motion.div>
            <div>
              <p className="text-white/60 text-xs font-['Inter',sans-serif]">Welcome back,</p>
              <p className="text-white font-bold font-['Exo',sans-serif] text-base leading-tight">
                {userData.name || 'Smoke-Free Hero'}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <motion.button
              whileTap={{ scale: 0.85 }}
              onClick={() => navigate('chat')}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center backdrop-blur-sm active:bg-white/20 transition-colors"
            >
              <MessageCircle size={17} className="text-white" />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.85 }}
              onClick={() => navigate('settings')}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center backdrop-blur-sm active:bg-white/20 transition-colors"
            >
              <Settings size={17} className="text-white" />
            </motion.button>
          </div>
        </div>

        {/* Main countdown card */}
        <div className="mx-4 mt-3 mb-4">
          <div className="rounded-3xl overflow-hidden border border-white/10" style={{ background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(20px)' }}>
            <div className="p-5">
              <p className="text-white/50 text-xs font-['Inter',sans-serif] uppercase tracking-widest text-center mb-3">
                🚭 Smoke-Free For
              </p>

              {/* Time blocks */}
              <div className="flex justify-center gap-2 mb-4">
                {[
                  { value: days, label: 'Days', accent: true },
                  { value: hours, label: 'Hrs', accent: false },
                  { value: minutes, label: 'Min', accent: false },
                  { value: seconds, label: 'Sec', accent: false },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center">
                    <div className={`rounded-2xl px-2 py-2 min-w-[58px] text-center ${item.accent ? 'bg-[#8B4513]/60 border border-[#8B4513]' : 'bg-white/10 border border-white/10'}`}>
                      <motion.p
                        key={item.value}
                        initial={{ y: -3, opacity: 0.6 }}
                        animate={{ y: 0, opacity: 1 }}
                        className={`text-2xl font-bold font-['Exo',sans-serif] tabular-nums ${item.accent ? 'text-white' : 'text-white/90'}`}
                      >
                        {String(item.value).padStart(2, '0')}
                      </motion.p>
                    </div>
                    <p className="text-white/40 text-[10px] mt-1 font-['Inter',sans-serif]">{item.label}</p>
                  </div>
                ))}
              </div>

              {/* Next milestone chip */}
              {nextMilestone && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 flex items-center gap-2"
                >
                  <span className="text-lg">{nextMilestone.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-white/40 text-[10px] font-['Inter',sans-serif]">Next milestone</p>
                    <p className="text-white/80 text-xs font-['Inter',sans-serif] truncate">{nextMilestone.time} — {nextMilestone.label}</p>
                  </div>
                  <div className="text-[#A0522D] text-xs font-bold font-['Exo',sans-serif]">{nextMilestone.time}</div>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Stats grid 2x2 */}
        <div className="mx-4 grid grid-cols-2 gap-3 mb-4">
          {[
            { emoji: '🚭', label: 'Cigarettes Avoided', value: cigarettesAvoided.toLocaleString(), sub: 'sticks', color: '#CD853F', bg: 'rgba(205,133,63,0.12)' },
            { emoji: '💰', label: 'Money Saved', value: formatMoney(moneySaved), sub: '', color: '#C19A6B', bg: 'rgba(193,154,107,0.12)' },
            { emoji: '⏱️', label: 'Life Regained', value: `${Math.round(cigarettesAvoided * 11)}`, sub: 'minutes', color: '#D2B48C', bg: 'rgba(210,180,140,0.12)' },
            { emoji: '❤️', label: 'Health Progress', value: `${healthPct}%`, sub: 'recovered', color: '#A0522D', bg: 'rgba(160,82,45,0.12)' },
          ].map((stat) => (
            <motion.button
              key={stat.label}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('achievements')}
              className="text-left rounded-2xl p-4 border border-white/10 cursor-pointer transition-all active:brightness-110"
              style={{ background: `linear-gradient(135deg, ${stat.bg}, rgba(255,255,255,0.03))`, backdropFilter: 'blur(10px)' }}
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-2xl">{stat.emoji}</span>
                <div className="w-2 h-2 rounded-full mt-1" style={{ background: stat.color }} />
              </div>
              <p className="font-bold font-['Exo',sans-serif] text-lg leading-tight" style={{ color: stat.color }}>
                {stat.value}
              </p>
              {stat.sub && <p className="text-white/30 text-[10px] font-['Inter',sans-serif]">{stat.sub}</p>}
              <p className="text-white/50 text-xs font-['Inter',sans-serif] mt-1">{stat.label}</p>
            </motion.button>
          ))}
        </div>

        {/* Quick actions row */}
        <div className="mx-4 mb-4">
          <p className="text-white/50 text-xs font-['Inter',sans-serif] uppercase tracking-wider mb-3 px-1">Quick Access</p>
          <div className="grid grid-cols-4 gap-2">
            {quickActions.map((action) => {
              const locked = action.premium && !isPremium;
              return (
                <motion.button
                  key={action.id}
                  whileTap={{ scale: 0.88 }}
                  onClick={() => navigate(action.id)}
                  className="flex flex-col items-center gap-2 p-3 rounded-2xl border border-white/10 relative overflow-hidden cursor-pointer transition-all"
                  style={{ background: action.bg }}
                >
                  {locked && (
                    <div className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-[#A0522D] flex items-center justify-center">
                      <span className="text-[6px] text-white font-bold">🔒</span>
                    </div>
                  )}
                  <span className="text-2xl">{action.emoji}</span>
                  <p className="text-white/70 text-[10px] font-['Inter',sans-serif] text-center leading-tight">{action.label}</p>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Health timeline */}
        <div className="mx-4 mb-4 rounded-3xl overflow-hidden border border-white/10" style={{ background: 'rgba(0,0,0,0.25)', backdropFilter: 'blur(15px)' }}>
          <div className="p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Heart size={16} className="text-[#A0522D]" />
                <p className="text-white font-semibold font-['Inter',sans-serif] text-sm">Health Recovery</p>
              </div>
              <span className="text-[#CD853F] text-xs font-bold font-['Inter',sans-serif]">{completedMilestones.length}/{milestones.length}</span>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-white/10 rounded-full h-2 mb-4 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${healthPct}%` }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="h-2 rounded-full"
                style={{ background: 'linear-gradient(90deg, #CD853F, #D2B48C)' }}
              />
            </div>

            {/* Milestone list */}
            <div className="space-y-2">
              {milestones.map((m, i) => {
                const done = totalMinutes >= m.mins;
                return (
                  <motion.div
                    key={i}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm flex-shrink-0 transition-all ${done ? 'bg-[#CD853F]/20 border border-[#CD853F]/40' : 'bg-white/5 border border-white/10'}`}>
                      <span className={done ? '' : 'opacity-30'}>{m.emoji}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-xs font-['Inter',sans-serif] leading-tight ${done ? 'text-white/80' : 'text-white/25'}`}>
                        {m.label}
                      </p>
                    </div>
                    <span className={`text-[10px] font-bold font-['Exo',sans-serif] flex-shrink-0 ${done ? 'text-[#CD853F]' : 'text-white/20'}`}>
                      {m.time}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Premium upgrade card */}
        {!isPremium && (
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('settings')}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-4 mb-4 w-[calc(100%-32px)] rounded-3xl p-5 flex items-center gap-4 text-left cursor-pointer active:brightness-110 transition-all"
            style={{ background: 'linear-gradient(135deg, #8B4513 0%, #5c2d0c 60%, #2d2d2d 100%)' }}
          >
            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
              <Crown size={28} className="text-[#CD853F]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-bold font-['Exo',sans-serif] text-base">Go Premium</p>
              <p className="text-white/50 text-xs font-['Inter',sans-serif] mt-0.5">Unlock rankings, map & duel mode</p>
            </div>
            <div className="bg-white text-[#8B4513] px-3 py-2 rounded-xl text-xs font-bold font-['Exo',sans-serif] flex-shrink-0">
              Upgrade
            </div>
          </motion.button>
        )}

        {/* Achievements preview */}
        <div className="mx-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-white/50 text-xs font-['Inter',sans-serif] uppercase tracking-wider px-1">Recent Achievements</p>
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => navigate('achievements')}
              className="text-[#8B4513] text-xs font-semibold font-['Inter',sans-serif] active:opacity-70"
            >
              See all →
            </motion.button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
            {[
              { emoji: '🌅', title: '1 Day', done: days >= 1 },
              { emoji: '💪', title: '1 Week', done: days >= 7 },
              { emoji: '👑', title: '1 Month', done: days >= 30 },
              { emoji: '💎', title: '3 Months', done: days >= 90 },
              { emoji: '🏆', title: '1 Year', done: days >= 365 },
            ].map((badge) => (
              <motion.button
                key={badge.title}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigate('achievements')}
                className={`flex-shrink-0 w-20 flex flex-col items-center gap-2 p-3 rounded-2xl border cursor-pointer transition-all ${badge.done ? 'bg-[rgba(114,114,114,0.5)] border-[#A0522D]/40' : 'bg-white/5 border-white/10'}`}
              >
                <span className={`text-2xl ${!badge.done ? 'grayscale opacity-30' : ''}`}>{badge.emoji}</span>
                <p className={`text-[10px] font-['Inter',sans-serif] text-center leading-tight ${badge.done ? 'text-white/80' : 'text-white/20'}`}>
                  {badge.title}
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <BottomNav active="home" onNavigate={(s) => navigate(s)} isPremium={isPremium} />
    </div>
  );
}

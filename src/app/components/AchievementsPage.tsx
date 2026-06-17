import { motion } from 'motion/react';
import { ChevronLeft, Lock } from 'lucide-react';
import { BottomNav, type MainScreen } from './BottomNav';
import type { UserData } from '../App';

interface AchievementsPageProps {
  userData: UserData;
  navigate: (screen: string) => void;
}

const badges = [
  { id: 1, emoji: '📅', title: '1 Day Without Smoke', category: 'Countdown', mins: 1440 },
  { id: 2, emoji: '❤️', title: 'Heart Rate Improves', category: 'Step by step', mins: 480 },
  { id: 3, emoji: '💰', title: 'You Saved Money', category: 'Saved Money', mins: 60 },
  { id: 4, emoji: '⚡', title: '5 Cigarettes Avoided', category: 'Superpower', mins: 720 },
  { id: 5, emoji: '🏅', title: '1 Week Without Smoke', category: 'Gentle Man', mins: 10080 },
  { id: 6, emoji: '👑', title: '1 Month Without Smoke', category: 'Sigma', mins: 43200 },
  { id: 7, emoji: '💎', title: '3 Months Strong', category: 'Diamond', mins: 129600 },
  { id: 8, emoji: '🌟', title: '6 Month Hero', category: 'Legendary', mins: 259200 },
  { id: 9, emoji: '🏆', title: '1 Year Champion', category: 'Champion', mins: 525600 },
  { id: 10, emoji: '🫁', title: 'Clean Lungs', category: 'Health Master', mins: 388800 },
  { id: 11, emoji: '🧠', title: 'Mindful Journey', category: 'Mindful', mins: 0 },
  { id: 12, emoji: '🔥', title: 'Streak Master', category: 'On Fire', mins: 7200 },
  { id: 13, emoji: '🌈', title: 'Full Recovery', category: 'Restored', mins: 777600 },
];

const mockUsers = [
  { rank: 1, name: '@ChampionQuitter', days: 365, emoji: '🏆' },
  { rank: 2, name: '@SmokeFreeStar', days: 280, emoji: '⭐' },
  { rank: 3, name: '@HealthHero', days: 210, emoji: '💪' },
  { rank: 4, name: '@CleanLungs', days: 180, emoji: '🫁' },
  { rank: 5, name: '@GoldWill', days: 150, emoji: '🥇' },
];

export function AchievementsPage({ userData, navigate }: AchievementsPageProps) {
  const quitDate = userData.quitDate || new Date();
  const elapsed = Math.max(0, Date.now() - quitDate.getTime());
  const totalMinutes = Math.floor(elapsed / 60000);
  const days = Math.floor(totalMinutes / 1440);
  const isPremium = userData.subscription !== 'none';
  const completedCount = badges.filter(b => totalMinutes >= b.mins || (b.id === 11 && userData.notifications)).length;

  return (
    <div className="relative h-full overflow-hidden" style={{ background: '#8e8e93' }}>
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center gap-2 px-3 pt-[50px] pb-3 bg-transparent">
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => navigate('home')}
          className="w-10 h-10 flex items-center justify-center rounded-full active:bg-black/10 transition-colors"
        >
          <ChevronLeft size={22} strokeWidth={2.5} className="text-[#1e1e1e]" />
        </motion.button>
        <p className="text-[#1e1e1e] text-base font-['Inter',sans-serif] underline font-normal">Achievements</p>
        <span className="ml-auto bg-[rgba(25,24,30,0.7)] text-white px-3 py-1 rounded-full text-sm font-bold font-['Inter',sans-serif]">
          {completedCount}/{badges.length}
        </span>
      </div>

      <div className="absolute inset-0 overflow-y-auto pt-[100px] pb-28" style={{ scrollbarWidth: 'none' }}>
        {/* Main card — reversed gradient matching Figma */}
        <div className="mx-5 mb-4 rounded-[21px] overflow-hidden" style={{ background: 'linear-gradient(180deg, #727272 0%, #8B4513 100%)' }}>
          {/* Crown + score header */}
          <div className="relative p-5 pb-3 flex items-start justify-between">
            <div>
              <p className="text-white font-semibold font-['Inter',sans-serif] text-base">{userData.name || 'You'}</p>
              <p className="text-white/50 text-sm font-['Inter',sans-serif]">{days} days smoke-free</p>
            </div>
            <div className="text-right">
              <p className="text-white/50 text-xs font-['Inter',sans-serif]">Achievements</p>
              <p className="text-white font-bold font-['Inter',sans-serif] text-2xl tracking-tight">{completedCount}/{badges.length}</p>
            </div>
            {/* Crown decoration */}
            <span className="text-4xl">👑</span>
          </div>

          {/* Progress bar */}
          <div className="h-1.5 bg-white/10 rounded-full mt-3 relative overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(completedCount / badges.length) * 100}%` }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="absolute top-0 bottom-0 left-0 bg-[#FFD700]"
            />
          </div>

          {/* Badge grid */}
          <div className="grid grid-cols-2 gap-3 mt-6">
            {badges.map((badge, i) => {
              const unlocked = totalMinutes >= badge.mins || (badge.id === 11 && userData.notifications);
              return (
                <motion.button
                  key={badge.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className={`rounded-[21px] p-4 text-left relative overflow-hidden border ${
                    unlocked
                      ? 'bg-[#2a2a2a] border-white/10'
                      : 'bg-[#2a2a2a]/50 border-transparent'
                  }`}
                >
                  <div className="mb-2">
                    <span className={`text-2xl ${!unlocked ? 'grayscale opacity-30' : ''}`}>{badge.emoji}</span>
                  </div>
                  <p className="text-[10px] text-white/40 uppercase font-bold tracking-wider">{badge.category}</p>
                  <p className={`text-sm font-semibold ${unlocked ? 'text-white' : 'text-white/20'}`}>
                    {badge.title}
                  </p>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Ranking leaderboard */}
        <div
          className="mx-5 rounded-[21px] overflow-hidden mb-4 border border-white/10"
          style={{ background: 'rgba(25,24,30,0.75)', backdropFilter: 'blur(15px)' }}
        >
          <div className="p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-lg">🏆</span>
                <p className="text-white font-bold font-['Inter',sans-serif] text-sm">Top Quitters</p>
              </div>
              {!isPremium && (
                <div className="flex items-center gap-1 bg-[#8B4513]/30 px-2 py-1 rounded-full border border-[#8B4513]/40">
                  <Lock size={10} className="text-[#A0522D]" />
                  <span className="text-[#A0522D] text-xs font-bold font-['Inter',sans-serif]">Premium</span>
                </div>
              )}
            </div>

            <div className={`space-y-2 ${!isPremium ? 'blur-sm pointer-events-none select-none' : ''}`}>
              {mockUsers.map((user, i) => (
                <motion.button
                  key={user.rank}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center gap-3 bg-white/5 rounded-2xl p-3 text-left hover:bg-white/8 active:bg-white/12 transition-colors cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl flex-shrink-0">
                    {user.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold font-['Inter',sans-serif] text-sm truncate">{user.name}</p>
                    <p className="text-white/40 text-xs font-['Inter',sans-serif]">Saving {user.days} days</p>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-['Exo',sans-serif] ${
                    i === 0 ? 'bg-[#CD853F]/20 text-[#CD853F]' :
                    i === 1 ? 'bg-[#D2B48C]/20 text-[#D2B48C]' :
                    i === 2 ? 'bg-[#A0522D]/20 text-[#A0522D]' :
                    'bg-white/10 text-white/50'
                  }`}>
                    #{user.rank}
                  </div>
                </motion.button>
              ))}
            </div>

            {!isPremium && (
              <div className="mt-4 text-center pt-2">
                <p className="text-white/40 text-xs font-['Inter',sans-serif] mb-3">Subscribe to access full rankings</p>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#8B4513] text-white px-6 py-2.5 rounded-2xl text-sm font-bold font-['Exo',sans-serif] active:bg-[#6e3610] transition-colors"
                >
                  Go Premium
                </motion.button>
              </div>
            )}
          </div>
        </div>

        {/* Your rank */}
        <motion.div
          whileTap={{ scale: 0.98 }}
          className="mx-5 rounded-3xl p-5 mb-4 cursor-pointer active:brightness-110 transition-all"
          style={{ background: 'linear-gradient(135deg, #8B4513 0%, #5c2d0c 100%)' }}
        >
          <p className="text-white/50 text-xs font-['Inter',sans-serif] mb-3">Your Progress</p>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center text-3xl">
              {days >= 365 ? '🏆' : days >= 90 ? '👑' : days >= 30 ? '💪' : days >= 7 ? '⭐' : '🌱'}
            </div>
            <div className="flex-1">
              <p className="text-white font-bold font-['Exo',sans-serif] text-lg">{userData.name || 'You'}</p>
              <p className="text-white/60 text-sm font-['Inter',sans-serif]">{days} days smoke-free</p>
              <p className="text-[#A0522D] text-xs font-['Inter',sans-serif] mt-1">{completedCount} achievements unlocked</p>
            </div>
          </div>
        </motion.div>
      </div>

      <BottomNav active="achievements" onNavigate={(s) => navigate(s)} isPremium={isPremium} />
    </div>
  );
}

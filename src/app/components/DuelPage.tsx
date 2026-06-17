import { motion } from 'motion/react';
import { ChevronLeft, TrendingUp, TrendingDown, AlertCircle, Lock } from 'lucide-react';
import { BottomNav, type MainScreen } from './BottomNav';
import type { UserData } from '../App';

interface DuelPageProps {
  userData: UserData;
  navigate: (screen: string) => void;
}

const opponents = [
  { name: '@Garit Dewana', days: 30, progress: 72, trend: '+2.24%', up: true },
  { name: '@SmokeSlayer99', days: 45, progress: 85, trend: '+5.1%', up: true },
  { name: '@FreeBreath', days: 28, progress: 65, trend: '-0.34%', up: false },
  { name: '@QuitKing', days: 60, progress: 91, trend: '+1.8%', up: true },
];

export function DuelPage({ userData, navigate }: DuelPageProps) {
  const isPremium = userData.subscription !== 'none';
  const quitDate = userData.quitDate || new Date();
  const elapsed = Math.max(0, Date.now() - quitDate.getTime());
  const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
  const userProgress = Math.min(100, Math.round((days / 90) * 100));

  return (
    <div className="relative h-full bg-[#8e8e93] overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center gap-3 px-4 pt-[50px] pb-3">
        <button
          onClick={() => navigate('home')}
          className="w-10 h-10 flex items-center justify-center rounded-full active:bg-black/10 transition-colors"
        >
          <ChevronLeft size={22} strokeWidth={2.5} className="text-[#1e1e1e]" />
        </button>
        <p className="text-[#1e1e1e] text-base font-['Inter',sans-serif]">Duel</p>
        {!isPremium && (
          <div className="ml-auto flex items-center gap-1 bg-[#8B4513]/20 px-3 py-1 rounded-full">
            <Lock size={12} className="text-[#8B4513]" />
            <span className="text-[#8B4513] text-xs font-bold font-['Inter',sans-serif]">Premium Only</span>
          </div>
        )}
      </div>

      <div className="absolute inset-0 overflow-y-auto pt-[105px] pb-24" style={{ scrollbarWidth: 'none' }}>
        {/* Main card */}
        <div
          className="mx-5 rounded-3xl overflow-hidden mb-4 relative"
          style={{ background: 'linear-gradient(180deg, #8B4513 0%, #999 100%)' }}
        >
          {/* Decorative orbs */}
          <div className="absolute top-16 left-[-30px] w-48 h-48 rounded-full opacity-40" style={{ background: 'radial-gradient(circle, #8B4513, transparent)' }} />
          <div className="absolute top-40 right-[-20px] w-44 h-44 rounded-full opacity-30" style={{ background: 'radial-gradient(circle, #CD853F, transparent)' }} />

          {/* Opponent 1 (top) */}
          <div className="p-5 pb-0 relative">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 rounded-[111px] bg-[rgba(255,255,255,0.2)] border-2 border-white/30 flex items-center justify-center text-3xl">
                👤
              </div>
              <div>
                <p className="text-white font-bold font-['Inter',sans-serif]">@Ewing</p>
                <p className="text-white/60 text-sm font-['Inter',sans-serif]">Saving 30 D</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp size={16} className="text-[#CD853F]" />
                  <span className="text-[#f3f3f3] text-sm font-['Inter',sans-serif]">+2.24%</span>
                </div>
              </div>
            </div>
          </div>

          {/* VS divider with slider */}
          <div className="py-6 px-5">
            <div className="relative h-8 flex items-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-1.5 bg-white/20 rounded-full">
                  <div className="h-1.5 bg-[#CD853F] rounded-full" style={{ width: `${isPremium ? userProgress : 40}%` }} />
                </div>
              </div>
              <div
                className="absolute w-8 h-8 bg-white rounded-full shadow-lg border-2 border-[#8B4513]"
                style={{ left: `${isPremium ? userProgress : 40}%`, transform: 'translateX(-50%)' }}
              />
            </div>
          </div>

          {/* Opponent 2 (bottom) */}
          <div className="p-5 pt-0 relative">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 rounded-[118px] bg-[rgba(255,255,255,0.2)] border-2 border-white/30 flex items-center justify-center text-3xl">
                👤
              </div>
              <div>
                <p className="text-white font-bold font-['Inter',sans-serif]">{userData.name || '@You'}</p>
                <p className="text-white/60 text-sm font-['Inter',sans-serif]">Saving {days} D</p>
                <div className="flex items-center gap-1 mt-1">
                  {userProgress > 40 ? (
                    <TrendingUp size={16} className="text-[#CD853F]" />
                  ) : (
                    <TrendingDown size={16} className="text-[#A0522D]" />
                  )}
                  <span className="text-[#f3f3f3] text-sm font-['Inter',sans-serif]">
                    {userProgress > 40 ? '+' : ''}{((userProgress - 40) / 10).toFixed(2)}%
                  </span>
                </div>
              </div>
              {userProgress <= 40 && (
                <div className="ml-auto">
                  <AlertCircle size={28} className="text-[#A0522D]" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Challenge list */}
        {isPremium ? (
          <div className="mx-5 space-y-3 mb-4">
            <p className="text-white/80 font-semibold font-['Inter',sans-serif] px-1">Active Duels</p>
            {opponents.map((opp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-2xl p-4 flex items-center gap-4 cursor-pointer active:scale-97 transition-all"
                style={{ background: 'linear-gradient(135deg, rgba(25,24,30,0.8) 0%, rgba(60,60,60,0.6) 100%)' }}
              >
                <div className="w-12 h-12 rounded-full bg-[rgba(255,255,255,0.15)] flex items-center justify-center text-xl">
                  👤
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold font-['Inter',sans-serif] text-sm">{opp.name}</p>
                  <p className="text-white/40 text-xs font-['Inter',sans-serif]">Saving {opp.days} days</p>
                  <div className="w-full bg-white/10 rounded-full h-1.5 mt-2">
                    <div className="h-1.5 bg-[#8B4513] rounded-full" style={{ width: `${opp.progress}%` }} />
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1">
                    {opp.up ? (
                      <TrendingUp size={14} className="text-[#CD853F]" />
                    ) : (
                      <TrendingDown size={14} className="text-[#A0522D]" />
                    )}
                    <span className={`text-xs font-['Inter',sans-serif] ${opp.up ? 'text-[#CD853F]' : 'text-[#A0522D]'}`}>
                      {opp.trend}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-full bg-[#8B4513] text-white py-4 rounded-2xl font-['Exo',sans-serif] text-base font-semibold active:scale-95 transition-all"
            >
              + Challenge a Friend
            </motion.button>
          </div>
        ) : (
          <div className="mx-5 rounded-3xl p-6 text-center" style={{ background: 'linear-gradient(135deg, rgba(25,24,30,0.8) 0%, rgba(60,60,60,0.6) 100%)' }}>
            <span className="text-5xl block mb-4">🔒</span>
            <p className="text-white font-bold font-['Exo',sans-serif] text-xl mb-2">Duel Mode Locked</p>
            <p className="text-white/50 text-sm font-['Inter',sans-serif] mb-6">
              Upgrade to Premium to challenge friends and compete in duel mode
            </p>
            <button className="bg-[#8B4513] text-white px-8 py-3 rounded-2xl font-bold font-['Exo',sans-serif] active:scale-95 transition-all">
              Upgrade to Premium
            </button>
          </div>
        )}
      </div>

      <BottomNav active="activity" onNavigate={(s) => navigate(s)} isPremium={isPremium} />
    </div>
  );
}

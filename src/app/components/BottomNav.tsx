import type { ElementType } from 'react';
import { motion } from 'motion/react';
import { Home, Users, Activity, MessageCircle, Map, Settings } from 'lucide-react';

export type MainScreen = 'home' | 'achievements' | 'activity' | 'chat' | 'map' | 'settings';

interface BottomNavProps {
  active: MainScreen;
  onNavigate: (screen: MainScreen) => void;
  isPremium?: boolean;
}

export function BottomNav({ active, onNavigate, isPremium = false }: BottomNavProps) {
  const items: { id: MainScreen; icon: ElementType; label: string; premium?: boolean }[] = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'achievements', icon: Users, label: 'Users' },
    { id: 'activity', icon: Activity, label: 'Activity' },
    { id: 'chat', icon: MessageCircle, label: 'Chat' },
    { id: 'map', icon: Map, label: 'Map', premium: true },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 z-50">
      {/* Grabber bar */}
      <div className="flex justify-center pt-2" style={{ background: 'rgba(200,200,200,0.85)', backdropFilter: 'blur(20px)', borderTopLeftRadius: '28px', borderTopRightRadius: '28px' }}>
        <div className="w-36 h-[5px] rounded-full bg-[#aaa] mb-3" />
      </div>

      <div style={{ background: 'rgba(200,200,200,0.85)', backdropFilter: 'blur(20px)', paddingBottom: 'calc(20px + env(safe-area-inset-bottom))', paddingLeft: '8px', paddingRight: '8px' }}>
        <div className="flex justify-around items-center">
          {items.map((item) => {
            const isLocked = item.premium && !isPremium;
            const isActive = active === item.id;
            return (
              <motion.button
                key={item.id}
                whileTap={{ scale: 0.82 }}
                onClick={() => onNavigate(item.id)}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-2xl transition-all relative ${
                  isActive ? 'bg-[#8B4513]/12' : ''
                }`}
              >
                {/* Liquid glass effect for active */}
                {isActive && (
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-white/65 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-[#ddd] mix-blend-color-burn" />
                    <div className="absolute inset-0 bg-[#f7f7f7] mix-blend-darken" />
                    <div className="absolute inset-0 rounded-2xl shadow-[0px_8px_40px_0px_rgba(0,0,0,0.12)]" />
                  </div>
                )}
                <div className="relative">
                  <item.icon
                    size={22}
                    strokeWidth={isActive ? 2.5 : 1.5}
                    className={isActive ? 'text-[#1e1e1e]' : 'text-[#3c3c3c]'}
                  />
                  {isLocked && (
                    <div className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-[#A0522D] flex items-center justify-center">
                      <span className="text-[6px] text-white">🔒</span>
                    </div>
                  )}
                </div>
                {isActive && (
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1e1e1e] relative" />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

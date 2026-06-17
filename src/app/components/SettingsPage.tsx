import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Bell, Shield, CreditCard, HelpCircle, LogOut, Moon, Globe } from 'lucide-react';
import { BottomNav, type MainScreen } from './BottomNav';
import type { UserData } from '../App';

interface SettingsPageProps {
  userData: UserData;
  navigate: (screen: string) => void;
  onLogout: () => void;
}

export function SettingsPage({ userData, navigate, onLogout }: SettingsPageProps) {
  const isPremium = userData.subscription !== 'none';
  const quitDate = userData.quitDate || new Date();
  const days = Math.floor((Date.now() - quitDate.getTime()) / (1000 * 60 * 60 * 24));

  const sections = [
    {
      title: 'Account',
      items: [
        { icon: Globe, label: 'Language', value: 'English', action: () => {} },
        { icon: Moon, label: 'Dark Mode', value: 'On', action: () => {} },
        { icon: Bell, label: 'Notifications', value: userData.notifications ? 'On' : 'Off', action: () => {} },
      ],
    },
    {
      title: 'Subscription',
      items: [
        {
          icon: CreditCard,
          label: 'Plan',
          value: isPremium ? userData.subscription?.replace('none', 'Free') : 'Free',
          action: () => {},
          highlight: !isPremium,
        },
        { icon: Shield, label: 'Privacy', value: '', action: () => {} },
      ],
    },
    {
      title: 'Support',
      items: [
        { icon: HelpCircle, label: 'Help Center', value: '', action: () => {} },
        { icon: HelpCircle, label: 'Terms of Service', value: '', action: () => {} },
      ],
    },
  ];

  return (
    <div className="relative h-full bg-[#8e8e93] overflow-hidden">
      <div className="absolute inset-0 overflow-y-auto pb-24" style={{ scrollbarWidth: 'none' }}>
        {/* Header */}
        <div className="flex items-center gap-3 px-4 pt-12 pb-4">
          <button
            onClick={() => navigate('home')}
            className="w-10 h-10 flex items-center justify-center rounded-full active:bg-black/10 transition-colors"
          >
            <ChevronLeft size={22} strokeWidth={2.5} className="text-[#1e1e1e]" />
          </button>
          <p className="text-[#1e1e1e] text-base font-semibold font-['Inter',sans-serif]">Settings</p>
        </div>

        {/* Profile card */}
        <div
          className="mx-5 rounded-3xl p-5 mb-5 flex items-center gap-4"
          style={{ background: 'linear-gradient(135deg, #8B4513 0%, #5c2d0c 100%)' }}
        >
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-3xl border-2 border-white/30">
            {days >= 30 ? '👑' : days >= 7 ? '💪' : '🌱'}
          </div>
          <div className="flex-1">
            <p className="text-white font-bold font-['Exo',sans-serif] text-lg">{userData.name || 'User'}</p>
            <p className="text-white/60 text-sm font-['Inter',sans-serif]">{userData.email || 'user@mintly.app'}</p>
            <p className="text-[#CD853F] text-xs font-['Inter',sans-serif] mt-1">
              {isPremium ? '✓ Premium Member' : 'Free Plan'}
            </p>
          </div>
          <button className="bg-white/10 border border-white/20 text-white text-xs px-3 py-1.5 rounded-xl font-['Inter',sans-serif] active:scale-95 transition-all">
            Edit
          </button>
        </div>

        {/* Stats quick view */}
        <div className="mx-5 grid grid-cols-3 gap-3 mb-5">
          {[
            { label: 'Days Free', value: days.toString() },
            { label: 'Avoided', value: `${days * (userData.cigarettesPerDay || 0)}` },
            { label: 'Currency', value: userData.currency || 'IDR' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl p-3 text-center border border-white/10"
              style={{ background: 'rgba(25,24,30,0.5)' }}
            >
              <p className="text-white font-bold font-['Exo',sans-serif] text-lg">{stat.value}</p>
              <p className="text-white/40 text-xs font-['Inter',sans-serif]">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Settings sections */}
        {sections.map((section) => (
          <div key={section.title} className="mx-5 mb-4">
            <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-2 px-1 font-['Inter',sans-serif]">
              {section.title}
            </p>
            <div className="rounded-2xl overflow-hidden border border-white/10" style={{ background: 'rgba(25,24,30,0.5)' }}>
              {section.items.map((item, i) => (
                <motion.button
                  key={item.label}
                  whileTap={{ scale: 0.99 }}
                  onClick={item.action}
                  className={`w-full flex items-center gap-3 px-4 py-4 hover:bg-white/5 active:bg-white/10 transition-colors ${
                    i > 0 ? 'border-t border-white/5' : ''
                  }`}
                >
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${(item as { highlight?: boolean }).highlight ? 'bg-[#8B4513]/30' : 'bg-white/10'}`}>
                    <item.icon size={16} className={`${(item as { highlight?: boolean }).highlight ? 'text-[#8B4513]' : 'text-white/60'}`} />
                  </div>
                  <p className="flex-1 text-white text-sm text-left font-['Inter',sans-serif]">{item.label}</p>
                  {item.value && (
                    <span className={`text-sm font-['Inter',sans-serif] mr-2 ${(item as { highlight?: boolean }).highlight ? 'text-[#8B4513] font-bold' : 'text-white/40'}`}>
                      {item.value}
                      {(item as { highlight?: boolean }).highlight && ' →'}
                    </span>
                  )}
                  <ChevronRight size={16} className="text-white/30" />
                </motion.button>
              ))}
            </div>
          </div>
        ))}

        {/* Logout */}
        <div className="mx-5 mb-4">
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-4 rounded-2xl border border-[#A0522D]/20 bg-[#A0522D]/10 active:bg-[#A0522D]/20 transition-colors"
          >
            <div className="w-8 h-8 rounded-xl bg-[#A0522D]/20 flex items-center justify-center">
              <LogOut size={16} className="text-[#A0522D]" />
            </div>
            <p className="flex-1 text-[#A0522D] text-sm text-left font-['Inter',sans-serif]">Sign Out</p>
            <ChevronRight size={16} className="text-[#A0522D]/50" />
          </motion.button>
        </div>

        <p className="text-center text-white/20 text-xs font-['Inter',sans-serif] mb-4">
          Mintly v1.0.0 — Made with ❤️
        </p>
      </div>

      <BottomNav active="settings" onNavigate={(s) => navigate(s)} isPremium={isPremium} />
    </div>
  );
}

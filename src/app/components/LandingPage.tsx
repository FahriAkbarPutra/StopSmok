import { motion } from 'motion/react';

interface LandingPageProps {
  onLogin: () => void;
  onRegister: () => void;
}

export function LandingPage({ onLogin, onRegister }: LandingPageProps) {
  return (
    <div className="relative h-full overflow-hidden" style={{ background: '#8e8e93' }}>
      {/* Main gradient card */}
      <div
        className="absolute left-[24px] right-[24px] top-[71px] rounded-[21px] overflow-hidden"
        style={{ bottom: '16px', background: 'linear-gradient(180deg, #8B4513 0%, #727272 100%)' }}
      >
        {/* Glow effects */}
        <div className="absolute top-[-60px] right-[-60px] w-64 h-64 rounded-full opacity-25 blur-3xl" style={{ background: '#CD853F' }} />
        <div className="absolute bottom-[-20px] left-[-40px] w-56 h-56 rounded-full opacity-20 blur-3xl" style={{ background: '#5c2d0c' }} />

        {/* Logo circle */}
        <div className="relative flex flex-col items-center pt-14 pb-6 px-6">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 200, damping: 20 }}
            className="mb-8"
          >
            <div className="w-28 h-28 rounded-full bg-[rgba(83,82,89,0.85)] shadow-2xl border border-white/10 flex items-center justify-center relative overflow-hidden">
              {/* Cigarette with X */}
              <svg viewBox="0 0 80 80" className="w-16 h-16">
                <rect x="10" y="36" width="48" height="8" rx="4" fill="white" opacity="0.7" />
                <rect x="55" y="30" width="10" height="20" rx="3" fill="#CD853F" />
                <rect x="62" y="36" width="10" height="8" rx="2" fill="#CD853F" opacity="0.6" />
                {/* Cross */}
                <line x1="14" y1="18" x2="66" y2="62" stroke="#A0522D" strokeWidth="5" strokeLinecap="round" />
                <line x1="66" y1="18" x2="14" y2="62" stroke="#A0522D" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </div>
          </motion.div>

          {/* Brand text */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-center mb-10"
          >
            <p
              className="text-[64px] font-extrabold uppercase tracking-[4px] leading-none font-['Exo',sans-serif]"
              style={{ color: '#8B4513', textShadow: '0px 4px 4px rgba(0,0,0,0.25)' }}
            >
              STOP
            </p>
            <p
              className="text-[64px] font-extrabold uppercase tracking-[4px] leading-none font-['Exo',sans-serif]"
              style={{ color: 'white', textShadow: '0px 4px 4px rgba(0,0,0,0.25)' }}
            >
              SMOKE
            </p>
            <p className="text-white/40 text-sm mt-3 font-['Inter',sans-serif] tracking-wider">
              Mintly — Your quit companion
            </p>
          </motion.div>

          {/* Login button */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="w-full"
          >
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onLogin}
              className="w-full bg-[#35343b] text-[#d1d1d1] rounded-[28px] h-[46px] font-['Exo',sans-serif] font-normal text-xl border border-white/10 active:bg-[#2a292f] transition-colors shadow-lg"
              style={{ boxShadow: '0px 4px 7px rgba(0,0,0,0.25)' }}
            >
              Login
            </motion.button>
          </motion.div>
        </div>

        {/* Social login buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-3 px-6 mb-6"
        >
          {[
            { label: 'f', title: 'Facebook' },
            { label: 'G', title: 'Google' },
            { label: '📱', title: 'Phone' },
          ].map((s) => (
            <motion.button
              key={s.title}
              whileTap={{ scale: 0.88 }}
              className="w-[88px] h-[88px] rounded-[18px] bg-[#2f2e35] flex items-center justify-center active:bg-[#3a3940] transition-colors border border-[#8B4513]"
              style={{ boxShadow: '0px 4px 2px rgba(0,0,0,0.25)' }}
            >
              <span className="text-white text-2xl font-bold">{s.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Sign up link */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="text-center text-sm font-['Exo',sans-serif] px-6 mb-6"
        >
          <span className="text-white/60">Not a member?  </span>
          <button
            onClick={onRegister}
            className="text-[#8B4513] font-semibold active:opacity-70 transition-opacity underline"
          >
            Sign up now
          </button>
        </motion.p>

        {/* Terms */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-center px-6 pb-6"
        >
          <p className="text-white/40 text-[13px] font-['Exo',sans-serif]">
            By using Mintly, you are agreeing to our{' '}
          </p>
          <button className="text-[#8B4513] text-[13px] font-['Exo',sans-serif] active:opacity-70">
            Terms of Service
          </button>
        </motion.div>
      </div>
    </div>
  );
}

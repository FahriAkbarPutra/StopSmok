import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, Eye, EyeOff, Mail, Lock, User, Gift } from 'lucide-react';
import type { UserData } from '../App';

interface RegisterPageProps {
  onSuccess: () => void;
  onLogin: () => void;
  onBack: () => void;
  userData: UserData;
  updateUserData: (data: Partial<UserData>) => void;
}

export function RegisterPage({ onSuccess, onLogin, onBack, userData, updateUserData }: RegisterPageProps) {
  const [name, setName] = useState(userData.name || '');
  const [email, setEmail] = useState(userData.email || '');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [referral, setReferral] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      setError('Please fill in all required fields');
      return;
    }
    if (!email.includes('@')) {
      setError('Please enter a valid email');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    if (password !== passwordAgain) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    setLoading(true);
    updateUserData({ name, email });
    setTimeout(() => {
      setLoading(false);
      onSuccess();
    }, 600);
  };

  const fields = [
    {
      icon: <User size={26} className="text-[#CECECE]" />,
      value: name,
      onChange: (v: string) => setName(v),
      placeholder: 'Name',
      type: 'text',
    },
    {
      icon: <Mail size={28} className="text-white" />,
      value: email,
      onChange: (v: string) => setEmail(v),
      placeholder: 'Email',
      type: 'email',
    },
    {
      icon: <Lock size={24} className="text-white" />,
      value: password,
      onChange: (v: string) => setPassword(v),
      placeholder: 'Password',
      type: showPassword ? 'text' : 'password',
      toggle: () => setShowPassword(!showPassword),
      showToggle: showPassword,
    },
    {
      icon: <Lock size={24} className="text-white" />,
      value: passwordAgain,
      onChange: (v: string) => setPasswordAgain(v),
      placeholder: 'Password Again',
      type: showPassword2 ? 'text' : 'password',
      toggle: () => setShowPassword2(!showPassword2),
      showToggle: showPassword2,
    },
    {
      icon: <Gift size={26} className="text-[#CFCFCF]" />,
      value: referral,
      onChange: (v: string) => setReferral(v),
      placeholder: 'Referral Code (if any)',
      type: 'text',
    },
  ];

  return (
    <div className="relative h-full bg-[#8e8e93] overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center gap-3 px-4 pt-[45px] pb-2">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center rounded-full active:bg-black/10 transition-colors"
        >
          <ChevronLeft size={24} strokeWidth={3} className="text-[#1e1e1e]" />
        </button>
        <span className="text-black text-base font-['Inter',sans-serif]">User Registration</span>
      </div>

      {/* Main card */}
      <div
        className="absolute left-[22px] right-[22px] top-[88px] rounded-[21px] overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #8B4513 0%, #727272 100%)', bottom: '16px' }}
      >
        <div className="absolute top-[-40px] right-[-40px] w-48 h-48 rounded-full bg-[#CD853F] opacity-15 blur-3xl pointer-events-none" />

        <div className="relative h-full flex flex-col px-6 pt-6 pb-5 overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
          {/* Title inside card */}
          <div className="text-center mb-5">
            <p className="text-[#8B4513] text-[42px] font-extrabold uppercase tracking-[3px] leading-none font-['Exo',sans-serif]" style={{ textShadow: '0px 4px 4px rgba(0,0,0,0.25)' }}>STOP</p>
            <p className="text-white text-[42px] font-extrabold uppercase tracking-[3px] leading-none font-['Exo',sans-serif]" style={{ textShadow: '0px 4px 4px rgba(0,0,0,0.25)' }}>SMOKE</p>
            <p className="text-white/50 text-sm mt-2 font-['Inter',sans-serif]">Create your account to start</p>
          </div>

          {/* Fields */}
          <div className="space-y-2.5 flex-1">
            {fields.map((field, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-[rgba(25,24,30,0.6)] backdrop-blur-sm rounded-[18px] px-4 h-[60px] border border-white/8 focus-within:border-[#8B4513]/60 transition-colors"
              >
                <div className="flex-shrink-0 opacity-80">{field.icon}</div>
                <input
                  type={field.type}
                  value={field.value}
                  onChange={(e) => { field.onChange(e.target.value); setError(''); }}
                  placeholder={field.placeholder}
                  className="flex-1 bg-transparent text-white placeholder-[#cdcdcd] outline-none text-base font-['Exo',sans-serif] min-w-0"
                />
                {field.toggle && (
                  <button
                    onClick={field.toggle}
                    className="text-[#cdcdcd] active:scale-90 transition-transform flex-shrink-0 p-1"
                  >
                    {field.showToggle ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                )}
              </div>
            ))}

            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-[#D2B48C] text-sm px-2 font-['Inter',sans-serif]"
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Sign up button */}
          <div className="space-y-2.5 mt-3">
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={handleSignUp}
              disabled={loading}
              className="w-full bg-[#8B4513] text-white rounded-[28px] h-[57px] font-['Exo',sans-serif] text-xl font-normal active:bg-[#6e3610] transition-colors shadow-lg disabled:opacity-60 flex items-center justify-center"
              style={{ boxShadow: '0px 4px 7px rgba(0,0,0,0.25)' }}
            >
              {loading ? (
                <div className="w-6 h-6 border-2 border-white/60 border-t-white rounded-full animate-spin" />
              ) : 'Sign Up'}
            </motion.button>

            <p className="text-center text-white/70 text-sm font-['Exo',sans-serif]">
              Already have an account?{' '}
              <button
                onClick={onLogin}
                className="text-[#8B4513] underline font-semibold active:opacity-70"
              >
                Login
              </button>
            </p>

            <p className="text-center text-white/35 text-[11px] font-['Exo',sans-serif] leading-tight">
              By continuing you agree to our{' '}
              <span className="text-[#8B4513]">Terms of Service</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

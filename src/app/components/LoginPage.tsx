import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { SuccessModal } from './SuccessModal';

interface LoginPageProps {
  onSuccess: () => void;
  onRegister: () => void;
  onBack: () => void;
}

export function LoginPage({ onSuccess, onRegister, onBack }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      setError('Please fill in all fields');
      return;
    }
    if (!email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    if (password.length < 3) {
      setError('Password is too short');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowSuccess(true);
    }, 900);
  };

  return (
    <div className="relative h-full overflow-hidden bg-[#0d0d0d] flex flex-col items-center">
      {/* Background glow at the top */}
      <div className="absolute top-0 left-0 right-0 h-[400px] pointer-events-none" style={{ background: 'radial-gradient(circle at top, #D35400 0%, transparent 65%)', opacity: 0.25 }} />

      {/* Back button */}
      <div className="absolute top-0 left-0 right-0 z-20 flex px-4 pt-[45px]">
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center rounded-full active:bg-white/10 transition-colors"
        >
          <ChevronLeft size={28} className="text-white/80" />
        </motion.button>
      </div>

      <div className="relative z-10 flex flex-col items-center w-full px-5 pt-[80px] h-full overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
        {/* Logo circle */}
        <div className="w-[60px] h-[60px] rounded-full bg-[#2a2a2e] border-[3px] border-[#3a3a3e] shadow-[0_4px_15px_rgba(0,0,0,0.5)] mb-6 flex items-center justify-center">
          <div className="w-[34px] h-[34px] rounded-full bg-[#1c1c1e]" />
        </div>

        {/* Brand Text */}
        <div className="text-center mb-8">
          <h1 className="text-[44px] font-black uppercase leading-none tracking-wide" style={{ color: '#D35400' }}>STOP</h1>
          <h1 className="text-[44px] font-black uppercase leading-[0.9] tracking-wider text-white">SMOKE</h1>
          <p className="text-[#a3a3a3] text-[10px] font-bold tracking-[0.12em] mt-3 uppercase">Your path to a smoke-free life</p>
        </div>

        {/* Login Container */}
        <div className="w-full bg-[#1c1c1e] rounded-[24px] p-6 shadow-2xl relative z-10">
          <h2 className="text-white text-xl font-bold text-center mb-6">Sign In</h2>
          
          {/* Inputs */}
          <div className="space-y-4 mb-2">
            {/* Email */}
            <div className={`flex items-center gap-3 bg-[#252527] rounded-xl px-4 h-[52px] border transition-colors ${focusedField === 'email' ? 'border-[#D35400]' : 'border-transparent'}`}>
              <Mail size={18} className="text-[#6c6c70]" />
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(''); }}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                placeholder="Email address"
                className="flex-1 bg-transparent text-white placeholder-[#6c6c70] text-sm outline-none font-['Inter',sans-serif]"
              />
            </div>

            {/* Password */}
            <div className={`flex items-center gap-3 bg-[#252527] rounded-xl px-4 h-[52px] border transition-colors ${focusedField === 'password' ? 'border-[#D35400]' : 'border-transparent'}`}>
              <div className="w-[18px] flex justify-center">
                <Lock size={18} className="text-[#6c6c70]" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(''); }}
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField(null)}
                onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                placeholder="Password"
                className="flex-1 bg-transparent text-white placeholder-[#6c6c70] text-sm outline-none font-['Inter',sans-serif]"
              />
              <button onClick={() => setShowPassword(!showPassword)} className="text-[#6c6c70] active:text-white transition-colors">
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Error Message */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <p className="text-[#D35400] text-xs px-2 pt-1 font-medium">{error}</p>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Forgot Password */}
          <div className="flex justify-end mt-2 mb-6">
            <button className="text-[#D35400] text-xs font-semibold active:opacity-70">Forgot password?</button>
          </div>

          {/* Login Button */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-[#D35400] text-white font-bold text-sm tracking-wide uppercase rounded-xl h-[52px] shadow-[0_4px_20px_rgba(211,84,0,0.4)] flex items-center justify-center active:bg-[#b04600] transition-colors"
          >
            {loading ? <div className="w-5 h-5 border-2 border-white/60 border-t-white rounded-full animate-spin" /> : 'LOGIN'}
          </motion.button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-[#2c2c2e]" />
            <span className="text-[#6c6c70] text-xs">or</span>
            <div className="flex-1 h-px bg-[#2c2c2e]" />
          </div>

          {/* Social Buttons */}
          <div className="flex justify-between gap-3">
            <button className="flex-1 bg-[#252527] rounded-xl h-[68px] flex flex-col items-center justify-center gap-1 border border-[#353538] active:bg-[#303033] transition-colors">
              <span className="text-white font-bold text-xl leading-none">f</span>
              <span className="text-[#8c8c90] text-[10px] font-medium mt-1">Facebook</span>
            </button>
            <button className="flex-1 bg-[#252527] rounded-xl h-[68px] flex flex-col items-center justify-center gap-1 border border-[#353538] active:bg-[#303033] transition-colors">
              <span className="text-white font-bold text-xl leading-none">G</span>
              <span className="text-[#8c8c90] text-[10px] font-medium mt-1">Google</span>
            </button>
            <button className="flex-1 bg-[#252527] rounded-xl h-[68px] flex flex-col items-center justify-center gap-1 border border-[#353538] active:bg-[#303033] transition-colors">
              <span className="text-white text-xl leading-none">📱</span>
              <span className="text-[#8c8c90] text-[10px] font-medium mt-1">Phone</span>
            </button>
          </div>
        </div>

        {/* Sign Up Link */}
        <p className="mt-8 text-[#8c8c90] text-sm">
          Not a member? <button onClick={onRegister} className="text-[#D35400] font-bold active:opacity-70 transition-opacity">Sign up now</button>
        </p>

        {/* Spacer */}
        <div className="flex-1 min-h-[40px]" />

        {/* Terms */}
        <p className="pb-8 text-[#6c6c70] text-[11px]">
          By using Mintly, you agree to our <button className="text-[#D35400] font-medium active:opacity-70 transition-opacity">Terms of Service</button>
        </p>
      </div>

      {/* Success Modal */}
      <SuccessModal
        show={showSuccess}
        title="Login Successful! 🎉"
        message="Welcome back to Mintly. Let's keep up the great work and stay smoke-free!"
        onContinue={() => {
          setShowSuccess(false);
          onSuccess();
        }}
      />
    </div>
  );
}

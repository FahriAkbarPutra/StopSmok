import { ChevronLeft } from 'lucide-react';
import { motion } from 'motion/react';

interface TermsPageProps {
  onAccept: () => void;
  onBack: () => void;
}

const terms = [
  {
    title: '1. User Agreement',
    content:
      'By using Mintly, you agree to use the application responsibly and for its intended purpose of helping you quit smoking. You must be at least 13 years of age to use this service. You are responsible for maintaining the security of your account credentials.',
  },
  {
    title: '2. Data & Privacy',
    content:
      'Mintly collects personal data including usage patterns, health tracking information, and account details to provide a personalized quit-smoking experience. Your data is stored securely and will never be sold to third parties. You may request deletion of your data at any time.',
  },
  {
    title: '3. Health Disclaimer',
    content:
      'Mintly is a supportive tool and is not a medical device or substitute for professional medical advice. Consult your healthcare provider before making significant changes to your health routine. We do not guarantee specific health outcomes from using this application.',
  },
];

export function TermsPage({ onAccept, onBack }: TermsPageProps) {
  return (
    <div className="relative h-full overflow-hidden" style={{ background: 'linear-gradient(180deg, #8B4513 0%, #727272 100%)' }}>
      {/* Decorative glow */}
      <div className="absolute top-[-60px] right-[-60px] w-64 h-64 rounded-full bg-[#CD853F] opacity-15 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-3 px-4 pt-[50px] pb-4">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center rounded-full active:bg-white/10 transition-colors"
        >
          <ChevronLeft size={24} strokeWidth={3} className="text-white" />
        </button>
      </div>

      {/* Title */}
      <div className="text-center px-6 mb-6">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#8B4513] text-5xl font-extrabold uppercase tracking-wider font-['Exo',sans-serif] drop-shadow-lg"
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
            Terms of
          </p>
          <p className="text-white text-5xl font-extrabold uppercase tracking-wider font-['Exo',sans-serif] drop-shadow-lg">
            Service
          </p>
        </motion.div>
      </div>

      {/* Scrollable content */}
      <div className="absolute left-0 right-0 overflow-y-auto" style={{ top: '200px', bottom: '120px', paddingBottom: '8px' }}>
        <div className="px-6 space-y-4">
          {terms.map((term, i) => (
            <motion.div
              key={i}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className="bg-[rgba(114,114,114,0.9)] rounded-[21px] p-5"
            >
              <p className="text-black font-extrabold text-base uppercase tracking-wide mb-2 font-['Exo',sans-serif]">
                {term.title}
              </p>
              <p className="text-white text-sm leading-relaxed font-['Exo',sans-serif]">
                {term.content}
              </p>
            </motion.div>
          ))}

          <p className="text-white/60 text-sm text-center font-['Exo',sans-serif] pb-2">
            By accepting, you agree to the terms outlined above
          </p>
        </div>
      </div>

      {/* Accept button */}
      <div className="absolute bottom-6 left-0 right-0 px-10">
        <motion.button
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          onClick={onAccept}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-[#8B4513] text-white py-5 rounded-[28px] text-xl font-normal font-['Exo',sans-serif] shadow-xl active:scale-95 transition-all hover:bg-[#6e3610]"
        >
          Accept
        </motion.button>
      </div>
    </div>
  );
}

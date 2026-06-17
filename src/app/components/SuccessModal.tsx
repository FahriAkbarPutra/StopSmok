import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Star } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SuccessModalProps {
  show: boolean;
  title?: string;
  message?: string;
  onContinue?: () => void;
  autoClose?: boolean;
}

export function SuccessModal({
  show,
  title = 'Login Successful!',
  message = 'Welcome back to Mintly. Keep going strong!',
  onContinue,
  autoClose = true,
}: SuccessModalProps) {
  const firedRef = useRef(false);

  useEffect(() => {
    if (show && !firedRef.current) {
      firedRef.current = true;
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#8B4513', '#CD853F', '#ffffff', '#D2B48C', '#C19A6B'],
      });
    }
    if (!show) {
      firedRef.current = false;
    }
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="mx-8 bg-gradient-to-b from-[#8B4513] to-[#5c2d0c] rounded-3xl p-8 flex flex-col items-center shadow-2xl border border-white/20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 400 }}
              className="relative mb-6"
            >
              <div className="w-24 h-24 rounded-full bg-[#CD853F]/20 border-4 border-[#CD853F] flex items-center justify-center">
                <CheckCircle className="w-14 h-14 text-[#CD853F]" strokeWidth={2} />
              </div>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 2.5, opacity: 0 }}
                  transition={{ delay: 0.3 + i * 0.05, duration: 0.8 }}
                  className="absolute inset-0 rounded-full border-2 border-[#CD853F]"
                />
              ))}
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex gap-1 mb-4"
            >
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-[#CD853F] fill-[#CD853F]" />
              ))}
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white text-2xl font-bold text-center mb-2 font-['Exo',sans-serif]"
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-white/70 text-center text-sm mb-8 font-['Inter',sans-serif]"
            >
              {message}
            </motion.p>

            {onContinue && (
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                onClick={onContinue}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#CD853F] text-white py-4 rounded-2xl font-semibold text-lg active:scale-95 transition-all"
              >
                Continue
              </motion.button>
            )}

            {autoClose && !onContinue && (
              <motion.div
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{ duration: 2.5, ease: 'linear' }}
                className="h-1 bg-[#CD853F] rounded-full mt-4 self-start"
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

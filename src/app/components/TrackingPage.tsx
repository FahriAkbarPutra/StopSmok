import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, Check, Flame, Wind } from 'lucide-react';
import { BottomNav } from './BottomNav';
import type { UserData } from '../App';

interface TrackingPageProps {
  userData: UserData;
  navigate: (screen: string) => void;
}

interface DayLog {
  date: string;
  status: 'smoke_free' | 'smoked' | 'craving_clean';
  mood: string;
  count: number;
  symptoms: string[];
  note: string;
}

const MOODS = [
  { emoji: '😄', label: 'Amazing' },
  { emoji: '🙂', label: 'Good' },
  { emoji: '😐', label: 'Okay' },
  { emoji: '😤', label: 'Craving' },
  { emoji: '😣', label: 'Rough' },
];

const SYMPTOMS = [
  { id: 'headache', emoji: '🤕', label: 'Headache' },
  { id: 'anxiety', emoji: '😰', label: 'Anxiety' },
  { id: 'irritable', emoji: '😠', label: 'Irritable' },
  { id: 'fatigue', emoji: '😴', label: 'Fatigue' },
  { id: 'nausea', emoji: '🤢', label: 'Nausea' },
  { id: 'focus', emoji: '🧠', label: 'Brain Fog' },
  { id: 'none', emoji: '✨', label: 'No Issues' },
];

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Fixed step constants — no conditional step numbers
const STEP_MOOD = 0;
const STEP_SMOKED = 1;
const STEP_COUNT = 2;    // only when smoked === true
const STEP_SYMPTOMS = 3;
const STEP_NOTE = 4;

function toKey(y: number, m: number, d: number) {
  return `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
}

function dayColors(log: DayLog | undefined, isToday: boolean, isFuture: boolean) {
  if (isFuture) return { bg: 'transparent', txt: '#555', dot: null as string | null };
  if (!log) return { bg: isToday ? 'rgba(123,47,0,0.35)' : 'transparent', txt: isToday ? '#fff' : '#888', dot: null };
  if (log.status === 'smoke_free') return { bg: 'rgba(205,133,63,0.3)', txt: '#CD853F', dot: '#CD853F' };
  if (log.status === 'craving_clean') return { bg: 'rgba(193,154,107,0.25)', txt: '#C19A6B', dot: '#C19A6B' };
  return { bg: 'rgba(160,82,45,0.3)', txt: '#A0522D', dot: '#A0522D' };
}

export function TrackingPage({ userData, navigate }: TrackingPageProps) {
  const now = new Date();
  const todayKey = toKey(now.getFullYear(), now.getMonth(), now.getDate());

  const [viewYear, setViewYear] = useState(now.getFullYear());
  const [viewMonth, setViewMonth] = useState(now.getMonth());

  const [logs, setLogs] = useState<Record<string, DayLog>>(() => {
    try {
      const s = localStorage.getItem('mintly_logs');
      return s ? JSON.parse(s) : {};
    } catch { return {}; }
  });

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [editKey, setEditKey] = useState<string>(todayKey);
  const [step, setStep] = useState(STEP_MOOD);

  // Form state (all in one place, no conditional state)
  const [mood, setMood] = useState('🙂');
  const [smoked, setSmoked] = useState(false);
  const [count, setCount] = useState(1);
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [note, setNote] = useState('');

  const [showCelebration, setShowCelebration] = useState(false);

  const isPremium = userData.subscription !== 'none';
  const todayLogged = !!logs[todayKey];

  useEffect(() => {
    localStorage.setItem('mintly_logs', JSON.stringify(logs));
  }, [logs]);

  // Calendar geometry
  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  // Month stats
  const prefix = `${viewYear}-${String(viewMonth + 1).padStart(2, '0')}`;
  const monthLogs = Object.values(logs).filter(l => l.date.startsWith(prefix));
  const freeDays = monthLogs.filter(l => l.status !== 'smoked').length;
  const smokedDays = monthLogs.filter(l => l.status === 'smoked').length;
  const totalCigs = monthLogs.filter(l => l.status === 'smoked').reduce((a, l) => a + l.count, 0);

  // Streak
  let streak = 0;
  for (let i = 0; i < 365; i++) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    const k = toKey(d.getFullYear(), d.getMonth(), d.getDate());
    const l = logs[k];
    if (!l) { if (i === 0) continue; break; }
    if (l.status !== 'smoked') streak++;
    else break;
  }

  // Chart data (last 7 days)
  const chartData = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(now);
    d.setDate(d.getDate() - 6 + i);
    const k = toKey(d.getFullYear(), d.getMonth(), d.getDate());
    const l = logs[k];
    return {
      day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d.getDay()],
      cigs: l?.status === 'smoked' ? l.count : 0,
      status: l?.status,
    };
  });

  // ---- Modal helpers ----
  function openModal(dayKey: string) {
    setEditKey(dayKey);
    const existing = logs[dayKey];
    if (existing) {
      setMood(existing.mood);
      setSmoked(existing.status === 'smoked');
      setCount(existing.count || 1);
      setSymptoms(existing.symptoms || []);
      setNote(existing.note || '');
    } else {
      setMood('🙂');
      setSmoked(false);
      setCount(1);
      setSymptoms([]);
      setNote('');
    }
    setStep(STEP_MOOD);
    setModalOpen(true);
  }

  function goNext() {
    if (step === STEP_MOOD) { setStep(STEP_SMOKED); return; }
    if (step === STEP_SMOKED) { setStep(smoked ? STEP_COUNT : STEP_SYMPTOMS); return; }
    if (step === STEP_COUNT) { setStep(STEP_SYMPTOMS); return; }
    if (step === STEP_SYMPTOMS) { setStep(STEP_NOTE); return; }
  }

  function goBack() {
    if (step === STEP_SMOKED) { setStep(STEP_MOOD); return; }
    if (step === STEP_COUNT) { setStep(STEP_SMOKED); return; }
    if (step === STEP_SYMPTOMS) { setStep(smoked ? STEP_COUNT : STEP_SMOKED); return; }
    if (step === STEP_NOTE) { setStep(STEP_SYMPTOMS); return; }
  }

  function handleSmokedNo() {
    setSmoked(false);
    setCount(0);
    setStep(STEP_SYMPTOMS);
  }

  function handleSmokedYes() {
    setSmoked(true);
    setStep(STEP_COUNT);
  }

  function toggleSymptom(id: string) {
    if (id === 'none') { setSymptoms(['none']); return; }
    setSymptoms(prev => {
      const without = prev.filter(s => s !== 'none');
      return without.includes(id) ? without.filter(s => s !== id) : [...without, id];
    });
  }

  function saveRecord() {
    const status = smoked ? 'smoked'
      : (symptoms.length > 0 && !symptoms.includes('none')) ? 'craving_clean'
      : 'smoke_free';

    const newLog: DayLog = {
      date: editKey,
      status,
      mood,
      count: smoked ? count : 0,
      symptoms,
      note,
    };
    setLogs(prev => ({ ...prev, [editKey]: newLog }));
    setModalOpen(false);

    if (status === 'smoke_free' || status === 'craving_clean') {
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 3000);
    }
  }

  const prevMonth = () => {
    setViewMonth(m => { if (m === 0) { setViewYear(y => y - 1); return 11; } return m - 1; });
  };
  const nextMonth = () => {
    setViewMonth(m => { if (m === 11) { setViewYear(y => y + 1); return 0; } return m + 1; });
  };

  // Progress bar segments: 5 total, active up to current step
  const totalSteps = smoked ? 5 : 4;
  const activeSegment = smoked
    ? [STEP_MOOD, STEP_SMOKED, STEP_COUNT, STEP_SYMPTOMS, STEP_NOTE].indexOf(step)
    : [STEP_MOOD, STEP_SMOKED, STEP_SYMPTOMS, STEP_NOTE].indexOf(step);

  return (
    <div className="relative h-full overflow-hidden" style={{ background: 'linear-gradient(180deg, #8B4513 0%, #3d3d3d 100%)' }}>
      <div className="absolute top-[-60px] right-[-60px] w-56 h-56 rounded-full opacity-15 blur-3xl" style={{ background: '#CD853F' }} />

      {/* Header */}
      <div className="flex items-center gap-2 px-4 pt-14 pb-2">
        <motion.button
          whileTap={{ scale: 0.82 }}
          onClick={() => navigate('home')}
          className="w-10 h-10 flex items-center justify-center rounded-full active:bg-white/10 transition-colors"
        >
          <ChevronLeft size={22} strokeWidth={3} className="text-white" />
        </motion.button>
        <p className="text-white text-base font-['Inter',sans-serif]">Track</p>
      </div>

      {/* Scrollable content */}
      <div className="absolute inset-0 overflow-y-auto pt-[105px] pb-36" style={{ scrollbarWidth: 'none' }}>

        {/* Stats card */}
        <div className="mx-4 mb-4 rounded-2xl border border-white/10 overflow-hidden" style={{ background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(16px)' }}>
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-white/50 text-xs font-['Inter',sans-serif]">This Month</p>
                <p className="text-white font-bold font-['Exo',sans-serif]">{MONTHS[viewMonth]} {viewYear}</p>
              </div>
              {streak > 0 && (
                <div className="flex items-center gap-1.5 bg-[#CD853F]/15 border border-[#CD853F]/30 px-3 py-1.5 rounded-full">
                  <Flame size={14} className="text-[#CD853F]" />
                  <span className="text-[#CD853F] text-sm font-bold font-['Exo',sans-serif]">{streak}d streak</span>
                </div>
              )}
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: 'Free Days', value: freeDays, color: '#CD853F', emoji: '✅' },
                { label: 'Smoked', value: smokedDays, color: '#A0522D', emoji: '🚬' },
                { label: 'Total Cigs', value: totalCigs, color: '#CD853F', emoji: '📊' },
              ].map(s => (
                <div key={s.label} className="bg-white/5 rounded-xl p-3 text-center">
                  <span className="text-xl">{s.emoji}</span>
                  <p className="font-bold font-['Exo',sans-serif] text-xl mt-1" style={{ color: s.color }}>{s.value}</p>
                  <p className="text-white/40 text-[10px] font-['Inter',sans-serif]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Calendar */}
        <div className="mx-4 mb-4 rounded-2xl border border-white/10 overflow-hidden"
          style={{ background: 'linear-gradient(180deg, rgba(123,47,0,0.45) 0%, rgba(0,0,0,0.3) 100%)', backdropFilter: 'blur(16px)' }}>

          <div className="flex items-center gap-3 px-4 pt-4 pb-2">
            <motion.button whileTap={{ scale: 0.85 }} onClick={prevMonth}
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center active:bg-white/20">
              <ChevronLeft size={16} className="text-white" />
            </motion.button>
            <p className="flex-1 text-center text-white font-semibold font-['Inter',sans-serif]">
              {MONTHS[viewMonth]} {viewYear}
            </p>
            <motion.button whileTap={{ scale: 0.85 }} onClick={nextMonth}
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center active:bg-white/20">
              <ChevronRight size={16} className="text-white" />
            </motion.button>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 px-3 pb-1">
            {WEEKDAYS.map(d => (
              <div key={d} className="text-center py-1">
                <span className="text-white/40 text-xs font-['Inter',sans-serif]">{d}</span>
              </div>
            ))}
          </div>

          {/* Day cells */}
          <div className="grid grid-cols-7 gap-1 px-3 pb-3">
            {Array.from({ length: firstDay }).map((_, i) => <div key={`e-${i}`} />)}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const k = toKey(viewYear, viewMonth, day);
              const log = logs[k];
              const isToday = k === todayKey;
              const isFuture = new Date(viewYear, viewMonth, day) > now;
              const { bg, txt, dot } = dayColors(log, isToday, isFuture);

              return (
                <motion.button
                  key={`day-${day}`}
                  whileTap={!isFuture ? { scale: 0.8 } : {}}
                  onClick={() => !isFuture && openModal(k)}
                  disabled={isFuture}
                  className="relative flex flex-col items-center justify-center h-10 rounded-xl transition-all select-none"
                  style={{ background: bg, cursor: isFuture ? 'default' : 'pointer' }}
                >
                  {isToday && !log && (
                    <div className="absolute inset-0 rounded-xl border-2 border-[#CD853F]/60 pointer-events-none" />
                  )}
                  <span className="text-xs font-['Inter',sans-serif] leading-none" style={{ color: txt }}>{day}</span>
                  {dot && <div className="w-1.5 h-1.5 rounded-full mt-0.5" style={{ background: dot }} />}
                  {log?.status === 'smoked' && log.count > 0 && (
                    <span className="text-[7px] font-bold leading-none" style={{ color: txt }}>{log.count}</span>
                  )}
                </motion.button>
              );
            })}
          </div>

          <div className="flex justify-center gap-4 pb-3">
            {[{ color: '#CD853F', label: 'Clean' }, { color: '#C19A6B', label: 'Craving' }, { color: '#A0522D', label: 'Smoked' }].map(l => (
              <div key={l.label} className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full" style={{ background: l.color }} />
                <span className="text-white/40 text-[10px] font-['Inter',sans-serif]">{l.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bar chart — custom div implementation, no recharts Cell conflict */}
        <div className="mx-4 mb-4 rounded-2xl border border-white/10 overflow-hidden"
          style={{ background: 'rgba(0,0,0,0.25)', backdropFilter: 'blur(16px)' }}>
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <p className="text-white font-semibold font-['Inter',sans-serif] text-sm">📊 Weekly Overview</p>
              <p className="text-white/40 text-xs font-['Inter',sans-serif]">Last 7 days</p>
            </div>

            {/* Custom bar chart */}
            {(() => {
              const maxCigs = Math.max(...chartData.map(d => d.cigs), 1);
              return (
                <div className="flex items-end gap-1.5 h-32">
                  {chartData.map((d, i) => {
                    const barColor =
                      d.status === 'smoke_free' ? '#CD853F' :
                      d.status === 'craving_clean' ? '#C19A6B' :
                      d.status === 'smoked' ? '#A0522D' :
                      'rgba(255,255,255,0.08)';
                    const barHeightPct = d.cigs > 0
                      ? Math.max(10, (d.cigs / maxCigs) * 100)
                      : d.status ? 8   // logged but 0 cigs = tiny green bar
                      : 4;             // no log = hairline
                    const isToday = i === chartData.length - 1;
                    return (
                      <div
                        key={`chart-bar-${d.day}-${i}`}
                        className="flex-1 flex flex-col items-center justify-end gap-1"
                        style={{ height: '100%' }}
                      >
                        {/* Cigarette count label */}
                        {d.cigs > 0 && (
                          <span className="text-[10px] font-bold font-['Inter',sans-serif]" style={{ color: barColor }}>
                            {d.cigs}
                          </span>
                        )}
                        {/* Bar */}
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${barHeightPct}%` }}
                          transition={{ duration: 0.5, delay: i * 0.05, ease: 'easeOut' }}
                          className="w-full rounded-t-lg"
                          style={{
                            background: barColor,
                            minHeight: 3,
                            boxShadow: isToday ? `0 0 8px ${barColor}80` : 'none',
                            border: isToday ? `1px solid ${barColor}` : 'none',
                          }}
                        />
                        {/* Day label */}
                        <span
                          className="text-[10px] font-['Inter',sans-serif]"
                          style={{ color: isToday ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.35)' }}
                        >
                          {d.day}
                        </span>
                      </div>
                    );
                  })}
                </div>
              );
            })()}

            {/* Legend */}
            <div className="flex justify-center gap-4 mt-3 flex-wrap">
              {[
                { color: '#CD853F', label: 'Smoke-free' },
                { color: '#C19A6B', label: 'Craving' },
                { color: '#A0522D', label: 'Smoked' },
              ].map(l => (
                <div key={l.label} className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full" style={{ background: l.color }} />
                  <span className="text-white/40 text-[10px] font-['Inter',sans-serif]">{l.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent logs */}
        {Object.entries(logs).length > 0 && (
          <div className="mx-4 mb-4">
            <p className="text-white/40 text-xs uppercase tracking-wider font-['Inter',sans-serif] mb-2 px-1">Recent Records</p>
            {Object.entries(logs).sort((a, b) => b[0].localeCompare(a[0])).slice(0, 5).map(([k, log]) => (
              <motion.button
                key={k}
                whileTap={{ scale: 0.97 }}
                onClick={() => openModal(k)}
                className="w-full flex items-center gap-3 rounded-2xl p-3 mb-2 text-left active:brightness-110 transition-all border border-white/8"
                style={{ background: 'rgba(0,0,0,0.2)' }}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${
                  log.status === 'smoke_free' ? 'bg-[#CD853F]/20' :
                  log.status === 'craving_clean' ? 'bg-[#C19A6B]/20' : 'bg-[#A0522D]/20'
                }`}>
                  {log.mood}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-semibold font-['Inter',sans-serif]">
                    {k === todayKey ? 'Today' : new Date(k + 'T12:00:00').toLocaleDateString('en', { weekday: 'short', month: 'short', day: 'numeric' })}
                  </p>
                  <p className="text-white/40 text-xs font-['Inter',sans-serif] truncate">
                    {log.status === 'smoke_free' ? '✨ Smoke-free!' :
                     log.status === 'craving_clean' ? '💪 Had cravings but stayed clean' :
                     `🚬 ${log.count} cigarette${log.count !== 1 ? 's' : ''}`}
                  </p>
                </div>
                <ChevronRight size={15} className="text-white/20 flex-shrink-0" />
              </motion.button>
            ))}
          </div>
        )}
      </div>

      {/* Floating Record Button */}
      <div className="absolute bottom-24 left-0 right-0 flex justify-center pointer-events-none z-[45]">
        <div className="pointer-events-auto flex flex-col items-center relative">
          {/* Pulse rings — only if not logged today */}
          {!todayLogged && [1, 2, 3].map(r => (
            <motion.div
              key={r}
              className="absolute rounded-full border-2 border-[#8B4513]/40"
              initial={{ width: 76, height: 76, opacity: 0.7 }}
              animate={{ width: 76 + r * 30, height: 76 + r * 30, opacity: 0 }}
              transition={{ duration: 2.2, repeat: Infinity, delay: r * 0.55, ease: 'easeOut' }}
            />
          ))}

          <motion.button
            whileTap={{ scale: 0.86 }}
            onClick={() => openModal(todayKey)}
            className="w-[76px] h-[76px] rounded-full shadow-2xl flex items-center justify-center"
            style={{
              background: todayLogged ? '#CD853F' : '#8B4513',
              boxShadow: todayLogged
                ? '0 0 40px rgba(205,133,63,0.55), 0 8px 24px rgba(0,0,0,0.5)'
                : '0 0 40px rgba(139,69,19,0.55), 0 8px 24px rgba(0,0,0,0.5)',
            }}
            animate={!todayLogged ? { scale: [1, 1.07, 1] } : {}}
            transition={!todayLogged ? { duration: 2.4, repeat: Infinity, ease: 'easeInOut' } : {}}
          >
            {todayLogged
              ? <Check size={34} className="text-white" strokeWidth={3} />
              : <span className="text-3xl">📋</span>
            }
          </motion.button>

          <p className="mt-2 text-white text-xs font-semibold font-['Inter',sans-serif] drop-shadow">
            {todayLogged ? 'Recorded ✓' : 'Record Today'}
          </p>
        </div>
      </div>

      {/* Celebration */}
      <AnimatePresence>
        {showCelebration && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none"
          >
            <motion.div
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              className="rounded-3xl px-10 py-7 text-center border border-white/20 shadow-2xl"
              style={{ background: 'linear-gradient(135deg, #CD853F, #A0522D)' }}
            >
              <motion.span
                animate={{ rotate: [-10, 10, -8, 8, 0], scale: [1, 1.4, 1] }}
                transition={{ duration: 0.7 }}
                className="text-7xl block mb-3"
              >🎉</motion.span>
              <p className="text-white text-2xl font-extrabold font-['Exo',sans-serif]">Smoke-Free!</p>
              <p className="text-white/70 text-sm font-['Inter',sans-serif] mt-1">Amazing — keep it going! 💪</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Record Modal */}
      <AnimatePresence>
        {modalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-[90] bg-black/65 backdrop-blur-sm"
              onClick={() => setModalOpen(false)}
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', stiffness: 280, damping: 28 }}
              className="absolute bottom-0 left-0 right-0 z-[100] rounded-t-[32px] flex flex-col"
              style={{ background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)', maxHeight: '88%' }}
              onClick={e => e.stopPropagation()}
            >
              {/* Grabber */}
              <div className="flex justify-center pt-3 pb-1 flex-shrink-0">
                <div className="w-12 h-1 rounded-full bg-white/20" />
              </div>

              {/* Modal header */}
              <div className="flex items-center justify-between px-6 py-3 flex-shrink-0">
                <div>
                  <p className="text-white font-bold font-['Exo',sans-serif] text-lg">
                    {editKey === todayKey ? "Today's Check-in" : 'Edit Record'}
                  </p>
                  <p className="text-white/40 text-xs font-['Inter',sans-serif]">
                    {new Date(editKey + 'T12:00:00').toLocaleDateString('en', { weekday: 'long', month: 'long', day: 'numeric' })}
                  </p>
                </div>
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  onClick={() => setModalOpen(false)}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center active:bg-white/20"
                >
                  <X size={17} className="text-white" />
                </motion.button>
              </div>

              {/* Step progress bar */}
              <div className="flex gap-2 px-6 mb-4 flex-shrink-0">
                {Array.from({ length: totalSteps }).map((_, i) => (
                  <div
                    key={i}
                    className="h-1 rounded-full flex-1 transition-all duration-300"
                    style={{ background: i <= activeSegment ? '#8B4513' : 'rgba(255,255,255,0.12)' }}
                  />
                ))}
              </div>

              {/* Scrollable step content */}
              <div className="flex-1 overflow-y-auto px-6 pb-6" style={{ scrollbarWidth: 'none' }}>
                <AnimatePresence mode="wait">

                  {/* STEP 0 — Mood */}
                  {step === STEP_MOOD && (
                    <motion.div key="mood" initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -40, opacity: 0 }}>
                      <p className="text-white font-semibold font-['Inter',sans-serif] text-base mb-1">How are you feeling today?</p>
                      <p className="text-white/40 text-sm font-['Inter',sans-serif] mb-5">Be honest — we're here to support you</p>
                      <div className="grid grid-cols-5 gap-2 mb-6">
                        {MOODS.map(m => (
                          <motion.button
                            key={m.emoji}
                            whileTap={{ scale: 0.82 }}
                            onClick={() => setMood(m.emoji)}
                            className={`flex flex-col items-center gap-2 py-3 rounded-2xl border transition-all ${
                              mood === m.emoji
                                ? 'bg-[#8B4513]/35 border-[#8B4513] scale-105'
                                : 'bg-white/5 border-white/10'
                            }`}
                          >
                            <span className="text-2xl">{m.emoji}</span>
                            <span className="text-white/55 text-[9px] font-['Inter',sans-serif] text-center">{m.label}</span>
                          </motion.button>
                        ))}
                      </div>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={goNext}
                        className="w-full bg-[#8B4513] text-white py-4 rounded-2xl font-['Exo',sans-serif] text-lg active:bg-[#6e3610] transition-colors flex items-center justify-center gap-2"
                      >
                        Continue <ChevronRight size={20} />
                      </motion.button>
                    </motion.div>
                  )}

                  {/* STEP 1 — Did you smoke? */}
                  {step === STEP_SMOKED && (
                    <motion.div key="smoked" initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -40, opacity: 0 }}>
                      <p className="text-white font-semibold font-['Inter',sans-serif] text-base mb-1">Did you smoke today?</p>
                      <p className="text-white/40 text-sm font-['Inter',sans-serif] mb-5">No judgment — tracking is how we grow</p>
                      <div className="grid grid-cols-2 gap-3 mb-5">
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          onClick={handleSmokedNo}
                          className="flex flex-col items-center gap-3 p-6 rounded-2xl border-2 bg-[#CD853F]/15 border-[#CD853F]/60 active:bg-[#CD853F]/25 transition-all"
                        >
                          <Wind size={44} className="text-[#CD853F]" />
                          <span className="text-white font-bold font-['Exo',sans-serif] text-lg">No! 💪</span>
                          <span className="text-white/50 text-xs font-['Inter',sans-serif] text-center">Stayed strong today</span>
                        </motion.button>
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          onClick={handleSmokedYes}
                          className="flex flex-col items-center gap-3 p-6 rounded-2xl border-2 bg-[#A0522D]/12 border-[#A0522D]/40 active:bg-[#A0522D]/25 transition-all"
                        >
                          <span className="text-5xl">🚬</span>
                          <span className="text-white font-bold font-['Exo',sans-serif] text-lg">Yes</span>
                          <span className="text-white/50 text-xs font-['Inter',sans-serif] text-center">Had some cigarettes</span>
                        </motion.button>
                      </div>
                      <motion.button whileTap={{ scale: 0.95 }} onClick={goBack}
                        className="w-full bg-white/8 text-white/60 py-3 rounded-2xl font-['Inter',sans-serif] text-sm active:bg-white/15 transition-colors">
                        ← Back
                      </motion.button>
                    </motion.div>
                  )}

                  {/* STEP 2 — How many (only if smoked) */}
                  {step === STEP_COUNT && (
                    <motion.div key="count" initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -40, opacity: 0 }}>
                      <p className="text-white font-semibold font-['Inter',sans-serif] text-base mb-1">How many cigarettes?</p>
                      <p className="text-white/40 text-sm font-['Inter',sans-serif] mb-5">Tracking helps you see progress over time</p>

                      <div className="flex items-center justify-center gap-8 mb-5">
                        <motion.button
                          whileTap={{ scale: 0.82 }}
                          onClick={() => setCount(c => Math.max(1, c - 1))}
                          className="w-14 h-14 rounded-full bg-[#8B4513] text-white text-3xl font-bold flex items-center justify-center active:bg-[#6e3610] transition-colors shadow-lg"
                        >−</motion.button>
                        <div className="text-center min-w-[80px]">
                          <motion.p
                            key={count}
                            initial={{ scale: 1.35, opacity: 0.5 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-white text-6xl font-bold font-['Exo',sans-serif] tabular-nums"
                          >{count}</motion.p>
                          <p className="text-white/40 text-sm font-['Inter',sans-serif]">cigarettes</p>
                        </div>
                        <motion.button
                          whileTap={{ scale: 0.82 }}
                          onClick={() => setCount(c => Math.min(60, c + 1))}
                          className="w-14 h-14 rounded-full bg-[#8B4513] text-white text-3xl font-bold flex items-center justify-center active:bg-[#6e3610] transition-colors shadow-lg"
                        >+</motion.button>
                      </div>

                      <div className="flex gap-2 mb-5 flex-wrap justify-center">
                        {[1, 2, 3, 5, 10, 15, 20].map(n => (
                          <motion.button
                            key={n}
                            whileTap={{ scale: 0.85 }}
                            onClick={() => setCount(n)}
                            className={`px-4 py-2 rounded-full text-sm font-['Inter',sans-serif] transition-all ${
                              count === n ? 'bg-[#8B4513] text-white' : 'bg-white/10 text-white/60 active:bg-white/20'
                            }`}
                          >{n}</motion.button>
                        ))}
                      </div>

                      <motion.button whileTap={{ scale: 0.95 }} onClick={goNext}
                        className="w-full bg-[#8B4513] text-white py-4 rounded-2xl font-['Exo',sans-serif] text-lg active:bg-[#6e3610] transition-colors flex items-center justify-center gap-2 mb-2">
                        Continue <ChevronRight size={20} />
                      </motion.button>
                      <motion.button whileTap={{ scale: 0.95 }} onClick={goBack}
                        className="w-full bg-white/8 text-white/60 py-3 rounded-2xl font-['Inter',sans-serif] text-sm active:bg-white/15 transition-colors">
                        ← Back
                      </motion.button>
                    </motion.div>
                  )}

                  {/* STEP 3 — Symptoms */}
                  {step === STEP_SYMPTOMS && (
                    <motion.div key="symptoms" initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -40, opacity: 0 }}>
                      <p className="text-white font-semibold font-['Inter',sans-serif] text-base mb-1">Any symptoms today?</p>
                      <p className="text-white/40 text-sm font-['Inter',sans-serif] mb-4">Select all that apply — tap to toggle</p>
                      <div className="grid grid-cols-2 gap-2 mb-5">
                        {SYMPTOMS.map(s => (
                          <motion.button
                            key={s.id}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => toggleSymptom(s.id)}
                            className={`flex items-center gap-3 p-3 rounded-2xl border transition-all text-left ${
                              symptoms.includes(s.id)
                                ? s.id === 'none'
                                  ? 'bg-[#CD853F]/20 border-[#CD853F]/60'
                                  : 'bg-[#8B4513]/25 border-[#8B4513]/60'
                                : 'bg-white/5 border-white/10 active:bg-white/10'
                            }`}
                          >
                            <span className="text-xl flex-shrink-0">{s.emoji}</span>
                            <span className="text-white/80 text-sm font-['Inter',sans-serif]">{s.label}</span>
                            {symptoms.includes(s.id) && <Check size={14} className="text-white ml-auto flex-shrink-0" />}
                          </motion.button>
                        ))}
                      </div>
                      <motion.button whileTap={{ scale: 0.95 }} onClick={goNext}
                        className="w-full bg-[#8B4513] text-white py-4 rounded-2xl font-['Exo',sans-serif] text-lg active:bg-[#6e3610] transition-colors flex items-center justify-center gap-2 mb-2">
                        Continue <ChevronRight size={20} />
                      </motion.button>
                      <motion.button whileTap={{ scale: 0.95 }} onClick={goBack}
                        className="w-full bg-white/8 text-white/60 py-3 rounded-2xl font-['Inter',sans-serif] text-sm active:bg-white/15 transition-colors">
                        ← Back
                      </motion.button>
                    </motion.div>
                  )}

                  {/* STEP 4 — Note + Save */}
                  {step === STEP_NOTE && (
                    <motion.div key="note" initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -40, opacity: 0 }}>
                      <p className="text-white font-semibold font-['Inter',sans-serif] text-base mb-1">
                        Add a note <span className="text-white/30 font-normal text-sm">(optional)</span>
                      </p>
                      <p className="text-white/40 text-sm font-['Inter',sans-serif] mb-3">What helped or was challenging today?</p>
                      <textarea
                        value={note}
                        onChange={e => setNote(e.target.value)}
                        placeholder="e.g., went for a walk when cravings hit, drank lots of water..."
                        rows={3}
                        className="w-full bg-white/6 border border-white/12 rounded-2xl p-4 text-white placeholder-white/25 outline-none text-sm font-['Inter',sans-serif] resize-none mb-4"
                        style={{ caretColor: '#8B4513' }}
                      />

                      {/* Summary */}
                      <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-5 space-y-2">
                        <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-2">Summary</p>
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{mood}</span>
                          <span className="text-white/60 text-sm font-['Inter',sans-serif]">{MOODS.find(m => m.emoji === mood)?.label}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{smoked ? '🚬' : '✅'}</span>
                          <span className="text-white/60 text-sm font-['Inter',sans-serif]">
                            {smoked ? `${count} cigarette${count !== 1 ? 's' : ''} smoked` : 'Stayed smoke-free!'}
                          </span>
                        </div>
                        {symptoms.length > 0 && (
                          <div className="flex items-center gap-1 flex-wrap">
                            {symptoms.map(id => (
                              <span key={id} className="bg-white/8 px-2 py-0.5 rounded-full text-xs text-white/50 font-['Inter',sans-serif]">
                                {SYMPTOMS.find(s => s.id === id)?.emoji} {SYMPTOMS.find(s => s.id === id)?.label}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={saveRecord}
                        className="w-full text-white py-4 rounded-2xl font-['Exo',sans-serif] text-lg flex items-center justify-center gap-2 mb-2 shadow-xl"
                        style={{
                          background: smoked
                            ? 'linear-gradient(135deg, #A0522D, #6e3610)'
                            : 'linear-gradient(135deg, #CD853F, #A0522D)',
                          boxShadow: smoked
                            ? '0 6px 24px rgba(160,82,45,0.35)'
                            : '0 6px 24px rgba(205,133,63,0.35)',
                        }}
                      >
                        <Check size={22} strokeWidth={2.5} />
                        Save Record
                      </motion.button>
                      <motion.button whileTap={{ scale: 0.95 }} onClick={goBack}
                        className="w-full bg-white/8 text-white/60 py-3 rounded-2xl font-['Inter',sans-serif] text-sm active:bg-white/15 transition-colors">
                        ← Back
                      </motion.button>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <BottomNav active="activity" onNavigate={(s) => navigate(s)} isPremium={isPremium} />
    </div>
  );
}

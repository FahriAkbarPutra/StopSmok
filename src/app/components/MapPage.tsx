import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, Search, X, MapPin, ZoomIn, ZoomOut, Flame, Navigation } from 'lucide-react';
import { BottomNav } from './BottomNav';
import type { UserData } from '../App';

interface MapPageProps {
  userData: UserData;
  navigate: (screen: string) => void;
}

interface MapUser {
  id: number;
  name: string;
  avatar: string;
  days: number;
  city: string;
  status: 'online' | 'today' | 'offline';
  x: number; // percent from left
  y: number; // percent from top
  streak: number;
  badge: string;
}

const MAP_USERS: MapUser[] = [
  { id: 1, name: '@ChampionQuitter', avatar: '👨‍💼', days: 365, city: 'Jakarta', status: 'online', x: 42, y: 22, streak: 365, badge: '🏆' },
  { id: 2, name: '@SmokeFreeStar', avatar: '👩‍🦱', days: 280, city: 'Bali', status: 'online', x: 72, y: 28, streak: 280, badge: '⭐' },
  { id: 3, name: '@HealthHero', avatar: '🧔', days: 210, city: 'Surabaya', status: 'today', x: 28, y: 47, streak: 60, badge: '💪' },
  { id: 4, name: '@CleanBreath', avatar: '👩', days: 180, city: 'Bandung', status: 'online', x: 55, y: 45, streak: 180, badge: '🌟' },
  { id: 5, name: '@FreshStart99', avatar: '👦', days: 95, city: 'Medan', status: 'today', x: 62, y: 60, streak: 30, badge: '🌱' },
  { id: 6, name: '@QuitKing', avatar: '👩‍🦳', days: 150, city: 'Yogya', status: 'online', x: 35, y: 62, streak: 150, badge: '👑' },
  { id: 7, name: '@NoMoreSmoke', avatar: '🧑', days: 45, city: 'Semarang', status: 'offline', x: 80, y: 52, streak: 45, badge: '🔥' },
  { id: 8, name: '@StrongWill', avatar: '👨', days: 320, city: 'Makassar', status: 'online', x: 48, y: 72, streak: 320, badge: '💎' },
];

const STREET_LINES = [
  // Horizontal streets
  { x1: 0, y1: 20, x2: 100, y2: 20, name: 'Chittenden Avenue' },
  { x1: 0, y1: 38, x2: 100, y2: 38, name: 'Whittier Street' },
  { x1: 0, y1: 56, x2: 100, y2: 56, name: 'Dresden Street' },
  { x1: 0, y1: 74, x2: 100, y2: 74, name: 'McDowell Street' },
  // Vertical streets
  { x1: 25, y1: 0, x2: 25, y2: 100, name: 'Southwood Ave' },
  { x1: 50, y1: 0, x2: 50, y2: 100, name: 'Chesapeake Ave' },
  { x1: 75, y1: 0, x2: 75, y2: 100, name: 'Bretton Place' },
  // Diagonal
  { x1: 0, y1: 0, x2: 40, y2: 35, name: '' },
  { x1: 60, y1: 65, x2: 100, y2: 100, name: '' },
];

const BLOCKS = [
  { x: 0, y: 0, w: 23, h: 18 },
  { x: 27, y: 0, w: 21, h: 18 },
  { x: 52, y: 0, w: 21, h: 18 },
  { x: 77, y: 0, w: 23, h: 18 },
  { x: 0, y: 22, w: 23, h: 14 },
  { x: 27, y: 22, w: 21, h: 14 },
  { x: 52, y: 22, w: 21, h: 14 },
  { x: 0, y: 40, w: 23, h: 14 },
  { x: 27, y: 40, w: 21, h: 14 },
  { x: 52, y: 40, w: 21, h: 14 },
  { x: 77, y: 40, w: 23, h: 14 },
  { x: 0, y: 58, w: 23, h: 14 },
  { x: 27, y: 58, w: 21, h: 14 },
  { x: 52, y: 58, w: 21, h: 14 },
  { x: 77, y: 58, w: 23, h: 14 },
  { x: 0, y: 76, w: 23, h: 24 },
  { x: 27, y: 76, w: 21, h: 24 },
  { x: 52, y: 76, w: 21, h: 24 },
  { x: 77, y: 76, w: 23, h: 24 },
];

function statusColor(s: MapUser['status']) {
  if (s === 'online') return '#CD853F';
  if (s === 'today') return '#C19A6B';
  return '#6b6b6b';
}

export function MapPage({ userData, navigate }: MapPageProps) {
  const isPremium = userData.subscription !== 'none';

  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<MapUser | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [filter, setFilter] = useState<'all' | 'online' | 'today'>('all');
  const mapRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });

  const filteredUsers = MAP_USERS.filter(u => {
    const matchSearch = u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.city.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'all' || u.status === filter;
    return matchSearch && matchFilter;
  });

  const onMapPointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest('[data-user-pin]')) return;
    isDragging.current = true;
    lastPos.current = { x: e.clientX, y: e.clientY };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onMapPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;
    lastPos.current = { x: e.clientX, y: e.clientY };
    setPan(p => ({
      x: Math.max(-150, Math.min(150, p.x + dx)),
      y: Math.max(-200, Math.min(200, p.y + dy)),
    }));
  };

  const onMapPointerUp = () => { isDragging.current = false; };

  const zoomIn = () => setZoom(z => Math.min(2.5, z + 0.3));
  const zoomOut = () => setZoom(z => Math.max(0.6, z - 0.3));
  const resetView = () => { setZoom(1); setPan({ x: 0, y: 0 }); };

  const quitDate = userData.quitDate || new Date();
  const days = Math.floor((Date.now() - quitDate.getTime()) / 86400000);

  return (
    <div className="relative h-full overflow-hidden bg-[#8e8e93]">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center gap-2 px-3 pt-14 pb-2">
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => navigate('home')}
          className="w-10 h-10 flex items-center justify-center rounded-full active:bg-black/10 transition-colors"
        >
          <ChevronLeft size={22} strokeWidth={3} className="text-[#1e1e1e]" />
        </motion.button>
        <p className="text-black text-base font-['Inter',sans-serif]">View People</p>
      </div>

      {/* The Map */}
      <div
        ref={mapRef}
        className="absolute left-[9px] right-[9px] top-[77px] rounded-[27px] overflow-hidden"
        style={{ bottom: '90px', background: '#343434', cursor: 'grab', touchAction: 'none' }}
        onPointerDown={onMapPointerDown}
        onPointerMove={onMapPointerMove}
        onPointerUp={onMapPointerUp}
      >
        {/* Pannable/zoomable map canvas */}
        <motion.div
          className="absolute inset-0"
          style={{
            transformOrigin: 'center center',
            scale: zoom,
            x: pan.x,
            y: pan.y,
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 30 }}
        >
          {/* City blocks */}
          {BLOCKS.map((b, i) => (
            <div
              key={`block-${i}`}
              className="absolute rounded-sm"
              style={{
                left: `${b.x}%`, top: `${b.y}%`,
                width: `${b.w}%`, height: `${b.h}%`,
                background: i % 3 === 0 ? '#3e3e3e' : '#3a3a3a',
              }}
            />
          ))}

          {/* Street lines SVG */}
          <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
            {/* Main roads */}
            {STREET_LINES.map((l, i) => (
              <line
                key={`road-${i}`}
                x1={`${l.x1}%`} y1={`${l.y1}%`}
                x2={`${l.x2}%`} y2={`${l.y2}%`}
                stroke="#4A4A4A" strokeWidth={l.name ? 9 : 5}
                strokeLinecap="round"
              />
            ))}
            {/* Secondary road grid */}
            {[10, 35, 62, 88].map(v => (
              <line key={`h-${v}`} x1="0" y1={`${v}%`} x2="100%" y2={`${v}%`}
                stroke="#424242" strokeWidth="3" strokeLinecap="round" />
            ))}
            {[13, 38, 63, 88].map(v => (
              <line key={`v-${v}`} x1={`${v}%`} y1="0" x2={`${v}%`} y2="100%"
                stroke="#424242" strokeWidth="3" strokeLinecap="round" />
            ))}
          </svg>

          {/* Street name labels */}
          {STREET_LINES.filter(l => l.name).map((l, i) => (
            <div
              key={`label-${i}`}
              className="absolute pointer-events-none"
              style={{
                left: `${(l.x1 + l.x2) / 2}%`,
                top: `${(l.y1 + l.y2) / 2}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <p className="text-[#d5d5d5] text-[11px] font-semibold font-['Inter',sans-serif] whitespace-nowrap select-none">
                {l.name}
              </p>
            </div>
          ))}

          {/* Building label */}
          <div className="absolute pointer-events-none text-center" style={{ left: '3%', top: '2%', width: '20%' }}>
            <p className="text-[#d5d5d5] text-[9px] font-semibold font-['Roboto',sans-serif] leading-tight select-none">
              PURNIMA EDUCATION<br />PRIMARY SCHOOL
            </p>
          </div>

          {/* User pins */}
          {filteredUsers.map((user, i) => (
            <motion.button
              key={`pin-${user.id}`}
              data-user-pin="true"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.08, type: 'spring', stiffness: 300, damping: 20 }}
              whileTap={{ scale: 0.85 }}
              onClick={(e) => { e.stopPropagation(); setSelected(user); }}
              className="absolute flex flex-col items-center"
              style={{ left: `${user.x}%`, top: `${user.y}%`, transform: 'translate(-50%, -50%)', zIndex: 10 }}
            >
              {/* Pulse ring for online users */}
              {user.status === 'online' && (
                <motion.div
                  className="absolute rounded-full border-2 border-[#CD853F]/50"
                  initial={{ width: 53, height: 53, opacity: 0.8 }}
                  animate={{ width: 80, height: 80, opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                />
              )}

              {/* Avatar circle */}
              <div
                className="w-[53px] h-[53px] rounded-full flex items-center justify-center text-2xl border-[3px] shadow-lg select-none"
                style={{
                  background: 'linear-gradient(135deg, #2a2a2a, #1a1a1a)',
                  borderColor: selected?.id === user.id ? '#8B4513' : statusColor(user.status),
                  boxShadow: `0 4px 16px rgba(0,0,0,0.5), 0 0 0 2px ${statusColor(user.status)}40`,
                }}
              >
                {user.avatar}
              </div>

              {/* Status dot */}
              <div
                className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-[#343434]"
                style={{ background: statusColor(user.status) }}
              />
            </motion.button>
          ))}

          {/* "You are here" pin */}
          <motion.div
            className="absolute flex flex-col items-center"
            style={{ left: '50%', top: '50%', transform: 'translate(-50%,-50%)', zIndex: 20 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="w-10 h-10 rounded-full bg-[#8B4513] border-4 border-white shadow-xl flex items-center justify-center">
              <span className="text-lg">👤</span>
            </div>
            <div className="w-0 h-0" style={{ borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '10px solid #8B4513' }} />
          </motion.div>
        </motion.div>

        {/* Search bar overlay */}
        <div className="absolute top-3 left-3 right-3 z-10">
          <div className="flex items-center gap-2 px-4 h-11 rounded-[21px] shadow-lg border border-white/10"
            style={{ background: 'rgba(153,153,153,0.75)', backdropFilter: 'blur(10px)' }}>
            <Search size={16} className="text-black/60 flex-shrink-0" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search"
              className="flex-1 bg-transparent text-black placeholder-black/50 outline-none text-sm font-['Inter',sans-serif]"
              onClick={e => e.stopPropagation()}
              onPointerDown={e => e.stopPropagation()}
            />
            {search && (
              <button onClick={e => { e.stopPropagation(); setSearch(''); }}
                className="text-black/40 active:text-black/60">
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Filter chips */}
        <div className="absolute top-16 left-3 z-10 flex gap-2">
          {([['all', 'All'], ['online', 'Online'], ['today', 'Today']] as [typeof filter, string][]).map(([v, label]) => (
            <motion.button
              key={v}
              whileTap={{ scale: 0.9 }}
              onClick={e => { e.stopPropagation(); setFilter(v); }}
              onPointerDown={e => e.stopPropagation()}
              className="px-3 py-1.5 rounded-full text-xs font-semibold font-['Inter',sans-serif] transition-all border"
              style={{
                background: filter === v ? '#8B4513' : 'rgba(50,50,50,0.8)',
                color: filter === v ? 'white' : 'rgba(255,255,255,0.6)',
                borderColor: filter === v ? '#8B4513' : 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(8px)',
              }}
            >
              {label}
            </motion.button>
          ))}
        </div>

        {/* Zoom controls */}
        <div className="absolute right-3 bottom-3 z-10 flex flex-col gap-2"
          onPointerDown={e => e.stopPropagation()}>
          <motion.button whileTap={{ scale: 0.88 }} onClick={e => { e.stopPropagation(); zoomIn(); }}
            className="w-9 h-9 rounded-full bg-[rgba(50,50,50,0.9)] border border-white/10 flex items-center justify-center shadow-lg active:bg-[rgba(70,70,70,0.9)] transition-colors">
            <ZoomIn size={16} className="text-white" />
          </motion.button>
          <motion.button whileTap={{ scale: 0.88 }} onClick={e => { e.stopPropagation(); zoomOut(); }}
            className="w-9 h-9 rounded-full bg-[rgba(50,50,50,0.9)] border border-white/10 flex items-center justify-center shadow-lg active:bg-[rgba(70,70,70,0.9)] transition-colors">
            <ZoomOut size={16} className="text-white" />
          </motion.button>
          <motion.button whileTap={{ scale: 0.88 }} onClick={e => { e.stopPropagation(); resetView(); }}
            className="w-9 h-9 rounded-full bg-[#8B4513] border border-white/10 flex items-center justify-center shadow-lg active:bg-[#6e3610] transition-colors">
            <Navigation size={14} className="text-white" />
          </motion.button>
        </div>

        {/* Online counter */}
        <div className="absolute left-3 bottom-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10"
          style={{ background: 'rgba(205,133,63,0.2)', backdropFilter: 'blur(8px)' }}>
          <div className="w-2 h-2 rounded-full bg-[#CD853F]" />
          <span className="text-[#CD853F] text-xs font-bold font-['Inter',sans-serif]">
            {MAP_USERS.filter(u => u.status === 'online').length} online
          </span>
        </div>

        {/* Premium lock overlay */}
        {!isPremium && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ background: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(6px)' }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-center px-8"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-6xl mb-4"
              >🔒</motion.div>
              <p className="text-white text-2xl font-bold font-['Exo',sans-serif] mb-2">Map is Locked</p>
              <p className="text-white/50 text-sm font-['Inter',sans-serif] mb-6 leading-relaxed">
                Subscribe to Premium to see other Mintly users on the map and connect with them
              </p>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('settings')}
                className="bg-[#8B4513] text-white px-8 py-3.5 rounded-2xl font-bold font-['Exo',sans-serif] text-base active:bg-[#6e3610] transition-colors shadow-xl"
              >
                👑 Go Premium
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* User detail card */}
      <AnimatePresence>
        {selected && isPremium && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-30"
              onClick={() => setSelected(null)}
            />
            <motion.div
              initial={{ y: 300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 300, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 280, damping: 28 }}
              className="absolute bottom-[90px] left-4 right-4 z-40 rounded-3xl overflow-hidden border border-white/10"
              style={{ background: 'linear-gradient(135deg, #1a1a2e, #16213e)' }}
              onClick={e => e.stopPropagation()}
            >
              {/* Grabber */}
              <div className="flex justify-center pt-3 pb-1">
                <div className="w-10 h-1 rounded-full bg-white/20" />
              </div>

              <div className="p-5">
                <div className="flex items-start gap-4 mb-4">
                  {/* Avatar */}
                  <div className="relative flex-shrink-0">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl border-2"
                      style={{
                        background: 'linear-gradient(135deg, #2a2a2a, #1a1a1a)',
                        borderColor: statusColor(selected.status),
                        boxShadow: `0 0 20px ${statusColor(selected.status)}40`,
                      }}
                    >
                      {selected.avatar}
                    </div>
                    <div
                      className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-[#1a1a2e]"
                      style={{ background: statusColor(selected.status) }}
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-white font-bold font-['Inter',sans-serif] text-base truncate">{selected.name}</p>
                      <span className="text-lg">{selected.badge}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={12} className="text-white/40" />
                      <p className="text-white/40 text-xs font-['Inter',sans-serif]">{selected.city}</p>
                      <span className="text-white/20 text-xs">•</span>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: statusColor(selected.status) }} />
                      <span className="text-xs font-['Inter',sans-serif]" style={{ color: statusColor(selected.status) }}>
                        {selected.status === 'online' ? 'Online now' : selected.status === 'today' ? 'Active today' : 'Offline'}
                      </span>
                    </div>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    onClick={() => setSelected(null)}
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0"
                  >
                    <X size={15} className="text-white" />
                  </motion.button>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { emoji: '📅', value: `${selected.days}d`, label: 'Smoke-free' },
                    { emoji: '🔥', value: `${selected.streak}d`, label: 'Streak' },
                    { emoji: '🏅', value: selected.badge, label: 'Badge' },
                  ].map(s => (
                    <div key={s.label} className="bg-white/5 rounded-xl p-3 text-center">
                      <span className="text-xl">{s.emoji}</span>
                      <p className="text-white font-bold font-['Exo',sans-serif] mt-1 text-sm">{s.value}</p>
                      <p className="text-white/40 text-[10px] font-['Inter',sans-serif]">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('chat')}
                    className="flex-1 bg-[#8B4513] text-white py-3 rounded-2xl font-['Exo',sans-serif] text-sm font-semibold active:bg-[#6e3610] transition-colors flex items-center justify-center gap-2"
                  >
                    💬 Message
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('duel')}
                    className="flex-1 bg-white/8 text-white py-3 rounded-2xl font-['Exo',sans-serif] text-sm font-semibold active:bg-white/15 transition-colors flex items-center justify-center gap-2 border border-white/10"
                  >
                    ⚔️ Duel
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Your position card — only show if premium and no user selected */}
      {isPremium && !selected && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute bottom-[90px] left-4 right-4 z-10 rounded-2xl p-4 border border-white/10 flex items-center gap-3"
          style={{ background: 'linear-gradient(135deg, rgba(123,47,0,0.6), rgba(0,0,0,0.4))', backdropFilter: 'blur(12px)' }}
        >
          <div className="w-10 h-10 rounded-xl bg-[#8B4513] flex items-center justify-center text-xl flex-shrink-0">👤</div>
          <div className="flex-1">
            <p className="text-white font-bold font-['Exo',sans-serif] text-sm">{userData.name || 'You'}</p>
            <p className="text-white/50 text-xs font-['Inter',sans-serif]">
              {Math.floor((Date.now() - (userData.quitDate || new Date()).getTime()) / 86400000)} days smoke-free • You are here
            </p>
          </div>
          <div className="flex items-center gap-1.5 bg-[#CD853F]/20 border border-[#CD853F]/30 px-2.5 py-1 rounded-full">
            <Flame size={12} className="text-[#CD853F]" />
            <span className="text-[#CD853F] text-xs font-bold font-['Exo',sans-serif]">{days}d</span>
          </div>
        </motion.div>
      )}

      <BottomNav active="map" onNavigate={(s) => navigate(s)} isPremium={isPremium} />
    </div>
  );
}

import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, Search, Send } from 'lucide-react';
import { BottomNav, type MainScreen } from './BottomNav';
import type { UserData } from '../App';

interface ChatPageProps {
  userData: UserData;
  navigate: (screen: string) => void;
}

const chatUsers = [
  { id: 1, name: 'User01', msg: 'how was your progress?', time: 'now', unread: true, avatar: '😊' },
  { id: 2, name: 'User02', msg: 'okayyy', time: '2 min', unread: false, avatar: '💪' },
  { id: 3, name: 'User03', msg: "i think i'll quit soon", time: '1 hour', unread: false, avatar: '🌱' },
  { id: 4, name: 'User04', msg: "you're right!!", time: '4 hour', unread: true, avatar: '🔥' },
  { id: 5, name: 'User05', msg: "That's awesome!!", time: '4 hour', unread: true, avatar: '⭐' },
  { id: 6, name: 'User06', msg: 'seen today', time: 'today', unread: false, avatar: '👁️' },
  { id: 7, name: 'User07', msg: 'send yesterday', time: 'yesterday', unread: false, avatar: '📨' },
  { id: 8, name: 'User08', msg: 'send yesterday', time: 'yesterday', unread: false, avatar: '✌️' },
  { id: 9, name: 'SmokeFreeClub', msg: 'Welcome to the group!', time: '2 days', unread: false, avatar: '🏅' },
  { id: 10, name: 'HealthTips Bot', msg: 'Your daily health tip...', time: '2 days', unread: false, avatar: '💊' },
];

interface Message {
  id: number;
  text: string;
  from: 'me' | 'them';
  time: string;
}

const initMessages: Message[] = [
  { id: 1, text: 'Hey! How are you doing with quitting?', from: 'them', time: '10:00' },
  { id: 2, text: "Great! I've been smoke-free for a while now!", from: 'me', time: '10:02' },
  { id: 3, text: 'That is amazing! Keep it up! 🎉', from: 'them', time: '10:03' },
  { id: 4, text: "Thanks! It's tough but worth it!", from: 'me', time: '10:05' },
  { id: 5, text: 'how was your progress?', from: 'them', time: '10:10' },
];

export function ChatPage({ userData, navigate }: ChatPageProps) {
  const [activeChat, setActiveChat] = useState<number | null>(null);
  const [messages, setMessages] = useState<Message[]>(initMessages);
  const [inputText, setInputText] = useState('');
  const [searchText, setSearchText] = useState('');
  const isPremium = userData.subscription !== 'none';

  const filtered = chatUsers.filter(u =>
    u.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const sendMessage = () => {
    if (!inputText.trim()) return;
    const newMsg: Message = {
      id: messages.length + 1,
      text: inputText.trim(),
      from: 'me',
      time: new Date().toLocaleTimeString('en', { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages(prev => [...prev, newMsg]);
    setInputText('');

    // Simulate reply
    setTimeout(() => {
      const replies = ["That's so inspiring! 💪", 'Keep it up!', 'Amazing progress! 🎉', 'You got this! 🔥', 'Proud of you! ❤️'];
      const reply: Message = {
        id: messages.length + 2,
        text: replies[Math.floor(Math.random() * replies.length)],
        from: 'them',
        time: new Date().toLocaleTimeString('en', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, reply]);
    }, 1000);
  };

  if (activeChat !== null) {
    const user = chatUsers.find(u => u.id === activeChat)!;
    return (
      <div className="relative h-full bg-[#f5f5f5] flex flex-col overflow-hidden">
        {/* Chat header */}
        <div className="flex items-center gap-3 px-4 pt-12 pb-3 bg-white border-b border-gray-100 shadow-sm">
          <button
            onClick={() => setActiveChat(null)}
            className="w-10 h-10 flex items-center justify-center rounded-full active:bg-gray-100 transition-colors"
          >
            <ChevronLeft size={22} strokeWidth={2.5} className="text-[#1e1e1e]" />
          </button>
          <div className="w-10 h-10 rounded-full bg-[#8B4513]/10 flex items-center justify-center text-xl">{user.avatar}</div>
          <div>
            <p className="font-semibold font-['Inter',sans-serif] text-gray-900">{user.name}</p>
            <p className="text-xs text-[#CD853F] font-['Inter',sans-serif]">Online</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ scrollbarWidth: 'none' }}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.from === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.from === 'them' && (
                <div className="w-8 h-8 rounded-full bg-[#8B4513]/10 flex items-center justify-center text-sm mr-2 flex-shrink-0">
                  {user.avatar}
                </div>
              )}
              <div
                className={`max-w-[70%] rounded-2xl px-4 py-2.5 ${
                  msg.from === 'me'
                    ? 'bg-[#8B4513] text-white rounded-br-sm'
                    : 'bg-white text-gray-800 shadow-sm rounded-bl-sm'
                }`}
              >
                <p className="text-sm font-['Inter',sans-serif]">{msg.text}</p>
                <p className={`text-[10px] mt-1 ${msg.from === 'me' ? 'text-white/60' : 'text-gray-400'}`}>{msg.time}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Input bar */}
        <div className="px-4 py-3 bg-white border-t border-gray-100 flex items-center gap-3">
          <div className="flex-1 bg-gray-100 rounded-full px-4 py-2.5 flex items-center">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 bg-transparent outline-none text-sm font-['Inter',sans-serif] text-gray-800 placeholder-gray-400"
            />
          </div>
          <button
            onClick={sendMessage}
            className="w-11 h-11 rounded-full bg-[#8B4513] flex items-center justify-center active:scale-90 transition-all shadow-md"
          >
            <Send size={18} className="text-white" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full bg-[#999] overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center gap-3 px-4 pt-[50px] pb-3 bg-[#999]">
        <button
          onClick={() => navigate('home')}
          className="w-10 h-10 flex items-center justify-center rounded-full active:bg-black/10 transition-colors"
        >
          <ChevronLeft size={22} strokeWidth={2.5} className="text-[#1e1e1e]" />
        </button>
        <p className="text-[#1e1e1e] text-base font-['Inter',sans-serif]">Chat</p>
      </div>

      <div className="absolute inset-0 overflow-y-auto pt-[105px] pb-24" style={{ scrollbarWidth: 'none' }}>
        {/* Search bar */}
        <div className="px-4 mb-3">
          <div className="flex items-center gap-2 bg-gradient-to-r from-[#8B4513] to-[#999] rounded-[29px] px-4 h-11">
            <Search size={18} className="text-white/70" />
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search"
              className="flex-1 bg-transparent text-white placeholder-white/60 outline-none text-sm font-['Inter',sans-serif]"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-black/20 mx-4 mb-2" />

        {/* Chat list */}
        {filtered.map((user, i) => (
          <motion.button
            key={user.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.04 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveChat(user.id)}
            className="w-full flex items-center gap-4 px-4 py-4 hover:bg-black/5 active:bg-black/10 transition-colors border-b border-black/5 relative"
          >
            {user.unread && (
              <div className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#8B4513]" />
            )}
            <div className="w-[76px] h-[76px] rounded-full bg-gray-200 flex items-center justify-center text-3xl flex-shrink-0 overflow-hidden border border-gray-300">
              <span>{user.avatar}</span>
            </div>
            <div className="flex-1 min-w-0 text-left">
              <div className="flex items-center justify-between">
                <p className="font-bold font-['Inter',sans-serif] text-black text-base">{user.name}</p>
                <p className="text-gray-500 text-sm font-['Inter',sans-serif]">{user.time}</p>
              </div>
              <p className={`text-sm font-['Inter',sans-serif] truncate mt-0.5 ${user.unread ? 'font-bold text-black' : 'text-gray-600'}`}>
                {user.msg}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      <BottomNav active="chat" onNavigate={(s) => navigate(s)} isPremium={isPremium} />
    </div>
  );
}

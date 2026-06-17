import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { LandingPage } from './components/LandingPage';
import { LoginPage } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage';
import { TermsPage } from './components/TermsPage';
import { OnboardingFlow } from './components/OnboardingFlow';
import { Dashboard } from './components/Dashboard';
import { AchievementsPage } from './components/AchievementsPage';
import { DuelPage } from './components/DuelPage';
import { ChatPage } from './components/ChatPage';
import { SettingsPage } from './components/SettingsPage';
import { TrackingPage } from './components/TrackingPage';
import { MapPage } from './components/MapPage';
import { BottomNav, type MainScreen } from './components/BottomNav';

export type Screen =
  | 'landing'
  | 'login'
  | 'register'
  | 'terms'
  | 'onboarding'
  | 'duel'
  | MainScreen;

export interface UserData {
  name: string;
  email: string;
  quitDate: Date | null;
  cigarettesPerDay: number;
  cigarettesPerPack: number;
  packPrice: number;
  currency: string;
  currencySymbol: string;
  subscription: 'none' | '1month' | '3months' | '1year';
  notifications: boolean;
}

const defaultUserData: UserData = {
  name: '',
  email: '',
  quitDate: null,
  cigarettesPerDay: 10,
  cigarettesPerPack: 20,
  packPrice: 25000,
  currency: 'IDR',
  currencySymbol: 'Rp',
  subscription: 'none',
  notifications: true,
};

export default function App() {
  const [screen, setScreen] = useState<Screen>('landing');
  const [userData, setUserData] = useState<UserData>(defaultUserData);

  const navigate = (s: Screen) => setScreen(s);
  const updateUserData = (data: Partial<UserData>) =>
    setUserData((prev) => ({ ...prev, ...data }));

  const handleLogout = () => {
    setUserData(defaultUserData);
    setScreen('landing');
  };

  const renderScreen = () => {
    switch (screen) {
      case 'landing':
        return (
          <LandingPage
            onLogin={() => navigate('login')}
            onRegister={() => navigate('register')}
          />
        );
      case 'login':
        return (
          <LoginPage
            onSuccess={() => navigate('home')}
            onRegister={() => navigate('register')}
            onBack={() => navigate('landing')}
          />
        );
      case 'register':
        return (
          <RegisterPage
            onSuccess={() => navigate('terms')}
            onLogin={() => navigate('login')}
            onBack={() => navigate('landing')}
            userData={userData}
            updateUserData={updateUserData}
          />
        );
      case 'terms':
        return (
          <TermsPage
            onAccept={() => navigate('onboarding')}
            onBack={() => navigate('register')}
          />
        );
      case 'onboarding':
        return (
          <OnboardingFlow
            onComplete={() => navigate('home')}
            userData={userData}
            updateUserData={updateUserData}
          />
        );
      case 'home':
        return (
          <Dashboard
            userData={userData}
            navigate={(s: string) => navigate(s as Screen)}
          />
        );
      case 'achievements':
        return (
          <AchievementsPage
            userData={userData}
            navigate={(s: string) => navigate(s as Screen)}
          />
        );
      case 'duel':
        return (
          <DuelPage
            userData={userData}
            navigate={(s: string) => navigate(s as Screen)}
          />
        );
      case 'chat':
        return (
          <ChatPage
            userData={userData}
            navigate={(s: string) => navigate(s as Screen)}
          />
        );
      case 'activity':
        return (
          <TrackingPage
            userData={userData}
            navigate={(s: string) => navigate(s as Screen)}
          />
        );
      case 'settings':
        return (
          <SettingsPage
            userData={userData}
            navigate={(s: string) => navigate(s as Screen)}
            onLogout={handleLogout}
          />
        );
      case 'map':
        return (
          <MapPage
            userData={userData}
            navigate={(s: string) => navigate(s as Screen)}
          />
        );
      default:
        return (
          <Dashboard
            userData={userData}
            navigate={(s: string) => navigate(s as Screen)}
          />
        );
    }
  };

  return (
    <div
      className="w-full flex items-stretch justify-center sm:items-center sm:p-4 md:p-6"
      style={{ minHeight: '100dvh', background: 'linear-gradient(135deg, #1a1a1a 0%, #2d1510 50%, #1a1a1a 100%)' }}
    >
      <div
        className="relative overflow-hidden w-full max-w-[440px] sm:rounded-[44px] sm:border sm:border-white/10"
        style={{
          height: '100dvh',
          background: '#8e8e93',
        }}
        data-app-frame
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={screen}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="absolute inset-0"
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}


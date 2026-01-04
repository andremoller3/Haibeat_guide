import React, { useState, useEffect } from 'react';
import { Header, BottomNav } from './Layout';
import { HomeView, HouseGuideView, LocalGuideView, InfoView } from './Views';
import { Language, TabId } from './types';
import { TRANSLATIONS } from './constants';

const App: React.FC = () => {
  // State for language (defaulting to English for demo, could detect browser lang)
  const [lang, setLang] = useState<Language>('en');

  // State for active tab
  const [activeTab, setActiveTab] = useState<TabId>('home');

  // Toggle language function
  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'pt' : 'en'));
  };

  // Get current translations based on state
  const t = TRANSLATIONS[lang];

  // Render the active view
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView t={t.home} onNavigate={setActiveTab} />;
      case 'house':
        return <HouseGuideView t={t.house} lang={lang} />;
      case 'local':
        return <LocalGuideView t={t.local} lang={lang} />;
      case 'info':
        return <InfoView t={t.info} />;
      default:
        return <HomeView t={t.home} onNavigate={setActiveTab} />;
    }
  };

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <div className="min-h-screen font-sans text-stone-800 bg-white flex flex-col">
      {/* Header */}
      <Header currentLang={lang} onToggleLang={toggleLanguage} />

      {/* Main Content Area */}
      <main className="flex-1 px-6 pt-6 pb-24 max-w-md mx-auto w-full">
        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} t={t.nav} />
    </div>
  );
};

export default App;
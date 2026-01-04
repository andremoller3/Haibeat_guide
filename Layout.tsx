import React from 'react';
import { Home, BookOpen, Map, Info, Globe } from 'lucide-react';
import { Language, TabId, TranslationContent } from '../types';

// --- Header Component ---
interface HeaderProps {
  currentLang: Language;
  onToggleLang: () => void;
}

const Logo: React.FC = () => (
  <div className="flex items-center gap-1 md:gap-3 select-none">
    {/* Visual Icon Group: Tree + Bird + House + Heart + Pulse + Zzz */}
    <div className="relative h-12 w-auto aspect-[1.4] flex-shrink-0">
      <svg viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        {/* Tree (Left) */}
        <g transform="translate(10, 30)">
          {/* Trunk */}
          <rect x="18" y="45" width="4" height="10" fill="white" rx="1" />
          {/* Foliage (Stacked Triangles) */}
          <path d="M20 5 L5 25 H35 L20 5Z" fill="#14B8A6" /> 
          <path d="M20 18 L2 40 H38 L20 18Z" fill="#14B8A6" />
        </g>

        {/* Bird (Flying between tree and house) */}
        <path d="M48 35 C50 38, 54 38, 56 32" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

        {/* House (Center) */}
        <g transform="translate(60, 25)">
             <path d="M25 0 L50 20 V60 H0 V20 L25 0Z" stroke="white" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
        </g>

        {/* Heart (Inside House) */}
         <path d="M85 45 C85 45, 95 38, 105 45 C115 52, 110 65, 85 80 C60 65, 55 52, 65 45 C75 38, 85 45, 85 45" stroke="white" strokeWidth="1.5" strokeLinecap="round" />

        {/* Heartbeat Pulse (Crossing Heart) */}
        <path d="M62 62 H78 L82 52 L88 72 L92 58 L96 62 H108" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

        {/* Zzz (Top Right) */}
        <g fill="#2DD4BF" style={{ fontFamily: 'serif', fontWeight: 'bold' }}>
          <text x="115" y="30" fontSize="10">z</text>
          <text x="122" y="22" fontSize="12">z</text>
          <text x="130" y="14" fontSize="14">z</text>
        </g>
      </svg>
    </div>

    {/* Typography */}
    <div className="flex flex-col justify-center items-center pl-1">
      <div className="flex items-baseline tracking-tight leading-none">
        <span className="font-serif text-2xl md:text-3xl text-white">Sleep</span>
        <span className="font-serif text-2xl md:text-3xl text-teal-400 mx-px">HAI</span>
        <span className="font-serif text-2xl md:text-3xl text-white">beat</span>
      </div>
      <span className="text-[9px] md:text-[11px] text-teal-500 font-sans font-bold tracking-[0.2em] uppercase text-center mt-1">
        Alojamento Local
      </span>
    </div>
  </div>
);

export const Header: React.FC<HeaderProps> = ({ currentLang, onToggleLang }) => {
  return (
    <header className="sticky top-0 z-50 bg-navy-500 border-b border-navy-600 px-3 py-2 md:px-6 md:py-4 flex justify-between items-center shadow-md transition-all duration-300">
      <Logo />

      <button
        onClick={onToggleLang}
        className="flex items-center gap-1.5 bg-navy-600 px-3 py-1.5 rounded-full border border-navy-400 active:scale-95 transition-transform hover:bg-navy-700 ml-2"
        aria-label="Toggle Language"
      >
        <Globe size={16} className="text-teal-400" />
        <span className="text-xs font-semibold text-white w-5 text-center">
          {currentLang.toUpperCase()}
        </span>
      </button>
    </header>
  );
};

// --- Bottom Navigation Component ---
interface BottomNavProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
  t: TranslationContent['nav'];
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange, t }) => {
  const navItems: { id: TabId; icon: React.ElementType; label: string }[] = [
    { id: 'home', icon: Home, label: t.home },
    { id: 'house', icon: BookOpen, label: t.house },
    { id: 'local', icon: Map, label: t.local },
    { id: 'info', icon: Info, label: t.info },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-stone-200 pb-safe pt-2 px-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.02)] z-50 pb-5">
      <div className="flex justify-between items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`flex flex-col items-center gap-1 w-16 transition-colors duration-200 ${
                isActive ? 'text-teal-600' : 'text-stone-400 hover:text-stone-500'
              }`}
            >
              <item.icon
                size={24}
                strokeWidth={isActive ? 2.5 : 2}
                className={`transition-transform duration-200 ${isActive ? '-translate-y-1' : ''}`}
              />
              <span className={`text-[10px] font-medium ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
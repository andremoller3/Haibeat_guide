import React, { useState } from 'react';
import {
  Wifi, Copy, Check,
  Utensils, Umbrella, ShoppingCart, Phone, User, MapPin,
  LogOut, Tv, ThermometerSnowflake, Trash2, Droplets, Flame, Zap,
  LogIn, AlertTriangle, FileText, ShieldAlert, ChevronDown, Sparkles, AlertCircle,
  Mountain, Star, ArrowUpRight, Ambulance, Pill, Bus, Car, Book, Fan, Coffee,
  Baby, Clock, Route, TrendingUp, Download, Fuel, Eye, Landmark, Image as ImageIcon,
  Printer, ChevronLeft, ChevronRight
} from 'lucide-react';
import { TranslationContent, Recommendation, Language, TabId, LocalCategoryId } from './types';
import { HOUSE_GUIDE_DATA, RECOMMENDATIONS_DATA, PROPERTY_DATA } from './constants';

// --- Home View ---
interface HomeViewProps {
  t: TranslationContent['home'];
  onNavigate: (tab: TabId) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ t, onNavigate }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyWifi = () => {
    navigator.clipboard.writeText('HAIbeatGuest2025');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const quickActions = [
    { id: 'checkin', label: t.actions.checkIn, icon: LogIn, action: () => onNavigate('house'), color: 'bg-teal-50 text-teal-700 border-teal-100' },
    { id: 'checkout', label: t.actions.checkOut, icon: LogOut, action: () => onNavigate('info'), color: 'bg-navy-50 text-navy-700 border-navy-100' },
    { id: 'emergency', label: t.actions.emergency, icon: AlertTriangle, action: () => onNavigate('info'), color: 'bg-red-50 text-red-700 border-red-100' },
    { id: 'print', label: 'Full Guide / Print', icon: Printer, action: () => onNavigate('print'), color: 'bg-stone-50 text-stone-700 border-stone-100' },
  ];

  return (
    <div className="animate-fade-in space-y-8">
      {/* Welcome Section */}
      <div className="pt-4 pb-2">
        <h1 className="text-3xl md:text-4xl font-serif text-center text-navy-900 tracking-wide leading-tight drop-shadow-sm">
          {t.welcome}
        </h1>
        <div className="w-12 h-1.5 bg-teal-400 mx-auto mt-4 rounded-full opacity-80"></div>
      </div>

      {/* Wi-Fi Card */}
      <div className="bg-navy-600 rounded-2xl p-6 shadow-lg shadow-navy-200 text-white relative overflow-hidden border border-navy-500">
        {/* Abstract background shape */}
        <div className="absolute -right-6 -top-6 w-32 h-32 bg-teal-500 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute -left-6 bottom-0 w-24 h-24 bg-navy-400 rounded-full opacity-30 blur-2xl"></div>

        <div className="relative z-10">
          <div className="flex justify-between items-start mb-6">
            <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm border border-white/10">
              <Wifi size={24} className="text-teal-300" />
            </div>
            <span className="bg-navy-800/60 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md border border-white/10 text-teal-100">
              5G Ready
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-teal-200 text-xs uppercase tracking-wider font-semibold mb-1">{t.wifiTitle}</p>
              <p className="text-xl font-bold tracking-wide">SleepHAIbeat_Guest</p>
            </div>

            <div>
              <p className="text-teal-200 text-xs uppercase tracking-wider font-semibold mb-1">{t.wifiPasswordLabel}</p>
              <div className="flex items-center gap-3">
                <p className="text-xl font-mono bg-black/20 px-2 py-1 rounded select-all border border-white/5">HAIbeatGuest2025</p>
              </div>
            </div>

            <button
              onClick={handleCopyWifi}
              className="w-full mt-2 bg-teal-500 text-white py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:bg-teal-400 active:scale-95 transition-all shadow-md border-t border-white/10"
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? t.copied : t.copy}
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-2 gap-4">
        {quickActions.map((action) => (
          <button
            key={action.id}
            onClick={action.action}
            className={`flex flex-col items-center justify-center p-5 bg-white border rounded-2xl shadow-sm hover:shadow-md transition-all active:scale-95 group ${action.color.replace('text-', 'border-').split(' ')[2] || 'border-stone-100'}`}
          >
            <div className={`p-3 rounded-full mb-3 transition-colors ${action.color} bg-opacity-50 group-hover:bg-opacity-100`}>
              <action.icon size={24} />
            </div>
            <span className="text-sm font-semibold text-navy-900 text-center">{action.label}</span>
          </button>
        ))}
      </div>

      {/* Emergency/Safety Banner */}
      <div className="bg-navy-50 rounded-2xl p-5 flex gap-4 items-start border border-navy-100">
        <div className="bg-white p-2.5 rounded-full shadow-sm text-teal-600 mt-1">
          <ShieldAlert size={20} />
        </div>
        <div>
          <h3 className="font-bold text-navy-900 text-sm mb-1">{t.safety.title}</h3>
          <p className="text-xs text-navy-700 leading-relaxed">
            {t.safety.body}
          </p>
        </div>
      </div>
    </div>
  );
};

// --- House Guide View ---
interface HouseGuideViewProps {
  t: TranslationContent['house'];
  lang: Language;
}

type HouseTab = 'appliances' | 'cleaning' | 'waste' | 'safety' | 'gallery';

export const HouseGuideView: React.FC<HouseGuideViewProps> = ({ t, lang }) => {
  const [activeTab, setActiveTab] = useState<HouseTab>('gallery');
  const data = HOUSE_GUIDE_DATA[lang];

  // Helper component for Icon selection
  const getIcon = (name: string) => {
    switch (name) {
      case 'Tv': return <Tv size={20} />;
      case 'ThermometerSnowflake': return <ThermometerSnowflake size={20} />;
      case 'Flame': return <Flame size={20} />;
      case 'Droplets': return <Droplets size={20} />;
      case 'Zap': return <Zap size={20} />;
      case 'Fan': return <Fan size={20} />;
      case 'Coffee': return <Coffee size={20} />;
      default: return <Tv size={20} />;
    }
  };

  const tabs = [
    { id: 'gallery' as const, label: t.tabs.gallery, icon: ImageIcon },
    { id: 'appliances' as const, label: t.tabs.appliances, icon: Zap },
    { id: 'cleaning' as const, label: t.tabs.cleaning, icon: Sparkles },
    { id: 'waste' as const, label: t.tabs.waste, icon: Trash2 },
    { id: 'safety' as const, label: t.tabs.safety, icon: ShieldAlert },
  ];

  return (
    <div className="space-y-6 animate-fade-in min-h-[60vh]">
      <h2 className="text-xl font-bold text-navy-900 px-1">{t.title}</h2>

      {/* Tabs */}
      {/* Tabs - Optimized for Mobile Grid */}
      <div className="grid grid-cols-4 gap-2 pb-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center gap-1.5 px-1 py-3 rounded-xl text-[9px] font-bold transition-all duration-300 border leading-tight ${isActive
                ? 'bg-teal-600 text-white border-teal-600 shadow-md scale-105 z-10'
                : 'bg-white text-navy-600 border-navy-50 hover:bg-navy-50'
                }`}
            >
              <tab.icon size={18} />
              <span className="text-center truncate w-full px-0.5">{tab.label}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-4">
        {/* Appliances Tab */}
        {activeTab === 'appliances' && (
          <div className="space-y-3 animate-fade-in">
            {data.appliances.map((item) => (
              <AccordionItem key={item.id} title={item.name} icon={getIcon(item.iconName)}>
                <p className="text-stone-600 leading-relaxed">{item.instruction}</p>
              </AccordionItem>
            ))}
          </div>
        )}

        {/* Cleaning Tab */}
        {activeTab === 'cleaning' && (
          <div className="bg-white border border-teal-100 rounded-xl p-6 shadow-sm animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-teal-50 text-teal-600 p-2 rounded-lg">
                <Sparkles size={24} />
              </div>
              <h3 className="text-lg font-bold text-navy-900">{data.cleaning.title}</h3>
            </div>

            <p className="text-navy-700 mb-6 italic border-l-4 border-teal-300 pl-4 py-1">
              {data.cleaning.policy}
            </p>

            <ul className="space-y-3">
              {data.cleaning.notes.map((note, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-stone-700">
                  <div className="min-w-[6px] h-[6px] rounded-full bg-teal-400 mt-2" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Waste Tab */}
        {activeTab === 'waste' && (
          <div className="grid gap-4 animate-fade-in">
            {data.waste.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-sm border border-stone-100 overflow-hidden flex">
                <div className={`w-3 ${item.colorClass}`} />
                <div className="p-4 flex-1">
                  <h4 className={`font-bold text-base mb-1 ${item.colorClass.replace('bg-', 'text-')}`}>
                    {item.name}
                  </h4>
                  <p className="text-sm text-stone-600 leading-snug">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center justify-center px-4 bg-stone-50 border-l border-stone-100">
                  <Trash2 size={20} className="text-stone-400" />
                </div>
              </div>
            ))}
            <div className="mt-2 text-xs text-center text-teal-600 bg-teal-50 border border-teal-100 py-2 rounded-lg font-medium">
              Eco-Point located 50m to the right of the main gate.
            </div>
          </div>
        )}

        {/* Safety Tab */}
        {activeTab === 'safety' && (
          <div className="space-y-3 animate-fade-in">
            {data.safety.map((item) => (
              <div key={item.id} className="bg-white border-l-4 border-red-500 rounded-r-xl shadow-sm p-4 flex gap-4 items-start border-y border-r border-stone-100">
                <div className="bg-red-50 text-red-500 p-2 rounded-full mt-0.5">
                  <AlertCircle size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-navy-900">{item.name}</h4>
                  <p className="text-sm text-stone-600 mt-1">
                    <span className="font-semibold text-navy-600 text-xs uppercase tracking-wide">Location: </span>
                    {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Gallery Tab */}
        {activeTab === 'gallery' && (
          <div className="space-y-6 animate-fade-in pb-4">
            {data.gallery.map((item) => (
              <GalleryCarousel key={item.id} item={item} />
            ))}
          </div>
        )}

      </div>
    </div >
  );
};



// Reusable Accordion
const AccordionItem: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`bg-white border rounded-xl overflow-hidden shadow-sm transition-all duration-300 ${isOpen ? 'border-teal-200 ring-1 ring-teal-100' : 'border-stone-200'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-white hover:bg-teal-50/30 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="text-teal-600 bg-teal-50 p-2 rounded-lg">
            {icon}
          </div>
          <span className={`font-medium ${isOpen ? 'text-teal-900' : 'text-stone-800'}`}>{title}</span>
        </div>
        <div className={`text-stone-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-teal-500' : ''}`}>
          <ChevronDown size={20} />
        </div>
      </button>

      {isOpen && (
        <div className="px-4 pb-4 pt-0 border-t border-teal-50 bg-white">
          <div className="pt-3 text-sm">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

// Gallery Carousel Component
const GalleryCarousel: React.FC<{ item: import('./types').GalleryItem }> = ({ item }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasMultiple = item.imageUrls.length > 1;

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % item.imageUrls.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + item.imageUrls.length) % item.imageUrls.length);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden group">
      <div className="relative h-64 overflow-hidden">
        <img
          src={item.imageUrls[currentImageIndex]}
          alt={`${item.title} - ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />

        {/* Navigation Arrows */}
        {hasMultiple && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 rounded-full shadow-sm backdrop-blur transition-all active:scale-95 z-10"
            >
              <ChevronLeft size={20} className="text-navy-900" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 rounded-full shadow-sm backdrop-blur transition-all active:scale-95 z-10"
            >
              <ChevronRight size={20} className="text-navy-900" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/20 backdrop-blur-sm px-2 py-1 rounded-full z-10">
              {item.imageUrls.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </>
        )}

        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur rounded-full p-2 text-teal-600 shadow-sm z-10">
          <ImageIcon size={20} />
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-serif text-lg font-bold text-navy-900 mb-2">{item.title}</h3>
        <p className="text-stone-600 text-sm leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
};

// --- Local Guide View ---
interface LocalGuideViewProps {
  t: TranslationContent['local'];
  lang: Language;
}

export const LocalGuideView: React.FC<LocalGuideViewProps> = ({ t, lang }) => {
  const [activeCategory, setActiveCategory] = useState<LocalCategoryId>('eat');
  const recommendations = RECOMMENDATIONS_DATA[lang].filter(r => r.categoryId === activeCategory);

  const categories = [
    { id: 'eat' as const, label: t.categories.eat, icon: Utensils },
    { id: 'snack' as const, label: t.categories.snack, icon: Coffee },
    { id: 'beach' as const, label: t.categories.beach, icon: Umbrella },
    { id: 'hike' as const, label: t.categories.hike, icon: Mountain },
    { id: 'viewpoint' as const, label: t.categories.viewpoint, icon: Eye },
    { id: 'museum' as const, label: t.categories.museum, icon: Landmark },
    { id: 'shop' as const, label: t.categories.shop, icon: ShoppingCart },
    { id: 'park' as const, label: t.categories.park, icon: Baby },
  ];

  const getOptimizedImageUrl = (url: string) => {
    if (url.includes('lh3.googleusercontent.com')) {
      // Use weserv proxy for Google Photos to avoid CORS/Referrer issues
      // Remove https:// and prepend ssl:
      const cleanUrl = url.replace(/^https?:\/\//, '');
      return `https://images.weserv.nl/?url=ssl:${cleanUrl}&w=800&output=webp`;
    }
    return url;
  };

  return (
    <div className="space-y-6 animate-fade-in pb-4">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-xl font-bold text-navy-900">{t.title}</h2>
      </div>

      {/* 2-Row Grid for Category Filter */}
      <div className="grid grid-cols-4 gap-2 pb-2">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex flex-col items-center justify-center gap-1.5 px-1 py-3 rounded-xl text-[9px] font-bold transition-all duration-300 border leading-tight ${isActive
                ? 'bg-teal-600 text-white border-teal-600 shadow-md scale-105 z-10'
                : 'bg-white text-navy-600 border-navy-50 hover:bg-navy-50'
                }`}
            >
              <cat.icon size={18} />
              <span className="text-center truncate w-full px-0.5">{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Magazine Cards List */}
      <div className="grid gap-8">
        {recommendations.map((rec) => {
          const isPdf = rec.mapUrl.endsWith('.pdf') || rec.mapUrl.includes('drive.google.com');
          return (
            <div key={rec.id} className="group bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-md transition-all duration-300">
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={getOptimizedImageUrl(rec.imageUrl)}
                  alt={rec.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-navy-900/60 to-transparent opacity-80"></div>
                <div className="absolute bottom-3 left-4 text-white text-xs font-bold tracking-wider uppercase bg-navy-900/40 backdrop-blur-md px-2 py-1 rounded-md border border-white/20">
                  {rec.distance}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-bold text-navy-900 leading-tight">
                    {rec.title}
                  </h3>
                  <a
                    href={rec.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-stone-100 p-2 rounded-full text-stone-400 hover:text-teal-600 hover:bg-teal-50 transition-colors"
                  >
                    {isPdf ? <Download size={20} /> : <ArrowUpRight size={20} />}
                  </a>
                </div>

                <p className="text-stone-600 text-sm leading-relaxed mb-4">
                  {rec.description}
                </p>

                {/* Trail Stats (if available) */}
                {rec.trailStats && (
                  <div className="flex flex-wrap gap-4 mb-5 text-xs text-navy-600 font-semibold bg-stone-50 p-3 rounded-xl border border-stone-100">
                    <div className="flex items-center gap-1.5" title="Length">
                      <Route size={14} className="text-teal-500" />
                      <span>{rec.trailStats.length}</span>
                    </div>
                    <div className="flex items-center gap-1.5" title="Duration">
                      <Clock size={14} className="text-teal-500" />
                      <span>{rec.trailStats.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5" title="Difficulty">
                      <TrendingUp size={14} className="text-teal-500" />
                      <span>{rec.trailStats.difficulty}</span>
                    </div>
                  </div>
                )}

                {/* Host Tip */}
                {rec.hostTip && (
                  <div className="bg-teal-50 rounded-xl p-3 flex gap-3 items-start border border-teal-100 mb-4">
                    <div className="bg-white p-1.5 rounded-full text-teal-600 shadow-sm mt-0.5">
                      <Star size={14} fill="currentColor" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-teal-800 mb-0.5 uppercase tracking-wide">
                        {t.hostTipLabel}
                      </span>
                      <p className="text-xs text-teal-700 italic leading-snug">
                        "{rec.hostTip}"
                      </p>
                    </div>
                  </div>
                )}

                {/* Action Button */}
                <a
                  href={rec.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2.5 text-white text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm ${isPdf
                    ? 'bg-teal-600 hover:bg-teal-700'
                    : 'bg-navy-900 hover:bg-navy-800'
                    }`}
                >
                  {isPdf ? <Download size={16} /> : <MapPin size={16} />}
                  {isPdf
                    ? (lang === 'pt' ? 'Baixar Guia PDF' : 'Download PDF Guide')
                    : t.directions}
                </a>
              </div>
            </div>
          );
        })}

        {recommendations.length === 0 && (
          <div className="text-center py-12 text-stone-400">
            <p>No recommendations in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Info View ---
interface InfoViewProps {
  t: TranslationContent['info'];
}

export const InfoView: React.FC<InfoViewProps> = ({ t }) => {
  const data = PROPERTY_DATA;

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="px-1">
        <h2 className="text-xl font-bold text-navy-900">{t.title}</h2>
      </div>

      {/* Emergency & Contacts */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold text-navy-400 uppercase tracking-wider px-1">{t.sections.emergency}</h3>

        {/* Emergency 112 */}
        <div className="bg-red-600 rounded-2xl p-5 text-white shadow-lg shadow-red-200 flex items-center justify-between border border-red-500">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-md">
              <AlertTriangle size={24} className="text-white" />
            </div>
            <div>
              <span className="block font-bold text-lg leading-none mb-1">112</span>
              <span className="text-red-100 text-sm">{t.items.emergencyNumber}</span>
            </div>
          </div>
          <a href={`tel:${data.emergencyPhone}`} className="bg-white text-red-600 px-5 py-2 rounded-lg font-bold text-sm hover:bg-red-50 transition-colors">
            {t.actions.call}
          </a>
        </div>

        {/* Host Contact */}
        <div className="bg-white border border-teal-200 rounded-xl p-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-teal-100 p-2.5 rounded-full text-teal-700">
              <User size={20} />
            </div>
            <div>
              <span className="font-bold text-navy-900 block">{t.items.host}</span>
              <span className="text-xs text-stone-500">Maria Silva (9h - 20h)</span>
            </div>
          </div>
          <a href={`https://wa.me/${data.hostPhone}`} className="text-teal-700 bg-teal-50 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-teal-100 transition-colors">
            {t.actions.whatsapp}
          </a>
        </div>
      </section>

      {/* Health Services */}
      <section className="space-y-6">
        <h3 className="text-xs font-bold text-navy-400 uppercase tracking-wider px-1">{t.sections.health}</h3>
        <div className="grid grid-cols-1 gap-6">
          {[
            { ...data.locations.hospital, label: t.items.hospital, icon: Ambulance, color: 'text-blue-500' },
            ...data.locations.pharmacies.map(p => ({ ...p, label: t.items.pharmacy, icon: Pill, color: 'text-teal-500' }))
          ].map((item, idx) => (
            <div key={idx} className="group bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-md transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden">
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className={`w-full h-full flex items-center justify-center bg-stone-50 ${item.color}`}>
                    <item.icon size={48} className="opacity-20" />
                  </div>
                )}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-navy-900/60 to-transparent opacity-80"></div>
                <div className="absolute bottom-3 left-4 text-white text-xs font-bold tracking-wider uppercase bg-navy-900/40 backdrop-blur-md px-2 py-1 rounded-md border border-white/20 flex items-center gap-2">
                  <item.icon size={14} className="text-teal-200" />
                  {item.label}
                </div>
              </div>

              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-bold text-navy-900 leading-tight">
                    {item.name}
                  </h3>
                  <a
                    href={item.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-stone-100 p-2 rounded-full text-stone-400 hover:text-teal-600 hover:bg-teal-50 transition-colors shrink-0"
                  >
                    <MapPin size={20} />
                  </a>
                </div>

                <p className="text-stone-600 text-sm leading-relaxed mb-1">
                  {item.address}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Transport */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold text-navy-400 uppercase tracking-wider px-1">{t.sections.transport}</h3>

        <div className="bg-white border border-stone-200 rounded-xl divide-y divide-stone-100 shadow-sm overflow-hidden mb-3">
          {/* Bus */}
          <div className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <Bus size={20} className="text-navy-600" />
              <h4 className="font-bold text-navy-800 text-sm">{t.items.bus}</h4>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed pl-8">
              {t.descriptions.bus}
            </p>
          </div>

          {/* Parking */}
          <div className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <Car size={20} className="text-navy-600" />
              <h4 className="font-bold text-navy-800 text-sm">{t.items.parking}</h4>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed pl-8">
              {t.descriptions.parking}
            </p>
          </div>
        </div>
      </section>

      {/* Fuel & Charging */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold text-navy-400 uppercase tracking-wider px-1">{t.sections.fuel}</h3>

        {/* Gas Stations */}
        <div className="grid grid-cols-1 gap-3">
          {data.locations.gasStations.map((station, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm flex justify-between items-start hover:border-teal-200 transition-colors">
              <div className="flex gap-3">
                <div className="bg-stone-100 text-stone-600 p-2 rounded-lg h-fit">
                  <Fuel size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-navy-800 text-sm">{t.items.gasStation}</h4>
                  <p className="text-xs text-stone-500 mt-0.5">{station.name}</p>
                  <p className="text-xs text-stone-400 mt-1 truncate max-w-[150px]">{station.address}</p>
                </div>
              </div>
              <a
                href={station.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-teal-600 bg-stone-50 p-2 rounded-full transition-colors"
              >
                <MapPin size={18} />
              </a>
            </div>
          ))}
        </div>

        {/* EV Stations */}
        <div className="grid grid-cols-1 gap-3">
          {data.locations.evStations.map((station, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm flex justify-between items-start hover:border-green-300 transition-colors">
              <div className="flex gap-3">
                <div className="bg-green-50 text-green-600 p-2 rounded-lg h-fit">
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-navy-800 text-sm">{t.items.evStation}</h4>
                  <p className="text-xs text-stone-500 mt-0.5">{station.name}</p>
                  <p className="text-xs text-stone-400 mt-1 truncate max-w-[150px]">{station.address}</p>
                </div>
              </div>
              <a
                href={station.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-green-600 bg-stone-50 p-2 rounded-full transition-colors"
              >
                <MapPin size={18} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Legal */}
      <section className="space-y-3 pt-2">
        <h3 className="text-xs font-bold text-navy-400 uppercase tracking-wider px-1">{t.sections.legal}</h3>

        <a
          href={data.complaintsBookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white border border-stone-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all group hover:border-red-200"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-red-50 text-red-600 p-2 rounded-lg">
                <Book size={20} />
              </div>
              <span className="font-bold text-navy-700 group-hover:text-red-600 transition-colors">
                {t.items.complaints}
              </span>
            </div>
            <ArrowUpRight size={18} className="text-stone-300 group-hover:text-red-400" />
          </div>
        </a>

        {/* License Footer */}
        <div className="text-center pt-8 pb-4">
          <p className="text-xs font-mono text-teal-400">
            Registo Nacional de Turismo
          </p>
          <p className="text-sm font-bold text-navy-500 mt-1">
            {data.licenseNumber}
          </p>
        </div>
      </section>
    </div>
  );
};
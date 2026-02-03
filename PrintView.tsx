import React from 'react';
import {
    Wifi, Tv, ThermometerSnowflake, Flame, Zap, Droplets, Fan, Coffee,
    AlertCircle, Utensils, Umbrella, ShoppingCart, Baby, Eye, Landmark, MapPin,
    Sparkles, Bus, Car, Fuel, Book
} from 'lucide-react';
import { TranslationContent, Language } from './types';
import { HOUSE_GUIDE_DATA, RECOMMENDATIONS_DATA, PROPERTY_DATA } from './constants';

interface PrintViewProps {
    t: TranslationContent;
    lang: Language;
    onBack: () => void;
}

export const PrintView: React.FC<PrintViewProps> = ({ t, lang, onBack }) => {
    const houseData = HOUSE_GUIDE_DATA[lang];
    const localData = RECOMMENDATIONS_DATA[lang];
    const propertyData = PROPERTY_DATA;

    // Helper for optimized images
    const getOptimizedImageUrl = (url: string) => {
        if (url.includes('lh3.googleusercontent.com')) {
            const cleanUrl = url.replace(/^https?:\/\//, '');
            return `https://images.weserv.nl/?url=ssl:${cleanUrl}&w=800&output=webp`;
        }
        return url;
    };

    // Helper for icons
    const getIcon = (name: string) => {
        switch (name) {
            case 'Tv': return <Tv size={18} />;
            case 'ThermometerSnowflake': return <ThermometerSnowflake size={18} />;
            case 'Flame': return <Flame size={18} />;
            case 'Droplets': return <Droplets size={18} />;
            case 'Zap': return <Zap size={18} />;
            case 'Fan': return <Fan size={18} />;
            case 'Coffee': return <Coffee size={18} />;
            default: return <Tv size={18} />;
        }
    };

    const categories = [
        { id: 'eat', label: t.local.categories.eat, icon: Utensils },
        { id: 'snack', label: t.local.categories.snack, icon: Coffee },
        { id: 'beach', label: t.local.categories.beach, icon: Umbrella },
        { id: 'hike', label: t.local.categories.hike, icon: MapPin },
        { id: 'viewpoint', label: t.local.categories.viewpoint, icon: Eye },
        { id: 'museum', label: t.local.categories.museum, icon: Landmark },
        { id: 'shop', label: t.local.categories.shop, icon: ShoppingCart },
        { id: 'park', label: t.local.categories.park, icon: Baby },
    ];

    return (
        <div className="bg-white text-stone-800 print:text-black min-h-screen font-sans">
            {/* NO PRINT CONTROL PANEL */}
            <div className="print:hidden fixed top-0 left-0 right-0 bg-stone-100 border-b border-stone-200 p-4 flex justify-between items-center z-50">
                <div>
                    <h2 className="font-bold text-lg text-navy-900">Print Preview Mode</h2>
                    <p className="text-sm text-stone-600">Press <kbd className="font-mono bg-white px-1 rounded border">Ctrl+P</kbd> or <kbd className="font-mono bg-white px-1 rounded border">Cmd+P</kbd> to save as PDF.</p>
                </div>
                <button
                    onClick={onBack}
                    className="bg-navy-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-navy-800 transition-colors shadow-sm"
                >
                    Back to App
                </button>
            </div>

            <div className="max-w-[210mm] mx-auto bg-white pt-24 pb-12 print:pt-0 print:pb-0">
                {/* --- COVER PAGE --- */}
                {/* Keep Cover Page outside the table flow so it stays clean as a single page */}
                <div className="min-h-[297mm] flex flex-col justify-between p-12 text-center break-after-page border-b border-stone-100 print:border-none relative">
                    <div className="flex-1 flex flex-col justify-center items-center">
                        <div className="w-24 h-1 bg-teal-500 mb-8 mx-auto" />
                        <h1 className="text-6xl font-serif font-bold text-navy-900 mb-4 tracking-tight">Sleep HAIbeat</h1>
                        <p className="text-xl text-stone-500 uppercase tracking-[0.2em] font-light">Guest Guidebook</p>

                        <div className="mt-12 flex flex-col items-center gap-3">
                            <div className="p-2 bg-white border border-stone-200 rounded-lg shadow-sm">
                                <img
                                    src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://haibeat-guide.vercel.app/"
                                    alt="Digital Guide QR Code"
                                    className="w-32 h-32"
                                />
                            </div>
                            <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Digital Version</span>
                        </div>
                    </div>

                    <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 max-w-md mx-auto w-full">
                        <h3 className="text-sm uppercase font-bold text-stone-400 mb-4 tracking-wider">Wi-Fi Access</h3>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                                <div className="flex items-center gap-3 text-navy-900">
                                    <Wifi size={20} />
                                    <span className="font-semibold">Network</span>
                                </div>
                                <span className="font-mono text-lg">SleepHAIbeat_Guest</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 text-navy-900">
                                    <Zap size={20} />
                                    <span className="font-semibold">Password</span>
                                </div>
                                <span className="font-mono text-lg">HAIbeatGuest2025</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 text-xs text-stone-400 font-mono">
                        {propertyData.licenseNumber} &bull; {propertyData.locations.hospital.address}
                    </div>
                </div>

                {/* --- PAGE BREAK AFTER COVER --- */}
                <div className="print:break-after-page" />

                {/* --- CONTENT WRAPPED IN TABLE FOR CONSISTENT PRINT MARGINS --- */}
                <table className="w-full">
                    {/* THEAD acts as top margin on every page */}
                    <thead className="print:table-header-group hidden">
                        <tr>
                            <td>
                                <div className="h-[20mm] w-full" aria-hidden="true" /> {/* Top Print Margin */}
                            </td>
                        </tr>
                    </thead>

                    {/* TBODY contains the actual content */}
                    <tbody>
                        <tr>
                            <td>
                                {/* --- HOUSE GUIDE SECTION --- */}
                                <section className="p-12 break-inside-avoid">
                                    <div className="flex items-baseline gap-4 border-b-2 border-navy-900 pb-4 mb-10">
                                        <span className="text-4xl font-serif text-teal-600 font-bold">01</span>
                                        <h2 className="text-3xl font-serif font-bold text-navy-900">{t.house.title}</h2>
                                    </div>

                                    {/* Gallery (Compact Grid) */}
                                    <div className="mb-12 break-inside-avoid">
                                        <h3 className="font-serif text-xl font-bold text-navy-800 mb-6 flex items-center gap-3">
                                            <span className="w-8 h-px bg-navy-200"></span>
                                            {t.house.tabs.gallery}
                                        </h3>
                                        <div className="grid grid-cols-2 gap-6 print:grid-cols-3 print:gap-4">
                                            {houseData.gallery.map(item => (
                                                <div key={item.id} className="break-inside-avoid">
                                                    <div className="aspect-[4/3] print:aspect-[16/10] rounded-xl overflow-hidden mb-3 border border-stone-100 shadow-sm">
                                                        <img
                                                            src={item.imageUrls[0]}
                                                            alt={item.title}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <h4 className="font-bold text-navy-900">{item.title}</h4>
                                                    <p className="text-sm text-stone-600">{item.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Appliances & Safety Split */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                                        <div className="break-inside-avoid">
                                            <h3 className="font-serif text-xl font-bold text-navy-800 mb-6 flex items-center gap-3">
                                                <span className="w-8 h-px bg-navy-200"></span>
                                                {t.house.tabs.appliances}
                                            </h3>
                                            <div className="space-y-4">
                                                {houseData.appliances.map(item => (
                                                    <div key={item.id} className="p-4 bg-stone-50 rounded-lg border border-stone-100 break-inside-avoid">
                                                        <div className="flex items-center gap-2 mb-2 font-bold text-teal-800">
                                                            {getIcon(item.iconName)}
                                                            <span>{item.name}</span>
                                                        </div>
                                                        <p className="text-sm text-stone-700 leading-relaxed">{item.instruction}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="break-inside-avoid">
                                            {/* Safety First */}
                                            <div className="mb-10 break-inside-avoid">
                                                <h3 className="font-serif text-xl font-bold text-navy-800 mb-6 flex items-center gap-3">
                                                    <span className="w-8 h-px bg-navy-200"></span>
                                                    {t.house.tabs.safety}
                                                </h3>
                                                <ul className="space-y-3">
                                                    {houseData.safety.map(item => (
                                                        <li key={item.id} className="flex gap-3 items-start p-3 bg-red-50 rounded-lg border border-red-100 text-sm">
                                                            <AlertCircle size={18} className="text-red-600 shrink-0 mt-0.5" />
                                                            <div>
                                                                <span className="font-bold text-navy-900 block">{item.name}</span>
                                                                <span className="text-stone-700">{item.location}</span>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Waste */}
                                            <div className="break-inside-avoid">
                                                <h3 className="font-serif text-xl font-bold text-navy-800 mb-6 flex items-center gap-3">
                                                    <span className="w-8 h-px bg-navy-200"></span>
                                                    {t.house.tabs.waste}
                                                </h3>
                                                <div className="space-y-2">
                                                    {houseData.waste.map(item => (
                                                        <div key={item.id} className="flex items-center gap-3 p-3 border border-stone-100 rounded bg-white">
                                                            <div className={`w-3 h-3 rounded-full shrink-0 ${item.colorClass} border border-stone-200`} />
                                                            <div>
                                                                <span className="font-bold text-sm block text-navy-900">{item.name}</span>
                                                                <span className="text-xs text-stone-500">{item.description}</span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Cleaning Section */}
                                        <div className="mt-8 break-inside-avoid">
                                            <h3 className="font-serif text-xl font-bold text-navy-800 mb-4 flex items-center gap-3">
                                                <span className="w-8 h-px bg-navy-200"></span>
                                                {t.house.tabs.cleaning}
                                            </h3>
                                            <div className="bg-teal-50/50 border border-teal-100 rounded-xl p-4">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="bg-white text-teal-600 p-1.5 rounded-lg shadow-sm">
                                                        <Sparkles size={16} />
                                                    </div>
                                                    <h4 className="font-bold text-navy-900 text-sm">{houseData.cleaning.title}</h4>
                                                </div>
                                                <p className="text-stone-600 text-xs mb-4 italic pl-1">{houseData.cleaning.policy}</p>

                                                <div className="grid grid-cols-3 gap-3 mb-4">
                                                    {houseData.cleaning.schedules.map((schedule, idx) => (
                                                        <div key={idx} className="bg-white p-2.5 rounded-lg border border-teal-50 shadow-sm">
                                                            <h5 className="font-bold text-teal-800 text-xs mb-1.5">{schedule.title}</h5>
                                                            <ul className="space-y-1">
                                                                {schedule.frequency.map((item, i) => (
                                                                    <li key={i} className="text-[9px] text-stone-600 leading-tight flex items-start gap-1">
                                                                        <span className="text-teal-300">•</span>
                                                                        <span>{item}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>

                                                {houseData.cleaning.notes.length > 0 && (
                                                    <ul className="space-y-1 pl-1">
                                                        {houseData.cleaning.notes.map((note, idx) => (
                                                            <li key={idx} className="text-[10px] text-teal-800 flex gap-2">
                                                                <span className="text-teal-400">•</span>
                                                                <span>{note}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <div className="print:break-after-page" />

                                {/* --- INFO & CONTACTS --- */}
                                <section className="p-12 min-h-[50vh]">
                                    <div className="flex items-baseline gap-4 border-b-2 border-navy-900 pb-4 mb-10">
                                        <span className="text-4xl font-serif text-teal-600 font-bold">02</span>
                                        <h2 className="text-3xl font-serif font-bold text-navy-900">{t.info.title}</h2>
                                    </div>

                                    <div className="grid grid-cols-2 gap-16">
                                        <div className="space-y-8">
                                            {/* Emergency */}
                                            <div>
                                                <h3 className="font-bold text-sm uppercase text-stone-400 mb-4 tracking-wider">{t.info.sections.emergency}</h3>
                                                <div className="space-y-4">
                                                    <div className="flex items-center justify-between p-4 bg-red-50 rounded-xl border border-red-100">
                                                        <span className="font-bold text-navy-900">{t.info.items.emergencyNumber}</span>
                                                        <span className="font-bold text-red-600 text-2xl">112</span>
                                                    </div>
                                                    <div className="flex items-center justify-between p-4 bg-white border border-stone-200 rounded-xl">
                                                        <span className="font-medium text-stone-600">{t.info.items.host}</span>
                                                        <span className="font-bold text-navy-900 text-lg">{propertyData.hostPhone}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Transport */}
                                            <div>
                                                <h3 className="font-bold text-sm uppercase text-stone-400 mb-4 tracking-wider">{t.info.sections.transport}</h3>
                                                <div className="space-y-4">
                                                    <div>
                                                        <p className="font-bold text-navy-900 mb-1 flex items-center gap-2">
                                                            <Bus size={16} className="text-navy-600" />
                                                            {t.info.items.bus}
                                                        </p>
                                                        <p className="text-sm text-stone-600">{t.info.descriptions.bus}</p>
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-navy-900 mb-1 flex items-center gap-2">
                                                            <Car size={16} className="text-navy-600" />
                                                            {t.info.items.parking}
                                                        </p>
                                                        <p className="text-sm text-stone-600">{t.info.descriptions.parking}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-8">
                                            {/* Health */}
                                            <div>
                                                <h3 className="font-bold text-sm uppercase text-stone-400 mb-4 tracking-wider">{t.info.sections.health}</h3>
                                                <div className="space-y-6">
                                                    <div className="break-inside-avoid">
                                                        <p className="font-bold text-navy-900 mb-1 flex items-center gap-2">
                                                            <MapPin size={16} className="text-teal-600" />
                                                            {t.info.items.hospital}
                                                        </p>
                                                        <p className="text-lg text-stone-800 mb-1">{propertyData.locations.hospital.name}</p>
                                                        <p className="text-sm text-stone-500">{propertyData.locations.hospital.address}</p>
                                                    </div>
                                                    <div className="break-inside-avoid">
                                                        <p className="font-bold text-navy-900 mb-1 flex items-center gap-2">
                                                            <MapPin size={16} className="text-teal-600" />
                                                            {t.info.items.pharmacy}
                                                        </p>
                                                        {propertyData.locations.pharmacies.map((pharmacy, idx) => (
                                                            <div key={idx} className="mb-2 last:mb-0">
                                                                <p className="text-lg text-stone-800">{pharmacy.name}</p>
                                                                <p className="text-xs text-stone-500">{pharmacy.address}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Fuel */}
                                            <div>
                                                <h3 className="font-bold text-sm uppercase text-stone-400 mb-4 tracking-wider">{t.info.sections.fuel}</h3>
                                                <div className="space-y-4">
                                                    <div>
                                                        <p className="font-bold text-navy-900 mb-2 flex items-center gap-2">
                                                            <Fuel size={16} className="text-stone-600" />
                                                            {t.info.items.gasStation}
                                                        </p>
                                                        <ul className="text-sm text-stone-600 space-y-1">
                                                            {propertyData.locations.gasStations.map((station, idx) => (
                                                                <li key={idx}>• {station.name} ({station.address})</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-navy-900 mb-2 flex items-center gap-2">
                                                            <Zap size={16} className="text-green-600" />
                                                            {t.info.items.evStation}
                                                        </p>
                                                        <ul className="text-sm text-stone-600 space-y-1">
                                                            {propertyData.locations.evStations.map((station, idx) => (
                                                                <li key={idx}>• {station.name}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Legal */}
                                            <div className="pt-4 border-t border-stone-100">
                                                <h3 className="font-bold text-sm uppercase text-stone-400 mb-2 tracking-wider">{t.info.sections.legal}</h3>
                                                <div className="flex items-center gap-2 text-sm text-stone-600">
                                                    <Book size={16} className="text-red-400" />
                                                    <span>{t.info.items.complaints}:</span>
                                                    <span className="font-mono text-xs">{propertyData.complaintsBookUrl}</span>
                                                </div>
                                                <div className="mt-2 text-xs text-stone-400">
                                                    License: {propertyData.licenseNumber}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <div className="print:break-after-page" />

                                {/* --- LOCAL GUIDE --- */}
                                <section className="p-12">
                                    <div className="flex items-baseline gap-4 border-b-2 border-navy-900 pb-4 mb-10">
                                        <span className="text-4xl font-serif text-teal-600 font-bold">03</span>
                                        <h2 className="text-3xl font-serif font-bold text-navy-900">{t.local.title}</h2>
                                    </div>

                                    <div className="space-y-16">
                                        {categories.map(cat => {
                                            const items = localData.filter(r => r.categoryId === cat.id);
                                            if (items.length === 0) return null;

                                            return (
                                                <div key={cat.id} className="break-inside-avoid">
                                                    <div className="flex items-center gap-3 mb-6">
                                                        <div className="p-2 bg-navy-900 text-white rounded-lg">
                                                            {cat.icon && <cat.icon size={20} />}
                                                        </div>
                                                        <h3 className="font-serif text-2xl font-bold text-navy-900">{cat.label}</h3>
                                                    </div>

                                                    <div className="grid grid-cols-1 gap-8">
                                                        {items.map(item => (
                                                            <div key={item.id} className="flex gap-6 break-inside-avoid group">
                                                                {/* Item Image */}
                                                                <div className="w-48 h-36 shrink-0 rounded-xl overflow-hidden border border-stone-200 shadow-sm bg-stone-100">
                                                                    <img
                                                                        src={getOptimizedImageUrl(item.imageUrl)}
                                                                        alt={item.title}
                                                                        className="w-full h-full object-cover grayscale-[10%] group-print:grayscale-0"
                                                                    />
                                                                </div>

                                                                {/* Item Content */}
                                                                <div className="flex-1 min-w-0 py-1">
                                                                    <div className="flex justify-between items-start mb-2">
                                                                        <h4 className="font-bold text-lg text-navy-900 leading-tight">{item.title}</h4>
                                                                        <span className="text-xs font-mono font-bold text-teal-700 bg-teal-50 px-2 py-1 rounded ml-4 whitespace-nowrap border border-teal-100">
                                                                            {item.distance}
                                                                        </span>
                                                                    </div>

                                                                    <p className="text-sm text-stone-600 mb-3 leading-relaxed max-w-2xl">{item.description}</p>

                                                                    {item.hostTip && (
                                                                        <div className="flex gap-2 items-start text-xs bg-stone-50 p-3 rounded-lg border border-stone-100">
                                                                            <span className="font-bold text-navy-700 shrink-0 uppercase tracking-wide text-[10px] mt-0.5">Host Tip</span>
                                                                            <span className="text-stone-600 italic">{item.hostTip}</span>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </section>

                                <div className="text-center text-xs text-stone-300 font-mono mt-20 pb-8">
                                    Sleep HAIbeat &copy; 2025
                                </div>
                            </td>
                        </tr>
                    </tbody>

                    {/* TFOOT acts as bottom margin on every page */}
                    <tfoot className="print:table-footer-group hidden">
                        <tr>
                            <td>
                                <div className="h-[20mm] w-full" aria-hidden="true" /> {/* Bottom Print Margin */}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

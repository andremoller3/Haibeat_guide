export type Language = 'pt' | 'en';

export type TabId = 'home' | 'house' | 'local' | 'info' | 'print';

export interface TranslationContent {
  nav: {
    home: string;
    house: string;
    local: string;
    info: string;
  };
  home: {
    welcome: string;
    wifiTitle: string;
    wifiPasswordLabel: string;
    copy: string;
    copied: string;
    actions: {
      checkIn: string;
      checkOut: string;
      emergency: string;
      rules: string;
    };
    safety: {
      title: string;
      body: string;
    };
  };
  house: {
    title: string;
    tabs: {
      appliances: string;
      cleaning: string;
      waste: string;
      safety: string;
      gallery: string;
    };
  };
  local: {
    title: string;
    categories: {
      eat: string;
      beach: string;
      hike: string;
      shop: string;
      snack: string;
      park: string;
      viewpoint: string;
      museum: string;
    };
    directions: string;
    hostTipLabel: string;
  };
  info: {
    title: string;
    sections: {
      emergency: string;
      health: string;
      transport: string;
      fuel: string;
      legal: string;
    };
    actions: {
      call: string;
      directions: string;
      website: string;
      whatsapp: string;
      copy: string;
    };
    items: {
      host: string;
      pharmacy: string;
      hospital: string;
      taxi: string;
      bus: string;
      parking: string;
      complaints: string;
      gasStation: string;
      evStation: string;
      emergencyNumber: string;
    };
    descriptions: {
      bus: string;
      parking: string;
    };
  };
}

// --- House Guide Data Types ---

export interface Appliance {
  id: string;
  name: string;
  instruction: string;
  iconName: string;
}

export interface WasteCategory {
  id: string;
  name: string;
  colorClass: string; // Tailwind class
  borderColorClass: string; // Tailwind class for border
  description: string;
}

export interface SafetyItem {
  id: string;
  name: string;
  location: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrls: string[];
}

export interface CleaningItem {
  title: string;
  frequency: string[];
}

export interface HouseGuideData {
  appliances: Appliance[];
  cleaning: {
    title: string;
    policy: string;
    schedules: CleaningItem[];
    notes: string[];
  };
  waste: WasteCategory[];
  safety: SafetyItem[];
  gallery: GalleryItem[];
}

export type LocalCategoryId = 'eat' | 'beach' | 'hike' | 'shop' | 'snack' | 'park' | 'viewpoint' | 'museum';

export interface Recommendation {
  id: string;
  categoryId: LocalCategoryId;
  title: string;
  description: string;
  imageUrl: string;
  distance: string;
  hostTip?: string;
  mapUrl: string;
  trailStats?: {
    length: string;
    duration: string;
    difficulty: string;
  };
}

export interface LocationInfo {
  name: string;
  address: string;
  mapUrl: string;
  imageUrl?: string;
}

export interface PropertyData {
  licenseNumber: string;
  complaintsBookUrl: string;
  hostPhone: string;
  emergencyPhone: string;
  locations: {
    hospital: LocationInfo;
    pharmacies: LocationInfo[];
    gasStations: LocationInfo[];
    evStations: LocationInfo[];
    busStop: LocationInfo;
  };
}
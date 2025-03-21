export type device_types = 'mobile' | 'tablet' | 'desktop';

export interface star_data {
  name: string;
  description: string;
  images: {
    webp: string;
    png: string;
  };
  avg_distance: string;
  travel_time: string;
}

export interface crew_member {
  name: string;
  bio: string;
  images: {
    webp: string;
    png: string;
  };
  role: string;
}

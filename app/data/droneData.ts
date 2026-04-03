export interface DroneView {
  id: number;
  title: string;
  location: string;
  type: 'youtube-short' | 'cloudinary' | 'youtube';
  videoId?: string;
  videoUrl?: string;
  description: string;
  featured?: boolean;
  badge?: string;
}

export const droneViews: DroneView[] = [
  // ── Featured office tour (Cloudinary MP4) ────────────────────────
  {
    id: 0,
    title: 'Office Tour',
    location: 'Baramati, Maharashtra',
    type: 'cloudinary',
    videoUrl: 'https://res.cloudinary.com/demz8cf5k/video/upload/v1775233426/uploads/m7wlioplx1i7wookpigt.mp4',
    description: 'Step inside our office — where every great project begins. A walkthrough of our workspace, team, and vision.',
    featured: true,
    badge: 'Office Tour',
  },
  // ── Drone Shorts (YouTube) ────────────────────────────────────────
  {
    id: 1,
    title: 'Project Site Overview',
    location: 'Baramati, Maharashtra',
    type: 'youtube-short',
    videoId: 'xytuJcsgWYc',
    description: 'Aerial drone footage of our latest construction site',
    badge: 'Drone',
  },
  {
    id: 2,
    title: 'Foundation & Structure Work',
    location: 'Baramati, Maharashtra',
    type: 'youtube-short',
    videoId: 'TKEZ7wCKoXY',
    description: 'Close-up drone view of structural work in progress',
    badge: 'Drone',
  },
  {
    id: 3,
    title: 'Residential Project Progress',
    location: 'Baramati, Maharashtra',
    type: 'youtube-short',
    videoId: 'RTUxmscdP04',
    description: "Bird's eye view of residential construction progress",
    badge: 'Drone',
  },
  {
    id: 4,
    title: 'Site Layout & Planning',
    location: 'Baramati, Maharashtra',
    type: 'youtube-short',
    videoId: 'SgSnxP9ODzk',
    description: 'Complete site layout captured from above',
    badge: 'Drone',
  },
  {
    id: 5,
    title: 'Construction Milestone',
    location: 'Baramati, Maharashtra',
    type: 'youtube-short',
    videoId: 'WbZkgYXQOWI',
    description: 'Key construction milestone documented via drone',
    badge: 'Drone',
  },
  {
    id: 6,
    title: 'Final Structure Walkthrough',
    location: 'Baramati, Maharashtra',
    type: 'youtube-short',
    videoId: '3mBSucbVOGY',
    description: 'Drone flyover of completed structure',
    badge: 'Drone',
  },
];
export type PhotoCategory = 'complexes' | 'bungalows';

export interface GalleryPhoto {
  id: number;
  src: string;
  alt: string;
  category: PhotoCategory;
  width: number;
  height: number;
  sqFeet?: number; // optional — omit when unknown/zero
  title?: string;
}

// Replace src values with your actual image paths from /public or your CDN
export const galleryPhotos: GalleryPhoto[] = [
  // ── Complexes (18) ──────────────────────────────────────────────
  { id: 1,  category: 'complexes', src: 'https://res.cloudinary.com/demz8cf5k/image/upload/v1775145800/uploads/rm0o77hvewriln2qlcgs.jpg', alt: 'Modern apartment complex',        width: 1200, height: 800,sqFeet: 20000  },
  { id: 2,  category: 'complexes', src: 'https://res.cloudinary.com/demz8cf5k/image/upload/v1775145805/uploads/vehe7cf70j6l8pskw9ji.jpg', alt: 'High-rise residential building',   width: 1200, height: 1600, sqFeet: 20000 },
  { id: 3,  category: 'complexes', src: 'https://res.cloudinary.com/demz8cf5k/image/upload/v1775145805/uploads/fv26xl1shniqv6cofjvs.jpg', alt: 'Luxury apartment exterior',        width: 1200, height: 900,  sqFeet: 18000 },
  { id: 4,  category: 'complexes', src: 'https://res.cloudinary.com/demz8cf5k/image/upload/v1775145826/uploads/e3zv8trotlwlw4tn5ep9.jpg', alt: 'Multi-storey complex front view', width: 1200, height: 800,  sqFeet: 10000 },
  { id: 5,  category: 'complexes', src: 'https://res.cloudinary.com/demz8cf5k/image/upload/v1775145820/uploads/i3ruyy6xuzaufjsuzwhy.jpg', alt: 'Commercial residential complex',  width: 1200, height: 1400, sqFeet: 14000 },
  { id: 6,  category: 'complexes', src: 'https://res.cloudinary.com/demz8cf5k/image/upload/v1775224432/uploads/apd76vokf9pvvpr4ym6d.jpg', alt: 'Gated apartment community',        width: 1200, height: 800,  sqFeet: 10000 },
  { id: 7,  category: 'complexes', src: 'https://res.cloudinary.com/demz8cf5k/image/upload/v1775225122/uploads/zxdsyvulhbf4oseyql51.jpg', alt: 'Complex rooftop terrace',          width: 1200, height: 900,  sqFeet: 6000  },
  { id: 9,  category: 'complexes', src: 'https://res.cloudinary.com/demz8cf5k/image/upload/v1775225123/uploads/n49vmrgq6dsxdoswzjfv.jpg', alt: 'Under-construction complex',       width: 1200, height: 800,sqFeet: 10000  },
  { id: 10, category: 'complexes', src: 'https://res.cloudinary.com/demz8cf5k/image/upload/v1775225296/uploads/uqf7nevhelyhe73tmdmr.jpg', alt: 'Night view of complex',            width: 1200, height: 900,sqFeet: 15000  },
  { id: 11, category: 'complexes', src: 'https://res.cloudinary.com/demz8cf5k/image/upload/v1775225298/uploads/yprcnebnlurz4tcuxvbe.jpg', alt: 'Complex swimming pool',            width: 1200, height: 800,sqFeet: 10000  },
  { id: 12, category: 'complexes', src: 'https://res.cloudinary.com/demz8cf5k/image/upload/v1775225299/uploads/q9edh4chg4jgaiibxhyf.jpg', alt: 'Modern facade complex',            width: 1200, height: 1400,sqFeet: 5000 },
  { id: 13, category: 'complexes', src: 'https://res.cloudinary.com/demz8cf5k/image/upload/v1775225299/uploads/m4trcdxtksymzysqo6xu.jpg', alt: 'Complex parking level',            width: 1200, height: 800,sqFeet: 6000  },
  { id: 14, category: 'complexes', src: 'https://res.cloudinary.com/demz8cf5k/image/upload/v1775225301/uploads/hm8lqpp6bv0gm7szuc78.jpg', alt: 'Complex garden view',              width: 1200, height: 900,sqFeet: 18000  },
  { id: 15, category: 'complexes', src: 'https://res.cloudinary.com/demz8cf5k/image/upload/v1775225302/uploads/qicloefpi7owkx6fze2y.jpg', alt: 'Balcony view apartment',           width: 1200, height: 1600,sqFeet: 5000 },
  { id: 16, category: 'complexes', src: 'https://res.cloudinary.com/demz8cf5k/image/upload/v1775225302/uploads/fnajswgli9fzrwa3yboj.jpg', alt: 'Complex main gate',                width: 1200, height: 800,sqFeet: 12000  },
  { id: 17, category: 'complexes', src: 'https://res.cloudinary.com/demz8cf5k/image/upload/v1775225302/uploads/r56zcdgyxcfil4avbcfc.jpg', alt: 'Aerial complex view',              width: 1200, height: 900,sqFeet: 24000  },

  // ── Bungalows (23) ──────────────────────────────────────────────
  { id: 36, category: 'bungalows', src: 'https://res.cloudinary.com/demz8cf5k/image/upload/v1775226119/uploads/lguxsishl853aasxq8lm.jpg', alt: 'Bungalow landscape',   width: 1200, height: 900  },
  { id: 37, category: 'bungalows', src: 'https://res.cloudinary.com/demz8cf5k/image/upload/v1775226119/uploads/g6qbnziszhuawno0vnq0.jpg', alt: 'Bungalow rooftop',     width: 1200, height: 800  },
  { id: 38, category: 'bungalows', src: 'https://res.cloudinary.com/demz8cf5k/image/upload/v1775226119/uploads/nm4jsbuyaomzqes3jyqy.jpg', alt: 'Bungalow garage',      width: 1200, height: 1600 },
  { id: 39, category: 'bungalows', src: 'https://res.cloudinary.com/demz8cf5k/image/upload/v1775226121/uploads/qhefgkg1ymfkpf5wvfml.jpg', alt: 'Bungalow hallway',     width: 1200, height: 800  },
  { id: 40, category: 'bungalows', src: 'https://res.cloudinary.com/demz8cf5k/image/upload/v1775226121/uploads/m6fcrzjbye8ugugjofze.jpg', alt: 'Bungalow dining area', width: 1200, height: 900  },
  { id: 41, category: 'bungalows', src: 'https://res.cloudinary.com/demz8cf5k/image/upload/v1775226121/uploads/fqkzbdabyezifvf94ard.jpg', alt: 'Bungalow balcony view',width: 1200, height: 800  },
  { id: 42, category: 'bungalows', src: 'https://res.cloudinary.com/demz8cf5k/image/upload/v1775226121/uploads/v5aoyrabrigaf2qtpqzx.jpg', alt: 'Bungalow design',      width: 1200, height: 900  },
  { id: 43, category: 'bungalows', src: 'https://res.cloudinary.com/demz8cf5k/image/upload/v1775226121/uploads/kuqhxaebsm4vq0gvceuo.jpg', alt: 'Modern bungalow',      width: 1200, height: 800  },
  { id: 44, category: 'bungalows', src: 'https://res.cloudinary.com/demz8cf5k/image/upload/v1775226123/uploads/cklbj6l7i9rjh8hmeavs.jpg', alt: 'Bungalow architecture', width: 1200, height: 900  },
  { id: 45, category: 'bungalows', src: 'https://res.cloudinary.com/demz8cf5k/image/upload/v1775226196/uploads/mctbdyoj60d4i4qevlns.jpg', alt: 'Luxury design',         width: 1200, height: 800  },
  { id: 46, category: 'bungalows', src: 'https://res.cloudinary.com/demz8cf5k/image/upload/v1775226196/uploads/tgfaz0wfwfbabqhbpbil.jpg', alt: 'Interior design',       width: 1200, height: 900  },
  { id: 47, category: 'bungalows', src: 'https://res.cloudinary.com/demz8cf5k/image/upload/v1775226196/uploads/uldjyhifmirdupss4qtu.jpg', alt: 'Exterior design',       width: 1200, height: 800  },
  { id: 48, category: 'bungalows', src: 'https://res.cloudinary.com/demz8cf5k/image/upload/v1775226196/uploads/ldkdm6ojw4zckf7lay2h.jpg', alt: 'Bungalow structure',    width: 1200, height: 900  },
  { id: 49, category: 'bungalows', src: 'https://res.cloudinary.com/demz8cf5k/image/upload/v1775226199/uploads/v8zhfxgz6xhcaw8dptun.jpg', alt: 'Design concept',        width: 1200, height: 800  },
  { id: 50, category: 'bungalows', src: 'https://res.cloudinary.com/demz8cf5k/image/upload/v1775226198/uploads/klcrj8t3irpfwpbshmrb.jpg', alt: 'Construction work',     width: 1200, height: 900  },
  { id: 51, category: 'bungalows', src: 'https://res.cloudinary.com/demz8cf5k/image/upload/v1775226197/uploads/o5jgoy0rfhckseoot8vg.jpg', alt: 'Project site',          width: 1200, height: 800  },
  { id: 52, category: 'bungalows', src: 'https://res.cloudinary.com/demz8cf5k/image/upload/v1775226201/uploads/iblmwvghwahvhqytufs6.jpg', alt: 'Finished bungalow',     width: 1200, height: 900  },
  { id: 53, category: 'bungalows', src: 'https://res.cloudinary.com/demz8cf5k/image/upload/v1775226200/uploads/snhcb2glrjqug2dxc638.jpg', alt: 'Premium house',         width: 1200, height: 800  },
  { id: 54, category: 'bungalows', src: 'https://res.cloudinary.com/demz8cf5k/image/upload/v1775226199/uploads/eitzhobyqfl5iktdznq2.jpg', alt: 'Elegant design',        width: 1200, height: 900  },
  { id: 55, category: 'bungalows', src: 'https://res.cloudinary.com/demz8cf5k/image/upload/v1775226246/uploads/v1fu5dqerrtohekk1iat.jpg', alt: 'Luxury exterior',       width: 1200, height: 800  },
  { id: 56, category: 'bungalows', src: 'https://res.cloudinary.com/demz8cf5k/image/upload/v1775226246/uploads/wdbthdezbkeboi4gknnz.jpg', alt: 'Modern exterior',       width: 1200, height: 900  },
  { id: 57, category: 'bungalows', src: 'https://res.cloudinary.com/demz8cf5k/image/upload/v1775226246/uploads/hmotg1toqgq2oazf9gdo.jpg', alt: 'Design showcase',       width: 1200, height: 800  },
  { id: 58, category: 'bungalows', src: 'https://res.cloudinary.com/demz8cf5k/image/upload/v1775226249/uploads/rhishgvpeshbxjimpoxy.jpg', alt: 'Final project view',     width: 1200, height: 900  },
];

export const complexPhotos  = galleryPhotos.filter(p => p.category === 'complexes');
export const bungalowPhotos = galleryPhotos.filter(p => p.category === 'bungalows');
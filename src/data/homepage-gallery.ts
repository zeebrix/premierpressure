import limestoneBefore from '@/assets/1ef480a4697ca3350ef723e0ead8e0aa6892ee92.webp';
import limestoneAfter from '@/assets/41faf7d8dc2e33e937b3a8d5a242a0b96f9b3f9e.webp';
import concreteBefore from '@/assets/69c22a3e1fa74dd17b18bde80f0c9cc3ea318b06.webp';
import concreteAfter from '@/assets/9f60771b69b9073d71cb6e9b0f8857c1f1462658.webp';
import brickBefore from '@/assets/6bbaf4ca5bf4a991f067849bdb8c19880078fe6d.webp';
import brickAfter from '@/assets/87d5f8ec1d66b7b825355f53597f786bcaca1fbc.webp';
import type { GalleryPair } from './gallery';

// The original curated homepage before/after shots (limestone, concrete, brick),
// restored at the client's request. Kept separate from the spreadsheet gallery.
export const homepageGalleryPairs: GalleryPair[] = [
  {
    id: 9001,
    service: 'Limestone Cleaning',
    area: 'Limestone',
    surface: 'Liquid limestone',
    suburb: 'Burns Beach',
    beforeUrl: limestoneBefore.src,
    afterUrl: limestoneAfter.src,
    beforeAlt: 'Limestone cleaning in Burns Beach, Perth — before',
    afterAlt: 'Limestone cleaning in Burns Beach, Perth — after',
    title: 'Limestone Cleaning',
    description: '',
    order: 1,
    featured: true,
    tags: [],
  },
  {
    id: 9002,
    service: 'Concrete Cleaning',
    area: 'Concrete',
    surface: 'Concrete',
    suburb: 'Como',
    beforeUrl: concreteBefore.src,
    afterUrl: concreteAfter.src,
    beforeAlt: 'Concrete cleaning in Como, Perth — before',
    afterAlt: 'Concrete cleaning in Como, Perth — after',
    title: 'Concrete Cleaning',
    description: '',
    order: 2,
    featured: true,
    tags: [],
  },
  {
    id: 9003,
    service: 'Brick Cleaning',
    area: 'Brick',
    surface: 'Brick',
    suburb: 'Hillarys',
    beforeUrl: brickBefore.src,
    afterUrl: brickAfter.src,
    beforeAlt: 'Brick cleaning in Hillarys, Perth — before',
    afterAlt: 'Brick cleaning in Hillarys, Perth — after',
    title: 'Brick Cleaning',
    description: '',
    order: 3,
    featured: true,
    tags: [],
  },
];

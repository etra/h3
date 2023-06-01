export interface Player {
    slug: string;
    name: string;
  }

export const streamers: Player[] = [
    { slug: 'lexiav', name: 'Lexiav' },
    { slug: 'browntown', name: 'Browntown' },
  ];

const undefinedItem: Player = { slug: 'undefined', name: 'undefined' };

export function loadPlayerBySlug(slug: string): Player {
    const item = streamers.find((item) => item.slug === slug);
    if (item) {
        return item;
    } else {
        return undefinedItem;
    }
}    

export enum PlayerEnum {
  Lexiav = 'lexiav',
}
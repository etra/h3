export interface Town {
    slug: string;
    name: string;
  }

export const towns: Town[] = [
    { slug: 'castle', name: 'Castle' },
    { slug: 'rampart', name: 'Rampart' },
    { slug: 'tower', name: 'Tower' },
    { slug: 'inferno', name: 'Inferno' },
    { slug: 'necropolis', name: 'Necropolis' },
    { slug: 'dungeon', name: 'Dungeon' },
    { slug: 'stronghold', name: 'Stronghold' },
    { slug: 'fortress', name: 'Fortress' },
    { slug: 'conflux', name: 'Conflux' },
    { slug: 'cove', name: 'Cove' }
  ];

  const undefinedItem: Town = { slug: 'undefined', name: 'undefined' };

  export function loadTownBySlug(slug: string): Town {
      const item = towns.find((item) => item.slug === slug);
      if (item) {
          return item;
      } else {
          return undefinedItem;
      }
  }    
  
  export enum TownEnum {
    Castle = 'castle',
    Rampart = 'rampart',
    Tower = 'tower',
    Inferno = 'inferno',
    Necropolis = 'necropolis',
    Dungeon = 'dungeon',
    Stronghold = 'stronghold',
    Fortress = 'fortress',
    Conflux = 'conflux',
    Cove = 'cove'
  }
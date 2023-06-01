export interface Hero {
    slug: string;
    name: string;
  }

export const heroes: Hero[] = [
    { slug: 'adelaide', name: 'Adelaide' },
    { slug: 'anabel', name: 'Anabel' },
    { slug: 'roland', name: 'Roland' },
    
  ];

  export enum HeroEnum {
    Anabel = 'anabel',
    Adelaide = 'adelaide',
    Roland = 'roland',
  }  

  const undefinedItem: Hero = { slug: 'undefined', name: 'undefined' };

  export function loadHeroBySlug(slug: string): Hero {
      const item = heroes.find((item) => item.slug === slug);
      if (item) {
          return item;
      } else {
          return undefinedItem;
      }
  }    
  

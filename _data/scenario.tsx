export interface Scenario {
    slug: string;
    name: string;
  }

export const towns: Scenario[] = [
    { slug: 'duel', name: 'Duel' },
  ];

  const undefinedItem: Scenario = { slug: 'undefined', name: 'undefined' };

  export function loadTownBySlug(slug: string): Scenario {
      const item = towns.find((item) => item.slug === slug);
      if (item) {
          return item;
      } else {
          return undefinedItem;
      }
  }      
import { Hero, HeroEnum, loadHeroBySlug } from "./heroes";
import { Player, PlayerEnum, loadPlayerBySlug } from "./player";
import { Town, towns, loadTownBySlug, TownEnum } from "./towns";

export enum ColorEnum {
  Red = 'red',
  Blue = 'blue',
}

export interface MatchPlayer {
  player: Player;
  town: Town;
  hero: Hero;
  color: string;
}


export interface Match {
    slug: string;
    title: string;
    streamer: Player;
    players: MatchPlayer[];    
  }

export function loadMatchBySlug(slug: string): Match | undefined{
  return matches.find((item) => item.slug === slug);
}   

export const matches: Match[] = [
    { 
      slug: 'NxnN55pWflg', 
      title: 'New version = Spawning Angels out of thin air',  
      streamer: loadPlayerBySlug(PlayerEnum.Lexiav),
      players: [
        {
          player: loadPlayerBySlug(PlayerEnum.Lexiav),
          town: loadTownBySlug(TownEnum.Castle),
          hero: loadHeroBySlug(HeroEnum.Anabel),
          color: ColorEnum.Red
        },
        {
          player: loadPlayerBySlug('browntown'),
          town: loadTownBySlug(TownEnum.Castle),
          hero: loadHeroBySlug(HeroEnum.Roland),
          color: ColorEnum.Blue
        }
      ]
    },
    { 
      slug: 'NxnN55pWflg', 
      title: 'New version = Spawning Angels out of thin air',  
      streamer: loadPlayerBySlug(PlayerEnum.Lexiav),
      players: [
        {
          player: loadPlayerBySlug(PlayerEnum.Lexiav),
          town: loadTownBySlug(TownEnum.Necropolis),
          hero: loadHeroBySlug(HeroEnum.Roland),
          color: ColorEnum.Red
        },
        {
          player: loadPlayerBySlug('browntown'),
          town: loadTownBySlug(TownEnum.Castle),
          hero: loadHeroBySlug(HeroEnum.Roland),
          color: ColorEnum.Blue
        }
      ]
    },
  ];



// or:
export const matches: Match[] = [
  { 
    slug: 'NxnN55pWflg', 
    title: 'New version = Spawning Angels out of thin air',  
    streamer: loadPlayerBySlug(PlayerEnum.Lexiav),
    red_player: loadPlayerBySlug(PlayerEnum.Lexiav),
    red_town: loadTownBySlug(TownEnum.Castle),
    red_hero: loadHeroBySlug(HeroEnum.Anabel),
    blue_player: loadPlayerBySlug('browntown'),
    blue_town: loadTownBySlug(TownEnum.Castle),
    blue_hero: loadHeroBySlug(HeroEnum.Roland),
  },
  { 
    slug: 'NxnN55pWflg', 
    title: 'New version = Spawning Angels out of thin air',  
    streamer: loadPlayerBySlug('browntown'),
    red_player: loadPlayerBySlug(PlayerEnum.Lexiav),
    red_town: loadTownBySlug(TownEnum.Necropolis),
    red_hero: loadHeroBySlug(HeroEnum.Roland),
    blue_player: loadPlayerBySlug('browntown'),
    blue_town: loadTownBySlug(TownEnum.Castle),
    blue_hero: loadHeroBySlug(HeroEnum.Roland),
  },
];  
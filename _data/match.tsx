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
    red_player: Player;
    red_town: Town;
    red_hero: Hero;
    blue_player: Player;
    blue_town: Town;
    blue_hero: Hero;
  }

export function loadMatchBySlug(slug: string): Match | undefined{
  return matches.find((item) => item.slug === slug);
}   

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
import { MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { useRouter } from 'next/router';


export default function FilterComponent({ data, onChange }) {
    const router = useRouter();
    const { query } = router;
    const [filters, setFilters] = useState({
        streamer: query.streamer || 'all',
        red_player: query.red_player || 'all',
        red_town: query.red_town || 'all',
        red_hero: query.red_hero || 'all',

        blue_player: query.blue_player || 'all',
        blue_town: query.blue_town || 'all',
        blue_hero: query.blue_hero || 'all',


    });


    // const [selectedValues, setSelectedValues] = useState({});
  
    const updateFilters = (newFilters) => {
        const updatedFilters = { ...filters, ...newFilters };
        setFilters(updatedFilters);
        router.push({
          pathname: router.pathname,
          query: updatedFilters,
        });
      };
  
    const getUniqueValues = (fieldName) => {
      const uniqueValues = new Set();
      data.forEach((item) => {
        const value = item[fieldName];
        if (value) {
          uniqueValues.add(value);
        }
      });
      return Array.from(uniqueValues);
    };
  
    return (
      <div>
        <Select
          value={selectedValues.streamer || ''}
          onChange={(event) => handleFilterChange('streamer', event)}
        >
          <MenuItem value="">All Streamers</MenuItem>
          {getUniqueValues('streamer').map((streamer) => (
            <MenuItem key={streamer.slug} value={streamer}>
              {streamer.name}
            </MenuItem>
          ))}
        </Select>

        <Select
          value={selectedValues.players[0].town || ''}
          onChange={(event) => handleFilterChange('streamer', event)}
        >
          <MenuItem value="">All Streamers</MenuItem>
          {getUniqueValues('selectedValues.players[0].town').map((streamer) => (
            <MenuItem key={streamer.slug} value={streamer}>
              {streamer.name}
            </MenuItem>
          ))}
        </Select>
      </div>
    );
  }
  
//   players: [
//     {
//       player: loadPlayerBySlug(PlayerEnum.Lexiav),
//       town: loadTownBySlug(TownEnum.Castle),
//       hero: loadHeroBySlug(HeroEnum.Anabel),
//       color: ColorEnum.Red
//     },
//     {
//       player: loadPlayerBySlug('browntown'),
//       town: loadTownBySlug(TownEnum.Castle),
//       hero: loadHeroBySlug(HeroEnum.Roland),
//       color: ColorEnum.Blue
//     }
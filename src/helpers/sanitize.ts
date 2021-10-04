export type Movie = {
  title: string;
  opening_crawl: string;
  release_date: string;
  director: string;
  producer: string;
  url: string;
};

export type Character = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  url: string;
};

export const sanitizeMovie = (movies: Movie[]) => {
  return Array.isArray(movies)
    ? movies?.map(
        ({
          title,
          opening_crawl,
          release_date,
          director,
          producer,
          url,
        }: Movie) => ({
          title,
          opening_crawl,
          release_date,
          director,
          producer,
          url,
        })
      )
    : [];
};

export const sanitizeCharacter = (characters: Character[]) => {
  return Array.isArray(characters)
    ? characters?.map(
        ({
          name,
          height,
          mass,
          hair_color,
          skin_color,
          eye_color,
          birth_year,
          gender,
          homeworld,
          url,
        }: Character) => ({
          name,
          height,
          mass,
          hair_color,
          skin_color,
          eye_color,
          birth_year,
          gender,
          homeworld,
          url,
        })
      )
    : [];
};

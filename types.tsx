/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

export type Categroy = {
  name: string,
  value: string
}

export type Movie = {
  id: number
  original_title: string
  release_date: string
  vote_average: number
  poster_path: string
  genre_ids: Array<number>
}
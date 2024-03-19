
export type PokemonType = {
    name: string;
    url: string;
  }

export type ResponseType = {
    count: number;
    next: string;
    previous: string;
    results: PokemonType[];
}
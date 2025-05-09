export type PokemonType = {
    slot: number;
    type: {
        name: string;
        url: string;
    };
};

export type Pokemon = {
    name: string;
    url: string;
    id: number;
    types?: { slot: number; type: { name: string; url: string } }[];
};

export type SortOrder = 'AZ' | 'ZA' | 'LOWEST_ID' | 'HIGHEST_ID';

export type PokemonState = {
    pokemons: Pokemon[];
    loading: boolean;
    error: string | null;
    sortOrder: SortOrder;
    searchQuery: string;
};

export type Action = 
| { type: 'FETCH_START' }
| { type: 'FETCH_SUCCESS'; payload: Pokemon[] }
| { type: 'FETCH_ERROR'; payload: string }
| { type: 'SET_SORT_ORDER'; payload: 'AZ' | 'ZA' | 'LOWEST_ID' | 'HIGHEST_ID'}
| { type: 'SET_SEARCH_QUERY'; payload: string };
import { PokemonState, Action, Pokemon } from "./PokemonTypes";

export const initialState: PokemonState = {
    pokemons: [],
    loading: false,
    error: null,
    sortOrder: 'AZ',
    searchQuery: ''
};

function sortPokemons(pokemons: Pokemon[], sortOrder: PokemonState['sortOrder']) {
    switch (sortOrder) {
      case 'AZ':
        return [...pokemons].sort((a, b) => a.name.localeCompare(b.name));
      case 'ZA':
        return [...pokemons].sort((a, b) => b.name.localeCompare(a.name));
      case 'LOWEST_ID':
        return [...pokemons].sort((a, b) => a.id - b.id);
      case 'HIGHEST_ID':
        return [...pokemons].sort((a, b) => b.id - a.id);
      default:
        return pokemons;
    }
  }
  

export const pokemonReducer = (state: PokemonState, action: Action): PokemonState => {
    switch (action.type) {
        case 'FETCH_START':
            return  {
                ...state,
                loading: true,
                error: null
            }
        case 'FETCH_SUCCESS': 
            return {
                ...state,
                loading: false,
                pokemons: action.payload
            }

        case 'FETCH_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case 'SET_SORT_ORDER':
            return {
                ...state,
                sortOrder: action.payload,
                pokemons: sortPokemons(state.pokemons, action.payload)
            }
        case 'SET_SEARCH_QUERY':
            return {...state, searchQuery: action.payload };
        default:
            return state;
    }
}
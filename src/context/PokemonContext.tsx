import React, { createContext, useReducer, useEffect, useContext } from 'react';
import { pokemonReducer, initialState } from './PokemonReducer';
import { PokemonState, Action, Pokemon } from './PokemonTypes';

const PokemonStateContext = createContext<PokemonState | undefined>(undefined);
const PokemonDispatchContext = createContext<React.Dispatch<Action> | undefined>(undefined);

export const PokemonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(pokemonReducer, initialState);

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_START' });

            try{
                const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
                const data = await res.json();

                const detailedPokemons: Pokemon[] = await Promise.all(
                    data.results.map(async(poke: Pokemon, index: number) => {
                        const formRefs = await fetch(`https://pokeapi.co/api/v2/pokemon/${index + 1}/`);
                        const formData = await formRefs.json();

                        return {
                            ...poke,
                            id: index + 1,
                            types: formData.types
                        };
                    })
                );
                dispatch({ type: 'FETCH_SUCCESS', payload: detailedPokemons});
            } catch (error) {
                dispatch({ type: 'FETCH_ERROR', payload: 'Failed to fetch Pokémon data' });
            }
        };

        fetchData();
    },[]);

    return (
        <PokemonStateContext.Provider value={state}>
            <PokemonDispatchContext.Provider value={dispatch}>
                {children}
            </PokemonDispatchContext.Provider>
        </PokemonStateContext.Provider>
    )
}

export function usePokemonState() {
    const context = useContext(PokemonStateContext);
    if (!context) throw new Error("usePokemonState must be used within a PokemonProvider");
    return context;
  }
  
export function usePokemonDispatch() {
    const context = useContext(PokemonDispatchContext);
    if (!context) throw new Error("usePokemonDispatch must be used within a PokemonProvider");
    return context;
}


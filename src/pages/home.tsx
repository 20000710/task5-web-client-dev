import React, { useMemo } from 'react';
import Card from '../components/card';
import { usePokemonDispatch, usePokemonState } from '../context/PokemonContext'
import { useGridView } from '../context/GridViewContext';

const Home: React.FC = () => {
  const { pokemons, loading, error, searchQuery } = usePokemonState();
  const { isGridView } = useGridView();

  const dispatch = usePokemonDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_SEARCH_QUERY', payload: e.target.value });
  };

  const filteredPokemons = useMemo(() => {
    return pokemons.filter(p =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [pokemons, searchQuery]);

  if (loading) return <p>Loading Pokémon...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <ul className={`${isGridView ? 'flex flex-wrap' : ''}`}>
      {filteredPokemons.map((pokemon, index: number) => (
        <li key={pokemon.name}>
          <Card
            type={pokemon.types?.[0].type.name ?? 'unknown'}
            name={pokemon.name}
            idNum={index + 1}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`}
          />
        </li>
      ))}
    </ul>
  )
}

export default Home
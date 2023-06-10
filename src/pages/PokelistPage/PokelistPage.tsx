import {useState, useEffect} from 'react';
import { PokemonProps } from '../../components/Pokemon/PokemonProps';
import { Pokemon } from '../../components/Pokemon/Pokemon';


export default function PokelistPage() {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {

  }, [])
  return <div className="pokelist-widget">
    <div className='pokelist-container'>
      {pokemons.map((pokemon: PokemonProps) => {
        return <Pokemon key={pokemon.id} name="" id={0} xp={0} image=''/>
      })}
    </div>
  </div>;
}

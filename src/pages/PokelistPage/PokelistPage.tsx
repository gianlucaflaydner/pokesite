import { useState, useEffect, useCallback } from "react";
import { Pokemon } from "../../components/Pokemon/Pokemon";
import axios from "axios";
import { PokemonProps } from "../../components/Pokemon/PokemonProps";
import "./PokelistPage.css";
import Loader from "../../components/Loader/Loader";

type Pokemons = {
  characteristics: PokemonProps[];
  url: string;
};

export default function PokelistPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemons, setPokemons] = useState<Pokemons>({
    characteristics: [],
    url: "",
  });

  const getPokemonData = async (pokemonsUrl: string[], url: string) => {
    const promises = pokemonsUrl.map((url: string) =>
      axios.get(url).then((response) => ({
        name: response.data.name,
        base_experience: response.data.base_experience,
        id: response.data.id,
        image: response.data.sprites.front_default,
      }))
    );

    const pokemonsObjectArray = await Promise.all(promises);
    setPokemons({ characteristics: pokemonsObjectArray, url });
    setIsLoading(false)
  };

  const getPokemonsForFetch = useCallback(async (url: string) => {
    const pokemons = await axios.get(url).then((response) => {
      return response.data.results;
    });

    const pokemonsUrl = pokemons.map((pokemon: { url: string }) => {
      return pokemon.url;
    });
    getPokemonData(pokemonsUrl, url);
  }, []);

  

  useEffect(() => {
    getPokemonsForFetch("https://pokeapi.co/api/v2/pokemon/");
  }, [getPokemonsForFetch]);

  async function handlePagination(arg: string) {
    setIsLoading(true)
    const page = await axios.get(pokemons.url).then((response) => {
      return response.data[arg] || pokemons.url;
    });
    getPokemonsForFetch(page);
  }

  return (
    <>
      {isLoading ? (
        <div className="pokelist-loading">
          <Loader />{" "}
        </div>
      ) : (
        <div className="pokelist-widget">
          <div className="pokelist-container">
            {pokemons.characteristics.length > 0 &&
              pokemons.characteristics.map((pokemon) => {
                return (
                  <Pokemon
                    key={pokemon.id}
                    name={pokemon.name}
                    id={pokemon.id}
                    base_experience={pokemon.base_experience}
                    image={pokemon.image}
                  />
                );
              })}
          </div>
          <div className="pokelist-buttons">
            <button
              className="pokelist-button"
              onClick={() => handlePagination("previous")}
            >
              {" "}
              PREV PAGE
            </button>
            <button
              className="pokelist-button"
              onClick={() => handlePagination("next")}
            >
              {" "}
              NEXT PAGE
            </button>
          </div>
        </div>
      )}
    </>
  );
}

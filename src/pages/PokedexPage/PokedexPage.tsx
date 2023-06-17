import { useEffect, useState } from "react";
import { Pokedex } from "../../components/Pokedex/Pokedex";
import "./PokedexPage.css";
import axios from "axios";
import Loader from "../../components/Loader/Loader";

export default function PokedexPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonImageSrc, setPokemonImageSrc] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState(1);

  async function getPokemon(identification: string | number) {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${identification}`)
      .then((response) => {
        setPokemonImageSrc(response.data.sprites.front_default);
        setName(response.data.name);
        setId(response.data.id);
        setIsLoading(false);
      })
      .catch(() => {
        setName("NOT FOUND");
        setId(0);
        setPokemonImageSrc(
          "https://static.thenounproject.com/png/1103191-200.png"
        );
      });
  }

  useEffect(() => {
    getPokemon(id);
  }, [id]);

  const handleNextButton = () => {
    const pokemonIndex = id + 1;
    setId(pokemonIndex);
  };
  const handlePrevButton = () => {
    const pokemonIndex = id !== 1 ? id - 1 : id;
    setId(pokemonIndex);
  };

  const handleSearchPokemon = (inputValue: string) => {
    const formattedValue = inputValue.toLocaleLowerCase();
    getPokemon(formattedValue);
  };
  return (
    <div className="pokedex-widget">
      {isLoading ? (
        <Loader />
      ) : (
        <Pokedex
          imageSrc={pokemonImageSrc}
          pokemonName={name}
          pokemonId={id}
          handleNextButton={handleNextButton}
          handlePrevButton={handlePrevButton}
          handleSearchPokemon={handleSearchPokemon}
        />
      )}
    </div>
  );
}

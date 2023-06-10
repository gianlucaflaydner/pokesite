import { useEffect, useState } from "react";
import { Pokedex } from "../../components/Pokedex/Pokedex";
import "./PokedexPage.css";
import axios from "axios";
import Loader from "../../components/Loader/Loader";

export default function PokedexPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [src, setSrc] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState(1);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`).then((response) => {
      setSrc(response.data.sprites.front_default);
      setName(response.data.name);
      setId(response.data.id);
      setIsLoading(false);
    });
  }, [index]);

  const handleNextButton = () => {
    const pokemonIndex = index + 1;
    setIndex(pokemonIndex);
  };
  const handlePrevButton = () => {
    const pokemonIndex = index !== 1 ? index - 1 : index;
    setIndex(pokemonIndex);
  };

  const handleSearchPokemon = (inputValue: string) => {
    const formattedValue = inputValue.toLocaleLowerCase();
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${formattedValue}`)
      .then((response) => {
        setSrc(response.data.sprites.front_default);
        setName(response.data.name);
        setId(response.data.id);
        setIndex(response.data.id);
      })
      .catch(() => {
        setName("NOT FOUND");
        setId(0);
        setIndex(0);
        setSrc("https://static.thenounproject.com/png/1103191-200.png");
      });
  };
  return (
    <div className="pokedex-widget">
      {isLoading ? (
        <Loader />
      ) : (
        <Pokedex
          src={src}
          name={name}
          id={id}
          handleNextButton={handleNextButton}
          handlePrevButton={handlePrevButton}
          handleSearchPokemon={handleSearchPokemon}
        />
      )}
    </div>
  );
}

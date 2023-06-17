import { useState } from "react";
import { PokedexProps } from "./PokedexProps";
import "./Pokedex.css";

export const Pokedex: React.FC<PokedexProps> = (props) => {
  const {
    pokemonName,
    imageSrc,
    pokemonId,
    handlePrevButton,
    handleNextButton,
    handleSearchPokemon,
  } = props;
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="pokeFrame">
      <img alt={pokemonName} src={imageSrc} className="pokemon-image"></img>
      <div>
        <h1 className="pokemon">
          #{pokemonId} - {pokemonName}
        </h1>
      </div>
      <div style={{ marginTop: "3rem" }}>
        <button className="pokedex-button" onClick={handlePrevButton}>
          {" "}
          PREV{" "}
        </button>
        <button className="pokedex-button" onClick={handleNextButton}>
          {" "}
          NEXT
        </button>
      </div>
      <div className="pokedex-input-container">
        <input
          type="search"
          className="pokedex-input"
          placeholder="ID or Name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button
          className="pokedex-button"
          onClick={() => handleSearchPokemon(inputValue)}
        >
          SEARCH
        </button>
      </div>
    </div>
  );
};

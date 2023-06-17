export interface PokedexProps {
  imageSrc: string;
  pokemonName: string;
  pokemonId: number;
  handlePrevButton: () => void;
  handleNextButton: () => void;
  handleSearchPokemon: (inputValue: string) => void;
}

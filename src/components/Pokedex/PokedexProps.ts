export interface PokedexProps {
  src: string;
  name: string;
  id: number;
  handlePrevButton: () => void;
  handleNextButton: () => void;
  handleSearchPokemon: (inputValue: string) => void;
}

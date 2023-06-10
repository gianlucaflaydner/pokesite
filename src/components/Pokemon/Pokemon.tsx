import { PokemonProps } from "./PokemonProps";
import "./Pokemon.css";

export const Pokemon: React.FC<PokemonProps> = (props) => {
  const { name, xp, id, image } = props;
  return (
    <div className="pokemon-info-container">
      <div>
        <img src={image} alt={name} />
        <span> - {name}</span>
      </div>
      <div>
      <span>{id}</span>
        <span> - {xp}</span>
      </div>
    </div>
  );
};

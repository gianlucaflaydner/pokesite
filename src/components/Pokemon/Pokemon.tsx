import { PokemonProps } from "./PokemonProps";
import "./Pokemon.css";

export const Pokemon: React.FC<PokemonProps> = (props) => {
  const { name, base_experience, id, image } = props;
  return (
    <div className="pokemon-info-container">
      <div className="pokemon-info">
        <img src={image} alt={name} className="pokemon-info-image"/>
        <p className="pokemon-info-p"> {name}</p>
      </div>
      <div className="pokemon-info">
        <p className="pokemon-info-p">ID:{id}</p>
        <p className="pokemon-info-p">XP:{base_experience}</p>
      </div>
    </div>
  );
};

import type React from "react";
import type { Character } from "../../api/types";
import { Link } from "react-router-dom";
import "./CharacterList.css";

type Props = {
  characters: Character[];
};

const CharacterList: React.FC<Props> = ({ characters }) => (
  <ul className="character-list">
    {characters.map((char) => (
      <li key={char.id} className="character-list-item">
        <Link to={`/character/${char.id}`}>
          <img
            src={char.image}
            alt={char.name}
            className="character-list-image"
            width={80}
            height={80}
          />
          <div>{char.name}</div>
        </Link>
      </li>
    ))}
  </ul>
);

export default CharacterList;

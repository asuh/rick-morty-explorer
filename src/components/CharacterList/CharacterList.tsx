import type React from "react";
import type { Character } from "../../api/types";
import { Link } from "react-router-dom";
import "./CharacterList.css";

type Props = {
  characters: Character[];
  currentPage: number;
};

const CharacterList: React.FC<Props> = ({ characters, currentPage }) => (
  <ul className="character-list">
    {characters.map((char) => (
      <li key={char.id} className="character-list-item">
        <Link to={`/character/${char.id}?from=${currentPage}`} className="character-list-link">
          <img
            src={char.image}
            alt={char.name}
            className="character-list-image"
            width={80}
            height={80}
          />
          <span className="character-list-name">{char.name}</span>
        </Link>
      </li>
    ))}
  </ul>
);

export default CharacterList;

import type React from "react";
import { useParams, Link } from "react-router-dom";
import { useCharacter } from "../api/useCharacter";
import "./CharactersDetailsPage.css";

const CharacterDetailPage: React.FC = () => {
  const { id } = useParams();

  if (!id) return <p>Character not found.</p>;

  const { data, loading, error } = useCharacter(id);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>Character not found.</p>;

  return (
    <section className="character-detail-card" id="main">
      <Link className="character-detail-back" to="/">
        &larr; Back to list
      </Link>
      <img
        src={data.image}
        alt={data.name}
        className="character-detail-image"
      />
      <div className="character-detail-content">
        <h1 className="character-detail-name">{data.name}</h1>
        <ul className="character-detail-list">
          <li className="character-detail-item">
            <strong>Status:</strong>
            <span>{data.status}</span>
          </li>
          <li className="character-detail-item">
            <strong>Species:</strong>
            <span>{data.species}</span>
          </li>
          <li className="character-detail-item">
            <strong>Gender:</strong>
            <span>{data.gender}</span>
          </li>
          <li className="character-detail-item">
            <strong>Origin:</strong>
            <span>{data.origin.name}</span>
          </li>
          <li className="character-detail-item">
            <strong>Location:</strong>
            <span>{data.location.name}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CharacterDetailPage;

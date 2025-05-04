import type React from "react";
import { useParams, Link } from "react-router-dom";
import { useCharacter } from "../api/useCharacter";

const CharacterDetailPage: React.FC = () => {
  const { id } = useParams();

  if (!id) return <p>Character not found.</p>;

  const { data, loading, error } = useCharacter(id);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>Character not found.</p>;

  return (
    <section className="character-detail">
      <Link to="/">&larr; Back to list</Link>
      <h1>{data.name}</h1>
      <img
        src={data.image}
        alt={data.name}
        width={200}
        height={200}
        style={{ borderRadius: "1rem", margin: "1rem 0" }}
      />
      <ul>
        <li>
          <strong>Status:</strong> {data.status}
        </li>
        <li>
          <strong>Species:</strong> {data.species}
        </li>
        <li>
          <strong>Gender:</strong> {data.gender}
        </li>
        <li>
          <strong>Origin:</strong> {data.origin.name}
        </li>
        <li>
          <strong>Location:</strong> {data.location.name}
        </li>
      </ul>
    </section>
  );
};

export default CharacterDetailPage;

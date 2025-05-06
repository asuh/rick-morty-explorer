import type React from "react";
import { useCharacters } from "../api/useCharacters";
import CharacterList from "../components/CharacterList/CharacterList";
import RickAndMortyLogo from "../components/RickAndMortyLogo/RickAndMortyLogo";

const CharacterListPage: React.FC = () => {
  const { data, loading, error } = useCharacters();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data || data.length === 0) return <p>No characters found.</p>;

  return (
    <section>
      <h1>Character List</h1>
      <CharacterList characters={data} />
    </section>
  );
};

export default CharacterListPage;

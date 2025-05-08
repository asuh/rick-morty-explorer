import type React from "react";
import { useCharacterListData } from "../hooks/useCharacterListData";
import CharacterList from "../components/CharacterList/CharacterList";
import Pagination from "../components/Pagination/Pagination";
import { usePagination } from "../hooks/usePagination";

const CharacterListPage: React.FC = () => {
  const { currentPage } = usePagination({
    defaultPage: 1,
    updateTitle: true,
    titlePrefix: "Characters | Rick and Morty Explorer - Page"
  });

  const { data, loading, error, pageInfo } = useCharacterListData(currentPage);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data || data.length === 0) return <p>No characters found.</p>;

  return (
    <section id="main">
      <h1>Character List</h1>
      <CharacterList characters={data} currentPage={currentPage} />
      {pageInfo && (
       <Pagination
          currentPage={currentPage}
          totalPages={pageInfo.pages}
          baseUrl="/"
        /> 
      )}
    </section>
  );
};

export default CharacterListPage;

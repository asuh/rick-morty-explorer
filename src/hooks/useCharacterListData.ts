import { useEffect, useState } from "react";
import { fetchCharacters } from "../api/rickAndMortyApi";
import type { Character } from "../api/types";

export function useCharacterListData(page = 1) {
  const [data, setData] = useState<Character[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pageInfo, setPageInfo] = useState<{
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  } | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setData(null);

    fetchCharacters(page)
      .then((res) => {
        setData(res.results);
        setPageInfo(res.info);
        setError(null);
      })
      .catch((err) => {
        setError(err.message)
        setData(null);
        setPageInfo(null);
      })
      .finally(() => setLoading(false));
  }, [page]);

  return { data, loading, error, pageInfo };
}

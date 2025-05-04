import { useEffect, useState } from "react";
import { fetchCharacters } from "./rickAndMortyApi";
import type { Character } from "./types";

export function useCharacters(page = 1) {
  const [data, setData] = useState<Character[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchCharacters(page)
      .then((res) => {
        setData(res.results);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [page]);

  return { data, loading, error };
}

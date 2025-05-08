import { useEffect, useState } from "react";
import { fetchCharacterById } from "../api/rickAndMortyApi";
import type { Character } from "../api/types";

export function useCharacterById(id: string | number) {
  const [data, setData] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchCharacterById(id)
      .then((res) => {
        setData(res);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  return { data, loading, error };
}

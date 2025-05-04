import type { CharactersResponse, Character } from "./types";

const BASE_URL = "https://rickandmortyapi.com/api";

export async function fetchCharacters(page = 1): Promise<CharactersResponse> {
  const res = await fetch(`${BASE_URL}/character?page=${page}`);
  if (!res.ok) {
    throw new Error("Failed to fetch characters");
  }
  return res.json();
}

export async function fetchCharacterById(id: string | number): Promise<Character> {
  const res = await fetch(`${BASE_URL}/character/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch character");
  }
  return res.json();
}

import { it, expect, vi } from "vitest";
import { fetchCharacters } from "./rickAndMortyApi";

it("fetches characters", async () => {
  vi.stubGlobal("fetch", () =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        info: {},
        results: [{ id: 1, name: "Rick" }],
      }),
    })
  );

  const data = await fetchCharacters();
  expect(data.results[0].name).toBe("Rick");
});

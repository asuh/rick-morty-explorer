import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import "@testing-library/jest-dom";

// Mock the module before importing the component
vi.mock("../api/useCharacter", () => ({
  useCharacter: () => ({
    data: {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      gender: "Male",
      image: "rick.png",
      origin: { name: "Earth" },
      location: { name: "Earth" },
    },
    loading: false,
    error: null,
  }),
}));

import CharactersDetailsPage from "./CharactersDetailsPage";

describe("CharactersDetailsPage", () => {
  it("renders character details", () => {
    render(
      <MemoryRouter initialEntries={["/character/1"]}>
        <Routes>
          <Route path="/character/:id" element={<CharactersDetailsPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
    expect(screen.getByText("Status:")).toBeInTheDocument();
    expect(screen.getByText("Alive")).toBeInTheDocument();
    expect(screen.getByAltText("Rick Sanchez")).toBeInTheDocument();
  });
});

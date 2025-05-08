import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CharacterList from "./CharacterList";
import '@testing-library/jest-dom';

const characters = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    gender: "Male",
    image: "rick.png",
    origin: { name: "Earth" },
    location: { name: "Earth" },
  },
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    gender: "Male",
    image: "morty.png",
    origin: { name: "Earth" },
    location: { name: "Earth" },
  },
];

describe("CharacterList", () => {
  it("renders character names and images", () => {
    render(
      <BrowserRouter>
        <CharacterList characters={characters} currentPage={1} />
      </BrowserRouter>
    );
    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
    expect(screen.getByText("Morty Smith")).toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(2);
  });
});

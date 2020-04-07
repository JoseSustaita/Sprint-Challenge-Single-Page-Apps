import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => setCharacters(response.data.results))
      .catch(error => console.error(error));
    console.log();
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);
  return (
    <div className="CharacterCard">
      <SearchForm />
      <Link className="main-buttons" to={"/"}>
        Home
      </Link>
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

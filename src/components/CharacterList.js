import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState([]);
  const [filteredData, updateData] = useState([]);

  const search = charArr => {
    updateData(charArr);
  };

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get("https://rickandmortyapi.com/api/character/").then(response => {
      console.log(response.data.results);
      setCharacters(response.data.results);
      updateData(response.data.results);
    });
  }, []);

  return (
    <section className="character-list">
      <h2>Character List</h2>
      <Link className="main-buttons" to={"/"}>
        Home
      </Link>
      <SearchForm search={search} characters={characters} />
      {filteredData.map(char => {
        return <CharacterCard key={char.id} character={char} />;
      })}
    </section>
  );
}

import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

export default function SearchForm() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/").then((response) => {
      const characters = response.data.results.filter(
        (character) => character.name.includes(filter) //Checks to see if character name starts with what was in the empty string useState
      );

      setData(characters); //Adds the character data to the empty useState array
    });
  }, [filter]);

  const handleInputChange = (event) => {
    setFilter(event.target.value);
  };

  const Card = styled.div`
    width: 80%;
    padding: 10px;
    box-shadow: 1px 1px 5px black;
    border-radius: 10px;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
  `;

  const CardImg = styled.img`
    width: 200px;
    height: 200px;
  `;

  const CardInfo = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 50%;
  `;

  const Status = styled.div`
text-align: left;
background: green;
height: 30px;
vertical-align: middle;
color: white;
padding: 10px;
border-radius;
`;

  return (
    <div>
      <input
        id="name"
        type="text"
        name="textfield"
        placeholder="Search"
        value={filter}
        onChange={handleInputChange}
      />

      {data.map((character) => {
        return (
          <div className="character-card">
            <Card>
              <CardImg src={character.image} />
              <CardInfo>
                <div>ID: {character.id}</div>
                <div>Name: {character.name}</div>
                <div>Gender: {character.gender}</div>
                <div>Species: {character.species}</div>
                <div>Origin: {character.origin.name}</div>
              </CardInfo>
              <Status>Status: {character.status}</Status>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

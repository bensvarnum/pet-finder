import React, { useState, useEffect } from "react";
import { PostCard, PetForm } from "../components";
import styled from "styled-components";
import axios from "axios";
require("dotenv");

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 100px;
`;

const FoundOnly = () => {
  const [foundPets, setFoundPets] = useState([]);
  const [petCards, setPetCards] = useState();

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("https://pet-finder-backend.herokuapp.com/posts/found/20")
        .then((res) => {
          setFoundPets(res.data);
        });
    }
    fetchData();
  }, []);

  useEffect(() => {
    setPetCards(
      foundPets.map((pet) => (
        <PostCard
          key={pet.id}
          PostTypeId={pet.PostTypeId}
          color={pet.color}
          size={pet.size}
          location={pet.location}
          name={pet.petName}
          email={pet.email}
          url={pet.url}
          description={pet.description}
          phoneNumber={pet.phoneNumber}
        />
      ))
    );
  }, [foundPets]);
  return (
    <>
      <h1>Found Pets</h1>
      <CardContainer>{petCards}</CardContainer>;
    </>
  );
};

export default FoundOnly;

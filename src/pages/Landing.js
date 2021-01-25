import React, { useState, useEffect } from "react";
import { PostCard } from "../components";
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

const Landing = () => {
  const [allPets, setAllPets] = useState([]);
  const [petCards, setPetCards] = useState();

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("https://pet-finder-backend.herokuapp.com/posts/all")
        .then((res) => {
          setAllPets(res.data);
        });
    }
    fetchData();
  }, []);

  useEffect(() => {
    setPetCards(
      allPets.map((pet) => (
        <PostCard
          key={pet.id}
          PostTypeId={pet.PostTypeId}
          color={pet.color}
          size={pet.size}
          location={pet.location}
          description={pet.description}
          url={pet.url}
          name={pet.petName}
          email={pet.email}
          phoneNumber={pet.phoneNumber}
        />
      ))
    );
  }, [allPets]);
  return (
    <>
      <h1>All Pets</h1>
      <CardContainer>{petCards}</CardContainer>
    </>
  );
};

export default Landing;

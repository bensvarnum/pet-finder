import React, { useState, useEffect } from "react";
import { PostCard } from "../components";
import styled from "styled-components";
import axios from "axios";
require("dotenv");

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const LostOnly = () => {
  const [lostPets, setLostPets] = useState([]);
  const [petCards, setPetCards] = useState();

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("https://pet-finder-backend.herokuapp.com/posts/lost/20")
        .then((res) => {
          console.log(res.data);
          setLostPets(res.data);
        });
    }
    fetchData();
  }, []);

  useEffect(() => {
    setPetCards(
      lostPets.map((pet) => (
        <PostCard
          key={pet.id}
          PostTypeId={pet.PostTypeId}
          color={pet.color}
          size={pet.size}
          location={pet.location}
          name={pet.petName}
          email={pet.email}
          phoneNumber={pet.phoneNumber}
        />
      ))
    );
  }, [lostPets]);
  return (
    <>
      <h1>Lost Pets</h1>
      <CardContainer>{petCards}</CardContainer>;
    </>
  );
};

export default LostOnly;

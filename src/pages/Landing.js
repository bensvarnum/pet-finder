import React from "react";
import { PostCard } from '../components';
import styled from 'styled-components';
import fetch from 'node-fetch';

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;


function Landing() {
  

  return (
    <div>
      <h3>Landing Page</h3>
      <CardContainer>
      </CardContainer>
    </div>
  );
}

export default Landing;

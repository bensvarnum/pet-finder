import React from "react";
import { PostCard } from '../components';
import styled from 'styled-components';


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
      <PostCard
      PostTypeId='1' 
      img="https://media.npr.org/assets/img/2019/10/25/dog-1_custom-b4535cb019d318a5abced07fa0a4e05b635e448f-s1600-c85.jpg"
      name="Daniel"
      size="Small"
      location="1600 Pennsylvania Ave"
      email=""
      phoneNumber="2154931673"
      />
      <PostCard
      PostTypeId='2' 
      img="https://media.npr.org/assets/img/2019/10/25/dog-1_custom-b4535cb019d318a5abced07fa0a4e05b635e448f-s1600-c85.jpg"
      name="Daniel"
      size="Small"
      location="1600 Pennsylvania Ave"
      email="daniel@mail.com"
      phoneNumber="2154931673"
      />
      <PostCard
      PostTypeId='1'  
      img="https://media.npr.org/assets/img/2019/10/25/dog-1_custom-b4535cb019d318a5abced07fa0a4e05b635e448f-s1600-c85.jpg"
      name="Daniel"
      size="Small"
      location="1600 Pennsylvania Ave"
      email="daniel@mail.com"
      phoneNumber=""
      />
      </CardContainer>
    </div>
  );
}

export default Landing;

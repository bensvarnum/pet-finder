import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import styled from "styled-components";
import ContactModal from './ContactModal';

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;
const CardWrapper = styled.div`
    padding: 5px;
    margin-left: 10px;
    margin-right: 10px;
`;



const PostCard = (props) => {
  const Title = styled.h1`
    color: ${props.PostTypeId === '1' ? "green" : "red"};
    font-weight: 900;
  `;

  return (
    <CardWrapper>
      <Card>
        <Card.Content>
          <Card.Header>
            <Title>{props.PostTypeId === '1' ? 'Found' : 'Lost'}</Title>
            <Image src={props.img} />
          </Card.Header>
          <Info>
            <h3>{props.name}</h3>
            <p>{props.color}</p>
            <p>{props.size}</p>
            <p>
              <span>{props.PostTypeId === '1' ? 'Found At: ' : 'Last Seen: '} </span>
              {props.location}
            </p>
          </Info>
          <Card.Description>{props.notes}</Card.Description>
        </Card.Content>
        <ContactModal PostTypeId = {props.PostTypeId} email = {props.email} phoneNumber = {props.phoneNumber}/>
      </Card>
    </CardWrapper>
  );
};

export default PostCard;

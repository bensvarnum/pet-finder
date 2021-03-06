import React from "react";
import { Card, Image } from "semantic-ui-react";
import styled from "styled-components";
import ContactModal from "./ContactModal";

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;

  p > span {
    font-weight: bold;
  }
`;
const CardWrapper = styled.div`
  padding: 5px;
  margin-left: 10px;
  margin-right: 10px;
`;

const Title = styled.h1`
  font-weight: 900;
  color: ${(props) => props.color};
`;

const PostCard = (props) => {
  return (
    <CardWrapper>
      <Card>
        <Card.Content>
          <Card.Header>
            <Title color={props.PostTypeId === 1 ? "red" : "green"}>
              {props.PostTypeId === 1 ? "Lost" : "Found"}
            </Title>
            <Image src={props.url} alt="lost pet" />
          </Card.Header>
          <Info>
            <h3>{props.name}</h3>
            <p>
              <span>Color: </span>
              {props.color}
            </p>
            <p>
              <span>Size: </span>
              {props.size}
            </p>
            <p>
              <span>
                {props.PostTypeId === 1 ? "Last Seen: " : "Found at: "}
              </span>
              {props.location}
            </p>
            <p>
              <span>Description:</span>
              {props.description}
            </p>
          </Info>
          <Card.Description>{props.notes}</Card.Description>
        </Card.Content>
        <ContactModal
          PostTypeId={props.PostTypeId}
          email={props.email}
          phoneNumber={props.phoneNumber}
        />
      </Card>
    </CardWrapper>
  );
};

export default PostCard;

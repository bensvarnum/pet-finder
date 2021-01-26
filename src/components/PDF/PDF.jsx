import React from "react";
import Pdf from "react-to-pdf";
import "./PDF.css";

const ref = React.createRef();

const PDF = (props) => {

  return (
    <>
      <div className="pdf__view" ref={ref}>
        <div className="pdf__header">
          <h1 className="pdf__logo">Lost Pet</h1>
        </div>
        <div className="pdf__image">
          <img src={props.images[0].data_url} alt={props.name} />
        </div>
        <div className="pdf__info">
          <div className="pdf__input">
            <h3>Name: {props.name}</h3>
            <h3>Fur Color: {props.color}</h3>
            <h3>Size: {props.size}</h3>
            <h3>Last Seen: {props.location}</h3>
            <h3>Description: {props.description}</h3>
            <h3>Contact #: {props.number}</h3>
            <h3>Email: {props.email}</h3>
          </div>
        </div>
      </div>
      <Pdf targetRef={ref} filename="Lost-Pet.pdf">
        {({ toPdf }) => <button className="pdf-button" onClick={toPdf}>Capture as PDF</button>}
      </Pdf>
    </>
  );
};

export default PDF;

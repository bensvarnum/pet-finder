import React from "react";
import Pdf from "react-to-pdf";
import "./PDF.css";

const ref = React.createRef();

const PDF = (props) => {
  console.log("pdf props", props);
  console.log("image", props.images[0]);

  return (
    <>
      <div className="view" ref={ref}>
        <div className="view__header">
          <h1 className="lost__logo">Lost Pet</h1>
        </div>
        <div className="view__image">
          <img src={props.images[0].data_url} alt={props.name} />
        </div>
        <div className="view__image">
          <div className="view__input">
            <h3>Name: {props.name}</h3>
            <h3>Fur Color: {props.color}</h3>
            <h3>Size: {props.size}</h3>
            <h3>Last Seen: {props.location}</h3>
            <h3>Description: {props.description}</h3>
          </div>
          <div className="view__contact">
            <h3>Contact Phone Number: {props.number}</h3>
            <h3>Email: {props.email}</h3>
          </div>
        </div>
      </div>
      <Pdf targetRef={ref} filename="Lost-Pet.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
      </Pdf>
    </>
  );
};

export default PDF;

import React, { useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import "./PetForm.css";

function PetForm() {
  // const onSubmit = data => console.log(data)
  const [petName, showPetName] = useState(false);
  const [otherText, showOtherText] = useState(false);
  const [petNameInput, setPetNameInput] = useState("");
  const [furColorChoice, setFurColorChoice] = useState("white");
  const [petSize, setPetSize] = useState("small");

  const onHandleChange = (e) => {
    setPetNameInput(e.target.value);
    setFurColorChoice(e.target.value);
    setPetSize(e.target.value);
  };

  const lostToggler = () => {
    showPetName(!petName);
  };

  // const otherTextToggler = (e) => {
  //   if (e.target.value === "other") {
  //     showOtherText({ otherText: true });
  //   }
  //   // if (e.target.value !== "other") {
  //   //   showOtherText({ otherText: false });
  //   // }
  // };

  const resetToggler = () => {
    showPetName(false);
  };

  return (
    <Segment color="blue" inverted>
      <div className="form">
        <div className="form__header">
          <h3>Lost or Found</h3>
          <p>
            Is your pet lost? Did you find someones pet and would like to find
            the owner?
          </p>
        </div>
        <div className="form__input">
          <Form inverted>
            <Form.Group>
              <Form.Field
                label="Lost"
                control="input"
                type="radio"
                name="htmlRadios"
                onClick={lostToggler}
              />

              <Form.Field
                label="Found"
                control="input"
                type="radio"
                name="htmlRadios"
                onClick={resetToggler}
              />
            </Form.Group>
            {petName && (
              <Form.Group>
                <Form.Input
                  type="text"
                  label="Pets Name"
                  placeholder="Name of Pet"
                  value={petNameInput}
                  onChange={onHandleChange}
                />
              </Form.Group>
            )}
            <Form.Group>
              <Form.Field
                label="Fur Color"
                control="select"
                value={furColorChoice}
                onChange={onHandleChange}
              >
                <option value="white">White</option>
                <option value="black">Black</option>
                <option value="brown">Brown</option>
                <option value="blonde">Blonde</option>
                <option value="other">Other</option>
              </Form.Field>
              {furColorChoice === "other" && (
                <Form.Group>
                  <Form.Input
                    type="text"
                    label="Other Fur Color"
                    placeholder="Fur Color"
                  />
                </Form.Group>
              )}
            </Form.Group>
            <Form.Group inline>
              <label>Size</label>
              <Form.Field
                label="Small"
                control="input"
                type="radio"
                name="htmlRadios"
                value="small"
              />
              <Form.Field
                label="Medium"
                control="input"
                type="radio"
                name="htmlRadios"
                value="medium"
              />
              <Form.Field
                label="Large"
                control="input"
                type="radio"
                name="htmlRadios"
                value="large"
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                type="text"
                label="Pets Name"
                placeholder="Name of Pet"
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                type="tel"
                label="Phone Number"
                placeholder="Phone Number"
                id="phone"
                name="phone"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              />
            </Form.Group>
            <Form.Group>
              <Form.Input type="email" label="Email" placeholder="Email" />
            </Form.Group>
            <Form.Field
              label="Location or Last Seen"
              control="textarea"
              rows="3"
            />
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      </div>
    </Segment>
  );
}

export default PetForm;

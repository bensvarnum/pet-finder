import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import PlacesAutocomplete from "react-places-autocomplete";
import axios from "axios";
import "./PetForm.css";

function PetForm() {
  const [petName, showPetName] = useState(false);

  const [petNameInput, setPetNameInput] = useState("");
  const [furColorChoice, setFurColorChoice] = useState("white");

  const [petSize, setPetSize] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState({ file: null });

  const onHandleChange = (e) => {
    setPetNameInput(e.target.value);
  };

  const handleImage = (e) => {
    setImage({ file: e.target.files[0] });
  };

  const handleColorChoice = (e) => {
    // const choice = e.target.value === "other" ? "" : e.target.value;

    setFurColorChoice(e.target.value);
  };

  // const otherColorChoice = (e) => {
  //   setOtherColor(e.target.value);
  // };

  const handleSizeChange = (e) => {
    setPetSize(e.target.value);
  };

  const handleLocation = (value) => {
    setLocation(value);
  };

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleNotes = (e) => {
    setNotes(e.target.value);
  };

  const handleSelect = async (value) => {
    setLocation(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = {
      color: furColorChoice,
      size: petSize,
      location,
      petName: petNameInput,
      email,
      phoneNumber,
      description: notes,
      image,
    };
    axios
      .post("http://localhost:9000/posts/add", { form })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(form);
  };

  const lostToggler = () => {
    showPetName(!petName);
  };

  const resetToggler = () => {
    showPetName(false);
  };

  return (
    <div className="form">
      <div className="form__header">
        <h3>Lost or Found</h3>
        <p>
          Is your pet lost? Did you find someones pet and would like to find the
          owner?
        </p>
      </div>
      <div className="form__input">
        <Form onSubmit={handleSubmit} encType="multipart/form-data">
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
          <div className="form__dropdown">
            <div className="form__color">
              <Form.Group>
                <Form.Field
                  label="Fur Color"
                  control="select"
                  value={furColorChoice}
                  onChange={handleColorChoice}
                >
                  <option value="white">White</option>
                  <option value="black">Black</option>
                  <option value="brown">Brown</option>
                  <option value="blonde">Blonde</option>
                  <option value="other">Other</option>
                </Form.Field>
              </Form.Group>
            </div>
            <div className="form__size">
              <Form.Group>
                <Form.Field
                  label="Size"
                  control="select"
                  value={petSize}
                  onChange={handleSizeChange}
                >
                  <option value="small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                </Form.Field>
              </Form.Group>
            </div>
          </div>

          <Form.Group>
            <PlacesAutocomplete
              value={location}
              onChange={handleLocation}
              onSelect={handleSelect}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => (
                <div>
                  <Form.Input
                    label="Location"
                    {...getInputProps({ placeholder: "Enter Location" })}
                  />
                  <div className="autocomplete-dropdown-container">
                    {loading ? <div>...loading</div> : null}
                    {suggestions.map((suggestion, index) => {
                      const className = suggestion.active
                        ? "suggestion-item--active"
                        : "suggestion-item";
                      const style = suggestion.active
                        ? { backgroundColor: "#6b778d", cursor: "pointer" }
                        : { backgroundColor: "#263859", cursor: "pointer" };
                      return (
                        <div
                          key={index}
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                          })}
                        >
                          <span>{suggestion.description}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
          </Form.Group>
          <Form.Group>
            <Form.Input
              type="text"
              label="Phone Number"
              placeholder="Phone Number"
              id="phone"
              name="phone"
              value={phoneNumber}
              onChange={handlePhoneNumber}
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              type="email"
              label="Email"
              placeholder="Email"
              value={email}
              onChange={handleEmail}
            />
          </Form.Group>
          <Form.TextArea
            label="Area of Last Seen"
            placeholder="Give a description of where you found/lost the pet"
            rows="3"
            value={notes}
            onChange={handleNotes}
          />
          <Form.Group>
            <input
              type="file"
              label="Upload Image"
              name="petImage"
              onChange={handleImage}
            />
          </Form.Group>
          <div className="form__button">
            <Button type="submit" value="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default PetForm;

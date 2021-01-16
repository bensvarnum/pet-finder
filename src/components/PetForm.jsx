import React, { useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import PlacesAutocomplete from "react-places-autocomplete";
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
    setFurColorChoice(e.target.value);
  };

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
    console.log(image);
  };
  const lostToggler = () => {
    showPetName(!petName);
  };

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
          <Form onSubmit={handleSubmit} inverted>
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
                onChange={handleColorChoice}
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
                    value={furColorChoice}
                    onChange={handleColorChoice}
                  />
                </Form.Group>
              )}
            </Form.Group>
            <Form.Group inline>
              <label>Size</label>
              <Form.Field
                control="input"
                label="Small"
                type="radio"
                name="htmlRadios"
                value="small"
                onChange={handleSizeChange}
              />
              <Form.Field
                control="input"
                label="Medium"
                type="radio"
                name="htmlRadios"
                value="medium"
                onChange={handleSizeChange}
              />
              <Form.Field
                control="input"
                label="Large"
                type="radio"
                name="htmlRadios"
                value="large"
                onChange={handleSizeChange}
              />
            </Form.Group>
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
                type="tel"
                label="Phone Number"
                placeholder="Phone Number"
                id="phone"
                name="phone"
                value={phoneNumber}
                onChange={handlePhoneNumber}
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
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
            <Button type="submit" value="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </Segment>
  );
}

export default PetForm;

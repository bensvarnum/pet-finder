import React, { useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";

function PetForm() {
  // const onSubmit = data => console.log(data)

  return (
    <Segment inverted>
      <div className="form">
        <div className="form__header">
          <h3>Lost or Found form</h3>
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
              />
              <Form.Field
                label="Found"
                control="input"
                type="radio"
                name="htmlRadios"
              />
            </Form.Group>
            <Form.Group>
              <Form.Field label="Fur Color" control="select">
                <option value="white">White</option>
                <option value="black">Black</option>
                <option value="brown">Brown</option>
                <option value="blonde">Blonde</option>
              </Form.Field>
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
                Placeholder="Name of Pet"
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                type="tel"
                label="Phone Number"
                Placeholder="Phone Number"
                id="phone"
                name="phone"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              />
            </Form.Group>
            <Form.Group>
              <Form.Input type="email" label="Email" Placeholder="Email" />
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

import React, { useState } from "react";
import PDF from "./PDF";
import { Form, Input, Button } from "antd";
import ImageUploading from "react-images-uploading";
import "./pdfForm.css";

function PdfForm() {
  const [form] = Form.useForm();
  const [images, setImages] = useState([]);
  const maxNumber = 1;
  const [show, setHide] = useState(false);
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [petSize, setPetSize] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleImage = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleDecriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSizeChange = (e) => {
    setPetSize(e.target.value);
  };
  const handleFurColor = (e) => {
    setColor(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const onFinish = (values) => {
    console.log(values);
    setHide(true);
  };

  return (
    <>
      {!show ? (
        <div className="container">
          <div className="poster__header">
            <h1>Fill out form to generate a pdf to print</h1>
          </div>
          <Form className="pdf-form" form={form} name="control-hooks" onFinish={onFinish}>
            <Form.Item
              name="name"
              label="Pet Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input value={name} onChange={handleNameChange} />
            </Form.Item>
            <Form.Item
              name="color"
              label="Fur Color"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input value={color} onChange={handleFurColor} />
            </Form.Item>
            <Form.Item
              name="size"
              label="Size"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input value={petSize} onChange={handleSizeChange} />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input value={phone} onChange={handlePhoneNumber} />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  type: "email",
                },
              ]}
            >
              <Input value={email} onChange={handleEmail} />
            </Form.Item>
            <Form.Item
              name="location"
              label="Location"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input value={location} onChange={handleLocationChange} />
            </Form.Item>
            <Form.Item
              name="Description"
              label="Description"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.TextArea
                value={description}
                onChange={handleDecriptionChange}
              />
            </Form.Item>
            <div className="button__group">
              <div className="img__upload">
                <ImageUploading
                  multiple
                  value={images}
                  onChange={handleImage}
                  maxNumber={maxNumber}
                  dataURLKey="data_url"
                >
                  {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                  }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                      <button
                        style={isDragging ? { color: "red" } : undefined}
                        onClick={onImageUpload}
                        {...dragProps}
                      >
                        Click or Drop here
                      </button>
                      &nbsp;
                      <button onClick={onImageRemoveAll}>
                        Remove all images
                      </button>
                      {imageList.map((image, index) => (
                        <div key={index} className="image-item">
                          <img src={image["data_url"]} alt="" width="100" />
                          <div className="image-item__btn-wrapper">
                            <button onClick={() => onImageUpdate(index)}>
                              Update
                            </button>
                            <button onClick={() => onImageRemove(index)}>
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </ImageUploading>
              </div>
              <div className="form__button">
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>
      ) : (
        <PDF
          name={name}
          color={color}
          size={petSize}
          email={email}
          location={location}
          description={description}
          images={images}
          number={phone}
        />
      )}
    </>
  );
}

export default PdfForm;

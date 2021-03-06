import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./form.scss";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

const Form = () => {
  const [file, setFile] = useState("");
  const [title, setName] = useState("");
  const [desc, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventdefault();
    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("price", price);
    formData.append("categories", categories);
    formData.append("size", size);
    formData.append("color", color);
    fetch("http://localhost:5000/api/product/", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="formnav">
      <Sidebar />
      <div className="formcontainer">
        <Navbar />
        <div className="tap">
          <h1>Add new product</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit} action="">
              <div className="formInputt">
                <label> Product name</label>
                <input
                  type="text"
                  placeholder="product name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="formInputt">
                <label htmlFor="file"> Product image</label>
                <input
                  onChange={(e) => setFile(e.target.files[0])}
                  type="file"
                  id="file"
                  placeholder="product name"
                />
              </div>

              <div className="formInputt">
                <label htmlFor=""> Description</label>
                <input
                  type="text"
                  placeholder="description"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
              <div className="formInputt">
                <label htmlFor=""> categories</label>
                <input
                  type="text"
                  placeholder="categories"
                  onChange={(e) => {
                    setCategories(e.target.value);
                  }}
                />
              </div>
              <div className="formInputt">
                <label htmlFor=""> size</label>
                <input
                  type="text"
                  placeholder="size"
                  onChange={(e) => {
                    setSize(e.target.value);
                  }}
                />
              </div>
              {/* //title desc img categories  size color price inStock */}
              <div className="formInputt">
                <label htmlFor=""> color</label>
                <input
                  type="text"
                  placeholder="color"
                  onChange={(e) => {
                    setColor(e.target.value);
                  }}
                />
              </div>
              <div className="formInputt">
                <label htmlFor=""> Price</label>
                <input
                  type="number"
                  placeholder="price"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>
              <div className="formInputt">
                <Button className="button" type="submit" variant="contained">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

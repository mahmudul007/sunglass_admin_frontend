import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Button from "@mui/material/Button";
import "../Form/form.scss";
import { Datatable } from "../Datatable/Datatable";
import { useForm } from "react-hook-form";
import { Productlist } from "./Productlist/Productlist";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const [image, setImage] = useState(null);

  const onSubmit = async (data) => {
    if (!data.file) {
      return;
    }
    var token = null;
    if (localStorage.getItem("user")) {
      var obj = JSON.parse(localStorage.getItem("user"));
      token = obj.access_token;
    }
    setImage(data.file[0]);
    const formData = new FormData();
    formData.append("img", data.file[0]);
    formData.append("title", data.title);
    formData.append("desc", data.desc);
    formData.append("categories", data.categories);
    formData.append("size", data.size);
    formData.append("color", data.color);
    formData.append("price", data.price);

    const res = await fetch("http://localhost:5000/api/product/", {
      method: "POST",
      body: formData,
      headers: {
        token: `Bearer ${("token", token)}`,
      },
    }).then((res) => res.json());
    alert(JSON.stringify(` status: ${res.status}`));
    window.location.reload();
  };

  return (
    <div className="formnav">
      <Sidebar />
      <div className="formcontainer">
        <Navbar />
        <div className="top">
          <h1>Add new product</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                image
                  ? URL.createObjectURL(image)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit(onSubmit)} action="">
              <div className="formInputt">
                <label> Product name</label>
                <input
                  type="text"
                  placeholder="product name"
                  {...register("title")}
                />
              </div>
              <div className="formInputt">
                <label htmlFor="file"> Product image</label>
                <input
                  // onChange={(e) => setImage(e.target.files[0])}
                  type="file"
                  {...register("file")}
                  id="file"
                />
              </div>

              <div className="formInputt">
                <label htmlFor=""> Description</label>
                <input
                  type="text"
                  {...register("desc")}
                  placeholder="description"
                />
              </div>
              <div className="formInputt">
                <label htmlFor=""> categories</label>
                <input
                  type="text"
                  placeholder="categories"
                  {...register("categories")}
                />
              </div>
              <div className="formInputt">
                <label htmlFor=""> size</label>
                <input type="text" placeholder="size" {...register("size")} />
              </div>
              {/* //title desc img categories  size color price inStock */}
              <div className="formInputt">
                <label htmlFor=""> color</label>
                <input type="text" placeholder="color" {...register("color")} />
              </div>
              <div className="formInputt">
                <label htmlFor=""> Price</label>
                <input
                  type="number"
                  placeholder="price"
                  {...register("price")}
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
        <div className="top">
          <h1>All Product</h1>
        </div>
        <Productlist />
      </div>
    </div>
  );
};

export default AddProduct;

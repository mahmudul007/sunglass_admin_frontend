import axios from "axios";
import React, { useEffect, useState } from "react";
import Productdata from "../Productdata";
import AddProduct from "../AddProduct";
const Productlist = () => {
  const [products, setProducts] = useState([]);
  //get product
  useEffect(() => {
    fetch("http://localhost:5000/api/product/")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProducts(data);
      });
  }, []);

  //delete api
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    var token = null;
    if (localStorage.getItem("user")) {
      var obj = JSON.parse(localStorage.getItem("user"));
      token = obj.access_token;
    }
    if (proceed) {
      const url = `http://localhost:5000/api/product/${id}`;
      axios
        .delete(url, {
          headers: {
            token: `Bearer ${("token", token)}`,
          },
        })

        .then((data) => {
          if (data.status === 200) {
            alert("sucessfull");
            const remainingProduct = products.filter((item) => item._id !== id);
            setProducts(remainingProduct);
          }
        });
    }
  };

  return (
    <div>
      <Productdata
        handleDelete={handleDelete}
        products={products}
        setProducts={setProducts}
      ></Productdata>
    </div>
  );
};

export default Productlist;

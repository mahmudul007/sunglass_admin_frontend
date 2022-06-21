import React, { useState } from "react";
import { Productlist } from "./Productlist";

const Productdata = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/product/")
      .then((data) => data.json())
      .then((data) => setProducts(data));
  });
  return (
    <div>
      <div>
        {products.map((product) => (
          <Productlist key={product._id} product={product}></Productlist>
        ))}
      </div>
    </div>
  );
};

export default Productdata;

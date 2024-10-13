/* eslint-disable react/prop-types */
import React from "react";
import Heading from "./Heading";
import ProductsCart from "./ProductsCart";

import img from "../assets/products/p-1.jpg";
import img1 from "../assets/products/p-2.jpg";
import img2 from "../assets/products/p-3.jpg";
import img3 from "../assets/products/p-4.jpg";
import img4 from "../assets/products/p-5.jpg";
import img5 from "../assets/products/p-7.jpg";
import img6 from "../assets/products/p-9.jpg";

const productsData = [
  {
    id: 1,
    image: img,
    title: "Boat Headphone",
    price: "$120",
    aosDelay: "0",
  },
  {
    id: 2,
    image: img1,
    title: "Rocky Mountain",
    price: "$420",
    aosDelay: "200",
  },
  {
    id: 3,
    image: img2,
    title: "Goggles",
    price: "$320",
    aosDelay: "400",
  },
  {
    id: 4,
    image: img3,
    title: "Printed",
    price: "$220",
    aosDelay: "600",
  },
];

const productsData2 = [
  {
    id: 1,
    image: img4,
    title: "Boat Headphone",
    price: "$120",
    aosDelay: "0",
  },
  {
    id: 2,
    image: img5,
    title: "Rocky Mountain",
    price: "$420",
    aosDelay: "200",
  },
  {
    id: 3,
    image: img6,
    title: "Goggles",
    price: "$320",
    aosDelay: "400",
  },
  {
    id: 4,
    image: img5,
    title: "Printed",
    price: "$120",
    aosDelay: "600",
  },
];

const Products = () => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <Heading title={"Our Products"} subtitle={"Explore Our Product"} />
        {/* product image section */}
        <ProductsCart data={productsData} />
        <ProductsCart data={productsData2} />
      </div>
    </div>
  );
};

export default Products;

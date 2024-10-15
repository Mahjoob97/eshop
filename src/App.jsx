import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Category2 from "./components/Category2";
import Service from "./components/Service";
import Banner from "./components/Banner";
import headphone from "./assets/headphone.png";
import Products from "./components/Products";
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png";
import Blogs from "./components/Blogs";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import Popup from "./components/Popup";

const bannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 29 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sales",
  title4:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam autem maiores quos dignissimos natus iusto.",
  bgColor: "#f42C37",
};
const bannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sales",
  title4:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam autem maiores quos dignissimos natus iusto.",
  bgColor: "#2DCC6F",
};

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handlePopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar handlePopup={handlePopup} />
      <Hero handlePopup={handlePopup} />
      <Category />
      <Category2 />
      <Service />
      <Banner data={bannerData} />
      <Products />
      <Banner data={bannerData2} />
      <Blogs />
      <Partners />
      <Footer />
      <Popup orderPopup={orderPopup} handlePopup={handlePopup} />
    </div>
  );
};

export default App;

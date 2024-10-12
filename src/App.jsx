import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Category2 from "./components/Category2";
import Service from "./components/Service";
import Banner from "./components/Banner";
import headphone from "./assets/headphone.png";

const bannerData = {
  discount: "30% off",
  title: "Fine Smile",
  date: "10 Jan to 29 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sales",
  title4:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam autem maiores quos dignissimos natus iusto.",
  bgColor: "#f42C37",
};

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Service />
      <Banner data={bannerData} />
    </div>
  );
};

export default App;

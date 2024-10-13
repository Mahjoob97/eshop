import React from "react";
import Heading from "./Heading";
import img1 from "../assets/blog/blog-1.jpg";
import img2 from "../assets/blog/blog-2.jpg";
import img3 from "../assets/blog/blog-3.jpg";

const BlogData = [
  {
    title: "How to choose a perfect watch",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ex deserunt ipsa iure fuga praesentium sit exercitationem",
    published: "Jan 20, 2024 by Dilshad",
    image: img1,
  },
  {
    title: "How to choose a perfect gedget",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ex deserunt ipsa iure fuga praesentium sit exercitationem",
    published: "Jan 25, 2024 by Dilshad",
    image: img2,
  },
  {
    title: "How to choose a perfect VR headset",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ex deserunt ipsa iure fuga praesentium sit exercitationem",
    published: "Jan 21, 2024 by Dilshad",
    image: img3,
  },
];

const Blogs = () => {
  return (
    <div className="py-12">
      <div className="container">
        {/* Heading section */}
        <Heading title={"Recent News"} subtitle={"Explore Our Blog"} />

        {/* Blog section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-4 md:gap-7">
          {/* Blog card */}
          {BlogData.map((data, index) => (
            <div key={index} className="bg-white dark:text-gray-900">
              {/* image section */}
              <div className="overflow-hidden rounded-2xl mb-2">
                <img
                  src={data.image}
                  alt=""
                  className="h-[220px] w-full object-cover rounded-2xl hover:scale-105 duration-500"
                />
              </div>
              {/* content section */}
              <div className="space-y-2">
                <p className="text-sm text-gray-500">{data.published}</p>
                <h1 className="font-bold line-clamp-1">{data.title}</h1>
                <h1 className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                  {data.subtitle}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

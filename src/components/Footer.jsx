import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaMobileAlt,
  FaYoutube,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const footerLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#",
  },
  {
    title: "Contact",
    link: "/#",
  },
  {
    title: "Blog",
    link: "/#",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* compny details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              E-shop
            </a>
            <p className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
              beatae numquam facilis ea porro ipsum!
            </p>
            <p className="text-gray-500 dark:text-white/70 mt-4">
              Made with love
            </p>
          </div>
          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold mb-3 sm:text-left">
                Important Links
              </h1>
              <ul className="space-y-3">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.link}
                      className="text-gray-600 hover:text-black dark:text-gray-400 hover:dark:text-white duration-300"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* second col links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold mb-3 sm:text-left">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.link}
                      className="text-gray-600 hover:text-black dark:text-gray-400 hover:dark:text-white duration-300"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* company address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold mb-3 sm:text-left">Address</h1>
              <div>
                <div className="flex items-center gap-3 ">
                  <FaLocationArrow />
                  <p>Madina, KSA</p>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <FaMobileAlt />
                  <p>+966 54 518 4982</p>
                </div>
                {/* social links */}
                <div>
                  <a href="#" className="flex gap-3 mt-4">
                    <FaInstagram className="text-3xl hover:text-primary duration-300" />
                    <FaFacebook className="text-3xl hover:text-primary duration-300" />
                    <FaX className="text-3xl hover:text-primary duration-300" />
                    <FaYoutube className="text-3xl hover:text-primary duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import logo from "../../imgs/martini.svg";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import { FacebookIcon, TwitterIcon, LinkedinIcon } from "react-share";

const Navbar = () => {
  return (
    <div className="flex max-w-4xl mx-auto justify-between font-yanone p-5">
      <div className="flex mx-auto sm:mx-0 cursor-pointer">
        <h1
          className="text-purple-400 sm:text-4xl text-3xl"
          style={{
            textShadow: "1px 2px 1px rgba(124, 58, 237)",
          }}
        >
          The Cocktail List
        </h1>
        <div className="transform rotate-12 hover:skew-x-3">
          <img className="w-11 h-9 rotate-12" src={logo} alt="" />
        </div>
      </div>

      <ul className=" justify-between gap-1 text-2xl sm:flex hidden">
        <FacebookShareButton
          url={`${window.location.href}`}
          className="outline-none focus:outline-none"
        >
          <FacebookIcon size={24} borderRadius={24} rounded={true} />
        </FacebookShareButton>
        <TwitterShareButton
          url={`${window.location.href}`}
          className="outline-none focus:outline-none"
        >
          <TwitterIcon size={24} borderRadius={24} rounded={true} />
        </TwitterShareButton>
        <LinkedinShareButton
          url={`${window.location.href}`}
          className="outline-none focus:outline-none"
        >
          <LinkedinIcon size={24} borderRadius={24} rounded={true} />
        </LinkedinShareButton>
      </ul>
    </div>
  );
};

export default Navbar;

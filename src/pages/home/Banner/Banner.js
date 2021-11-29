import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="center-text ">
        <h3 className="fw-bold fs-1">I am a React Develper</h3>
        <h3>Rafeul Anam Udoy</h3>
        <p className="text-style">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et omnis ipsa
          eligendi amet vero excepturi voluptatibus, quos sint dolore sapiente
          provident quam laboriosam rem cupiditate mollitia, eveniet nostrum
          facere pariatur.
        </p>
        <button className="button-style">Resume</button>
        <button className="button-style">Contact</button>
      </div>
    </div>
  );
};

export default Banner;

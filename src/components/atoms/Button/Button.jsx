import React from "react";
import "./Button.style.scss";
import Facebook from "../../../assets/facebook.svg";
export default function Button({ text, bgColor, icon }) {
  return (
    <button className={`${bgColor}`}>
      {icon !== "facebook" ? (
        <span className="material-icons">{icon}</span>
      ) : (
        <img
          width="25px"
          className="icon"
          src={Facebook}
          alt="Social icon Login"
        />
      )}
      {text}
    </button>
  );
}

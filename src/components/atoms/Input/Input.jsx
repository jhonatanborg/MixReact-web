import React from "react";
import "./Input.style.scss";
export default function Input({ label, type, placeholder }) {
  return (
    <div className="form-group">
      <label className="label">{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
}

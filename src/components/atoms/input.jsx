import React from "react";
import "./atomstyle/input.css";

function Input({ name, label, value, placeholder, onChange, type }) {
  return (
    <div className="form-group mb-3">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        className="form-control input-field"
      />
    </div>
  );
}

export default Input;

import React, { useState } from "react";

function Extra({ onChange, checked, name, value, label }) {
  return (
    <>
      <label className="main-check">
        <input
          type="checkbox"
          onChange={onChange}
          checked={checked}
          name={name}
          value={value}
        />
        {label}
      </label>
    </>
  );
}

export default Extra;

import React from 'react';

const InputField = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        class="text-black"
      />
    </div>
  );
};

export default InputField;

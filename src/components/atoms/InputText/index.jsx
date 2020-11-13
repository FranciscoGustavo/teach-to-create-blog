import React from 'react';
import { CSSLabel, CSSInput } from './styles';

const InputText = ({ type, label, placeholder, value, name, onChange }) => {
  return (
    <div className="mb-4">
      <CSSLabel>{label}</CSSLabel>
      <CSSInput
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      /> 
    </div>
  );
};

export default InputText;


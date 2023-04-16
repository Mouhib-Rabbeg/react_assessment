import React from 'react';

type RadioProps = {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
};

const RadioButton: React.FC<RadioProps> = ({ label, name, value, checked, onChange }) => {
  return (
    <label className="inline-flex items-center">
      <input
        type="radio"
        className="form-radio h-4 w-4 text-green-600 transition duration-150 ease-in-out"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
      />
      <span className="ml-2 text-gray-700">{label}</span>
    </label>
  );
};

export default RadioButton;

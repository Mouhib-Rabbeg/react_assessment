import React from 'react';

type DatePickerProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

const CustomDatePicker= ({ label, value, onChange }:DatePickerProps) => {
  const handleDateChange = (event:any) => {
    onChange(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <label className="mb-2 text-sm font-medium text-gray-700">{label}</label>
      <input
        type="date"
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        value={value}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default CustomDatePicker;

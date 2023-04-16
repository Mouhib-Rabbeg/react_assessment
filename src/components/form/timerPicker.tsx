import React from 'react';

type TimePickerProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

const CustomTimePicker: React.FC<TimePickerProps> = ({ label, value, onChange }) => {
  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <label className="mb-2 text-sm font-medium text-gray-700">{label}</label>
      <input
        type="time"
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        value={value}
        onChange={handleTimeChange}
      />
    </div>
  );
};

export default CustomTimePicker;

import React from "react";

const DatePicker = ({ onChange, value, onClick }) => {
  return (
    <div className="datePicker">
      <label htmlFor="date">Get rates from any day:</label>
      <input
        className="date"
        min="1999-01-01"
        type="date"
        name="date"
        onChange={onChange}
        value={value}
      />
      <div className="today">
        <button className="btn btn__latest" onClick={onClick}>Latest rates!</button>
      </div>
    </div>
  );
};

export default DatePicker;

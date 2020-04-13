import React from "react";

const RateComponent = ({ rate, onClick }) => {
  const { key, value } = rate;

  return (
    <div className="rate__component" onClick={onClick}>
      <div className="rate__component--key">{key}</div>
      <div className="rate__component--value">{value.toFixed(3)}</div>
    </div>
  );
};

export default RateComponent;

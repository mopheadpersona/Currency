import React, { useState, useEffect } from "react";
import axios from "axios";
import RateComponent from "./RateComponent";
import DatePicker from "./DatePicker";

const RateContainer = () => {

  const [rates, setRates] = useState(null);
  const [base, setBase] = useState("USD");
  const [startDate, setStartDate] = useState("latest");

  class Rate {
    constructor({ key, value }) {
      this.key = key;
      this.value = value;
    }
  }

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          `https://api.exchangeratesapi.io/${startDate}?base=${base}`
        );

        setRates(
          Object.entries(response.data.rates).map(
            ([key, value]) => new Rate({ key, value })
          )
        );
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, [base, startDate]);

  if (!rates) return <h1>Loading...</h1>;

  function changeValue(rateValue) {
    let enterValue = prompt("How much do you want to convert?", 1);
    rateValue = enterValue;
    return rateValue;
  }

  return (
    <div className="currency">
      <DatePicker
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        onClick={() => setStartDate("latest")}
      />

      <div className="rate">
        {rates.map((rate) => (
          <RateComponent
            rate={rate}
            key={rate.key}
            onClick={() => setBase(rate.key)}
          />
        ))}
      </div>
    </div>
  );
};

export default RateContainer;

import React, { useState } from "react";

function TimeInverter() {
  const [amount, setAmount] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const onChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <>
      <h2> Time Inverter </h2>
      <div>
        <label htmlFor="minute">Minute</label>
        <input
          id="minute"
          value={flipped ? amount * 60 : amount}
          onChange={onChange}
          disabled={flipped}
        />
      </div>
      <div>
        <label htmlFor="hour">Hour</label>
        <input
          id="hour"
          value={flipped ? amount : Math.round(amount / 60)}
          onChange={onChange}
          disabled={!flipped}
        />
      </div>

      <button onClick={() => setAmount(0)}>Reset</button>
      <button
        onClick={() => {
          setAmount(0);
          setFlipped(!flipped);
        }}
      >
        Flip
      </button>
    </>
  );
}

function DistanceInverter() {
  const [amount, setAmount] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const onChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <>
      <h2> Distance Inverter </h2>
      <div>
        <label htmlFor="minute">Kilometer</label>
        <input
          id="minute"
          value={flipped ? amount * 60 : amount}
          onChange={onChange}
          disabled={flipped}
        />
      </div>
      <div>
        <label htmlFor="hour">Mile</label>
        <input
          id="hour"
          value={flipped ? amount : Math.round(amount / 60)}
          onChange={onChange}
          disabled={!flipped}
        />
      </div>

      <button onClick={() => setAmount(0)}>Reset</button>
      <button
        onClick={() => {
          setAmount(0);
          setFlipped(!flipped);
        }}
      >
        Flip
      </button>
    </>
  );
}

function App() {
  const [index, setIndex] = useState("xx");

  return (
    <div>
      <h1>Super Converter</h1>

      <select value={index} onChange={(e) => setIndex(e.target.value)}>
        <option value="xx">Select your units</option>
        <option value="0">Minutes & Hours</option>
        <option value="1">Km & Miles</option>
      </select>

      {index === "0" ? <TimeInverter /> : null}
      {index === "1" ? <DistanceInverter /> : null }
    
    </div>
  );
}

export default App;

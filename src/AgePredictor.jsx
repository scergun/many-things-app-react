import { useState, useEffect, useContext } from "react";
import "./AgePredictor.css";
import { AppContext } from "./App.jsx";
import Axios from "axios";

export const AgePredictor = () => {
  const [name, setName] = useState([]);
  const [dataName, setDataName] = useState([]);
  const { setCurrentLink } = useContext(AppContext);

  useEffect(() => {
    setCurrentLink(1);
  });

  const predictAge = () => {
    Axios.get(`https://api.agify.io?name=${name}`).then((res) =>
      setDataName([res.data.name, res.data.age, res.data.count])
    );
  };

  return (
    <div className="agePredictor">
      <h1>AGE PREDICTOR</h1>
      <div className="age-pred">
        <input
          onChange={(event) => setName(event.target.value)}
          placeholder="John... etc"
        />
        <button onClick={predictAge} className="predict">
          Predict Age
        </button>
      </div>

      <div className="results">
        <p>Name: {dataName[0]}</p>
        <p>Age: {dataName[1]}</p>
        <p>Count: {dataName[2]}</p>
      </div>
    </div>
  );
};

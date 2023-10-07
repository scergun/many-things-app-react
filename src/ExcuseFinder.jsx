import { useContext, useEffect, useState } from "react";
import { AppContext } from "./App.jsx";
import "./ExcuseFinder.css";
import Axios from "axios";

export const ExcuseFinder = () => {
  const [theExcuse, setTheExcuse] = useState("");
  const [randomId, setRandomId] = useState(101);
  const { setCurrentLink } = useContext(AppContext);

  useEffect(() => {
    setCurrentLink(2);
  });

  useEffect(() => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/id/${randomId}`).then(
      (res) => setTheExcuse(res.data.excuse)
    );
  }, [randomId]);

  const excuser = () => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/id/${randomId}`).then(
      (res) => setTheExcuse(res.data.excuse)
    );
    console.log(randomId);
  };

  return (
    <div>
      <div className="exc-container">
        <h1>EXCUSE FINDER</h1>
        <ul>
          <li
            onClick={() => {
              setRandomId(Math.floor(Math.random() * 10) + 1);
              excuser();
            }}
          >
            Family
          </li>
          <li
            onClick={() => {
              setRandomId(Math.floor(Math.random() * 10) + 401);
              excuser();
            }}
          >
            Party
          </li>
          <li
            onClick={() => {
              setRandomId(Math.floor(Math.random() * 10) + 101);
              excuser();
            }}
          >
            Office
          </li>
          <li
            onClick={() => {
              setRandomId(Math.floor(Math.random() * 10) + 201);
              excuser();
            }}
          >
            Children
          </li>
          <li
            onClick={() => {
              setRandomId(Math.floor(Math.random() * 10) + 301);
              excuser();
            }}
          >
            College
          </li>
          <li
            onClick={() => {
              setRandomId(Math.floor(Math.random() * 16) + 501);
              excuser();
            }}
          >
            Funny
          </li>
          <li
            onClick={() => {
              setRandomId(Math.floor(Math.random() * 13) + 601);
              excuser();
            }}
          >
            Unbelievable
          </li>
          <li
            onClick={() => {
              setRandomId(Math.floor(Math.random() * 15) + 701);
              excuser();
            }}
          >
            Developers
          </li>
          <li
            onClick={() => {
              setRandomId(Math.floor(Math.random() * 20) + 801);
              excuser();
            }}
          >
            Gaming
          </li>
        </ul>
        <p>{theExcuse}</p>
      </div>
    </div>
  );
};

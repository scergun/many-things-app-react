import Axios from "axios";
import "./CatFact.css";
import "./App.css";
import { useQuery } from "react-query";
import { ThemeContext } from "./App";
import { useContext } from "react";

export const CatFact = () => {
  const { theme } = useContext(ThemeContext);
  const {
    data: catData,
    refetch,
    isLoading,
    isError,
  } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  if (isLoading) {
    return (
      <div className="catFact">
        <h1>CAT FACT</h1>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="catFact">
        <h1>CAT FACT</h1>
        <h2>500: Internal Server Error</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div className={`catFact  ${theme}`}>
        <h1 className={`${theme}`}>CAT FACT</h1>
        <button onClick={refetch}>Generate Cat Fact</button>
        <p>{catData?.fact}</p>
      </div>
    </div>
  );
};

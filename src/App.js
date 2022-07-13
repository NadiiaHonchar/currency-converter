import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import SearchForm from "./Components/SearchForm";
import axios from "axios";

function App() {
  // const API_KEY = "81ed5d216ebe4d362cf78679df36331bacbc9e5c";

  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);
  const [currency1, setCurrency1] = useState("UHA");
  const [currency2, setCurrency2] = useState("UHA");
  const [price, setPrice] = useState([]);

  useEffect(() => {
    // axios.get("https://api.minfin.com.ua/mb/81ed5d216ebe4d362cf78679df36331bacbc9e5c/")
    axios.get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json")
      .then((responce) => {setPrice(responce.data);
      });
  }, []);

  return (
    <>
      <Header />
      <SearchForm currencies={price} count={count1} currency={currency1} />
      {/* <SearchForm currencies={["UHA"]} count={count2} currency={currency2} /> */}
    </>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import SearchForm from "./Components/SearchForm";
import axios from "axios";

function App() {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);
  const [currency1, setCurrency1] = useState("UAH");
  const [currency2, setCurrency2] = useState("UAH");
  const [price, setPrice] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json"
      )
      .then((responce) => {
        setPrice(
          [
            {
              r030: 980,
              txt: "Українська гривня",
              rate: 1,
              cc: "UAH",
              exchangedate: "18.07.2022",
            },
          ].concat(responce.data)
        );
      });
  }, []);

  useEffect(() => {
    if (!!price) {
      handleCount1Change(1);
    }
  }, [price]);

  function format(number) {
    return number.toFixed(4);
  }

  function receiveRate(currency) {
    let rates = 0;
    price.map((item) => {
      if (item.cc === currency) {
        rates = item.rate;
      }
    });
    return rates;
  }

  function handleCount1Change(count1) {
    let rates1 = receiveRate(currency1);
    let rates2 = receiveRate(currency2);
    setCount2(format((count1 * rates2) / rates1));
    setCount1(count1);
  }

  function handleCurrency1Change(currency1) {
    let rates1 = receiveRate(currency1);
    let rates2 = receiveRate(currency2);
    setCount2(format((count1 * rates2) / rates1));
    setCurrency1(currency1);
  }

  function handleCount2Change(count2) {
    let rates1 = receiveRate(currency1);
    let rates2 = receiveRate(currency2);
    setCount1(format((count2 * rates1) / rates2));
    setCount2(count2);
  }

  function handleCurrency2Change(currency2) {
    let rates1 = receiveRate(currency1);
    let rates2 = receiveRate(currency2);
    setCount1(format((count2 * rates1) / rates2));
    setCurrency2(currency2);
  }

  return (
    <>
      <Header />
      <SearchForm
        currencies={price.map(({ cc }) => cc)}
        count={count1}
        currency={currency1}
        onCountChange={handleCount1Change}
        onCurrencyChange={handleCurrency1Change}
      />
      <SearchForm
        currencies={price.map(({ cc }) => cc)}
        count={count2}
        currency={currency2}
        onCountChange={handleCount2Change}
        onCurrencyChange={handleCurrency2Change}
      />
    </>
  );
}

export default App;

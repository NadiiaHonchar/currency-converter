// import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import MainPage from "./Components/MainPage";
import SearchForm from "./Components/SearchForm";
import axios from "axios";

function App() {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);
  const [currency1, setCurrency1] = useState("USD");
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
      handleCount1Change(100);
    }
  }, [price]);

  function format(number) {
    return number.toFixed(4);
  }

  function getRate(currency) {
    let rates = 0;
    price.map((item) => {
      if (item.cc === currency) {
        rates = item.rate;
      }
    });
    return rates;
  }

  function getTxt(currency) {
    let txt = '';
    price.map((item) => {
      if (item.cc === currency) {
        txt = item.txt;
      }
    });
    return txt;
  }

  function getDay(){
    let day=0;
    price.map((item) => {
      if (item.cc === 'USD') {        
        day = item.exchangedate;
      }
    });
    return day;
  }

  function handleCount1Change(count1) {
    setCount2(
      format((count1 * getRate(currency1)) / getRate(currency2))
    );
    setCount1(count1);
  }

  function handleCurrency1Change(currency1) {
    setCount2(
      format((count1 * getRate(currency1)) / getRate(currency2))
    );
    setCurrency1(currency1);
  }

  function handleCount2Change(count2) {
    setCount1(
      format((count2 * getRate(currency2)) / getRate(currency1))
    );
    setCount2(count2);
  }

  function handleCurrency2Change(currency2) {
    setCount1(
      format((count2 * getRate(currency2)) / getRate(currency1))
    );
    setCurrency2(currency2);
  }


  return (
    <>
      <Header rateUSD={getRate("USD")} rateEUR={getRate("EUR")}/>
      <MainPage data = {getDay()}>
      <SearchForm
        currencies={price.map(({ cc }) => cc)}
        count={count1}
        currency={currency1}
        txt={getTxt(currency1)}
        onCountChange={handleCount1Change}
        onCurrencyChange={handleCurrency1Change}
      />
      <SearchForm
        currencies={price.map(({ cc }) => cc)}
        count={count2}
        currency={currency2}
        txt={getTxt(currency2)}
        onCountChange={handleCount2Change}
        onCurrencyChange={handleCurrency2Change}
      />
      </MainPage>
    </>
  );
}

export default App;

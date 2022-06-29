import { useState, useEffect } from "react";
import style from "./SearchForm.module.css";
import CurrencyConversion from "../../Handlers/CurrencyConversion";

export default function ContactForm({ onChange }) {
//   const [currency, setCurrency] = useState(()=>[0, "UAH", 0, "UAH"]);
  const [exchange, setExchange] = useState(0);
  const [selectExchange, setSelectExchange] = useState("UAH");
  const [receipt, setReceipt] = useState(0);
  const [selectReceipt, setSelelectReceipt] = useState("UAH");
  const [code, setCode] =useState(0);
  
  // code 0- changed exchange
  // code 1- changed selectExchange
  // code 2- changed receipt
  // code 3- changed selectReceipt

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "exchange":
        setExchange(value);
        setCode(0);
        break;
      case "selectExchange":
        setSelectExchange(value);
        setCode(1);
        break;
      case "receipt":
        setReceipt(value);
        setCode(2);
        break;
      case "selectReceipt":
        setSelelectReceipt(value);
        setCode(3);
        break;
      default:
        return;
    }
  };
    // useEffect(() => {
    //   setCurrency({ exchange, selectExchange, receipt, selectReceipt });
    // }, [exchange, selectExchange, receipt, selectReceipt]);
    useEffect(()=>{
        const data =CurrencyConversion(exchange, selectExchange, receipt, selectReceipt, code);
        console.log(data)
        // setExchange(data.exchange);
        // setSelectExchange(data.selectExchange);
        // setReceipt(data.receipt);
        // setSelelectReceipt(data.selectReceipt);
    },[exchange, selectExchange, receipt, selectReceipt])

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     onSubmit(contacts);
  //     reset();
  //   };
//   const handleSelect = (e) => {
//     e.preventDefault();
//     onChange(currency);
//     // reset();
//   };

//   const reset = () => {
//     setExchange("");
//     setSelectExchange("");
//     setReceipt("");
//     setSelelectReceipt("");
//     // setCurrency([]);
//   };

  return (
    <>
      <form className={style.form}>
        <h2 className={style.text}>Exchange</h2>
        <input
          type="numeric"
          name="exchange"
          value={exchange}
          onChange={handleInputChange}
          className={style.input}
          required
        />
        <select name="selectExchange" onChange={handleInputChange}>
          <option defaultValue="UAH">
            UAH
          </option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
        <h2 className={style.text}>Receipt</h2>
        <input
          type="numeric"
          name="receipt"
          value={receipt}
          onChange={handleInputChange}
          className={style.input}
          required
        />
        <select name="selectReceipt" onChange={handleInputChange}>
          <option defaultValue="UAH">
            UAH
          </option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </form>
    </>
  );
}

import { useState, useEffect } from "react";
import style from "./SearchForm.module.css";

export default function SearchForm({count, currency, currencies}) {
  return (
    <>
      <div className="formInput">
        <input type="text" value={count} />
        <select value={currency}>
          {console.log(Object.values(currencies))}
          {/* {Object.value(currencies).map(({cc}) => (
            <option value={cc}>{cc}</option>
          ))} */}
        </select>
      </div>
      {/* <form className={style.form}>
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
      </form> */}
    </>
  );
}

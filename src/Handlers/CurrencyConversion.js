import { useState, useEffect } from "react";

export default function CurrencyConversion({
  exchange,
  selectExchange,
  receipt,
  selectReceipt,
  code
}) {

  // if (selectExchange==="UAH"||selectReceipt==="UAH"){exchange = 1*receipt }
  switch (code) {
    case "0":
      receipt = exchange;
      break;
    case "1":
        receipt = exchange*30;
      break;
    case "2":
      exchange = receipt;
      break;
    case "3":
      exchange = receipt/30;
      break;
    default:
      return;
  }

const data={exchange,
    selectExchange,
    receipt,
    selectReceipt};
    console.log('foo', data)
  return data;
}

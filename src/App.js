import logo from './logo.svg';
import './App.css';
// import { useState, useEffect } from "react";
import Header from './Components/Header';
import SearchForm from './Components/SearchForm';


function App() {
// const [currency, setCurrency] = useState([]);

// useEffect(() => {
//   window.localStorage.setItem("data", JSON.stringify(data));
// }, [data]);

// const Reculculation = (data)=>{
  // setCurrency(data);
  // console.log(currency);
  // const {exchange, selectExchange, receipt, selectReceipt} =data;  

  //   switch (data) {
  //     case "exchange":
  //       setExchange(value);
  //       break;
  //     case "selectExchange":
  //       setSelectExchange(value);
  //       break;
  //     case "receipt":
  //       setReceipt(value);
  //       break;
  //     case "selectReceipt":
  //       setSelelectReceipt(value);
  //       break;
  //     default:
  //       return;
  //   }
//     return setCurrency(data);
// }



  return (
    <>
    <Header/>
    <SearchForm/>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

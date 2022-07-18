import style from "./MainPage.module.css";

export default function MainPage({data,
  children
}) {
  return (
    <>
    <h2>Курс національного банку україни станом на {data}</h2>
    {children}      
    </>
  );
}
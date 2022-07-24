import style from "./MainPage.module.css";

export default function MainPage({data,
  children
}) {
  return (
    <div className={style.container}>
    <h2 className={style.myHead}>Курс національного банку України станом на {data}</h2>
    <div className={style.cardForm}>{children}</div>
    </div>
  );
}
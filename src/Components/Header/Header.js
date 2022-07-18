import style from "./Header.module.css";
const Header = ({rateUSD, rateEUR}) => {
  return (
    <>
      <header className={style.header}>
        <div className={style.containerHeader}>
          <div>Конвертер валют</div>
          <div className={style.marginElement}>UAH = {rateUSD} USD</div>
          <div className={style.marginElement}>UAH = {rateEUR} EUR</div>
        </div>
      </header>
    </>
  );
};

export default Header;

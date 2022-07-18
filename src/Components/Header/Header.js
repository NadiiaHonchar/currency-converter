import style from "./Header.module.css";
const Header = ({rateUSD, rateEUR}) => {
  return (
    <>
      <header className={style.header}>
        <div className={style.containerHeader}>
          <div>Конвертер валют</div>
          <div className={style.marginElement}>1 USD = {rateUSD} UAH</div>
          <div className={style.marginElement}>1 EUR = {rateEUR} UAH</div>
        </div>
      </header>
    </>
  );
};

export default Header;

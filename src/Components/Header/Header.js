import style from "./Header.module.css";
const Header = () => {
  return (
    <>
      <header className={style.header}>
        <div className={style.containerHeader}>
          <div>Currency Converter</div>
          <div className={style.marginElement}>USD=UAH</div>
          <div className={style.marginElement}>EUR=UAH</div>
        </div>
      </header>
    </>
  );
};

export default Header;

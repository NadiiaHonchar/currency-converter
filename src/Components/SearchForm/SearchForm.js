import style from "./SearchForm.module.css";

export default function SearchForm({
  count,
  currency,
  currencies,
  txt,
  onCountChange,
  onCurrencyChange,
}) {
  return (
    <>
      <div className={style.formInput}>
        <p className={style.currencyName}>{txt}</p>
        <input
          type="text"
          value={count}
          className={style.countInput}
          onChange={(e) => onCountChange(e.target.value)}
        />
        <select
          value={currency}
          className={style.currencyInput}
          onChange={(e) => onCurrencyChange(e.target.value)}
        >
          {currencies.map((item) => (
            <option value={item} key={item}>{item}</option>
          ))}
        </select>
      </div>
    </>
  );
}

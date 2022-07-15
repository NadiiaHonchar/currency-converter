import style from "./SearchForm.module.css";

export default function SearchForm({
  count,
  currency,
  currencies,
  onCountChange,
  onCurrencyChange,
}) {
  return (
    <>
      <div className="formInput">
        <input
          type="text"
          value={count}
          onChange={(e) => onCountChange(e.target.value)}
        />
        <select
          value={currency}
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

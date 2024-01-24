import css from './SearchBar.module.css';

export const SearchBar = ({ value, onChange, onClick }) => {
  return (
    <div className={css.wrapper}>
      <input
        className={css.input}
        type="text"
        placeholder="Enter to search..."
        value={value}
        onChange={onChange}
      />
      <button className={css.button} onClick={onClick}>
        Clear
      </button>
    </div>
  );
};

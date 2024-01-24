import css from './SearchBar.module.css';

export const SearchBar = ({ value, onChange, onClick, enterField }) => {
  return (
    <div className={css.wrapper}>
      <input
        className={css.input}
        type="text"
        placeholder="Enter to search..."
        value={value}
        onChange={onChange}
      />
      {enterField && (
        <button className={css.button} onClick={onClick}>
          Clear
        </button>
      )}
    </div>
  );
};

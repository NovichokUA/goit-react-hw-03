export const SearchBox = ({ value, onSearch }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onSearch(e.target.value)}
    ></input>
  );
};

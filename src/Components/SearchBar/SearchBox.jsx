import css from "./SearchBox.module.css";
import { useId } from "react";
import { FaUser } from "react-icons/fa6";

export const SearchBox = ({ value, onSearch }) => {
  const id = useId();
  return (
    <div className={css.container}>
      <label htmlFor={id}>Find contacts by name</label>
      <input
        className={css.input}
        id={id}
        type="text"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
      <FaUser className={css.icon} />
    </div>
  );
};

import { FaPhone, FaUser } from "react-icons/fa6";
import css from "./Contact.module.css";

export const Contact = ({ user: { name, number } }) => {
  return (
    <div className={css.container}>
      <p>
        <FaUser className={css.icon} />
        {name}
      </p>
      <p>
        <FaPhone className={css.icon} />
        {number}
      </p>
    </div>
  );
};

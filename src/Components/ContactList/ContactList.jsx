import { Contact } from "../Contact/contact.jsx";
import css from "../ContactList/ContactList.module.css";
import { FaUserMinus } from "react-icons/fa6";

export const ContactList = ({ usersData, onDelete }) => {
  return (
    <>
      <ul className={css.list}>
        {usersData.map((user) => {
          return (
            <li className={css.listItem} key={user.id}>
              <Contact user={user} />
              <button className={css.btn} onClick={() => onDelete(user.id)}>
                <FaUserMinus className={css.icon} />
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

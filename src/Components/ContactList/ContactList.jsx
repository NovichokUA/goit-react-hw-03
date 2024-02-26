import { Contact } from "../Contact/contact.jsx";
import css from "../ContactList/ContactList.module.css";

export const ContactList = ({ usersData, onDelete }) => {
  return (
    <>
      <ul className={css.list}>
        {usersData.map((user) => {
          return (
            <li key={user.id}>
              <Contact user={user} onDelete={onDelete} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

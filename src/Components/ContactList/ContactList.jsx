import { Contact } from "../Contact/contact";
import css from "../ContactList/ContactList.module.css";

export const ContactList = ({ usersData, onDelete }) => {
  return (
    <>
      <ul className={css.list}>
        {usersData.map((user) => {
          return (
            <li className={css.listItem} key={user.id}>
              <div className={css.description}>
                <Contact user={user} />
              </div>
              <button className={css.btn} onClick={() => onDelete(user.id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

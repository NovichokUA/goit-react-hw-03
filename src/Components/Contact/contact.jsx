import css from "./Contact.module.css";

export const Contact = ({ user: { name, number } }) => {
  return (
    <div className={css.description}>
      <p>{name}</p>
      <p>{number}</p>
    </div>
  );
};

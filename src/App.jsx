import { useState, useEffect } from "react";
import { ContactList } from "./Components/ContactList/ContactList.jsx";
import { SearchBox } from "./Components/SearchBar/SearchBox.jsx";
import { ContactForm } from "./Components/ContactForm/ContactForm.jsx";

import "./App.css";

export function App() {
  const dataUserContact = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];
  const [contacts, setContacts] = useState(() => {
    const savedContact = localStorage.getItem("my-key");
    return savedContact !== null ? JSON.parse(savedContact) : dataUserContact;
  });

  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const hendalFilter = contacts.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    window.localStorage.setItem("my-key", JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = (userId) => {
    setContacts((prevUsers) =>
      prevUsers.filter((user) => {
        return user.id != userId;
      })
    );
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAddUser={addContact} />
      <SearchBox onSearch={setFilter} value={filter} />
      <ContactList usersData={hendalFilter} onDelete={deleteContact} />
    </>
  );
}

import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

import { ContactList } from './components/ContactList/ContactList.jsx';
import { Section } from './components/Section/Section.jsx';
import { SearchBar } from './components/SearchBar/SearchBar.jsx';
import initialContacts from './data/initialContacts.json';
import { ContactForm } from './components/ContactForm/ContactForm.jsx';
import { Notification } from './components/Notification/Notification.jsx';
import { PhoneTitle } from './components/PhoneTitle/PhoneTitle.jsx';

const initialSavedContacts = () => {
  const savedContacts = window.localStorage.getItem('saved-contacts');
  return savedContacts !== null ? JSON.parse(savedContacts) : initialContacts;
};

export const App = () => {
  const [contactsUsers, setContactsUsers] = useState(initialSavedContacts);
  const [nameFilter, setNameFilter] = useState('');

  const addContactUser = newContact => {
    setContactsUsers(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    const isContactExists = contactsUsers.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isContactExists) {
      Notiflix.Notify.info(`${newContact.name} is already in contacts. Enter a different name`);
    } else {
      Notiflix.Notify.success(` Your name ${newContact.name} has been added to the list`);
      addContactUser(newContact);
      actions.resetForm();
    }
  };

  const handleChange = evt => {
    setNameFilter(evt.target.value);
  };

  const visibleContactsUsers = contactsUsers.filter(user =>
    user.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  const clearFilterField = () => {
    setNameFilter('');
  };

  const deleteUser = userId => {
    setContactsUsers(prevUsers => {
      return prevUsers.filter(user => user.id !== userId);
    });
  };
  useEffect(() => {
    window.localStorage.setItem('saved-contacts', JSON.stringify(contactsUsers));
  }, [contactsUsers]);

  return (
    <>
      <PhoneTitle />
      <Section title="Add new contacts">
        <ContactForm onAddContact={handleSubmit} />
      </Section>
      <Section title="Find contacts by name">
        <SearchBar
          enterField={nameFilter}
          value={nameFilter}
          onChange={handleChange}
          onClick={clearFilterField}
        />
      </Section>

      <Section title="Contact List">
        {contactsUsers.length > 0 ? (
          <ContactList contacts={visibleContactsUsers} onDelete={deleteUser} />
        ) : (
          <Notification message="There is no added contacts"></Notification>
        )}
      </Section>
    </>
  );
};

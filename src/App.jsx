import { useState } from 'react';
import { ContactList } from './components/ContactList/ContactList.jsx';
import { Section } from './components/Section/Section.jsx';
import { SearchBar } from './components/SearchBar/SearchBar.jsx';
import initialContacts from './data/initialContacts.json';
import { ContactForm } from './components/ContactForm/ContactForm.jsx';

export const App = () => {
  const [contactsUsers, setContactsUsers] = useState(initialContacts);
  const [nameFilter, setNameFilter] = useState('');

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

  return (
    <>
      <Section title="Add new contacts">
        <ContactForm />
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
        <ContactList contacts={visibleContactsUsers} onDelete={deleteUser} />
      </Section>
    </>
  );
};

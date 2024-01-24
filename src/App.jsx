import { useState } from 'react';
import { ContactList } from './components/ContactList/ContactList.jsx';
import { Section } from './components/Section/Section.jsx';
import { SearchBar } from './components/SearchBar/SearchBar.jsx';
import initialContacts from './data/initialContacts.json';
import { ContactForm } from './components/ContactForm/ContactForm.jsx';

function App() {
  const [contactsUsers, setContactsUsers] = useState(initialContacts);
  const [nameFilter, setNameFilter] = useState('');

  const handleChange = evt => {
    setNameFilter(evt.target.value);
  };

  const visibleContactsUsers = contactsUsers.filter(user =>
    user.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

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
        <SearchBar value={nameFilter} onChange={handleChange} />
      </Section>

      <Section title="Contact List">
        <ContactList contacts={visibleContactsUsers} onDelete={deleteUser} />
      </Section>
    </>
  );
}

export default App;

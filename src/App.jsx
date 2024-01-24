import { useState } from 'react';
import { ContactList } from './components/ContactList/ContactList.jsx';
import { Section } from './components/Section/Section.jsx';
import { SearchBar } from './components/SearchBar/SearchBar.jsx';
import initialContacts from './data/initialContacts.json';
import { ContactForm } from './components/ContactForm/ContactForm.jsx';

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [inputValue, setInputValue] = useState('');

  const handleChange = evt => {
    setInputValue(evt.target.value);
  };

  const getFilteredContacts = () => {
    const normalizedValue = inputValue.toLowerCase().trim();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedValue));
  };

  return (
    <>
      <Section title="Add new contacts">
        <ContactForm />
      </Section>
      <Section title="Find contacts by name">
        <SearchBar value={inputValue} onChange={handleChange} />
      </Section>

      <Section title="Contact List">
        <ContactList contacts={getFilteredContacts()} />
      </Section>
    </>
  );
}

export default App;

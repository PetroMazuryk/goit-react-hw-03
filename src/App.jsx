import { ContactList } from './components/ContactList/ContactList.jsx';
import { Section } from './components/Section/Section.jsx';
import initialContacts from './data/initialContacts.json';

function App() {
  return (
    <>
      <Section title="Contact List">
        <ContactList contacts={initialContacts} />
      </Section>
    </>
  );
}

export default App;

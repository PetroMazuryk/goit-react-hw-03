import { ContactList } from './components/ContactList/ContactList.jsx';
import { Section } from './components/Section/Section.jsx';
import initialContacts from './data/initialContacts.json';
console.log(initialContacts);

function App() {
  return (
    <>
      <Section title="Contact List">
        <ContactList />
      </Section>
    </>
  );
}

export default App;

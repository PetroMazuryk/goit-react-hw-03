import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.list}>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <div className={css.wrapper}>
              <Contact contact={contact} onDelete={onDelete} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

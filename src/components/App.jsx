import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Notification from './Notification/Notification';
import { useSelector } from 'react-redux';
import { getContactValue } from 'redux/selectors';

export default function App() {
  const contactsList = useSelector(getContactValue);
  return (
    <>
      <Section>
        <h2>Phonebook</h2>
        <ContactForm />
      </Section>
      <Section>
        <h2>Contacts</h2>
        {contactsList.length < 1 ? (
          <Notification message="There is no contact yet." />
        ) : (
          <>
            <Filter />
            <ContactList />
          </>
        )}
      </Section>
    </>
  );
}

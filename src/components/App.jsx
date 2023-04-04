import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Notification from './Notification/Notification';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactsValue ,selectIsLoading, selectError } from 'redux/selectors';
import {getAllContacts} from 'redux/operations'
import { useEffect } from 'react';

export default function App() {
  const contactsList = useSelector(selectContactsValue);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);
  return (
    <>
      <Section>
        <h2>Phonebook</h2>
        <ContactForm />
      </Section>
      <Section>
        <h2>Contacts</h2>
        {isLoading && !error && <b>Request in progress...</b>}
      
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

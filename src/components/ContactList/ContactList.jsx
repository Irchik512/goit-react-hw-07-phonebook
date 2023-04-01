import ContactsListItem from 'components/ContactList/ContactsListItem';
import { ContactsList } from 'components/ContactList/ContactsList.styled';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';

export default function ContactList() {
  const contactsList = useSelector(getFilteredContacts);
  return (
    <ContactsList>
      {contactsList.map(contact => (
        <ContactsListItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          id={contact.id}
        />
      ))}
    </ContactsList>
  );
}

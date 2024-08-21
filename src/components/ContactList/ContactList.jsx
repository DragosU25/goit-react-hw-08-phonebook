import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/operations';
import { getFilteredContacts } from '../../redux/contacts/contactsSelector';
import ContactItem from '../ContactItem/ContactItem';
import styles from './ContactList.module.css';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}

export default ContactList;

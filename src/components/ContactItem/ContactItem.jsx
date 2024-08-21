import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import styles from './ContactItem.module.css';

function ContactItem({ contact }) {
  const dispatch = useDispatch();
  const { id, name, number } = contact;
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    try {
      await dispatch(deleteContact(id)).unwrap();
    } catch (err) {
      setError('Failed to delete contact. Please try again.');
    }
  };

  return (
    <li className={styles.item}>
      <p>
        {name}: {number}
      </p>
      {error && <p className={styles.error}>{error}</p>}
      <button className={styles.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactItem;

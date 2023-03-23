import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Button } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map((contact, id) => (
      <ListItem key={contact.id}>
        <div>{id + 1}</div>
        {contact.name}: {contact.number}
        <Button onClick={() => onDeleteContact(contact.id)}>delete</Button>
      </ListItem>
    ))}
  </List>
);

export default ContactList;

ContactList.propeTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDeleteContact: PropTypes.func,
};

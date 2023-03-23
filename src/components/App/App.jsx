import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import { GlobalStyle } from 'components/GlobalStyle';
import { ContactsTitle, Container, FilterTitle, Title } from './App.styled';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

export default function App() {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(localStorage.getItem('Contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('Contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = data => {
    if (
      !contacts.find(
        contact => data.name.toLocaleLowerCase() === contact.name.toLowerCase()
      )
    ) {
      setContacts(prevState => (prevState ? [...prevState, data] : [data]));
    } else {
      alert(`${data.name} is already in contacts.`);
    }
  };

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const findContact = evt => {
    setFilter(evt.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(prevState => prevState.filter(({ id }) => id !== contactId));
  };
  return (
    <Container>
      <GlobalStyle />
      <Title>Phonebook</Title>
      <ContactForm onSubmit={formSubmitHandler} />
      <ContactsTitle>Contacts</ContactsTitle>
      <FilterTitle>Find contacts by name</FilterTitle>
      <Filter value={filter} onChange={findContact} />

      {contacts.length === 0 ? (
        <p>There are no contacts in the Phonebook</p>
      ) : (
        <ContactList
          contacts={filterContacts}
          onDeleteContact={deleteContact}
        />
      )}
    </Container>
  );
}

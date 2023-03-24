import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { getAllContacts } from 'redux/selectors/selectors';
import { useSelector } from 'react-redux';
import { ContactsTitle, Container, Title } from './App.styled';
import { GlobalStyle } from 'components/GlobalStyle';
export const App = () => {
const contacts = useSelector(getAllContacts);

  return (
    <Container>
         <GlobalStyle />
        <Title>Phonebook</Title>
        <ContactForm />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter />
        {contacts.length === 0 ?
          (<p>There are no contacts in the Phonebook</p>
          ) : (
            <ContactList />
            )}
      </Container>

  );
};

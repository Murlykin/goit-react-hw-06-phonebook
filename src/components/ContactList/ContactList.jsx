import { List, ListItem, Button } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import { getAllContacts } from 'redux/selectors/selectors';

export const ContactList = () => {
  const contacts = useSelector(getAllContacts);
  const dispatch = useDispatch();

  return (
    <>
      <List>
        {contacts.map(({ name, id, number }) => {
          return (
            <ListItem key={id}>
              {name} : {number}
              <Button type="button" onClick={() => dispatch(deleteContact(id))}>
                Delete
              </Button>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

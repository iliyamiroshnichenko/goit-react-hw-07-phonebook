// import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

const addContact = (name, number) => dispatch => {
  const contact = { name, number };
  dispatch({ type: 'contacts/addContactRequest' });
  axios
    .post('/contacts', contact)
    .then(({ data }) =>
      dispatch({ type: 'contacts/addContactSuccess', payload: data }),
    )
    .catch(err => dispatch({ type: 'contacts/addContactError', payload: err }));
};

// const addContact = createAction('contacts/add', (name, number) => ({
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//   },
// }));

const deleteContact = createAction('contacts/delete');

const changeFilter = createAction('contacts/changeFilter');

// eslint-disable-next-line
export default { addContact, deleteContact, changeFilter };

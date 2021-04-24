import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => {
  return axios.get('/contacts').then(res => res.data);
};

const addContact = contact => {
  return axios.post('/contacts', contact).then(res => res.data);
};

const deleteContact = contactId => {
  return axios.delete(`/contacts/${contactId}`);
};

// eslint-disable-next-line
export default { fetchContacts, addContact, deleteContact };

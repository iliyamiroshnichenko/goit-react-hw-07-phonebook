import Container from './components/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Spinner from './components/Loader';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import contactsOperations from './redux/contacts/contacts-operations';

const App = ({ isLoading, isError, fetchContacts }) => {
  // eslint-disable-next-line
  useEffect(() => fetchContacts(), []);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <p>Oops, we have some loading error! :(</p>
      ) : (
        <ContactList />
      )}
    </Container>
  );
};

const mapStateToProps = ({ contacts: { loading, error } }) => ({
  isLoading: loading,
  isError: error,
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;
const getError = state => state.contacts.error;
const getFilter = state => state.contacts.filter;
const getAllContacts = state => state.contacts.items;

const getFilteredContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

// eslint-disable-next-line
export default {
  getLoading,
  getError,
  getFilter,
  getFilteredContacts,
};

import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const doesContactExist = (state, { payload }) => {
  const { name } = payload;
  const normalizedName = name.toLowerCase();
  if (state.find(contact => contact.name.toLowerCase() === normalizedName)) {
    alert(`${name} is already in contacts`);
    return state;
  }
  return [...state, payload];
};

const items = createReducer([], {
  [actions.addContact]: doesContactExist,
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter });

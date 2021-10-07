import { combineReducers } from 'redux';
import types_contact from './contacts-types';

const contactsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types_contact.ADD:
      return [...state, payload];

    case types_contact.DELETE:
      return state.filter(item => item.id !== payload);

    default:
      return state;
  }
};

export default combineReducers({ contactsReducer });

import { combineReducers } from 'redux';
import types_contact from './contacts-types';

const itemReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types_contact.ADD:
      return [...state, payload];

    case types_contact.DELETE:
      return state.filter(item => item.id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case types_contact.FILTER_NAME:
      return (state = payload);

    default:
      return state;
  }
};

const contactReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});

export default contactReducer;

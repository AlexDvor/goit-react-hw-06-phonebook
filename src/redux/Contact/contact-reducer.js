import { combineReducers } from 'redux';
// import { DELETE, ADD, FILTER_NAME } from './contacts-types';
import * as type from './contact-actions';
import { createReducer } from '@reduxjs/toolkit';

const itemReducer = createReducer([], {
  [type.addContacts]: (state, action) => [...state, action.payload],
  [type.deleteContacts]: (state, action) => state.filter(item => item.id !== action.payload),
});

const filterReducer = createReducer('', {
  [type.filterByName]: (state, action) => (state = action.payload),
});

// const itemReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case ADD:
//       return [...state, payload];

//     case DELETE:
//       return state.filter(item => item.id !== payload);

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case FILTER_NAME:
//       return (state = payload);

//     default:
//       return state;
//   }
// };

const contactReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});

export default contactReducer;

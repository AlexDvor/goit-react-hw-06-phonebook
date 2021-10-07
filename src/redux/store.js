import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import types_contact from './Contact/contacts-types';
import types_filter from './Filter/filter-types';
import contactReducer from './Contact/contact-reducer';

// const contactsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case types_contact.ADD:
//       return [...state, payload];

//     case types_contact.DELETE:
//       return state.filter(item => item.id !== payload);

//     default:
//       return state;
//   }
// };

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case types_filter.FILTER_NAME:
      return (state = payload);

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  items: contactReducer,
  filter: filterReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

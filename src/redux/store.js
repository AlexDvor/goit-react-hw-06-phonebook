import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import types_contact from './Contact/contacts-types';
// import types_filter from './Filter/filter-types';
import contactReducer from './Contact/contact-reducer';

// const contactReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case types_contact.ADD:
//       return [...state, payload];

//     case types_contact.DELETE:
//       return state.filter(item => item.id !== payload);

//     default:
//       return state;
//   }
// };

const rootReducer = combineReducers({
  contacts: contactReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

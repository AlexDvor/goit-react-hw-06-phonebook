import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const contactsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'app/addContacts':
      return [...state, payload];

    case 'contactsList / deleteUserContacts':
      return state.filter(item => item.id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case 'filter/handleFilterByName':
      return (state = payload);

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

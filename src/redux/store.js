import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import types from './app/app-types';

const contactsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];

    case types.DELETE:
      return state.filter(item => item.id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case types.FILTER_NAME:
      return (state = payload);

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  items: contactsReducer,
  filter: filterReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

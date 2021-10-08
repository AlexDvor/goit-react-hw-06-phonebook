import { combineReducers } from 'redux';
import { DELETE, ADD, FILTER_NAME } from './contacts-types';

const itemReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD:
      return [...state, payload];

    case DELETE:
      return state.filter(item => item.id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case FILTER_NAME:
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

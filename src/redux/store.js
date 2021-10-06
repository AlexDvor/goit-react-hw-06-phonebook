import { createStore } from 'redux';

const initialState = {
  contact: [],
};

const contactReducer = (state = initialState, actions) => {};

const store = createStore(contactReducer);

export default store;

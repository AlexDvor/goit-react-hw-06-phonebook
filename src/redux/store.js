import { createStore } from 'redux';

const initialState = {
  contacts: [],
  filter: '',
};

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'app/getData':
      return {
        ...state,
        contacts: [...state.contacts, payload],
      };
    case 'filter/handleFilterByName':
      return {
        ...state,
        filter: payload,
      };

    default:
      return state;
  }
};

const store = createStore(appReducer);

export default store;

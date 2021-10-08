// import { combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './Contact/contact-reducer';

// import contactReducer from './Contact/contact-reducer';

// const rootReducer = combineReducers({
//   contacts: contactReducer,
// });

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

// const store = createStore(rootReducer, composeWithDevTools());

export default store;

// import { DELETE, ADD, FILTER_NAME } from './contacts-types';
import { createAction } from '@reduxjs/toolkit';

export const deleteContacts = createAction('contactsList/deleteContacts');
export const addContacts = createAction('form/addContacts');
export const FilterByName = createAction('filter/handleFilterByName');

// export const deleteContacts = id => ({
//   type: DELETE,
//   payload: id,
// });

// export const addContacts = ({ name, id, number }) => ({
//   type: ADD,
//   payload: {
//     name,
//     id,
//     number,
//   },
// });

// export const FilterByName = string => ({
//   type: FILTER_NAME,
//   payload: string,
// });

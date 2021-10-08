import { DELETE, ADD, FILTER_NAME } from './contacts-types';

export const deleteContacts = id => ({
  type: DELETE,
  payload: id,
});

export const addContacts = ({ name, id, number }) => ({
  type: ADD,
  payload: {
    name,
    id,
    number,
  },
});

export const FilterByName = string => ({
  type: FILTER_NAME,
  payload: string,
});

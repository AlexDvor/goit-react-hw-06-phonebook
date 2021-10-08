import types_contact from './contacts-types';

export const deleteContacts = id => ({
  type: types_contact.DELETE,
  payload: id,
});

export const addContacts = ({ name, id, number }) => ({
  type: types_contact.ADD,
  payload: {
    name,
    id,
    number,
  },
});

export const FilterByName = string => ({
  type: types_contact.FILTER_NAME,
  payload: string,
});

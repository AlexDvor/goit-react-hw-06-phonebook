export const deleteContacts = id => ({
  type: 'contactsList/deleteContacts',
  payload: id,
});

export const addContacts = ({ name, id, number }) => ({
  type: 'app/addContacts',
  payload: {
    name,
    id,
    number,
  },
});

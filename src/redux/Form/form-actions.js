export const addContacts = ({ name, id, number }) => ({
  type: 'app/addContacts',
  payload: {
    name,
    id,
    number,
  },
});

export const addContacts = ({ name, id, number }) => ({
  type: 'app/addContacts',
  payload: {
    name,
    id,
    number,
  },
});

export const handleFilterByName = string => ({
  type: 'filter/handleFilterByName',
  payload: string,
});

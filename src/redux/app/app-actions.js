export const getData = ({ name, id, number }) => ({
  type: 'app/getData',
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

export const getData = ({ name, id, number }) => ({
  type: 'app/getData',
  payload: {
    name,
    id,
    number,
  },
});

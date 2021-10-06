import { Container } from './components/Container/Container';
import { useState, useEffect } from 'react';
import Form from './components/Form';
import Contact from './components/Contact';
import Filter from './components/Filter';

// const useLocalStorage = (key, defaultValue) => {
//   const [state, setState] = useState(() => {
//     return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
//   });

//   return [state, setState];
// };

export default function App() {
  // const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const getData = ({ name, id, number }) => {
    const newContacts = {
      name,
      id,
      number,
    };
    updateContacts(newContacts);
  };

  const updateContacts = newData => {
    console.log(contacts);
    contacts.some(item => item.name === newData.name)
      ? alert(`${newData.name} is already in contacts`)
      : setContacts(prevState => [...prevState, newData]);
  };

  const handleFilterByName = e => setFilter(e.target.value);

  const renderListName = (array, name) => {
    return array.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
  };

  const deleteNameItem = id => {
    setContacts(prevState => prevState.filter(item => item.id !== id));
  };

  return (
    <Container>
      <h2>Phonebook</h2>
      <Form getData={getData} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={handleFilterByName} />
      <Contact data={renderListName(contacts, filter)} onDeleteNameItem={deleteNameItem}></Contact>
    </Container>
  );
}

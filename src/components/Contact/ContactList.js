import { Button } from './ContactList.styled';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/Contact/contact-actions';

function ContactList({ dataUsers, name, deleteContact }) {
  // const renderUserContacts = dataUsers.filter(item =>
  //   item.name.toLowerCase().includes(name.toLowerCase()),
  // );

  const renderUserContacts = dataUsers => {
    if (dataUsers) {
      return dataUsers.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
    }
  };

  const visibleContacts = renderUserContacts(dataUsers);

  return (
    <>
      {visibleContacts &&
        visibleContacts.map(({ name, id, number }) => (
          <li key={id}>
            {name} : {number}
            <Button onClick={() => deleteContact(id)}>Delete</Button>
          </li>
        ))}
    </>
  );
}

const mapStateToProps = state => ({
  dataUsers: state.contacts.items,
  name: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(actions.deleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

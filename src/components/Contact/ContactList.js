import { Button } from './ContactList.styled';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/Contact/contact-actions';

function ContactList({ dataUsers, name, onDeleteUserContact }) {
  const renderUserContacts = dataUsers.filter(item =>
    item.name.toLowerCase().includes(name.toLowerCase()),
  );

  return (
    <>
      {renderUserContacts.map(({ name, id, number }) => (
        <li key={id}>
          {name} : {number}
          <Button onClick={() => onDeleteUserContact(id)}>Delete</Button>
        </li>
      ))}
    </>
  );
}

const mapStateToProps = state => ({
  dataUsers: state.items,
  name: state.filter,
});

const mapDispatchToProps = dispatch => ({
  onDeleteUserContact: id => dispatch(actions.deleteContacts(id)),
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

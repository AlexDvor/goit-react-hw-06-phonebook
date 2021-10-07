import { Button } from './ContactList.styled';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/app/app-actions';

function ContactList({ data, onDeleteUserContact }) {
  return (
    <>
      {data.map(({ name, id, number }) => (
        <li key={id}>
          {name} : {number}
          <Button onClick={() => onDeleteUserContact(id)}>Delete</Button>
        </li>
      ))}
    </>
  );
}

ContactList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

const mapStateToProps = state => ({
  data: state.contacts,
});

const mapDispatchToProps = dispatch => ({
  onDeleteUserContact: id => dispatch(actions.deleteUserContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

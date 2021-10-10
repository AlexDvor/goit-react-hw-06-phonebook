import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/Contact/contact-actions';

function Filter({ filter, onChange }) {
  return (
    <>
      <p>Find Contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
        autoComplete="off"
      ></input>
    </>
  );
}

const mapStateToProps = state => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.filterByName(e.target.value)),
});

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

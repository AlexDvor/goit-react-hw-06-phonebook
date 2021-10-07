import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/app/app-actions';

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
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.handleFilterByName(e.target.value)),
});

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

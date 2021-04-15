import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ showClear, clearUsers, searchUsers, setAlert }) => {
  const [text, setText] = useState(''); //would have state = {text: ''} in a class based component

  const onSubmit = (e) => {
    e.preventDefault(); //important to have so it doesn't reset
    if (text === '') {
      setAlert('Please enter something to search.', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search User'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {showClear && ( //conditionally rendering clear button
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlerts: PropTypes.func.isRequired,
};

export default Search;

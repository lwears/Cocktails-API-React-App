import React from 'react';
import '../css/Search.css';
import { useHistory } from 'react-router-dom';

export default function Search(props) {
  const searchInput = React.createRef();
  const { search } = props;
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    search(searchInput.current.value);
    history.push('/');
  };

  return (
    <form className='search' onSubmit={handleSubmit}>
      <input type='text' id='search' ref={searchInput} />
      <input type='submit' value='Search' />
    </form>
  );
}

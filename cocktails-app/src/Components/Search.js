import React from 'react';
import '../css/search.css';

export default function Search(props) {
  const searchInput = React.createRef();
  const { search } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    search(searchInput.current.value);
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input type="text" id="search" ref={searchInput} />
      <input type="submit" value="Search" />
    </form>
  );
}

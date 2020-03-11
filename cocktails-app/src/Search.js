import React from 'react'

export default function Search(props) {
  return (
    <div className="search">
      <input type="text" id="search"/>
      <button onClick={() => props.search(document.getElementById('search').value)}>Search</button>
    </div>
  )
}

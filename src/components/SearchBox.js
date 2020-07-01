import React from 'react';
import './SearchBox.css'

const SearchBox = ( { searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input 
        className='pa2 ba b--green bg-lightest-blue'
        type='search'
        placeholder='Buscar Robot por Nombre'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;
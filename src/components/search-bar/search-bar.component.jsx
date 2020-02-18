import React from 'react';



const SearchBar = ({handleChange}) => (
    <div>
        <input type="text" name="search" onChange={handleChange} />
    </div>
)

export default SearchBar;
import React, { useState } from 'react';
import SearchBar from '../search-bar/search-bar.component';
import ListItem from '../list-item/list-item.component';
const items = Object.getOwnPropertyNames(window);


function FilterList() {
    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = (event) => {
        event.preventDefault();
        setSearchTerm(event.target.value);
    }
    return (
        <div>
        <SearchBar handleChange={handleChange} />
            <ul>
                {items.filter(item => item.startsWith(searchTerm)).map(item => <ListItem item={item} />)}
            </ul>
        </div>
    )
}
export default FilterList;
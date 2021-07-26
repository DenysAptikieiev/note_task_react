import React from 'react';
import './search-panel.css';
const SearchPanel = () => {
    return (
        <section>
            <input
                className="form-control search-input"
                type="text"
                placeholder="Search..."
            />
        </section>
    )
};

export default SearchPanel;
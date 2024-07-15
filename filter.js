// client/src/components/Filters.js
import React from 'react';

const Filters = ({ setFilter }) => {
    return (
        <div>
            <label>
                End Year:
                <input type="number" onChange={(e) => setFilter('year', e.target.value)} />
            </label>
            <label>
                Topics:
                <input type="text" onChange={(e) => setFilter('topics', e.target.value)} />
            </label>
            <label>
                Sector:
                <input type="text" onChange={(e) => setFilter('sector', e.target.value)} />
            </label>
            {/* Add more filters as needed */}
        </div>
    );
};

export default Filters;

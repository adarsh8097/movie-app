import React from 'react';

const Sidebar = ({ sortOrder, handleSortedChange, handleRatingChange, selectedRatings }) => {
    const ratings = [1, 2, 3, 4, 5]; // Assuming ratings are from 1 to 5 stars

    return (
        <aside>
            <h3 className='asid-bar'>Filter by Rating</h3>
            {ratings.map(rating => (
                <div key={rating}>
                    <input 
                        type='checkbox'
                        checked={selectedRatings.includes(rating)}
                        onChange={() => handleRatingChange(rating)} 
                    />
                    {Array.from({ length: rating }).map((_, i) => (
                        <span key={i} className="fa fa-star checked demo"></span>
                    ))}
                    {Array.from({ length: 5 - rating }).map((_, i) => (
                        <span key={i} className="fa fa-star"></span>
                    ))}
                    <br />
                </div>
            ))}
            <h3 className='asid-bar'>Sort By Year</h3>
            <input
                type='radio'
                name='sort'
                checked={sortOrder === 'ascending'}
                onChange={() => handleSortedChange('ascending')}
            />&nbsp;Ascending <br />
            <input
                type='radio'
                name='sort'
                checked={sortOrder === 'descending'}
                onChange={() => handleSortedChange('descending')}
            />&nbsp;Descending
        </aside>
    );
};

export default Sidebar;

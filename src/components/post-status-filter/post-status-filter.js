import React from 'react';
import './post-status-filter.css'
const PostStatusFilter = () => {
    return (
        <div className="block-btn">
            <button><i><img src="./icons/all.svg" alt="all publication"/></i> ALL</button>
            
            <button><i><img src="./icons/like.svg" alt="like publication"/></i> LIKE</button>
            
        </div>
    )
};

export default PostStatusFilter;
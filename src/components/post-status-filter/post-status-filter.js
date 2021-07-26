import React from 'react';
import styled from 'styled-components';

const BlockBtn = styled.div`
    display: flex;
    justify-content: space-around;
    button {
        position: relative;
        top: -1.2px;
        width: 150px;
        height: 40px;

        background: none;
        border: none;
        outline: none;
        box-sizing: border-box;
        
        color: grey;
        font-size: 14px;
        font-weight: 200;
        transition: all 0.2s ease-out;

        img {
            width: 20px;
        }

        &:hover, 
        &:active, 
        &:focus {
            border-top: 1px solid;
            color: #000;
            font-weight: 500;
        }
    }
`;

const PostStatusFilter = () => {
    return (
        <BlockBtn>
            <button><i><img src="./icons/all.svg" alt="all publication"/></i> ALL</button>
            
            <button><i><img src="./icons/like.svg" alt="like publication"/></i> LIKE</button>
            
        </BlockBtn>
    )
};

export default PostStatusFilter;
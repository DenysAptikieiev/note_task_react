import React, { Component } from 'react';
import styled from 'styled-components';

const BlockBtn = styled.div`
    display: flex;
    justify-content: space-around;
    
    .active {
            border-top: 1px solid;
            color: #000;
            font-weight: 500;
        }
    }
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

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            { name: 'all', label: 'ALL' },
            { name: 'like', label: 'LIKE' },
            { name: 'important', label: 'IMPORTANT' },
        ]
    }
    render() {
        const buttons = this.buttons.map(item => {
            const {filter, onFilterSelect} = this.props;
            const active = filter === item.name ? 'active' : '';
            return (
                <button
                    key={item.name}
                    onClick={() => onFilterSelect(item.name)}
                    className={active}
                >
                    <i><img src={`./icons/${item.name}.svg`} alt={item.label} /></i>
                    {item.label}
                </button>
            )
        })
        return (
            <BlockBtn>
                {buttons}
            </BlockBtn>
        )
    }
};


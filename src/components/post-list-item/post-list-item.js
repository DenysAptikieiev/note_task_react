import React, { Component } from 'react';
import styled from 'styled-components';

const AppListItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.25rem;
    .fa-heart {
        width: 35px;
        height: 35px;
        text-align: center;
        line-height: 35px;
        font-size: 16px;
        color: red;
        transition: 0.3s all;
        opacity: ${props => props.like ? 1 : 0.08}
    }
`;
const BtnBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    button {
        width: 35px;
        height: 35px;
        margin: 3px;
        font-size: 17px;
        border: none;
        cursor: pointer;

        &:focus {
        box-shadow: none;
        outline: none;
        }
    }
    .btn-trash {
        color: red;
    }
    .btn-star {
        color: #FFD700;
    }
    .btn-star {
        color: ${props => props.important ? '#aeaeae' : '#FFD700'};
    }
`;
const AppListItemLabel = styled.span`
        display: block;
        line-height: 35px;
        cursor: pointer;
        user-select: none;
        transition: 0.5s all;
        color: ${props => props.important ? '#FFD700' : 'inherit'}
`;

export default class PostListItem extends Component {
    render() {
        const { label, onDelete, onToggleImportant, onToggleLiked } = this.props;
        const { important, like } = this.props;
        return (
            <AppListItem onDoubleClick={onToggleLiked}  like={like}>

                <AppListItemLabel important={important}>
                    <i onClick={onToggleLiked} className="fa fa-heart"></i>
                    {label}
                </AppListItemLabel>
                <BtnBlock important={important}>
                    <button
                        onClick={onToggleImportant}
                        type="button"
                        className="btn-star btn-sm"
                    >
                        <i className="fa fa-star"></i>
                    </button>
                    <button
                        onClick={onDelete}
                        type="button"
                        className="btn-trash btn-sm"
                    >
                        <i className="fa fa-trash-o"></i>
                    </button>
                </BtnBlock>
            </AppListItem>
        )
    }
};


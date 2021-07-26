import React, { Component } from 'react';
import './post-list-item.css'

export default class PostListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            important: false,
            like: false,
        }
        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);
    }
    onImportant() { this.setState({important: !this.state.important}) };
    onLike() { this.setState({like: !this.state.like}) };
    
    render() {
        const {label} = this.props;
        const {important, like} = this.state;

        let classNames = `app-list-item`;
        if(important) classNames += ` important`;
        if(like) classNames += ` like`;

        return (
            <div onDoubleClick={this.onLike} className={classNames}>

                <span className="app-list-item-label">
                    <i onClick={this.onLike} className="fa fa-heart"></i>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button
                    onClick={this.onImportant}
                        type="button" 
                        className="btn-star btn-sm"
                    >
                        <i className="fa fa-star"></i>
                    </button>
                    <button
                        type="button" 
                        className="btn-trash btn-sm"
                    >
                        <i className="fa fa-trash-o"></i>
                    </button>
                </div>
            </div>
    )
    }
};


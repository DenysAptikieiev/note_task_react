import React, { Component } from 'react';

import PostListItem from "../post-list-item"
import './post-list.css';

export default class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props,
        }
    }
    render() {
        const {posts} = this.state.data;
        const elements = posts.map(item => {
            const {id, label, important, like} = item;
            return(
                <li key={id} className="list-group-item">
                    <PostListItem label={label} important={important} like={like}/>
                </li>
            )
        })

        return (
            <section className="app-list-section">
                <ul className="app-list">
                    {elements}
                </ul>
            </section>
        )
    }
   

    
};


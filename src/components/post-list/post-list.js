import React, { Component } from 'react';

import PostListItem from "../post-list-item"
import styled from 'styled-components';

const AppListSection = styled.section`
    margin: 20px auto;
`;

const AppList = styled.ul`
    overflow: hidden;
    padding: 0;
`;

const ListGroupItem = styled.li`
        padding: 20px 35px 10px 35px;
        margin-top: 10px;
        border-radius: 5px;
`;

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
                <ListGroupItem key={id}>
                    <PostListItem label={label} important={important} like={like}/>
                </ListGroupItem>
            )
        })

        return (
            <AppListSection>
                <AppList>
                    {elements}
                </AppList>
            </AppListSection>
        )
    }
};


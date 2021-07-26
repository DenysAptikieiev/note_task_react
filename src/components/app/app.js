import React from 'react';
import AppHeader from '../app-header';
import PostAddForm from '../post-add-form/post-add-form';
import PostList from '../post-list';
import PostStatusFilter from '../post-status-filter';
import SearchPanel from '../search-panel';

import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 0 auto;
    padding: 0 20px;
    @media (min-width: 375px) {
        max-width: 812px;
    }
`;

const SearchPanelBtn = styled.section`
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-direction: column;
    margin: 1rem 0;

    .line-head {
        width: 100%;
        height: 1px;
        background: lightgrey;
        box-sizing: border-box;
    }

    .search-input {
        width: auto;
        flex-grow: 1;
        margin-right: 3px;
    }
`;


const App = () => {
    const data = [
        { label: "some first text", like: true, important: false, id: "qasdqwde" },
        { label: "some second text", like: false, important: true, id: "qasddvs" },
        { label: "some third text", like: false, important: false, id: "qasddfbd" },
    ]
    return (
        <Wrapper>
            <AppHeader />
            <SearchPanelBtn>
                <div className="line-head"></div>
                <PostStatusFilter />
            </SearchPanelBtn>
            <SearchPanel />
            <PostList posts={data} />
            <PostAddForm />
        </Wrapper>
    )
}

export default App;

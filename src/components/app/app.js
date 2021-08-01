import React, { Component } from 'react';
import AppHeader from '../app-header';
import PostAddForm from '../post-add-form/post-add-form';
import PostList from '../post-list';
import PostStatusFilter from '../post-status-filter';
import SearchPanel from '../search-panel';
import nextId from 'react-id-generator';

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

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { label: "some first text", like: true, important: false, id: "1" },
                { label: "some second text", like: false, important: true, id: "2" },
                { label: "some third text", like: false, important: false, id: "3" },
            ],
            term: '',
            filter: 'all',
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.searchPosts = this.searchPosts.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
    }
    deleteItem(id) {
        this.setState(({data}) => {
            console.log(data);
            const newArray = data.filter(elem => elem.id !== id);
            return {
                data: newArray,
            }
        })
    }
    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            like: false,
            id: nextId(), 
        }
        this.setState(({data}) => {
            const newData = [...data, newItem];
            return {
                data: newData,
            }
        })
    }

    onToggle(data, id, evlistener) {
        const copyData = Object.create(data);
        const oldData = copyData.filter(elem => {
            if(elem.id === id) elem[evlistener] = !elem[evlistener];
            return elem;
        }); 
        return oldData;
    }

    onToggleImportant(id) {
        this.setState(({data}) => {
            return {
                data: this.onToggle(data, id, 'important'),
            }
        })
    }

    onToggleLiked(id) {
        this.setState(({data}) => {
            return {
                data: this.onToggle(data, id, 'like'),
            }
        })
    }
    searchPosts(items, term) {
        if(!term) return items;
        return items.filter(item => item.label.indexOf(term) > -1);
    }
    filterPosts(items, filter) {
        switch(filter) {
            case 'like':
                return items.filter(item => item.like);
                break;
            case 'all': 
                return items;
                break;
            case 'important': 
                return items.filter(item => item.important);
                break;
            default:
                return items;
                break;
        }
    }
    onFilterSelect(filter) {
        this.setState({
            filter: filter,
        })
    }
    onUpdateSearch(term) {
        this.setState({term: term});
    }
    render() {
        const {data, term, filter} = this.state;
        const visiablePosts = this.filterPosts(this.searchPosts(data, term), filter);
        const liked = data.filter(elem => elem.like).length;
        const importanted = data.filter(elem => elem.important).length;
        const notes = data.length;
        return (
            <Wrapper>
                <AppHeader like={liked} notes={notes} importanted={importanted} />
                <SearchPanelBtn>
                    <div className="line-head"></div>
                    <PostStatusFilter 
                        filter={filter} 
                        onFilterSelect={this.onFilterSelect}
                    />
                </SearchPanelBtn>
                <SearchPanel 
                    onUpdateSearch={this.onUpdateSearch}
                />
                <PostList 
                    posts={visiablePosts} 
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant} 
                    onToggleLiked={this.onToggleLiked}
                />
                <PostAddForm onAdd={this.addItem} />
            </Wrapper>
        )
    }
}



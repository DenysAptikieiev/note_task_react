import React from 'react';
import AppHeader from '../app-header';
import PostAddForm from '../post-add-form/post-add-form';
import PostList from '../post-list';
import PostStatusFilter from '../post-status-filter';
import SearchPanel from '../search-panel';
import './app.css';


const App = () => {
    const data = [
        {label: "some first text", like: true, important: false, id: "qasdqwde"},
        {label: "some second text", like: false, important: true, id: "qasddvs"},
        {label: "some third text", like: false, important: false, id: "qasddfbd"},
    ]
    return (
        <div className="wrapper">
            <AppHeader />
            <section className="search-panel">
                <div className="line-head"></div>
                <PostStatusFilter />
            </section>
            <SearchPanel />
            <PostList posts={data}/>
            <PostAddForm />
        </div>
    )
}

export default App;

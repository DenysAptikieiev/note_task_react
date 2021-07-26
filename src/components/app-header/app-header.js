import React from 'react';
import './app-header.css';

const AppHeader = () => {
    return (
        <section className="app-header">
            <img className="logo" src="logo_note.png" alt="logo" />
            <div className="block-profile">
                <div className="info-header-post">
                    <h4 className="notes"><span>20</span> notes</h4>
                    <h4 className="likes"><span>3</span> likes</h4>
                </div>
            </div>
        </section>
    )
}

export default AppHeader;
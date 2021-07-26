import React from 'react';
// import './app-header.css';

import styled from 'styled-components';

const AppHearderSection = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    .logo {
        width: 60px;
        height: 60px;
    }
`;
const BlockProfile = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;
const InfoHeaderPost = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding-right: 20px;   
    span {
        color: #000000;
    }      
    h1 {
        font-size: 26px;
    }
    h4 {
        font-size: 16px;
        color: grey;
    }
`;

const AppHeader = () => {
    return (
        <AppHearderSection>
            <img className="logo" src="logo_note.png" alt="logo" />
            <BlockProfile>
                <InfoHeaderPost>
                    <h4 className="notes"><span>20</span> notes</h4>
                    <h4 className="likes"><span>3</span> likes</h4>
                </InfoHeaderPost>
            </BlockProfile>
        </AppHearderSection>
    )
}

export default AppHeader;
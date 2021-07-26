import React from 'react';
import styled from 'styled-components';

const BottomPanel = styled.form`
    display: flex;
    margin: 20px 0;

    .new-post-label {
        width: auto;
        flex-grow: 1;
        margin-right: 3px;
    }
`;

const PostAddForm = () => {
    return (
        <section>
            <BottomPanel>
                <input
                    type="text"
                    className="form-control new-post-label"
                    placeholder="What are you thinking now?"
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary"
                >
                    Add Post
                </button>
            </BottomPanel>
        </section>
    )
};

export default PostAddForm;

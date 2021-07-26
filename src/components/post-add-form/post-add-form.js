import React from 'react';
import './post-add-form.css'

const PostAddForm = () => {
    return (
        <section>
            <form className="bottom-panel d-flex">
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
            </form>
        </section>
    )
};

export default PostAddForm;

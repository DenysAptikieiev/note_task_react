import React, { Component } from 'react';
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

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
        this.changeValue = this.changeValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    changeValue(event) {
        this.setState(({value}) => {
            const newValue = event.target.value;
            return {
                value: newValue,
            }
        })
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.value)
        this.setState({
            value: '',
        })
    }
    render() {
        return (
            <section>
                <BottomPanel onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.changeValue}
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
    }
};

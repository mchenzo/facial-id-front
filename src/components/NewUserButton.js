import React, { Component } from 'react';
import '../styles/button.css';

class NewUserButton extends Component {


    render() {
        return (
            <button
                className='new-user-button'
            > 
                <h1>{this.props.text}</h1>
            </button>
        )
    }
}

export default NewUserButton
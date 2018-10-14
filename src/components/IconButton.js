import React, { Component } from 'react';
import { Icon } from 'antd';

class IconButton extends Component {
    render() {
        return (
            <button className='icon-button' > 
                <Icon 
                    type={ this.props.type } 
                    theme="outlined" 
                    style={{ fontSize: '20px', color: '#2bc7e2' }}
                />
            </button>
        )
    }
}

export default IconButton
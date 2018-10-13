import React, { Component } from 'react';
import '../styles/menu.css';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';


class Header extends Component {

    render() {
        return (
            <div className='header' >
                <Menu
                    // onClick={this.handleClick}
                    // selectedKeys={[this.state.current]}
                    mode="horizontal"
                    style={{ boxShadow: '0 6px 7px -7px #333' }}
                >
                    {/* <Menu.Item key="home">
                        <Link to="/"><Icon type="home" />Home</Link>
                    </Menu.Item> */}
                </Menu>
            </div>
        )
    }
}

export default Header
import React, { Component } from 'react';
import '../styles/menu.css';
import { Menu, Icon } from 'antd';
import { Route, Link } from 'react-router-dom';
import Home from './Home';


class Header extends Component {

    render() {
        const Home = () => (<Home />)

        return (
            <div className='header' >
                <Menu
                    // onClick={this.handleClick}
                    // selectedKeys={[this.state.current]}
                    mode="horizontal"
                    style={{ boxShadow: '0 6px 7px -7px #333' }}
                >
                    <Menu.Item key="home">
                        <Link to="/"><Icon type="home" />Home</Link>
                    </Menu.Item>
                </Menu>

                <Route exact path="/" component={ Home }/>
            </div>
        )
    }
}

export default Header
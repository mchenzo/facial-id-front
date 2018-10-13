import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import '../styles/menu.css';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        current: ''
        }
    }



    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    }


    render() {
        const HomeScreen = () => (<Home />)

        return (
            <div className='header' >
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                    style={{ boxShadow: '0 6px 7px -7px #333' }}
                >
                    <Menu.Item key="home">
                        <Link to="/"><Icon type="home" />Home</Link>
                    </Menu.Item>
                    <Menu.Item key="Add User">
                        <Link to="/"><Icon type="home" />Add User</Link>
                    </Menu.Item>
                    <Menu.Item key="Screen">
                        <Link to="/"><Icon type="home" />Screen</Link>
                    </Menu.Item>
                </Menu>

                <Route exact path="/" component={ HomeScreen }/>
            </div>
        )
    }
}

export default Header
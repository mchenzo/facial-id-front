import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Provider } from 'mobx-react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './styles/index.css';
import '../node_modules/antd/dist/antd.css';
import uiStore from './stores/uiStore';
import HomeScreen from './components/HomeScreen';
import CameraScreen from './components/CameraScreen';
import logo from './assets/logo.jpg';

const stores = { uiStore }

class App extends Component {
  constructor(props) {
    super(props)
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
    const Home = () => (<HomeScreen />)
    const ScreenPeople = () => (<CameraScreen />)

    return (
      <Provider {...stores} >
        <Router>
          <div className="App container">
            <link href="https://fonts.googleapis.com/css?family=Raleway:200,300,500,600" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            <div className='menu' >
              <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
                style={{ boxShadow: '0 6px 7px -7px #333' }}
              >
                <Menu.Item key="home">
                  <Link to="/"><Icon type="home" />Home</Link>
                  <img className="logo" src={ logo } />
                  <Link to="/"></Link>
                </Menu.Item>
                <Menu.Item key="add-user">
                  <Link to="/"><Icon type="user" />Add User</Link>
                </Menu.Item>
                <Menu.Item key="screen-users">
                  <Link to="/screenPeople"><Icon type="eye" />Screen Users</Link>
                </Menu.Item>

              </Menu>
            </div>
            <div className='menu-offset' ></div>
            <Route exact path="/" component={ Home }/>
            <Route path="/screenPeople" component={ CameraScreen }/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

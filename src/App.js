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

    return (
      <Provider {...stores} >
        <Router>
          <div className="App container">
            <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700" rel="stylesheet" />
            <div className='menu' >
              <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
                style={{ boxShadow: '0 6px 7px -7px #333' }}
              >
                <Menu.Item key="home">
                  <Link to="/"><Icon type="home" />LOGO</Link>
                </Menu.Item>
                <Menu.Item key="home">
                  <Link to="/"><Icon type="home" />Home</Link>
                </Menu.Item>
                <Menu.Item key="add-user">
                  <Link to="/"><Icon type="user" />Add User</Link>
                </Menu.Item>
                <Menu.Item key="screen-users">
                  <Link to="/"><Icon type="eye" />Screen Users</Link>
                </Menu.Item>

              </Menu>
            </div>
            <div className='menu-offset' ></div>
            <Route exact path="/" component={ Home }/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

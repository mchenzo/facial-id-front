import React, { Component } from 'react';
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import uiStore from './stores/uiStore';

const stores = { uiStore }



class App extends Component {
  render() {
    return (
      <Provider {...stores} >
        <Router>
          <div className="App">
            <Header />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

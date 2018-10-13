import React, { Component } from 'react';
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Content />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

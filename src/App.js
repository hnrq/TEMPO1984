import React, { Component } from 'react';
import './App.scss';
import NavBar from './components/NavigationBar';
import {BrowserRouter} from 'react-router-dom';
import Container from './components/Container';

class App extends Component {
  render() {
    return (
      < BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <NavBar/>
          <Container/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

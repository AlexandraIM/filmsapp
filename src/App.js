import React, { Component } from 'react';

import Header from './components/Header/Header';
import Films from './components/Films/Films';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header header="Some cool films"/>
        <Films/>
      </div>
    );
  }
}

export default App;

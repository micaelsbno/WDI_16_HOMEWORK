import React, { Component } from 'react';
import Header from './Header'
import Input from './Input'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Input />
      </div>
    );
  }
}

export default App;

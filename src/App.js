import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">我的第一个react项目</h1>
        </header>
        <p className="App-intro">
          可以在 <code>src/App.js</code> 中编辑。
        </p>
      </div>
    );
  }
}

export default App;

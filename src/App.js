import React, { Component } from 'react';
import { Button } from 'antd';
import './css/App.css';

var names = ['Alice', 'Emily', 'Kate'];
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>demo1</h1>
          {
            names.map((name)=> {
              return <div>Hello, {name}!</div>
            })
          }
          <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default App;
import { Button } from 'antd';
import 'antd/lib/button/style/css';
import * as React from 'react';
import './App.less';
import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button>进入主页</Button>
      </div>
    );
  }
}

export default App;

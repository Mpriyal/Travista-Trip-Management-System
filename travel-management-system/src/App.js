import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <div className="nav">
          <NavBar/>
        {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<h1 className="App-title">Welcome to React</h1>*/}
        {/*</header>*/}
          {/*<h1> Hellooooo </h1>*/}
        {/*<p className="App-intro">*/}
          {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
      </div>
    );
  }
}

export default App;

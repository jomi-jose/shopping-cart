import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import Shopping from './Container/Shopping';

export default class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Shopping />
      </div>
    );
  }
  
}


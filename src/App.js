import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import ShutTheBox from './Containers/ShutTheBox'

class App extends React.Component {

  componentDidMount(){
    document.title = "TJM - Games"    
  }  // ends component did

  render() {
  return (
    <div className="App">
      <Route path="/ShutTheBox" component={ShutTheBox} />
    </div>
  );
  } // closes Render
}

export default App;

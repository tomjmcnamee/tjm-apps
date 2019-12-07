import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import ShutTheBox from './Containers/ShutTheBox'
import Homepage from './Containers/homepage'
import TopMenuBar from './Containers/TopMenuBar'
import SignUp from './Components/Signup'
import LogIn from './Components/Login'


class App extends React.Component {

  componentDidMount(){
    document.title = "TJM - Games"    
  }  // ends component did

  render() {
  return (
    <div className="App">
      <TopMenuBar history={this.props.history} />
      <Route path='/LogIn' component={localStorage.token === undefined ? LogIn : null} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/ShutTheBox" component={ShutTheBox} />
      <Route exact path="/" component={ShutTheBox} />

    </div>
  );
  } // closes Render
}

export default App;

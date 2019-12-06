import React from 'react'
import { connect } from 'react-redux'
import { logUserIn, logOut, autoLogIn } from '../actions'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
// import 'semantic-ui-css/semantic.min.css'








class TopMenuBar extends React.Component {

  componentDidMount(){
    this.props.autoLogIn()
  }

  logOutHandler = () => {
    this.props.logOut(this.props.history)
  }
  
  redirectToRoute = (path) => {
    this.props.history.push(path)
  }
    

  render() {
    // Determine if Log In or Log Out button
    let topButton = ""
    let welcomeMessage = ""
    if ((localStorage.token === undefined || localStorage.token === "undefined" ) || (this.props.loggedInUserObj === undefined || this.props.loggedInUserObj.id === undefined)) {
      topButton =  <a href="/LogIn" > <button>Log In or Sign Up</button> </a>
      welcomeMessage = <h6>You are currently playing under the Guest account  {topButton}</h6>
   } else {
      topButton = <button onClick={this.logOutHandler}  >Log Out</button>
      welcomeMessage =  <h6 id="welcomeBackInHeader" >Welcome back, {this.props.loggedInUserObj.first_name}   {topButton} </h6>
   }


  
    return (
      <div>
        <div id="userNameAndbutton">
          {/* {this.props.loggedInUserObj === undefined || this.props.loggedInUserObj.id === undefined ? null : <h1 id="welcomeBackInHeader" >Welcome back, {this.props.loggedInUserObj.first_name} </h1>} */}
          {welcomeMessage}

        </div>
      </div>




  
  )} // ends Return and Render
} // ends class

function mdp(dispatch) {
  return { logUserIn: (path, accountCredentials, history) => dispatch(logUserIn(path, accountCredentials, history)),
    logOut: (arg1) => dispatch(logOut(arg1)),
    autoLogIn: () => dispatch(autoLogIn())}
}

// this comes from reduct.js - K is local reference, V is foreign state attribute
function msp(state) {
  return { loggedInUserObj: state.loggedInUserObj} 
}

export default connect(msp, mdp)(TopMenuBar) 
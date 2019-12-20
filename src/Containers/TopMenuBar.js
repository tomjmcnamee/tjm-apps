import React from 'react'
import { connect } from 'react-redux'
import { logOut, autoLogIn } from '../actions'
// import 'semantic-ui-css/semantic.min.css'

class TopMenuBar extends React.Component {

  componentDidMount(){
    this.props.autoLogIn()
  }

  logOutHandler = () => {
    this.props.logOut(this.props.history)
  }

  render() {
    // Determine if Log In or Log Out button
    let topButton = ""
    let welcomeMessage = ""
    if ((localStorage.token === undefined || localStorage.token === "undefined" ) || (this.props.loggedInUserObj === undefined || this.props.loggedInUserObj.id === undefined)) {
      topButton =  <a href="/LogIn" > <button>Log In or Sign Up</button> </a>
      welcomeMessage = <h6>You are currently using tomjmcnamee.com as a guest   {topButton}</h6>
    } else {
        topButton = <button onClick={this.logOutHandler}  >Log Out</button>
        welcomeMessage =  <h6 id="welcomeBackInHeader" >Welcome back, {this.props.loggedInUserObj.first_name}   {topButton} </h6>
    }  //  ends if/else statement re: token and loggedin user obj

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
  return { 
    logOut: (arg1) => dispatch(logOut(arg1)),
    autoLogIn: () => dispatch(autoLogIn())}
}

// this comes from reduct.js - K is local reference, V is foreign state attribute
function msp(state) {
  return { loggedInUserObj: state.loggedInUserObj} 
}

export default connect(msp, mdp)(TopMenuBar) 
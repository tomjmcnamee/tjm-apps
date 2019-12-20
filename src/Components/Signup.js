import React from 'react'
import { connect } from 'react-redux'
import { signUp } from '../actions'



class SignUp extends React.Component {

    state = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: ""
    }

    componentDidMount(){
      document.title = "TJM - Sign Up Form"
    }

    fieldChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    formSubmitHandler = (event) => {
        event.preventDefault()
        switch (true) {
        case (this.state.password !== this.state.confirm_password):
            alert("Your 'password' and 'password confirmation' fields dont match")
            break
        default:
            this.props.signUp(this.state, this.props.history)
        }
    }

    render () {
      return(
        <div name="PAGE DIV" id="SignUpPrimaryDiv" className="ui grid background">
          <div className="five wide column"  >
          </div>
          <div className="six wide column"  id="SignUpCenterDiv" >
            <form id="signupForm" onSubmit={(event) => this.formSubmitHandler(event)}>
              <h2>Sign Up For Your Account</h2>
              <h5>First Name: <input required type="text" name="first_name" label='First Name' value={this.state.first_name} onChange={this.fieldChangeHandler} /></h5>
              <h5>Last Name: <input  type="text" name="last_name" label='Last Name'  value={this.state.last_name} onChange={this.fieldChangeHandler}/></h5>
              <h5>Email Address: <input type="text" required name="email" fluid icon='user' iconPosition='left' label='E-mail address' placeholder="this is your login id"  value={this.state.email_address} onChange={this.fieldChangeHandler}/></h5>
              <h5>Password: <input required fluid icon='lock' type='password' iconPosition='left' placeholder='Password'label='Password' name="password"  value={this.state.password} onChange={this.fieldChangeHandler}  /></h5>
              <h5>Confirm Password: <input required fluid icon='lock' type='password' iconPosition='left' placeholder='Confirm Password' label='Confirm Password' name="confirm_password" value={this.state.confirm_password} onChange={this.fieldChangeHandler} /></h5>

              <button color='teal' fluid size='large' type="submit" >Sign Up!</button>
              <h3>
                Already have an account? <a href="/LogIn">Log In</a>
              </h3>
            </form>
          </div>
          <div className="five wide column"  >
          </div>
        </div>
      )
    }
}

function mdp(dispatch) {
  return { signUp: (stateObj, history) => dispatch(signUp(stateObj, history)) }
}

// this comes from reduct.js - K is local reference, V is foreign state attribute
function msp(state) {
}

export default connect(msp, mdp)(SignUp) 
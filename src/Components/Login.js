import React from 'react'
import { connect } from 'react-redux'
import { logUserIn } from '../actions'

class LogIn extends React.Component {

    state = {
        email: "",
        password: ""
    }

    componentDidMount(){
        document.title = "TJM - Log In"
        this.loggedIn()
    }
  
    loggedIn = () => localStorage.token === undefined ? null : this.props.history.push("/") 
        
    fieldChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    formSubmitHandler = (event) => {
        event.preventDefault()
        this.props.logUserIn(this.state, this.props.history)
    }
    

    render() {
        return(
            <div name="PAGE DIV" id="LogInPrimaryDiv" className="ui grid">
                <div className="five wide column"  >
                </div>
                <div className="six wide column"  id="LogInCenterDiv" >
                    <div id="LoginComponent">
                        <h2>Log In To Your Account</h2>
                            <form onSubmit={this.formSubmitHandler}>
                                <h5>Email Address: <input type="text" required name="email" fluid icon='user' iconPosition='left' label='E-mail address'  value={this.state.email_address} onChange={this.fieldChangeHandler}/></h5>
                                <h5>Password: <input required fluid icon='lock' type='password' iconPosition='left' name="password"  value={this.state.password} onChange={this.fieldChangeHandler}  /></h5>
                                <button color='teal' fluid size='large' type="submit" >Log In</button>
                            </form>
                            <h5>New to us? <a href="/SignUp">Sign Up</a></h5>
                            <br />
                        </div>
                    <div className="five wide column"  >
                    </div>
                </div>
            </div>
        )
    }
}

function mdp(dispatch) {
    return { logUserIn: (path, accountCredentials, history) => dispatch(logUserIn(path, accountCredentials, history)) }
  }
  
  // this comes from reduct.js - K is local reference, V is foreign state attribute
  function msp(state) {
  }
  
  export default connect(msp, mdp)(LogIn)



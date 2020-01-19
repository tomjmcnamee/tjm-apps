import React from 'react';
import CreateNumberTile from '../Components/stb-createNumberTile'
import { connect } from 'react-redux'
import { stb_commitLosingGameToHistory, stb_commitWinningGameToHistory } from '../actions'





class ShutTheBoxSimulator extends React.Component {
  state = {
    higherThanThisNumber: 0,
    innerOrOuter: "inner",
    numberOfRounds: 1
  }

  componentDidMount(){
    document.title = "TJM - STB Simulator" 
  }  // ends component did

  fieldChangeHandler = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}



render() {

  
    return(

      <div id="master-div">
        <h1>Shut The Box</h1>
        <form >
          <h4>How many games do you want to simulate?<input className="custom-range" type="range" name="numberOfRounds" min="1" max="1000000"  onChange={this.fieldChangeHandler} value={this.state.numberOfRounds}/> {this.state.numberOfRounds}</h4>
          <br />
          <h4>All roll sums above which number should prioritize flipping over 1 tile, as opposed to two tiles?<input className="custom-range" type="range" name="higherThanThisNumber" min="0" max="12"  onChange={this.fieldChangeHandler} value={this.state.higherThanThisNumber}/> {this.state.higherThanThisNumber}</h4>
          <br />
          <h4>When flipping over 2 tiles, should the priority be to flip the INNER pair or to flip the OUTER pair?<br/>For example, if the roll is 5, the Inner pair is 2&3, the Outer pair is 1&4</h4>
            <label>
              <input type="radio" value="inner" name="innerOrOuter" checked={this.state.innerOrOuter === "inner" } onChange={this.fieldChangeHandler}/>
                Inner
            </label>
            <span />
            <label>
              <input type="radio" value="outer" name="innerOrOuter" checked={this.state.innerOrOuter === "outer" } onChange={this.fieldChangeHandler}/>
                Outer
            </label>
          <br />
        </form>
      </div> // closes parent div
    ) // closes RETURN
  } //closes RENDER


}  // closes APP
function mdp(dispatch) { 
  return { 
    stb_runSimulationWithVariables: (a, b, c,die1, die2) => dispatch(stb_commitLosingGameToHistory(a, b, c, die1, die2)),
  }
}

function msp(state) { return { 
  loggedInUserObj: state.loggedInUserObj,
  stb_gameDiceRolls: state.stb_gameDiceRolls,
  stb_gameRollSums: state.stb_gameRollSums,
}}

export default connect(msp, mdp)(ShutTheBoxSimulator)

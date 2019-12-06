import React from 'react';
import { connect } from 'react-redux'
import { stb_RollSum, stb_DiceRoll } from '../actions'
import { Tabs, Tab } from 'react-bootstrap'
import D1small from '../images/D1small.png'
import D2small from '../images/D2small.png'
import D3small from '../images/D3small.png'
import D4small from '../images/D4small.png'
import D5small from '../images/D5small.png'
import D6small from '../images/D6small.png'


class RollStats extends React.Component {

state = {
  defaultTab: "thisgame",
  selectedTab: "thisgame",
  statsView: "showDiceRolls"
}

selectTab = (event) => {
  this.setState({
    selectedTab: event
  })
}

changeRadio = (event) => {
  this.setState({
    statsView: event.target.name
  })
} // ends changeRadio listener
  
 


render() {
    return(
<div>
  <div class="custom-control custom-radio custom-control-inline">
    <input type="radio" class="custom-control-input" id="defaultInline1" name="showDiceRolls" checked={this.state.statsView === "showDiceRolls"} onChange={this.changeRadio}/>
    <label class="custom-control-label" for="defaultInline1">Show Dice Rolls</label>
  </div>
  <span>  </span>
  <div class="custom-control custom-radio custom-control-inline">
    <input type="radio" class="custom-control-input" id="defaultInline2" name="showRollSums" name="showRollSums" checked={this.state.statsView === "showRollSums"} onChange={this.changeRadio} />
    <label class="custom-control-label" for="defaultInline2">Show Roll Sums</label>
  </div>


<Tabs defaultActiveKey={this.state.defaultTab} id="uncontrolled-tab-example" onSelect={this.selectTab}>
  <Tab eventKey="thisgame" title="This Game" >
  <h4>Roll Statistics</h4>
    {this.props.totalRolls == 0 
      ? 
        this.state.statsView === "showDiceRolls"
        ?
        <div>
          <p><img src={D1small} />: 0.00%<br />
          <img src={D2small} />: 0.00%<br />
          <img src={D3small} />: 0.00%<br />
          <img src={D4small} />: 0.00%<br />
          <img src={D5small} />: 0.00%<br />
          <img src={D6small} />: 0.00%</p>
        </div>
        :
        <div>
          <p><img src={D1small} /><img src={D1small} />: 0.00%<br />
          <img src={D2small} /><img src={D1small} />: 0.00%<br />
          <img src={D2small} /><img src={D2small} />: 0.00%<br />
          <img src={D3small} /><img src={D2small} />: 0.00%<br />
          <img src={D3small} /><img src={D3small} />: 0.00%<br />
          <img src={D4small} /><img src={D3small} />: 0.00%<br />
          <img src={D4small} /><img src={D4small} />: 0.00%<br />
          <img src={D5small} /><img src={D4small} />: 0.00%<br />
          <img src={D5small} /><img src={D5small} />: 0.00%<br />
          <img src={D6small} /><img src={D5small} />: 0.00%<br />
          <img src={D6small} /><img src={D6small} />: 0.00%</p>
        </div>
      :
        this.state.statsView === "showDiceRolls"
          ?
            <div>
              <p><img src={D1small} />: {(this.props.stb_gameDiceRolls.one/(this.props.totalRolls*2)*100).toFixed(2)}%<br />
              <img src={D2small} />: {(this.props.stb_gameDiceRolls.two/(this.props.totalRolls*2)*100).toFixed(2)}%<br />
              <img src={D3small} />: {(this.props.stb_gameDiceRolls.three/(this.props.totalRolls*2)*100).toFixed(2)}%<br />
              <img src={D4small} />: {(this.props.stb_gameDiceRolls.four/(this.props.totalRolls*2)*100).toFixed(2)}%<br />
              <img src={D5small} />: {(this.props.stb_gameDiceRolls.five/(this.props.totalRolls*2)*100).toFixed(2)}%<br />
              <img src={D6small} />: {(this.props.stb_gameDiceRolls.six/(this.props.totalRolls*2)*100).toFixed(2)}%</p>
            </div>
          :
            <div>
              <p><img src={D1small} /><img src={D1small} />: {(this.props.stb_gameRollSums.two/(this.props.totalRolls)*100).toFixed(2)}%<br />
              <img src={D2small} /><img src={D1small} />: {(this.props.stb_gameRollSums.three/(this.props.totalRolls)*100).toFixed(2)}%<br />
              <img src={D2small} /><img src={D2small} />: {(this.props.stb_gameRollSums.four/(this.props.totalRolls)*100).toFixed(2)}%<br />
              <img src={D3small} /><img src={D2small} />: {(this.props.stb_gameRollSums.five/(this.props.totalRolls)*100).toFixed(2)}%<br />
              <img src={D3small} /><img src={D3small} />: {(this.props.stb_gameRollSums.six/(this.props.totalRolls)*100).toFixed(2)}%<br />
              <img src={D4small} /><img src={D3small} />: {(this.props.stb_gameRollSums.seven/(this.props.totalRolls)*100).toFixed(2)}%<br />
              <img src={D4small} /><img src={D4small} />: {(this.props.stb_gameRollSums.eight/(this.props.totalRolls)*100).toFixed(2)}%<br />
              <img src={D5small} /><img src={D4small} />: {(this.props.stb_gameRollSums.nine/(this.props.totalRolls)*100).toFixed(2)}%<br />
              <img src={D5small} /><img src={D5small} />: {(this.props.stb_gameRollSums.ten/(this.props.totalRolls)*100).toFixed(2)}%<br />
              <img src={D6small} /><img src={D5small} />: {(this.props.stb_gameRollSums.eleven/(this.props.totalRolls)*100).toFixed(2)}%<br />
              <img src={D6small} /><img src={D6small} />: {(this.props.stb_gameRollSums.twelve/(this.props.totalRolls)*100).toFixed(2)}%</p>
            </div>
    }
    <p>Total Rolls {this.props.totalRolls}</p>
  </Tab>
  <Tab eventKey="thissession" title="This Session">

    <h1> hi </h1>
  </Tab>
  <Tab eventKey="yourgames" title={this.props.loggedInUserObj.id == 1 ? "All Guest Games" : "Your Games"}>
    <h1> hi </h1>
  </Tab>
  <Tab eventKey="allgames" title="All Games">
    <h1> hi </h1>
  </Tab>
</Tabs>
          
      </div> // closes parent div
    ) // closes RETURN
  } //closes RENDER
}  // closes RollStats



function mdp(dispatch) { 
  return { 
    stb_RollSum: (rollSum, gameRollSum, userRollSum, allRollSum) => dispatch(stb_RollSum(rollSum, gameRollSum, userRollSum, allRollSum)),
    stb_DiceRoll: (die1, die2, gameDiceRolls, userDiceRolls, allDiceRolls) => dispatch(stb_DiceRoll(die1, die2, gameDiceRolls, userDiceRolls, allDiceRolls))
  }
}

{/* // this comes from reduct.js - K is local reference, V is foreign state attribute */}
function msp(state) { return { 
  loggedInUserObj: state.loggedInUserObj,
  stb_RollSum: state.stb_RollSum,
  stb_gameDiceRolls: state.stb_gameDiceRolls,
  stb_gameRollSums: state.stb_gameRollSums,
  stb_userDiceRolls: state.stb_userDiceRolls,
  stb_userRollSums: state.stb_userRollSums,
  stb_allDiceRolls: state.stb_allDiceRolls,
  stb_allRollSums: state.stb_allRollSums
}}

export default connect(msp, mdp)(RollStats)

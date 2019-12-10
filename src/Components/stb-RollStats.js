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
  selectedTab: "thissession",
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
<div >
  <div className="custom-control custom-radio custom-control-inline">
    <input type="radio" className="custom-control-input" id="showDiceRolls" name="showDiceRolls" checked={this.state.statsView === "showDiceRolls"} onChange={this.changeRadio}/>
    <label className="custom-control-label" htmlFor="showDiceRolls">Show Dice Rolls</label>
  </div>
  <span>  </span>
  <div className="custom-control custom-radio custom-control-inline">
    <input type="radio" className="custom-control-input" id="showRollSums" name="showRollSums" checked={this.state.statsView === "showRollSums"} onChange={this.changeRadio} />
    <label className="custom-control-label" for="showRollSums">Show Roll Sums</label>
  </div>


<Tabs id="uncontrolled-tab-example" onSelect={this.selectTab}>
  <Tab eventKey="thissession" title="This Session" >
  <h4>Session Roll Statistics</h4>
    {this.props.stb_sessionRollSums.totalRolls === 0 
      ? 
        this.state.statsView === "showDiceRolls"
        ?
        <div className="StatSingleDiceContainer">
          <p><img src={D1small} alt="1" />: 0.00%<br />
          <img src={D2small} alt="2" />: 0.00%<br />
          <img src={D3small} alt="3" />: 0.00%<br />
          <img src={D4small} alt="4" />: 0.00%<br />
          <img src={D5small} alt="5" />: 0.00%<br />
          <img src={D6small} alt="6" />: 0.00%</p>
        </div>
        :
        <div className="row">
          <div className="col StatDoubleDiceContainer">
            <p><img src={D1small} alt="1" /><img src={D1small} alt="1" />: 0.00%<br />
            <img src={D2small} alt="2" /><img src={D1small} alt="1" />: 0.00%<br />
            <img src={D2small} alt="2" /><img src={D2small} alt="2" />: 0.00%<br />
            <img src={D3small} alt="3" /><img src={D2small} alt="2" />: 0.00%<br />
            <img src={D3small} alt="3" /><img src={D3small}  alt="3" />: 0.00%<br />
            <img src={D4small}  alt="4" /><img src={D3small}  alt="3" />: 0.00%</p>
          </div>
          <div className="col StatDoubleDiceContainer">
            <p><img src={D4small}   alt="3"/><img src={D4small} alt="4" />: 0.00%<br />
            <img src={D5small}  alt="5" /><img src={D4small}  alt="4" />: 0.00%<br />
            <img src={D5small}  alt="5" /><img src={D5small}  alt="5" />: 0.00%<br />
            <img src={D6small} alt="6" /><img src={D5small}  alt="5" />: 0.00%<br />
            <img src={D6small} alt="6" /><img src={D6small} alt="6" />: 0.00%</p>
          </div>
        </div>
      :
        this.state.statsView === "showDiceRolls"
          ?
            <div  className="StatSingleDiceContainer">
              <p><img src={D1small}  alt="1"/>: {(this.props.stb_sessionDiceRolls.one/(this.props.stb_sessionRollSums.totalRolls*2)*100).toFixed(2)}%<br />
              <img src={D2small}  alt="2"/>: {(this.props.stb_sessionDiceRolls.two/(this.props.stb_sessionRollSums.totalRolls*2)*100).toFixed(2)}%<br />
              <img src={D3small}  alt="3"/>: {(this.props.stb_sessionDiceRolls.three/(this.props.stb_sessionRollSums.totalRolls*2)*100).toFixed(2)}%<br />
              <img src={D4small}  alt="4"/>: {(this.props.stb_sessionDiceRolls.four/(this.props.stb_sessionRollSums.totalRolls*2)*100).toFixed(2)}%<br />
              <img src={D5small}  alt="5"/>: {(this.props.stb_sessionDiceRolls.five/(this.props.stb_sessionRollSums.totalRolls*2)*100).toFixed(2)}%<br />
              <img src={D6small}  alt="6" />: {(this.props.stb_sessionDiceRolls.six/(this.props.stb_sessionRollSums.totalRolls*2)*100).toFixed(2)}%</p>
            </div>
          :
            <div className="row">
              <div className="col StatDoubleDiceContainer">
                <p><img src={D1small}  alt="1"/><img src={D1small}  alt="1"/>: {(this.props.stb_sessionRollSums.two/(this.props.stb_sessionRollSums.totalRolls)*100).toFixed(2)}%<br />
                <img src={D2small}  alt="2"/><img src={D1small}  alt="1"/>: {(this.props.stb_sessionRollSums.three/(this.props.stb_sessionRollSums.totalRolls)*100).toFixed(2)}%<br />
                <img src={D2small}  alt="2"/><img src={D2small} alt="2" />: {(this.props.stb_sessionRollSums.four/(this.props.stb_sessionRollSums.totalRolls)*100).toFixed(2)}%<br />
                <img src={D3small}  alt="3"/><img src={D2small}  alt="2"/>: {(this.props.stb_sessionRollSums.five/(this.props.stb_sessionRollSums.totalRolls)*100).toFixed(2)}%<br />
                <img src={D3small}  alt="3"/><img src={D3small}  alt="3"/>: {(this.props.stb_sessionRollSums.six/(this.props.stb_sessionRollSums.totalRolls)*100).toFixed(2)}%<br />
                <img src={D4small}  alt="4"/><img src={D3small} alt="3" />: {(this.props.stb_sessionRollSums.seven/(this.props.stb_sessionRollSums.totalRolls)*100).toFixed(2)}%</p>
              </div>
              <div className="col StatDoubleDiceContainer">
                <p><img src={D4small} alt="4" /><img src={D4small} alt="4" />: {(this.props.stb_sessionRollSums.eight/(this.props.stb_sessionRollSums.totalRolls)*100).toFixed(2)}%<br />
                <img src={D5small} alt="5" /><img src={D4small} alt="4" />: {(this.props.stb_sessionRollSums.nine/(this.props.stb_sessionRollSums.totalRolls)*100).toFixed(2)}%<br />
                <img src={D5small} alt="5" /><img src={D5small} alt="5" />: {(this.props.stb_sessionRollSums.ten/(this.props.stb_sessionRollSums.totalRolls)*100).toFixed(2)}%<br />
                <img src={D6small} alt="6" /><img src={D5small}  alt="5"/>: {(this.props.stb_sessionRollSums.eleven/(this.props.stb_sessionRollSums.totalRolls)*100).toFixed(2)}%<br />
                <img src={D6small} alt="6" /><img src={D6small} alt="6" />: {(this.props.stb_sessionRollSums.twelve/(this.props.stb_sessionRollSums.totalRolls)*100).toFixed(2)}%</p>
              </div>
            </div>
    }
    <p>Total Rolls: {this.props.stb_sessionRollSums.totalRolls}</p>
  </Tab>
  <Tab eventKey="yourgames" title={this.props.loggedInUserObj.id === 1 ? "All Guest Games" : "Your Games"}>
    <h4>{this.props.loggedInUserObj.id === 1 ? "All Guest Games Statistics" : "Your Games Statistics"}</h4>
      {this.props.stb_userRollSums.totalRolls === 0 
        ? 
          this.state.statsView === "showDiceRolls"
          ?
          <div className="StatSingleDiceContainer">
            <p><img src={D1small} alt="1" />: 0.00%<br />
            <img src={D2small} alt="2" />: 0.00%<br />
            <img src={D3small} alt="3" />: 0.00%<br />
            <img src={D4small} alt="4" />: 0.00%<br />
            <img src={D5small} alt="5" />: 0.00%<br />
            <img src={D6small} alt="6" />: 0.00%</p>
          </div>
          :
          <div className="row">
            <div className="col StatDoubleDiceContainer">
              <p><img src={D1small} alt="" /><img src={D1small} alt=""  />: 0.00%<br />
              <img src={D2small}  alt="" /><img src={D1small}  alt="" />: 0.00%<br />
              <img src={D2small}  alt="" /><img src={D2small}  alt="" />: 0.00%<br />
              <img src={D3small}  alt="" /><img src={D2small}  alt="" />: 0.00%<br />
              <img src={D3small}  alt="" /><img src={D3small}  alt="" />: 0.00%<br />
              <img src={D4small}  alt="" /><img src={D3small}  alt="" />: 0.00%</p>
            </div>
            <div className="col StatDoubleDiceContainer">
              <p><img src={D4small}  alt="" /><img src={D4small}  alt="" />: 0.00%<br />
              <img src={D5small}  alt="" /><img src={D4small}  alt="" />: 0.00%<br />
              <img src={D5small}  alt="" /><img src={D5small}  alt="" />: 0.00%<br />
              <img src={D6small}  alt="" /><img src={D5small}  alt="" />: 0.00%<br />
              <img src={D6small}  alt="" /><img src={D6small}  alt="" />: 0.00%</p>
            </div>
          </div>
        :
          this.state.statsView === "showDiceRolls"
            ?
              <div className="StatSingleDiceContainer">
                <p><img src={D1small}  alt="" />: {(this.props.stb_userDiceRolls.one/(this.props.stb_userRollSums.totalRolls*2)*100).toFixed(2)}%<br />
                <img src={D2small}  alt="" />: {(this.props.stb_userDiceRolls.two/(this.props.stb_userRollSums.totalRolls*2)*100).toFixed(2)}%<br />
                <img src={D3small}  alt="" />: {(this.props.stb_userDiceRolls.three/(this.props.stb_userRollSums.totalRolls*2)*100).toFixed(2)}%<br />
                <img src={D4small}  alt="" />: {(this.props.stb_userDiceRolls.four/(this.props.stb_userRollSums.totalRolls*2)*100).toFixed(2)}%<br />
                <img src={D5small}  alt="" />: {(this.props.stb_userDiceRolls.five/(this.props.stb_userRollSums.totalRolls*2)*100).toFixed(2)}%<br />
                <img src={D6small}  alt="" />: {(this.props.stb_userDiceRolls.six/(this.props.stb_userRollSums.totalRolls*2)*100).toFixed(2)}%</p>
              </div>
            :
              <div className="row">
                <div className="col StatDoubleDiceContainer"> 
                  <p><img src={D1small}  alt="" /><img src={D1small}  alt="" />: {(this.props.stb_userRollSums.two/(this.props.stb_userRollSums.totalRolls)*100).toFixed(2)}%<br />
                  <img src={D2small}  alt="" /><img src={D1small}  alt="" />: {(this.props.stb_userRollSums.three/(this.props.stb_userRollSums.totalRolls)*100).toFixed(2)}%<br />
                  <img src={D2small}  alt="" /><img src={D2small}  alt="" />: {(this.props.stb_userRollSums.four/(this.props.stb_userRollSums.totalRolls)*100).toFixed(2)}%<br />
                  <img src={D3small}  alt="" /><img src={D2small}  alt="" />: {(this.props.stb_userRollSums.five/(this.props.stb_userRollSums.totalRolls)*100).toFixed(2)}%<br />
                  <img src={D3small}  alt="" /><img src={D3small}  alt="" />: {(this.props.stb_userRollSums.six/(this.props.stb_userRollSums.totalRolls)*100).toFixed(2)}%<br />
                  <img src={D4small}  alt="" /><img src={D3small}  alt="" />: {(this.props.stb_userRollSums.seven/(this.props.stb_userRollSums.totalRolls)*100).toFixed(2)}%</p>
                </div>
                <div className="col StatDoubleDiceContainer"> 
                  <p><img src={D4small}  alt="" /><img src={D4small}  alt="" />: {(this.props.stb_userRollSums.eight/(this.props.stb_userRollSums.totalRolls)*100).toFixed(2)}%<br />
                  <img src={D5small}  alt="" /><img src={D4small}  alt="" />: {(this.props.stb_userRollSums.nine/(this.props.stb_userRollSums.totalRolls)*100).toFixed(2)}%<br />
                  <img src={D5small}  alt="" /><img src={D5small}  alt="" />: {(this.props.stb_userRollSums.ten/(this.props.stb_userRollSums.totalRolls)*100).toFixed(2)}%<br />
                  <img src={D6small}  alt="" /><img src={D5small}  alt="" />: {(this.props.stb_userRollSums.eleven/(this.props.stb_userRollSums.totalRolls)*100).toFixed(2)}%<br />
                  <img src={D6small}  alt="" /><img src={D6small}  alt="" />: {(this.props.stb_userRollSums.twelve/(this.props.stb_userRollSums.totalRolls)*100).toFixed(2)}%</p>
                </div>
              </div>
      }
    <p>Total Rolls: {this.props.stb_userRollSums.totalRolls}</p>
  </Tab>
  <Tab eventKey="allgames" title="All Games">
  <h4>Stats for All Games from All Users</h4>
      {this.props.stb_allRollSums.totalRolls === 0 
        ? 
          this.state.statsView === "showDiceRolls"
          ?
          <div className="StatSingleDiceContainer">
            <p><img src={D1small} alt="" />: 0.00%<br />
            <img src={D2small} alt="" />: 0.00%<br />
            <img src={D3small} alt="" />: 0.00%<br />
            <img src={D4small} alt="" />: 0.00%<br />
            <img src={D5small} alt="" />: 0.00%<br />
            <img src={D6small} alt="" />: 0.00%</p>
          </div>
          :
          <div className="row">
            <div className="col StatDoubleDiceContainer">
              <p><img src={D1small} alt="" /><img src={D1small} alt="" />: 0.00%<br />
              <img src={D2small} alt="" /><img src={D1small} alt="" />: 0.00%<br />
              <img src={D2small} alt="" /><img src={D2small} alt="" />: 0.00%<br />
              <img src={D3small} alt="" /><img src={D2small} alt="" />: 0.00%<br />
              <img src={D3small} alt="" /><img src={D3small} alt="" />: 0.00%<br />
              <img src={D4small} alt="" /><img src={D3small} alt="" />: 0.00%</p>
            </div>
            <div className="col StatDoubleDiceContainer">
              <p><img src={D4small} alt="" /><img src={D4small} alt="" />: 0.00%<br />
              <img src={D5small} alt="" /><img src={D4small} alt="" />: 0.00%<br />
              <img src={D5small} alt="" /><img src={D5small} alt="" />: 0.00%<br />
              <img src={D6small} alt="" /><img src={D5small} alt="" />: 0.00%<br />
              <img src={D6small} alt="" /><img src={D6small} alt="" />: 0.00%</p>
            </div>
          </div>
        :
          this.state.statsView === "showDiceRolls"
            ?
              <div className="StatSingleDiceContainer"> 
                <p><img src={D1small} alt="" />: {(this.props.stb_allDiceRolls.one/(this.props.stb_allRollSums.totalRolls*2)*100).toFixed(2)}%<br />
                <img src={D2small} alt="" />: {(this.props.stb_allDiceRolls.two/(this.props.stb_allRollSums.totalRolls*2)*100).toFixed(2)}%<br />
                <img src={D3small} alt="" />: {(this.props.stb_allDiceRolls.three/(this.props.stb_allRollSums.totalRolls*2)*100).toFixed(2)}%<br />
                <img src={D4small} alt="" />: {(this.props.stb_allDiceRolls.four/(this.props.stb_allRollSums.totalRolls*2)*100).toFixed(2)}%<br />
                <img src={D5small} alt="" />: {(this.props.stb_allDiceRolls.five/(this.props.stb_allRollSums.totalRolls*2)*100).toFixed(2)}%<br />
                <img src={D6small} alt="" />: {(this.props.stb_allDiceRolls.six/(this.props.stb_allRollSums.totalRolls*2)*100).toFixed(2)}%</p>
              </div>
            :
              <div className="row">
                <div className="col StatDoubleDiceContainer"> 
                  <p><img src={D1small} alt="" /><img src={D1small} alt="" />: {(this.props.stb_allRollSums.two/(this.props.stb_allRollSums.totalRolls)*100).toFixed(2)}%<br />
                  <img src={D2small} alt="" /><img src={D1small} alt="" />: {(this.props.stb_allRollSums.three/(this.props.stb_allRollSums.totalRolls)*100).toFixed(2)}%<br />
                  <img src={D2small} alt="" /><img src={D2small} alt="" />: {(this.props.stb_allRollSums.four/(this.props.stb_allRollSums.totalRolls)*100).toFixed(2)}%<br />
                  <img src={D3small} alt="" /><img src={D2small} alt="" />: {(this.props.stb_allRollSums.five/(this.props.stb_allRollSums.totalRolls)*100).toFixed(2)}%<br />
                  <img src={D3small} alt="" /><img src={D3small} alt="" />: {(this.props.stb_allRollSums.six/(this.props.stb_allRollSums.totalRolls)*100).toFixed(2)}%<br />
                  <img src={D4small} alt="" /><img src={D3small} alt="" />: {(this.props.stb_allRollSums.seven/(this.props.stb_allRollSums.totalRolls)*100).toFixed(2)}%</p>
                </div>
                <div className="col StatDoubleDiceContainer">
                  <p><img src={D4small} alt="" /><img src={D4small} alt="" />: {(this.props.stb_allRollSums.eight/(this.props.stb_allRollSums.totalRolls)*100).toFixed(2)}%<br />
                  <img src={D5small} alt="" /><img src={D4small} alt="" />: {(this.props.stb_allRollSums.nine/(this.props.stb_allRollSums.totalRolls)*100).toFixed(2)}%<br />
                  <img src={D5small} alt="" /><img src={D5small} alt="" />: {(this.props.stb_allRollSums.ten/(this.props.stb_allRollSums.totalRolls)*100).toFixed(2)}%<br />
                  <img src={D6small} alt="" /><img src={D5small} alt="" />: {(this.props.stb_allRollSums.eleven/(this.props.stb_allRollSums.totalRolls)*100).toFixed(2)}%<br />
                  <img src={D6small} alt="" /><img src={D6small} alt="" />: {(this.props.stb_allRollSums.twelve/(this.props.stb_allRollSums.totalRolls)*100).toFixed(2)}%</p>
                </div>
              </div>
      }
    <p>Total Rolls: {this.props.stb_allRollSums.totalRolls}</p>
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

function msp(state) { return { 
  loggedInUserObj: state.loggedInUserObj,
  stb_RollSum: state.stb_RollSum,
  stb_gameDiceRolls: state.stb_gameDiceRolls,
  stb_gameRollSums: state.stb_gameRollSums,
  stb_sessionDiceRolls: state.stb_sessionDiceRolls,
  stb_sessionRollSums: state.stb_sessionRollSums,
  stb_userDiceRolls: state.stb_userDiceRolls,
  stb_userRollSums: state.stb_userRollSums,
  stb_allDiceRolls: state.stb_allDiceRolls,
  stb_allRollSums: state.stb_allRollSums
}}

export default connect(msp, mdp)(RollStats)

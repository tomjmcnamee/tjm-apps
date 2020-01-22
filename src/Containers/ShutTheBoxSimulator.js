import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { stb_runSimulationWithVariables, stb_setSimulationHistory } from '../actions'
import  GridBuilder  from '../Components/GridBuilder'

class ShutTheBoxSimulator extends React.Component {
  state = {
    numberOfGames: 250000,
    higherThanThisNumber: 7,
    innerOrOuter: "outer"
  }

  componentDidMount(){
    document.title = "TJM - STB Simulator" 
    this.props.stb_setSimulationHistory()
  }  // ends component did

  fieldChangeHandler = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

  submitHandler = (event) => {
    event.preventDefault()
    let startTime =  + new Date()
    
    // console.log(event.target)
    this.props.stb_runSimulationWithVariables(this.state.numberOfGames, this.state.higherThanThisNumber, this.state.innerOrOuter, startTime)
  }


render() {

  let simulationRoundResultsGrid
  simulationRoundResultsGrid = <GridBuilder 
                      gridType="simulationRoundResults"
                      gridLinesHash={this.props.stb_simulatorRound}
                      />

  let simulationResultsHistoryGrid
  if (this.props.stb_simulatorHistory.length > 0) {
    simulationResultsHistoryGrid = <GridBuilder 
                        gridType="simulationResultsHistoryGrid"
                        gridLinesArr={this.props.stb_simulatorHistory}
                        />

  }


    return(

      <div id="master-div">
        <h1>Shut The Box Simulator</h1>
        <div className="row">
          <div className="col">
            <h2>Simulation Options</h2>
            <form onSubmit={this.submitHandler}>
              <h4>How many games do you want to simulate?<input className="custom-range" type="range" name="numberOfGames" min="1" max="500000"  onChange={this.fieldChangeHandler} value={this.state.numberOfGames}/>{parseInt(this.state.numberOfGames, 10).toLocaleString()}</h4>
              <br />
              <h4>At what RollSum number should the priority be flipping over a single tile?<input className="custom-range" type="range" name="higherThanThisNumber" min="1" max="12"  onChange={this.fieldChangeHandler} value={this.state.higherThanThisNumber}/> {this.state.higherThanThisNumber}</h4>
              <br />
              <h4>When flipping over 2 tiles, should the priority be to flip the INNER pair or to flip the OUTER pair?<br/>For example, if the roll is 5, the Inner pair is 2&3, the Outer pair is 1&4</h4>
                <label>
                  <input type="radio" value="outer" name="innerOrOuter" checked={this.state.innerOrOuter === "outer" } onChange={this.fieldChangeHandler}/>
                    Outer
                </label>
                <label>
                  <input type="radio" value="inner" name="innerOrOuter" checked={this.state.innerOrOuter === "inner" } onChange={this.fieldChangeHandler}/>
                    Inner
                </label>
                <span />
              <br />
              <button tpye="submit" >Run Simulator</button>
              <Link to="/shutthebox">
                  <button type="button">
                        Go Back to the Game
                  </button>
                </Link>
            </form>
          </div>
          <div className="col">
            <h2>Simulation Results</h2>
            {simulationRoundResultsGrid}
          </div>
        </div>
        <div>
          <h2>Simulation Results History</h2>
          {simulationResultsHistoryGrid}
        </div>
      </div> // closes parent div
    ) // closes RETURN
  } //closes RENDER


}  // closes APP
function mdp(dispatch) { 
  return { 
    stb_runSimulationWithVariables: (numberOfGames, higherThanThisNumber, innerOrOuter, startTime) => dispatch(stb_runSimulationWithVariables(numberOfGames, higherThanThisNumber, innerOrOuter, startTime)),
    stb_setSimulationHistory: () => dispatch(stb_setSimulationHistory())
  }
}

function msp(state) { return { 
  loggedInUserObj: state.loggedInUserObj,
  stb_simulatorRound: state.stb_simulatorRound,
  stb_simulatorHistory: state.stb_simulatorHistory,
}}

export default connect(msp, mdp)(ShutTheBoxSimulator)

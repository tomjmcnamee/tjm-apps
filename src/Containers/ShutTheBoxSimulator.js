import React from 'react';
import { connect } from 'react-redux'
import { stb_runSimulationWithVariables } from '../actions'
import  GridBuilder  from '../Components/GridBuilder'

class ShutTheBoxSimulator extends React.Component {
  state = {
    numberOfGames: 500000,
    higherThanThisNumber: 7,
    innerOrOuter: "inner"
  }

  componentDidMount(){
    document.title = "TJM - STB Simulator" 
  }  // ends component did

  fieldChangeHandler = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

  submitHandler = (event) => {
    event.preventDefault()
    
    // console.log(event.target)
    this.props.stb_runSimulationWithVariables(this.state.numberOfGames, this.state.higherThanThisNumber, this.state.innerOrOuter)
  }


render() {

  let simulationRoundResultsGrid
  simulationRoundResultsGrid = <GridBuilder 
                      gridType="simulationRoundResults"
                      gridLinesHash={this.props.stb_simulatorRound}
                      />


  
    return(

      <div id="master-div">
        <h1>Shut The Box</h1>
        <form onSubmit={this.submitHandler}>
          <h4>How many games do you want to simulate?<input className="custom-range" type="range" name="numberOfGames" min="1" max="1000000"  onChange={this.fieldChangeHandler} value={this.state.numberOfGames}/> {this.state.numberOfGames}</h4>
          <br />
          <h4>At what RollSum number should the priority be to flipping over a single tile?<input className="custom-range" type="range" name="higherThanThisNumber" min="1" max="12"  onChange={this.fieldChangeHandler} value={this.state.higherThanThisNumber}/> {this.state.higherThanThisNumber}</h4>
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
          <button tpye="submit" >Run Simulator</button>
        </form>
        {simulationRoundResultsGrid}
      </div> // closes parent div
    ) // closes RETURN
  } //closes RENDER


}  // closes APP
function mdp(dispatch) { 
  return { 
    stb_runSimulationWithVariables: (numberOfGames, higherThanThisNumber, innerOrOuter) => dispatch(stb_runSimulationWithVariables(numberOfGames, higherThanThisNumber, innerOrOuter)),
    
  }
}

function msp(state) { return { 
  loggedInUserObj: state.loggedInUserObj,
  stb_simulatorRound: state.stb_simulatorRound,
}}

export default connect(msp, mdp)(ShutTheBoxSimulator)

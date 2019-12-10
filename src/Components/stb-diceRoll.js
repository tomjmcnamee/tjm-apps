import React from 'react';
import { connect } from 'react-redux'
import Randomizer from 'react-randomizer'
import { stb_RollSum, stb_DiceRoll } from '../actions'
import RollStats from './stb-RollStats'
import D0 from '../images/D0.png'
import D1 from '../images/D1.png'
import D2 from '../images/D2.png'
import D3 from '../images/D3.png'
import D4 from '../images/D4.png'
import D5 from '../images/D5.png'
import D6 from '../images/D6.png'


class DiceRoll extends React.Component {
  state = {
    die1: 0,
    die2: 0,
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    totalRolls: 0
  }


  // componentWillReceiveProps( { keydown } ) {
  //   if ( keydown ) {
  //     // inspect the keydown event and decide what to do
  //     console.log( keydown.which );
  //   }
  // }

  
  rollDiceClickHandler = () => {
    let tempdie1 = Randomizer.randomNumber(1,6)
  let tempdie2 = Randomizer.randomNumber(1,6)
  
  
  let tempone = this.state.one
  let temptwo = this.state.two
  let tempthree = this.state.three
  let tempfour = this.state.four
  let tempfive = this.state.five
  let tempsix = this.state.six
  let tempTotalRolls = this.state.totalRolls
  
  switch (tempdie1) {
    case 1:
      ++tempone
      break;
    case 2:
      ++temptwo
      break;
    case 3:
      ++tempthree
      break;
    case 4:
      ++tempfour
      break;
    case 5:
      ++tempfive
      break;
    case 6:
      ++tempsix
      break;
    default: ;
    }
    
    switch (tempdie2) {
      case 1:
        ++tempone
        break;
      case 2:
        ++temptwo
        break;
      case 3:
        ++tempthree
        break;
      case 4:
        ++tempfour
        break;
      case 5:
        ++tempfive
        break;
      case 6:
        ++tempsix
        break;
      default: ;
        }
        tempTotalRolls = this.state.totalRolls + 1
        
        this.setState({
          die1: tempdie1,
          die2: tempdie2,
          one: tempone,
          two: temptwo,
          three: tempthree,
    four: tempfour,
    five: tempfive,
    six: tempsix,
    totalRolls: tempTotalRolls
  })
  this.props.stb_DiceRoll(tempdie1, tempdie2, this.props.stb_gameDiceRolls, this.props.stb_sessionDiceRolls, this.props.stb_userDiceRolls, this.props.stb_allDiceRolls)
  this.props.stb_RollSum(tempdie1 + tempdie2, this.props.stb_gameRollSums, this.props.stb_sessionRollSums, this.props.stb_userRollSums, this.props.stb_allRollSums)
  this.props.rollHandler(tempdie1, tempdie2)
}

newGameClickHandler = () => {
  this.setState({
    die1: 0,
    die2: 0,
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    totalRolls: 0
  })
  this.props.newGameHandler()
}

//--- THESE NEXT 3 METHODS ARE FOR THE SPACEBAR KEYPRESS
componentDidMount() {
  document.addEventListener("keydown", this.onKeyPressedNewGame.bind(this));
  document.addEventListener("keydown", this.onKeyPressedRoll.bind(this));
}

componentWillUnmount() {
  document.removeEventListener("keydown", this.onKeyPressedNewGame.bind(this));
  document.removeEventListener("keydown", this.onKeyPressedRoll.bind(this));
}      

onKeyPressedRoll(e) {
  if (e.keyCode === 32 && !this.props.readyToRoll && !this.props.gameOver){
    this.rollDiceClickHandler()
  }
}
onKeyPressedNewGame(e) {
  if (e.keyCode === 32 && !this.props.readyToRoll && this.props.gameOver){
    this.newGameClickHandler()
  }
}
//---- PREVIOUS THREE MEHTODS FOR SPACEBAR KEYPRESS


render() {
  let Dimage1 = <img src={this.state.die1 === 1 ? D1 :
    this.state.die1 === 2 ? D2 :
    this.state.die1 === 3 ? D3 :
    this.state.die1 === 4 ? D4 :
    this.state.die1 === 5 ? D5 :
    this.state.die1 === 6 ? D6 : D0} alt=""/>
  let Dimage2 = <img src={this.state.die2 === 1 ? D1 :
    this.state.die2 === 2 ? D2 :
    this.state.die2 === 3 ? D3 :
    this.state.die2 === 4 ? D4 :
    this.state.die2 === 5 ? D5 :
    this.state.die2 === 6 ? D6 : D0} alt="" />





  
    return(
      <div id="diceroll_parent" className="row">
          <div id="gameoptions" className="col">
            {/* <button onClick={this.randomNumberClickHaRandomizerndler}>Random Numbers</button> */}
            {this.props.gameOver
              ?
              // <button type="button" className="btn btn-primary btn-lg" disabled >Roll The Dice</button>
                <button type="button" className="btn btn-primary btn-lg btn-warning" onKeyDown={(e) => this.onKeyPressedRoll(e)} tabIndex="0" onClick={this.newGameClickHandler}>Start New Game</button>
              :
                this.props.readyToRoll 
                  ?
                  // <button type="button" className="btn btn-primary btn-lg" disabled>Roll The Dice</button>
                  null
                  :
                  <>
                  <button type="button" className="btn btn-primary btn-lg" onKeyDown={(e) => this.onKeyPressedRoll(e)} tabIndex="0" onClick={this.rollDiceClickHandler}>Click To Roll The Dice</button>
                  <h5>*or hit spacebar*</h5>
                  </>

                
            }
            {/* {this.props.gameOver 
              ?
                <button type="button" className="btn btn-primary btn-lg btn-warning" onClick={this.newGameClickHandler}>Start New Game</button>
                :
                <button type="button" className="btn btn-primary btn-lg btn-warning" disabled >Start New Game</button>
              } */}
          </div>
          <div id="dice" className="col ">
            {Dimage1}
            {Dimage2}
            {this.props.gameOver && this.props.board.length > 0 ? <h1>You Lose!</h1> : null }

              {!this.props.gameOver && this.props.readyToRoll ? <h5 className="d-flex align-items-end flex-column">Click up to two valid numbers that total the above sum.</h5> : null }

          </div>
          <div id="RollStats"  className="col">
            <RollStats />
          </div>
      </div> // closes parent div
    ) // closes RETURN
  } //closes RENDER
}  // closes APP



function mdp(dispatch) { 
  return { 
    stb_RollSum: (rollSum, gameRollSum, sessionRollSum, userRollSum, allRollSum) => dispatch(stb_RollSum(rollSum, gameRollSum, sessionRollSum, userRollSum, allRollSum)),
    stb_DiceRoll: (die1, die2, gameDiceRolls, sessionRollSum, userDiceRolls, allDiceRolls) => dispatch(stb_DiceRoll(die1, die2, gameDiceRolls, sessionRollSum, userDiceRolls, allDiceRolls))
  }
}

function msp(state) { return { 
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

export default connect(msp, mdp)(DiceRoll)

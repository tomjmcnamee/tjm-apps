import React from 'react';
import DiceRoll from '../Components/stb-diceRoll'
import CreateNumberTile from '../Components/stb-createNumberTile'
import { connect } from 'react-redux'
import { stb_commitLosingGameToHistory, stb_commitWinningGameToHistory } from '../actions'





class ShutTheBox extends React.Component {
  state = {
    board: [1,2,3,4,5,6,7,8,9,10,11,12],
    comboArray: [],
    rollSum: 0,
    gameOver: false,
    gameWon: false
  }
  componentDidMount(){
    document.title = "TJM - Shut The Box" 
  }  // ends component did




  youLose = (die1, die2) => {
    //function for when the player LOSES
    console.log("You Lose")
    this.setState({
      gameOver: true
    })
    this.props.stb_commitLosingGameToHistory(this.props.loggedInUserObj.id, this.props.stb_gameDiceRolls, this.props.stb_gameRollSums, die1, die2)
  }

  youWin = () => {
    console.log("You WIN!")
    this.setState({
      board: [],
      gameOver: true,
      gameWon: true
    })
    this.props.stb_commitWinningGameToHistory(this.props.loggedInUserObj.id, this.props.stb_gameDiceRolls, this.props.stb_gameRollSums)
  }

  twoSum = function (arr, target) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
            result.push(arr[i]);
            result.push(arr[j]);
        }
      }
    }
    return result;
  } // ends twoSum function 

  rollHandler = (die1, die2) => {
    let newComboArray = this.twoSum(this.state.board, die1 + die2)
    if (this.state.board.indexOf(die1 + die2) > -1) {
      newComboArray.push(die1 + die2)
    }
    if (newComboArray.length === 0) {
      this.youLose(die1, die2)
    } else {
      this.setState({
        comboArray: newComboArray,
        rollSum: die1 + die2
      })
    }
  } // closes rollHandler

  numberClickHandler = (number) => {
    // event.preventDefault()
    if (this.state.comboArray[this.state.comboArray.length -1] === number &&  this.state.comboArray.length%2 === 1) {
      let newBoard = this.state.board
      let indexToDel = newBoard.indexOf(number);
      newBoard.splice(indexToDel, 1);
      if (newBoard.length === 0) {
        this.youWin()
      } else {
        this.setState({
          board: newBoard,
          comboArray: []
        })
      }
    } else {
      let newBoard = this.state.board
      let indexToDel = newBoard.indexOf(number);
      newBoard.splice(indexToDel, 1);
      if (newBoard.length === 0) {
        this.youWin()
      } else {
        let newComboArray = [this.state.rollSum - number]
        this.setState({
          board: newBoard,
          comboArray: newComboArray,
        })
      }

    }
    
  }
  
  newGameHandler = () => {
    this.setState({
      board: [1,2,3,4,5,6,7,8,9,10,11,12],
      comboArray: [],
      rollSum: 0,
      gameOver: false,
      gameWon: false
    })
  }
  
  
  numberTiles = () => { 
    // debugger
    return [1,2,3,4,5,6,7,8,9,10,11,12].map(num => <CreateNumberTile 
      key={num} 
      number={num} 
      history={this.props.history} 
      NumberAvailable={this.state.board.includes(num)}
      NumberValidOption={this.state.comboArray.includes(num)}
      FirstRun={this.state.rollSum === 0}
      numberClickHandler={this.numberClickHandler}
      gameWon={this.state.gameWon} />)
  }

render() {

  
    return(

      <div id="master-div">
        <h1>Shut The Box</h1>
        <DiceRoll rollHandler={this.rollHandler} newGameHandler={this.newGameHandler} gameOver={this.state.gameOver} board={this.state.board} readyToRoll={this.state.comboArray.length > 0} />
       {this.numberTiles()}
      </div> // closes parent div
    ) // closes RETURN
  } //closes RENDER


}  // closes APP
function mdp(dispatch) { 
  return { 
    stb_commitLosingGameToHistory: (a, b, c,die1, die2) => dispatch(stb_commitLosingGameToHistory(a, b, c, die1, die2)),
    stb_commitWinningGameToHistory: (a, b, c) => dispatch(stb_commitWinningGameToHistory(a, b, c)),

  }
}

function msp(state) { return { 
  loggedInUserObj: state.loggedInUserObj,
  stb_gameDiceRolls: state.stb_gameDiceRolls,
  stb_gameRollSums: state.stb_gameRollSums,
  stb_userDiceRolls: state.stb_userDiceRolls,
  stb_userRollSums: state.stb_userRollSums,
  stb_allDiceRolls: state.stb_allDiceRolls,
  stb_allRollSums: state.stb_allRollSums
}}

export default connect(msp, mdp)(ShutTheBox)

import React from 'react';
import GameBoard from '../Components/stb-gameBoard'
import NumberTiles from '../Components/stb-numberTiles'
import DiceRoll from '../Components/stb-diceRoll'
import CreateNumberTile from '../Components/stb-createNumberTile'
import { connect } from 'react-redux'
import { logUserIn, logOut, autoLogIn } from '../actions'




class Homepage extends React.Component {
  state = {
    board: [1,2,3,4,5,6,7,8,9,10,11,12],
    comboArray: [],
    rollSum: 0,
    gameOver: false
  }
  componentDidMount(){
    document.title = "TJM - Shut The Box" 
    this.props.autoLogIn()   
  }  // ends component did




  youLose = () => {
    //function for when the player LOSES
    console.log("You Lose")
    this.setState({
      gameOver: true
    })
  }

  youWin = () => {
    //function for when the player WINS
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

  rollHandler = (rollSum) => {
    console.log("roll handler -rollsum: ", rollSum)
    let newComboArray = this.twoSum(this.state.board, rollSum)
    if (this.state.board.indexOf(rollSum) > -1) {
      newComboArray.push(rollSum)
    }
    if (newComboArray.length == 0) {
      this.youLose()
    } else {
      this.setState({
        comboArray: newComboArray,
        rollSum: rollSum
      })
    }
  } // closes rollHandler

  numberClickHandler = (number) => {
    // event.preventDefault()
    console.log("click handler", number)
    if (this.state.comboArray[this.state.comboArray.length -1] == number &&  this.state.comboArray.length%2 == 1) {
      let newBoard = this.state.board
      let indexToDel = newBoard.indexOf(number);
      newBoard.splice(indexToDel, 1);
      this.setState({
        board: newBoard,
        comboArray: []
      })
    } else {
      let newBoard = this.state.board
      let indexToDel = newBoard.indexOf(number);
      newBoard.splice(indexToDel, 1);
      let newComboArray = [this.state.rollSum - number]
      this.setState({
        board: newBoard,
        comboArray: newComboArray,
      })

    }
  }
  
  newGameHandler = () => {
    this.setState({
      board: [1,2,3,4,5,6,7,8,9,10,11,12],
      comboArray: [],
      rollSum: 0,
      gameOver: false
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
      FirstRun={this.state.rollSum == 0}
      numberClickHandler={this.numberClickHandler} />)
  }

render() {
  console.log("comboarr = ", this.state.comboArray)





        //This is where I have to see if any TWO tiles add up to rollSum
      // } else {
      //   this.props.youLose()
      // }
  
    return(

      <div id="master-div">
        <DiceRoll rollHandler={this.rollHandler} newGameHandler={this.newGameHandler} gameOver={this.state.gameOver} board={this.state.board} />
       {this.numberTiles()}
      </div> // closes parent div
    ) // closes RETURN
  } //closes RENDER


}  // closes APP
function mdp(dispatch) { 
  return { 

  }
}

{/* // this comes from reduct.js - K is local reference, V is foreign state attribute */}
function msp(state) { return { 

}}

export default connect(msp, mdp)(Homepage)

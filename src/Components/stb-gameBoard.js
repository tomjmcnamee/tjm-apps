import React from 'react';
import { connect } from 'react-redux'
import NumberTiles from '../Components/stb-numberTiles'
import DiceRoll from '../Components/stb-diceRoll'


class GameBoard extends React.Component {
  state = {
    board: [1,2,3,4,5,6,7,8,9,10,11,12],
    oneClickIndex: null,
    comboArray: [],
    currentRoll: 0
  }
  componentDidMount(){
    document.title = "TJM - Shut The Box"    
    this.setValidOptions()
  }  // ends component did

  setValidOptions = () => {
    console.log("setvalidoptions run")
    let tempComboArray = this.twoSum(this.state.board, this.props.stb_RollTotal)
    if (!!this.state.board.indexOf(this.props.stb_RollTotal)) {
      tempComboArray.push(this.props.RollTotal)
    }
    this.setState({
      comboArray: tempComboArray
    })
  } // ends setValidoptions

  //The below output [] if no two numbers in an array add up to target
  //If 1 or more pair adds up to target, return will be [n1, n2, n3, n4]
  // where indexes 0+1 = target, as do indexes 2+3 and 4+5, etc
  twoSum = function (arr, target) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
            result.push(i);
            result.push(j);
        }
      }
    }
    return result;
  } // ends twoSum function 

  render() {
      let comboArray = this.twoSum(this.state.board, this.props.stb_RollTotal)
      if (!!this.state.board.indexOf(this.props.stb_RollTotal)) {
          comboArray.push(this.props.RollTotal)
          console.log("you still got moves!")
      // } else if (comboArray.length > 0 ) {
        // switch (comboArray.length) {
        //   case 2:
        //     this.setState({
        //       comboClick: {comboArray}
        //     })
        //     break;
        //   case 4:
        //     let newComboClicks = {comboArray.splice(0,2), comboArray.splice(0,2)}
        //     this.setState({
        //       comboClick: newComboClicks
        //     })
        //     break;
        //   case 6:
        //     let newComboClicks = {comboArray.splice(0,2), comboArray.splice(0,2), comboArray.splice(0,2)}
        //     this.setState({
        //       comboClick: newComboClicks
        //     })
        //     break;
        //   case 8:
        //     let newComboClicks = {comboArray.splice(0,2), comboArray.splice(0,2), comboArray.splice(0,2), comboArray.splice(0,2)}
        //     this.setState({
        //       comboClick: newComboClicks
        //     })
        //     break;
        //   case 10:
        //     let newComboClicks = {comboArray.splice(0,2), comboArray.splice(0,2), comboArray.splice(0,2), comboArray.splice(0,2), comboArray.splice(0,2)}
        //     this.setState({
        //       comboClick: newComboClicks
        //     })
        //     break;
        //   default:
        //     break;
        // }





        //This is where I have to see if any TWO tiles add up to rollSum
      } else {
        this.props.youLose()
      }
  
    

    return(

      <div>
        <NumberTiles numbersInPlay={this.state.board} validOptions={this.state.comboArray}/>
      </div> // closes parent div
    ) // closes RETURN
  } //closes RENDER


}  // closes APP



function mdp(dispatch) { 
  // return { 
  //   stb_RollTotal: (rullSum) => dispatch(stb_RollTotal(rollSum))
  // }
}

{/* // this comes from reduct.js - K is local reference, V is foreign state attribute */}
function msp(state) { return { stb_RollTotal: state.stb_RollTotal}}

export default connect(msp, mdp)(GameBoard)
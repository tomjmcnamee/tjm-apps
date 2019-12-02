import React from 'react';
import GameBoard from '../Components/stb-gameBoard'
import DiceRoll from '../Components/stb-diceRoll'


class ShutTheBox extends React.Component {
  state = {
    board: [1,2,3,4,5,6,7,8,9,10,11,12],
    currentRoll: 0
  }
  componentDidMount(){
    document.title = "TJM - Shut The Box"    
  }  // ends component did




  youLose = () => {
    //function for when the player LOSES
  }

  youWin = () => {
    //function for when the player WINS
  }

  


render() {

    return(

      <div>
        <DiceRoll />
        <GameBoard youLose={this.youLose} youWin={this.youWin} />




      </div> // closes parent div
    ) // closes RETURN
  } //closes RENDER


}  // closes APP

export default ShutTheBox
import React from 'react';
import NumberTiles from '../Components/stb-numberTiles'
import DiceRoll from '../Components/stb-diceRoll'


class ShutTheBox extends React.Component {
  state = {
    board: [1,2,3,4,5,6,7,8,9,10,11,12],
    die1: 0,
    die2: 0,
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0
  }







render() {




  
    return(

      <div>
        <DiceRoll />
        <NumberTiles />




      </div> // closes parent div
    ) // closes RETURN
  } //closes RENDER


}  // closes APP

export default ShutTheBox
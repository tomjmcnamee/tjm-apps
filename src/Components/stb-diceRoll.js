import React from 'react';
import Randomizer from 'react-randomizer'
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

randomNumberClickHandler = () => {
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
}


tempdoXtimes = (X) => {
  let tempone = this.state.one
  let temptwo = 0
  let tempthree = 0
  let tempfour = 0
  let tempfive = 0
  let tempsix = 0
  let i = 0
  while (i < X) {
    let temp = Randomizer.randomNumber(1,6)
    switch (temp) {
      case 1:
        tempone += 1
        break;
      case 2:
        temptwo += 1
        break;
      case 3:
        tempthree += 1
        break;
      case 4:
        tempfour += 1
        break;
      case 5:
        tempfive += 1
        break;
      case 6:
        tempsix += 1
        break;
      }
      debugger
      i++
    }
    this.setState ({
      one: tempone,
      two: temptwo,
      three: tempthree,
      four: tempfour,
      five: tempfive,
      six: tempsix
    })
 


}


render() {
  let Dimage1 = <img src={this.state.die1 == 1 ? D1 :
    this.state.die1 == 2 ? D2 :
    this.state.die1 == 3 ? D3 :
    this.state.die1 == 4 ? D4 :
    this.state.die1 == 5 ? D5 :
    this.state.die1 == 6 ? D6 : D0} />
  let Dimage2 = <img src={this.state.die2 == 1 ? D1 :
    this.state.die2 == 2 ? D2 :
    this.state.die2 == 3 ? D3 :
    this.state.die2 == 4 ? D4 :
    this.state.die2 == 5 ? D5 :
    this.state.die2 == 6 ? D6 : D0} />





  
    return(
      <div>
        {/* <button onClick={this.randomNumberClickHaRandomizerndler}>Random Numbers</button> */}
        <button onClick={this.randomNumberClickHandler}>Random Numbers</button>
        {Dimage1}
        {Dimage2}
        <div id="RollStats" >
          <h4>Roll Statistics</h4>
          {this.state.totalRolls == 0 
            ? 
            <div>
              <p>1: 0.00%</p>
              <p>2: 0.00%</p>
              <p>3: 0.00%</p>
              <p>4: 0.00%</p>
              <p>5 0.00%</p>
              <p>6: 0.00%</p>
            </div>
            :
            <div>
              <p>1: {(this.state.one/(this.state.totalRolls*2)*100).toFixed(2)}%</p>
              <p>2: {(this.state.two/(this.state.totalRolls*2)*100).toFixed(2)}%</p>
              <p>3: {(this.state.three/(this.state.totalRolls*2)*100).toFixed(2)}%</p>
              <p>4: {(this.state.four/(this.state.totalRolls*2)*100).toFixed(2)}%</p>
              <p>5: {(this.state.five/(this.state.totalRolls*2)*100).toFixed(2)}%</p>
              <p>6: {(this.state.six/(this.state.totalRolls*2)*100).toFixed(2)}%</p>
            </div>
          }
          <p>Total Rolls {this.state.totalRolls}</p>
        </div>
      </div> // closes parent div
    ) // closes RETURN
  } //closes RENDER


}  // closes APP

export default DiceRoll
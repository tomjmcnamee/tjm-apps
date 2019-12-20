import React from 'react'
import CreateNumberTile from './stb-createNumberTile'

class NumberTiles extends React.Component {
  render() {
    console.log(this.props.validOptions)


   let numberTiles = [1,2,3,4,5,6,7,8,9,10,11,12].map(num => <CreateNumberTile key={num} number={num} history={this.props.history} numberClickHandler={this.props.numberClickHandler} />)
  return (
    <>
      {numberTiles}
    </>
    ) // ends RETURN
  } // ends RENDS
} // ends NumberTiles

export default NumberTiles
import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { fetchTopXCampaigns } from '../actions'
import CreateNumberTile from './stb-createNumberTile'









class NumberTiles extends React.Component {
  render() {
    console.log(this.props.validOptions)
   // Builds each campaign Card with fetched Campaign data
  //  if (this.props.topCampaignsArr.length > 0){}else{ }

   let numberTiles = [1,2,3,4,5,6,7,8,9,10,11,12].map(num => <CreateNumberTile key={num} number={num} history={this.props.history} numberClickHandler={this.props.numberClickHandler} />)
  return (
    <div>
      {numberTiles}
    </div>
    ) // ends RETURN
  } // ends RENDS
} // ends NumberTiles
// {/* // this comes from the actions.js function names
// function mdp(dispatch) { 
//   return { 
//     fetchTopXCampaigns: (type, count_of_returned_campaigns) => dispatch(fetchTopXCampaigns(type, count_of_returned_campaigns))
//   }
// }


  
// {/* // this comes from reduct.js - K is local reference, V is foreign state attribute */}
// function msp(state) { return { topCampaignsArr: state.topCampaignsArr}}

// export default connect(msp, mdp)(NumberTiles)
export default NumberTiles
import React from 'react'
import { connect } from 'react-redux'





class GridLinesBuilder extends React.Component {

  markWishlistItemAsPurchased = ( event) => {
    event.preventDefault()
    this.props.markWishlistItemAsPurchased( event.target.id, this.props.activeUser.id, this.props.activeEvent.id)
  }

	
	
	// totalContributionsForThisCampaign = (campaigns) => {  return campaigns.reduce( (sum, contrib) => {return sum + contrib.contribution_amount }, 0) }
  render() {


      switch(this.props.gridType) {
        case "simulationRoundResults":
            return(
            <tr >
              <td data-label="SumPairChoice" >{this.props.gridLineObj.innerOrOuter}</td>
              <td  data-label="PrioritizeSingleTileOver"  >{this.props.gridLineObj.singleTileAbove}</td>
              <td data-label="TotalGames"  >{this.props.gridLineObj.numberOfGames.toLocaleString()}</td>
              <td data-label="TotalWins"  >{this.props.gridLineObj.numberOfWins.toLocaleString()}</td>
              <td data-label="TotalLosses"  >{this.props.gridLineObj.numberOfLosses.toLocaleString()}</td>
              <td data-label="WinPercentage"  >{((this.props.gridLineObj.numberOfWins/this.props.gridLineObj.numberOfGames)*100).toFixed(3)}%</td>
            </tr>
            )  // ends "Campaigns You've Supported" RETURN
            // break  
        default:
          break
      } // ends switch


   } // ends Render
}  // ends GridLinesBuilder class

function mdp(dispatch) {
  return { 
  }
}


// this comes from reduct.js - K is local reference, V is foreign state attribute
function msp(state) {
  return { 
  }
}

export default connect(msp, mdp)(GridLinesBuilder)


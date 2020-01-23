import React from 'react'
import { connect } from 'react-redux'






class GridLinesBuilder extends React.Component {

  markWishlistItemAsPurchased = ( event) => {
    event.preventDefault()
    this.props.markWishlistItemAsPurchased( event.target.id, this.props.activeUser.id, this.props.activeEvent.id)
  }

	stbSimulationResultsProcessing = () => {
    let resInOrOut = ""
    let resSingle_tile_above_number = ""
    let resNumberOfGames = ""
    let resNumberOfWins = ""
    let resNumberOfLosses = ""
    let resWinPercentage = ""
    if (this.props.gridLineObj.games > 0) {
      resInOrOut = this.props.gridLineObj.innerOrOuter
      resSingle_tile_above_number = this.props.gridLineObj.single_tile_above_number
      resNumberOfGames = this.props.gridLineObj.games.toLocaleString()
      resNumberOfWins = this.props.gridLineObj.numberOfWins.toLocaleString()
      resNumberOfLosses = this.props.gridLineObj.numberOfLosses.toLocaleString()
      resWinPercentage = ((this.props.gridLineObj.numberOfWins/this.props.gridLineObj.games)*100).toFixed(4) + "%"
    }
    return {
      resInOrOut: resInOrOut,
      resSingle_tile_above_number: resSingle_tile_above_number,
      resNumberOfGames: resNumberOfGames,
      resNumberOfWins: resNumberOfWins,
      resNumberOfLosses: resNumberOfLosses,
      resWinPercentage: resWinPercentage
    }
  }

	stbSimulationHistoryProcessing = () => {
    let resInOrOut = ""
    let resSingle_tile_above_number = ""
    let resNumberOfGames = ""
    let resNumberOfWins = ""
    let resNumberOfLosses = ""
    let resWinPercentage = ""
    // if (this.props.gridLineObj.games > 0) {
      // debugger
      resInOrOut = this.props.gridLineObj.inner_or_outer
      resSingle_tile_above_number = this.props.gridLineObj.single_tile_above_number
      resNumberOfGames = this.props.gridLineObj.games.toLocaleString()
      resNumberOfWins = this.props.gridLineObj.wins.toLocaleString()
      resNumberOfLosses = this.props.gridLineObj.losses.toLocaleString()
      resWinPercentage = this.props.gridLineObj.wins > 0 ? ((this.props.gridLineObj.wins/this.props.gridLineObj.games)*100).toFixed(4) + "%" : "----"
    // }
    return {
      resInOrOut: resInOrOut,
      resSingle_tile_above_number: resSingle_tile_above_number,
      resNumberOfGames: resNumberOfGames,
      resNumberOfWins: resNumberOfWins,
      resNumberOfLosses: resNumberOfLosses,
      resWinPercentage: resWinPercentage
    }

  }
	
	// totalContributionsForThisCampaign = (campaigns) => {  return campaigns.reduce( (sum, contrib) => {return sum + contrib.contribution_amount }, 0) }
  render() {
    
    

      switch(this.props.gridType) {
        case "simulationRoundResults":
            return(
              <>
            <tr className="left aligned">
              <th className="text-right" >Total Games</th>
              <td className="text-left" data-label="TotalGames"  >{this.stbSimulationResultsProcessing().resNumberOfGames}</td>
            </tr>
            <tr className="left aligned" >
              <th className="text-right" >Prioritize single tile above</th>
              <td className="text-left" >{this.stbSimulationResultsProcessing().resSingle_tile_above_number}</td>
            </tr>
            <tr >
              <th className="text-right" >Outer or Inner pair</th>
              <td className="text-left" >{this.stbSimulationResultsProcessing().resInOrOut}</td>
            </tr>
            <tr >
              <td colSpan="2"></td>
            </tr>
            <tr >
              <th className="text-right" >Total Wins</th>
              <td className="text-left" >{this.stbSimulationResultsProcessing().resNumberOfWins}</td>
            </tr>
            <tr >
              <th className="text-right" >Total Loses</th>
              <td className="text-left" >{this.stbSimulationResultsProcessing().resNumberOfLosses}</td>
            </tr>
            <tr >
              <th className="text-right" >Win Percentage</th>
              <td className="text-left" >{this.stbSimulationResultsProcessing().resWinPercentage}</td>
            </tr>
            </>
            )  // ends "Campaigns You've Supported" RETURN
            // break  
        case "simulationResultsHistoryGrid":
            return(
            <tr >
              <td >{this.stbSimulationHistoryProcessing().resInOrOut}</td>
              <td >{this.stbSimulationHistoryProcessing().resSingle_tile_above_number}</td>
              <td >{this.stbSimulationHistoryProcessing().resNumberOfGames}</td>
              <td >{this.stbSimulationHistoryProcessing().resNumberOfWins}</td>
              <td >{this.stbSimulationHistoryProcessing().resNumberOfLosses}</td>
              <td >{this.stbSimulationHistoryProcessing().resWinPercentage}</td>
            </tr>
            )  // ends "simulationResultsHistoryGrid" RETURN
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


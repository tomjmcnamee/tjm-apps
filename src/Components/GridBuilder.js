import React from 'react'
import GridLinesBuilder from './GridLinesBuilder'

class GridBuilder extends React.Component {

  render() {
    let GridLines = []
    switch(this.props.gridType) {
      case "simulationRoundResults":
          // if (this.props.gridLinesHash.games > 0 ) {
            GridLines = <GridLinesBuilder key="1"
                                  gridLineObj={this.props.gridLinesHash} 
                                  gridType="simulationRoundResults" 
                                />
          // } // ends GridLines IF statement
          return(
            <table className="ui celled table">
              <colgroup>
                <col id="firstCol"/>
                <col span="11" className="dayCols"  />
              </colgroup>
              {/* <thead>
                <tr>
                  <th>Outer or Inner pair</th>
                  <th>Prioritize single tile over</th>
                  <th>Total Games</th>
                  <th>Total Wins</th>
                  <th>Total Loses</th>
                  <th>Win Percentage</th>
                </tr>
              </thead> */}
              <tbody>
                {GridLines}
              </tbody>
              {/* <tfoot>
                <tr>
                  <td colSpan="11">These are all the campaigns you've supported</td>
                </tr>
              </tfoot> */}
            </table>
          ) // ends "simulationRoundResults" RETURN
        // break 
      case "simulationResultsHistoryGrid":
          if (this.props.gridLinesArr.length > 0 ) {
            GridLines = this.props.gridLinesArr.map(gridLineObj => <GridLinesBuilder 
                                            key={gridLineObj.id} 
                                            gridLineObj={gridLineObj} 
                                            gridType="simulationResultsHistoryGrid"
                                            history={this.props.history} 
                                          />)
          } // ends GridLines IF statement
          return(
            <table className="ui celled table">
              <colgroup>
                <col id="firstCol"/>
                <col span="11" className="dayCols"  />
              </colgroup>
              <thead>
                <tr>
                  <th>Inner or{<br />}Outer Pair</th>
                  <th>Flip available Single{<br />}Tile above this number</th>
                  <th>Total{<br />}Games</th>
                  <th>Wins</th>
                  <th>Losses</th>
                  <th>Win{<br />}percentage</th>
                  {/* <th className="center aligned" >Another column</th> */}
                </tr>
              </thead>
              <tbody>
                {GridLines}
              </tbody>
              {/* <tfoot>
                <tr>
                  <td colSpan="11">These are all the campaigns you've supported</td>
                </tr>
              </tfoot> */}
            </table>
          ) // ends "EXAMPLE" RETURN
        // break 
      default:
        // break
    } // ends switch
  } // ends Render
}  // ends GridBuilder class

export default GridBuilder
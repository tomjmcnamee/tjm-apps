import React from 'react'
import GridLinesBuilder from './GridLinesBuilder'
import LoadingDice from '../images/LoadingDice.gif'
import LoadingDice2 from '../images/LoadingDice2.gif'
import LoadingDice3 from '../images/LoadingDice3.gif'
import LoadingDice4 from '../images/LoadingDice4.gif'


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
          <>
            <div id="SimulatorResultsGrid">
              <table className="ui celled table">
                <colgroup>
                  <col width="80" />
                  <col width="80" />
                </colgroup>
                <tbody>
                  {GridLines}
                </tbody>
              </table>
            </div>
            <div id="LoadingIcon">
              {this.props.loading ? 
                // <Loader
                //   type="CradleLoader"
                //   color="#00BFFF"
                //   height={100}
                //   width={100}
                //   timeout={30000} //30 secs
                // />
                <>
                <img src={LoadingDice} alt="LoadingDice" />
                <img src={LoadingDice2} alt="LoadingDice2" />
                <img src={LoadingDice3} alt="LoadingDice3" />
                <img src={LoadingDice4} alt="LoadingDice4" />
                <img src={LoadingDice} alt="LoadingDice" />
                </>
                :
                null
              }
            </div>
          </>
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
            <table className="ui celled table table-sm table-striped" >
              <colgroup>
                <col id="firstCol"/>
                <col span="11" className="dayCols"  />
              </colgroup>
              <thead>
                <tr>
                  <th>Inner or{<br />}Outer Pair</th>
                  <th>Prioritize single{<br />}tile above</th>
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
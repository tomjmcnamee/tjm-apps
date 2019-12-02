import React from 'react'
import { thisExpression } from '@babel/types'
// import { connect } from 'react-redux'
// import { setSelectedCampaignAndContributions } from '../actions'


class CreateNumberTile extends React.Component {

  state = {
    flipped: false,
  }

  flipTile = () => {
    this.setState({
      flipped: true
    })
  }


  
  render(){
    let tileHTML = ""
    return (

      <div>
        {this.props.FirstRun
          ?
            <div className="NumberTile" data-tile-number={this.props.number} >
              <img src="https://2.bp.blogspot.com/-3n-RvkRGmfU/UO_iCdvu5oI/AAAAAAAAEHA/ABNauhWa8Iw/s1600/maple-seamless_wood_texture.jpg" />
              <div className="TileNumberText" >{this.props.number}</div>
            </div>
          :
          this.props.NumberAvailable 
            ?
            this.props.NumberValidOption
              ?
                <div className="NumberTile" data-tile-number={this.props.number} onClick={() => this.props.numberClickHandler(this.props.number)}>
                  <img src="https://2.bp.blogspot.com/-3n-RvkRGmfU/UO_iCdvu5oI/AAAAAAAAEHA/ABNauhWa8Iw/s1600/maple-seamless_wood_texture.jpg" />
                  <div className="TileNumberText" >{this.props.number}</div>
                </div>
              :
                <div className="NumberTile" data-tile-number={this.props.number}>
                  <img src="https://2.bp.blogspot.com/-3n-RvkRGmfU/UO_iCdvu5oI/AAAAAAAAEHA/ABNauhWa8Iw/s1600/maple-seamless_wood_texture.jpg" />
                  <div className="NotValidOption" >{this.props.number}</div>
                </div>
            :
            <div className="NumberTile" data-tile-number={this.props.number} >
              <img src="https://2.bp.blogspot.com/-3n-RvkRGmfU/UO_iCdvu5oI/AAAAAAAAEHA/ABNauhWa8Iw/s1600/maple-seamless_wood_texture.jpg" />
            </div>
        }
      </div>
      )// ends return
  }// ends render
} // ends class

// this comes from the actions.js function names
// function mdp(dispatch) {
//   // return { setSelectedCampaignAndContributions: ( path, campaignObj, history ) => dispatch(setSelectedCampaignAndContributions( path, campaignObj, history)) }
//   return { setSelectedCampaignAndContributions: ( campaignObj, history ) => dispatch(setSelectedCampaignAndContributions( campaignObj, history)) }
// }


// this comes from reduct.js - K is local reference, V is foreign state attribute
// function msp(state) {
//   return { workingEntityObj: state.workingEntityObj}
// }

// export default connect(msp, mdp)(CampaignCard)
export default CreateNumberTile

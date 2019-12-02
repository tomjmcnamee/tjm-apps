import { combineReducers } from 'redux'

let defaultState = {
  stb_RollTotal: null,
    // formsDropDownOptionsHash: {
    //   sentimentIDsandDescriptions: [], 
    //   promotionTypesIDsandDescriptions: [], 
    //   promotionSubTypesIDsandDescriptions: [], 
    //   intendedGeographicReachIDsandDescriptions: [],
    //   cityIDsNameandStateID: [],
    //   stateIDsandName: []
    // },
    // loggedInUserObj: {},
    // loggedInUsersCampaignContributionObjs: [],
}


function stb_RollTotalReducer(state = defaultState.stb_RollTotal, action) {
  switch (action.type) {
      case "SET ROLL SUM":
          return action.payload
      default:
          return state
  }
}





let reducer = combineReducers({
  stb_RollTotal: stb_RollTotalReducer,
})

export default reducer
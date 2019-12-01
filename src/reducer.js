import { combineReducers } from 'redux'

let defaultState = {
    workingCampaignObj: {},
    formsDropDownOptionsHash: {
      sentimentIDsandDescriptions: [], 
      promotionTypesIDsandDescriptions: [], 
      promotionSubTypesIDsandDescriptions: [], 
      intendedGeographicReachIDsandDescriptions: [],
      cityIDsNameandStateID: [],
      stateIDsandName: []
    },
    loggedInUserObj: {},
    loggedInUsersCampaignContributionObjs: [],
    loggedInUsersSupportedCampaignObjArr: [],
    loggedInUserFavoritesArr: [],
    // workingEntityObj: {},
    // loginCredentials: {
    //         name: "",
    //         password: "" 
    //     },
    topCampaignsArr: [],
    selectedCampaignContributionObjsArr: [],
}


function topCampaignsFetchReducer(state = { ...defaultState.topCampaignsArr}, action) {
  switch (action.type) {
      case "FETCH TOP CAMPAIGNS":
          return action.payload
      case "UPDATE CHANGED CAMPAIGN OBJ IN TOPCAMPAIGNSARRAY":
          return action.payload
      case "ADD NEW CAMPAIGN TO TOP CAMPAIGNS ARR":
          return action.payload 
      default:
          return state
  }
}

function formsDropDownOptionsReducer(state = defaultState.formsDropDownOptionsHash, action) {
  switch (action.type) {
      case "SET FORM DROPDOWN OPTIONS":
          return action.payload
      default:
          return state
  }
}

function loggedInUsersCampaignContributionReducer(state = defaultState.loggedInUsersCampaignContributionObjs, action) {
  switch (action.type) {
      case "FETCH LOGGED IN USERS CAMPAIGN CONTRIBUTION OBJS":
        return action.payload
      case "ADD CAMPAIGN TO USER'S ARR":
        return [...state, action.payload]
      default:
          return state
  }
}

function workingCampaignReducer(state = defaultState.workingCampaignObj, action) {
  switch (action.type) {
    case "SET SELECTED CAMPAIGN":
        return action.payload
      case "CREATE NEW CAMPAIGN":
          return action.payload
      case "UPDATE WORKING CAMPOAIGN OBJ":
          return action.payload
      default:
          return state
  }
}

function loggedInUserReducer(state = defaultState.loggedInUserObj, action) {
  switch (action.type) {
      case "LOG USER IN":
          return action.payload
      case "AUTO LOG USER IN":
          return action.payload
      case "LOG USER OUT":
          return action.payload
      default:
          return state
  }
} // ends loggedInUserReducer

  function loggedInUsersSupportedCampaignReducer(state = defaultState.loggedInUsersSupportedCampaignObjArr, action) {
    switch (action.type) {
      case "FETCH LOGGED IN USERS SUPPORTED CAMPAIGNS":
        return action.payload
      default:
        return state
    }
  } // ends loggedInUsersSupportedCampaignReducer 
  
  function selectedCampaignContributionObjsReducer(state = defaultState.selectedCampaignContributionObjsArr, action) {
    switch (action.type) {
      case "SELECTED CAMPAIGN CONTRIBUTION OBJECTS":
        return action.payload
      case "ADD NEW CONTRIBUTION CAMPAIGN'S STATE CONTRIBUTIONS ARRAY":
          return [...state, action.payload]
      default:
        return state
    }
  } // ends loggedInUsersSupportedCampaignReducer 

  function loggedInUserFavoritesReducer(state = defaultState.loggedInUserFavoritesArr, action) {
    switch (action.type) {
      case "ADD CAMPAIGN TO USER FAVORITES":
        return [...state, action.payload]
      case "LOGGED IN USERS FAVORITED CAMPAIGNS":
        return [...state, action.payload]
      default:
        return state
    }
  }



let reducer = combineReducers({
  workingCampaignObj: workingCampaignReducer,
  formsDropDownOptionsHash: formsDropDownOptionsReducer,
  // workingEntityObj: workingCampaignReducer,
  loginCredentials: {},
  loggedInUsersCampaignConributionObjs: loggedInUsersCampaignContributionReducer,
  loggedInUserObj: loggedInUserReducer,
  loggedInUserFavoritesArr: loggedInUserFavoritesReducer,
  loggedInUsersSupportedCampaignObjArr: loggedInUsersSupportedCampaignReducer,
  selectedCampaignContributionObjsArr:  selectedCampaignContributionObjsReducer,
  topCampaignsArr: topCampaignsFetchReducer,
})

export default reducer
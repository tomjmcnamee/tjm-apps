
// let backendURL = "http://localhost:3000/api/v1/"
// let backendURL = "http://wethepromo-backend.herokuapp.com/api/v1/"
let backendURL = process.env.REACT_APP_FETCH_LOCATION



// function addNewCampaignObj (campaignObjId, history) {
//   return function (dispatch) {
//     fetch(backendURL + "campaigns/" + campaignObjId)
//     .then( resp => resp.json())
//     .then(( campaignObj ) => {
//       dispatch({ type: "SET SELECTED CAMPAIGN", payload: campaignObj })
//       dispatch({ type: "ADD NEW CAMPAIGN TO TOP CAMPAIGNS ARR", payload: campaignObj })
      
//     })
//   } //end function dispatch
// } // end setSelectedCampaignAndContributions function


function stb_RollSum(rollSum, gameRollSums, userRollSums, allRollSums) {
return function (dispatch) {  
  switch (rollSum) {
    case 2:   
      dispatch({ type: "ADD GAME SUM", payload: {two: gameRollSums["two"]+1, totalRolls: gameRollSums["totalRolls"]+1} })
      dispatch({ type: "ADD USER SUM", payload: {two: userRollSums["two"]+1, totalRolls: userRollSums["totalRolls"]+1} })
      dispatch({ type: "ADD ALL SUM", payload: {two: allRollSums["two"]+1, totalRolls: allRollSums["totalRolls"]+1} })
      break;
    case 3:
      dispatch({ type: "ADD GAME SUM", payload: {three: gameRollSums["three"]+1, totalRolls: gameRollSums["totalRolls"]+1} })
      dispatch({ type: "ADD USER SUM", payload: {three: userRollSums["three"]+1, totalRolls: userRollSums["totalRolls"]+1} })
      dispatch({ type: "ADD ALL SUM", payload: {three: allRollSums["three"]+1, totalRolls: allRollSums["totalRolls"]+1} })
        break;
    case 4:
      dispatch({ type: "ADD GAME SUM", payload: {four: gameRollSums["four"]+1, totalRolls: gameRollSums["totalRolls"]+1} })
      dispatch({ type: "ADD USER SUM", payload: {four: userRollSums["four"]+1, totalRolls: userRollSums["totalRolls"]+1} })
      dispatch({ type: "ADD ALL SUM", payload: {four: allRollSums["four"]+1, totalRolls: allRollSums["totalRolls"]+1} })
        break;
    case 5:
      dispatch({ type: "ADD GAME SUM", payload: {five: gameRollSums["five"]+1, totalRolls: gameRollSums["totalRolls"]+1} })
      dispatch({ type: "ADD USER SUM", payload: {five: userRollSums["five"]+1, totalRolls: userRollSums["totalRolls"]+1} })
      dispatch({ type: "ADD ALL SUM", payload: {five: allRollSums["five"]+1, totalRolls: allRollSums["totalRolls"]+1} })
        break;
    case 6:
      dispatch({ type: "ADD GAME SUM", payload: {six: gameRollSums["six"]+1, totalRolls: gameRollSums["totalRolls"]+1} })
      dispatch({ type: "ADD USER SUM", payload: {six: userRollSums["six"]+1, totalRolls: userRollSums["totalRolls"]+1} })
      dispatch({ type: "ADD ALL SUM", payload: {six: allRollSums["six"]+1, totalRolls: allRollSums["totalRolls"]+1} })
        break;
    case 7:
      dispatch({ type: "ADD GAME SUM", payload: {seven: gameRollSums["seven"]+1, totalRolls: gameRollSums["totalRolls"]+1} })
      dispatch({ type: "ADD USER SUM", payload: {seven: userRollSums["seven"]+1, totalRolls: userRollSums["totalRolls"]+1} })
      dispatch({ type: "ADD ALL SUM", payload: {seven: allRollSums["seven"]+1, totalRolls: allRollSums["totalRolls"]+1} })
      break;
    case 8:
      dispatch({ type: "ADD GAME SUM", payload: {eight: gameRollSums["eight"]+1, totalRolls: gameRollSums["totalRolls"]+1} })
      dispatch({ type: "ADD USER SUM", payload: {eight: userRollSums["eight"]+1, totalRolls: userRollSums["totalRolls"]+1} })
      dispatch({ type: "ADD ALL SUM", payload: {eight: allRollSums["eight"]+1, totalRolls: allRollSums["totalRolls"]+1} })
        break;
    case 9:
      dispatch({ type: "ADD GAME SUM", payload: {nine: gameRollSums["nine"]+1, totalRolls: gameRollSums["totalRolls"]+1} })
      dispatch({ type: "ADD USER SUM", payload: {nine: userRollSums["nine"]+1, totalRolls: userRollSums["totalRolls"]+1} })
      dispatch({ type: "ADD ALL SUM", payload: {nine: allRollSums["nine"]+1, totalRolls: allRollSums["totalRolls"]+1} })
        break;
    case 10:
      dispatch({ type: "ADD GAME SUM", payload: {ten: gameRollSums["ten"]+1, totalRolls: gameRollSums["totalRolls"]+1} })
      dispatch({ type: "ADD USER SUM", payload: {ten: userRollSums["ten"]+1, totalRolls: userRollSums["totalRolls"]+1} })
      dispatch({ type: "ADD ALL SUM", payload: {ten: allRollSums["ten"]+1, totalRolls: allRollSums["totalRolls"]+1} })
        break;
    case 11:
      dispatch({ type: "ADD GAME SUM", payload: {eleven: gameRollSums["eleven"]+1, totalRolls: gameRollSums["totalRolls"]+1} })
      dispatch({ type: "ADD USER SUM", payload: {eleven: userRollSums["eleven"]+1, totalRolls: userRollSums["totalRolls"]+1} })
      dispatch({ type: "ADD ALL SUM", payload: {eleven: allRollSums["eleven"]+1, totalRolls: allRollSums["totalRolls"]+1} })
        break;
    case 12:
      dispatch({ type: "ADD GAME SUM", payload: {twelve: gameRollSums["twelve"]+1, totalRolls: gameRollSums["totalRolls"]+1} })
      dispatch({ type: "ADD USER SUM", payload: {twelve: userRollSums["twelve"]+1, totalRolls: userRollSums["totalRolls"]+1} })
      dispatch({ type: "ADD ALL SUM", payload: {twelve: allRollSums["twelve"]+1, totalRolls: allRollSums["totalRolls"]+1} })
        break;
    } // end switch
  }// Ends dispatch
} // stb_RollTotal




export { 
  stb_RollSum,
}
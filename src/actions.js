
let backendURL = "http://localhost:3000/api/v1/"
// let backendURL = "http://wethepromo-backend.herokuapp.com/api/v1/"
// let backendURL = process.env.REACT_APP_FETCH_LOCATION

function signUp (userInfo, history) {
  return function (dispatch) {
  fetch(backendURL + "user", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accepts: "application/json"
    },
    body: JSON.stringify({ user: userInfo })
  })
    .then(resp => resp.json())
    .then(response => {
      if (response.errors) {
        alert(response.errors)
      } else {
        localStorage.setItem("token", response.token)
        dispatch({ type: "LOG USER IN", payload: response.userObj })
        dispatch({ type: "SET USER ROLL SUM", payload: response.userRollSums })
        dispatch({ type: "SET USER DICE ROLLS", payload: response.userDiceRolls })
        dispatch({ type: "SET ALL ROLL SUM", payload: response.allRollSums })
        dispatch({ type: "SET ALL DICE ROLLS", payload: response.allDiceRolls })


        // history.push("/BrowseCampaigns")
      }
    })
  }  // Ends SignUp THUNK function
} // ends SignUp funciton

function logUserIn (path, accountCredentials, history) {
  return function (dispatch) {
    fetch(backendURL + path, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify(accountCredentials)
    })
    .then(resp => resp.json())
    .then(response => {
        if (!!response.error) {
          alert("incorrect email/password combination")
          history.push("/LogIn")
        } else {
          localStorage.setItem("token", response.token)
          dispatch({ type: "LOG USER IN", payload: response.userObj })
          // history.push("/BrowseCampaigns")
        }
      })
      .catch((error) => {
        console.log("Log Users In action Error - ", error)
      });
    }
  } // END LogUserIn function

  function autoLogIn (history) {
    return function (dispatch) {
      if(localStorage.token == undefined || localStorage.token == "undefined"){
      }else{
        let token = localStorage.token
        fetch( backendURL + "autologin", {
          method: "GET",
          headers: {
            "content-type": "application/json",
            accepts: "application/json",
            Authorization: `${token}`
          }
        })
          .then(resp => resp.json())
          .then(response => {
            if (response.status === "error") {
              alert("incorrect email/password combination")
              history.push("/LogIn")
            } else {
              dispatch({ type: "AUTO LOG USER IN", payload: response.userObj })
              dispatch({ type: "SET USER ROLL SUM", payload: response.userRollSums })
              dispatch({ type: "SET USER DICE ROLLS", payload: response.userDiceRolls })
              dispatch({ type: "SET ALL ROLL SUM", payload: response.allRollSums })
              dispatch({ type: "SET ALL DICE ROLLS", payload: response.allDiceRolls })            }
        })
        .catch((error) => {
          console.log("autoLoginFETCHError", error)
        });
      }// ends IF statement about localstorage.token
    } // ends Thunk middlewear function
  } // END AutoLogIn function

  function logOut (history) {
    return function (dispatch) {
      dispatch({ type: "LOG USER OUT", payload: {}})
      localStorage.removeItem("token")
      history.push("/about")
    } // ends Thunk dispatch function
  } // ends logOut function




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
} // stb_RollSum



function stb_commitGameToHistory (userId, gameDiceRolls, gameDiceSums, die1, die2) {
  let sums = ""
  switch(die1 + die2) {
    case 2:
        sums = {...gameDiceSums, two: gameDiceSums["two"] + 1, totalRolls: gameDiceSums["totalRolls"] + 1, user_id: userId}
      break;
    case 3:
        sums = {...gameDiceSums, three: gameDiceSums["three"] + 1, totalRolls: gameDiceSums["totalRolls"] + 1, user_id: userId}
      break;
    case 4:
        sums = {...gameDiceSums, four: gameDiceSums["four"] + 1, totalRolls: gameDiceSums["totalRolls"] + 1, user_id: userId}
      break;
    case 5:
        sums = {...gameDiceSums, five: gameDiceSums["five"] + 1, totalRolls: gameDiceSums["totalRolls"] + 1, user_id: userId}
      break;
    case 6:
        sums = {...gameDiceSums, six: gameDiceSums["six"] + 1, totalRolls: gameDiceSums["totalRolls"] + 1, user_id: userId}
      break;
    case 7:
        sums = {...gameDiceSums, seven: gameDiceSums["seven"] + 1, totalRolls: gameDiceSums["totalRolls"] + 1, user_id: userId}
      break;
    case 8:
        sums = {...gameDiceSums, eight: gameDiceSums["eight"] + 1, totalRolls: gameDiceSums["totalRolls"] + 1, user_id: userId}
      break;
    case 9:
        sums = {...gameDiceSums, nine: gameDiceSums["nine"] + 1, totalRolls: gameDiceSums["totalRolls"] + 1, user_id: userId}
      break;
    case 10:
        sums = {...gameDiceSums, ten: gameDiceSums["ten"] + 1, totalRolls: gameDiceSums["totalRolls"] + 1, user_id: userId}
      break;
    case 11:
        sums = {...gameDiceSums, eleven: gameDiceSums["eleven"] + 1, totalRolls: gameDiceSums["totalRolls"] + 1, user_id: userId}
      break;
    case 12:
        sums = {...gameDiceSums, twelve: gameDiceSums["twelve"] + 1, totalRolls: gameDiceSums["totalRolls"] + 1, user_id: userId}
      break;
  }
  let rolls = { ...gameDiceRolls, user_id: userId}
  // let sums = {...gameDiceSums, key: gameDiceSums[number] + 1, totalRolls: gameDiceSums["totalRolls"] + 1, user_id: userId}
  let game = {user_id: userId, win: false}
  return function (dispatch) {
  fetch(backendURL + "stb-commitgame", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accepts: "application/json"
    },
    body: JSON.stringify({ shut_the_box_game: game, shut_the_box_dice_roll: rolls, shut_the_box_roll_sum: sums })
  })
    .then(resp => resp.json())
    .then(response => {
      if (response.errors) {
        alert(response.errors)
      } else {
        dispatch({ type: "SET GAME SUM", payload: {two: 0,three: 0,four: 0,five: 0,six: 0,seven: 0,eight: 0,nine: 0,ten: 0,eleven: 0,twelve: 0,totalRolls: 0} })
        dispatch({ type: "SET GAME DICE ROLL", payload: { one: 0,two: 0,three: 0,four: 0,five: 0,six: 0 } })
      }
    })
  }  // Ends SignUp THUNK function
} // ends SignUp funciton



export { 
  signUp,
  logUserIn,
  autoLogIn,
  logOut,
  stb_RollSum,
  stb_commitGameToHistory,
}
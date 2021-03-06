
let backendURL = process.env.REACT_APP_FETCH_LOCATION

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
        history.push("/ShutTheBox")
      }
    })
  }  // Ends SignUp THUNK function
} // ends SignUp funciton

function logUserIn (accountCredentials, history) {
  return function (dispatch) {
    fetch(backendURL + "login", {
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
          dispatch({ type: "SET USER ROLL SUM", payload: response.userRollSums })
          dispatch({ type: "SET USER DICE ROLLS", payload: response.userDiceRolls })
          dispatch({ type: "SET ALL ROLL SUM", payload: response.allRollSums })
          dispatch({ type: "SET ALL DICE ROLLS", payload: response.allDiceRolls })   
          history.push("/ShutTheBox")
        }
      })
      .catch((error) => {
        console.log("Log Users In action Error - ", error)
        console.alert("Bad Login ID and Password Combo")
      });
    }
  } // END LogUserIn function

function autoLogIn (history) {
  return function (dispatch) {
    if(localStorage.token === undefined || localStorage.token === "undefined"){
      
      fetch( backendURL + "stb-guestrollhistory")
        .then(resp => resp.json())
        .then(response => {
          if (!!response.error) {
            // history.push("/LogIn")
          } else {
            dispatch({ type: "SET USER ROLL SUM", payload: response.userRollSums })
            dispatch({ type: "SET USER DICE ROLLS", payload: response.userDiceRolls })
            dispatch({ type: "SET ALL ROLL SUM", payload: response.allRollSums })
            dispatch({ type: "SET ALL DICE ROLLS", payload: response.allDiceRolls })            }
      })
      .catch((error) => {
        console.log("autoLoginFETCHError", error)
      });
    }else{
      let token = localStorage.token
      console.log("TM- local storage token = ", token)
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
          if (!!response.error) {
            localStorage.removeItem("token")
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
      fetch( backendURL + "stb-guestrollhistory")
        .then(resp => resp.json())
        .then(response => {
          if (!!response.error) {
            // alert("incorrect email/password combination")
            // history.push("/LogIn")
          } else {
            dispatch({ type: "SET USER ROLL SUM", payload: response.userRollSums })
            dispatch({ type: "SET USER DICE ROLLS", payload: response.userDiceRolls })
            dispatch({ type: "SET ALL ROLL SUM", payload: response.allRollSums })
            dispatch({ type: "SET ALL DICE ROLLS", payload: response.allDiceRolls })            }
          })
          .catch((error) => {
            console.log("autoLoginFETCHError", error)
          });
          
      dispatch({ type: "LOG USER OUT", payload: { first_name: "Guest", id: 1}})
      localStorage.removeItem("token")
      history.push("/shutthebox")
    } // ends Thunk dispatch function
  } // ends logOut function





function stb_RollSum(rollSum, gameRollSums, sessionRollSums, userRollSums, allRollSums) {
  let number = ""
  switch (rollSum) {
    case 2: number = "two"
      break;
    case 3: number = "three"
      break;
    case 4: number = "four"
        break;
    case 5: number = "five"
        break;
    case 6: number = "six"
      break;
    case 7: number = "seven"
      break;
    case 8: number = "eight"
        break;
    case 9: number = "nine"
        break;
    case 10: number = "ten"
        break;
    case 11: number = "eleven"
        break;
    case 12: number = "twelve"
      break;
    default: ;
    } // end switch
    return function (dispatch) {  
      dispatch({ type: "ADD GAME SUM", payload: {[number]: gameRollSums[number]+1, totalRolls: gameRollSums["totalRolls"]+1} })
      dispatch({ type: "ADD SESSION SUM", payload: {[number]: sessionRollSums[number]+1, totalRolls: sessionRollSums["totalRolls"]+1} })
      dispatch({ type: "ADD USER SUM", payload: {[number]: userRollSums[number]+1, totalRolls: userRollSums["totalRolls"]+1} })
      dispatch({ type: "ADD ALL SUM", payload: {[number]: allRollSums[number]+1, totalRolls: allRollSums["totalRolls"]+1} })
    }// Ends dispatch
} // stb_RollSum


function stb_DiceRoll(die1, die2, gameDiceRolls, sessionDiceRolls, userDiceRolls, allDiceRolls) {
return function (dispatch) { 
  let dienum1 = ""
  let dienum2 = ""
  switch (die1) {
    case 1: dienum1 = "one"
      break;
    case 2: dienum1 = "two"
      break;
    case 3: dienum1 = "three"
      break;
    case 4: dienum1 = "four"
      break;
    case 5: dienum1 = "five"
      break;
    case 6: dienum1 = "six"
      break;
    default: ;
  } // ends die1 switch statement
  if (die1 === die2) {
    dispatch({ type: "ADD GAME ROLL", payload: {[dienum1]: gameDiceRolls[dienum1]+2} })
    dispatch({ type: "ADD SESSION ROLL", payload: {[dienum1]: sessionDiceRolls[dienum1]+2} })
    dispatch({ type: "ADD USER ROLL", payload: {[dienum1]: userDiceRolls[dienum1]+2} })
    dispatch({ type: "ADD ALL ROLL", payload: {[dienum1]: allDiceRolls[dienum1]+2} })
  }  else {
    switch (die2) {
      case 1: dienum2 = "one"
        break;
      case 2: dienum2 = "two"
        break;
      case 3: dienum2 = "three"
        break;
      case 4: dienum2 = "four"
        break;
      case 5: dienum2 = "five"
        break;
      case 6: dienum2 = "six"
        break;
      default: ;
    } // ends Switch for dieNum2
    dispatch({ type: "ADD GAME ROLL", payload: {[dienum1]: gameDiceRolls[dienum1]+1, [dienum2]: gameDiceRolls[dienum2]+1} })
    dispatch({ type: "ADD SESSION ROLL", payload: {[dienum1]: sessionDiceRolls[dienum1]+1, [dienum2]: sessionDiceRolls[dienum2]+1} })
    dispatch({ type: "ADD USER ROLL", payload: {[dienum1]: userDiceRolls[dienum1]+1, [dienum2]: userDiceRolls[dienum2]+1} })
    dispatch({ type: "ADD ALL ROLL", payload: {[dienum1]: allDiceRolls[dienum1]+1, [dienum2]: allDiceRolls[dienum2]+1} })
  } // ends ELSE
  
  }// Ends dispatch
} // stb_DiceRoll



function stb_commitLosingGameToHistory (userId, gameDiceRolls, gameDiceSums, die1, die2) {
  let game = {wins: 0, losses: 1}
  return function (dispatch) {
  fetch(backendURL + "stb-commitgame", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accepts: "application/json"
    },
    body: JSON.stringify({ user_id: userId, shut_the_box_game: game, shut_the_box_dice_roll: gameDiceRolls, shut_the_box_roll_sum: gameDiceSums })
  })
    .then(resp => resp.json())
    .then(response => {
      if (response.errors) {
        alert(response.errors)
      } else {
        console.log(response)
        dispatch({ type: "SET GAME SUM", payload: {two: 0,three: 0,four: 0,five: 0,six: 0,seven: 0,eight: 0,nine: 0,ten: 0,eleven: 0,twelve: 0,totalRolls: 0} })
        dispatch({ type: "SET GAME ROLL", payload: { one: 0,two: 0,three: 0,four: 0,five: 0,six: 0 } })
      }
    })
  }  // Ends stb_commitLosingGameToHistory THUNK function
} // ends stb_commitLosingGameToHistory funciton


function stb_commitWinningGameToHistory (userId, gameDiceRolls, gameDiceSums) {
  let game = {wins: 1, losses: 0}
  return function (dispatch) {
  fetch(backendURL + "stb-commitgame", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accepts: "application/json"
    },
    body: JSON.stringify({ user_id: userId, shut_the_box_game: game, shut_the_box_dice_roll: gameDiceRolls, shut_the_box_roll_sum: gameDiceSums })
  })
    .then(resp => resp.json())
    .then(response => {
      if (response.errors) {
        alert(response.errors)
      } else {
        console.log(response)
        dispatch({ type: "SET GAME SUM", payload: {two: 0,three: 0,four: 0,five: 0,six: 0,seven: 0,eight: 0,nine: 0,ten: 0,eleven: 0,twelve: 0,totalRolls: 0} })
        dispatch({ type: "SET GAME ROLL", payload: { one: 0,two: 0,three: 0,four: 0,five: 0,six: 0 } })
      }
    })
  }  // Ends stb_commitWinningGameToHistory THUNK function
} // ends stb_commitWinningGameToHistory funciton


function stb_runSimulationWithVariables(numberOfGames, higherThanThisNumber, innerOrOuter, startTime) {
  return function (dispatch) {
    dispatch({ type: "UNSET SIMULATOR ROUND RESULTS" })
    fetch(backendURL + "stb-RunStbSimulator", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({ numberOfGames: numberOfGames, higherThanThisNumber: higherThanThisNumber, innerOrOuter: innerOrOuter})
    })
    .then(resp => resp.json())
    .then(response => {
      if (response.errors) {
        alert(response.errors)
      } else {
        console.log("response = ", response)
        const simulatorRoundResults = {games: parseInt(numberOfGames, 10), single_tile_above_number: higherThanThisNumber, innerOrOuter: innerOrOuter, numberOfWins: response.gameResults.wins, numberOfLosses: response.gameResults.losses}
        // console.log(simulatorRoundResults)
        dispatch({ type: "SET SIMULATOR ROUND RESULTS", payload: simulatorRoundResults })
        dispatch({ type: "SET SIMULATOR HISTORY RESULTS", payload: response.allHistoryData })
        console.log("Processing Time = ", ((+ new Date()) - startTime)/1000 )
      }
    })
  }  // Ends stb_runSimulationWithVariables THUNK function
}


function stb_setSimulationHistory(numberOfGames, higherThanThisNumber, innerOrOuter) {
  return function (dispatch) {
    fetch(backendURL + "stb-RunStbSimulator")
    .then(resp => resp.json())
    .then(response => {
      console.log(response)
      if (response.errors) {
        alert(response.errors)
      } else {
        dispatch({ type: "SET SIMULATOR HISTORY RESULTS", payload: response.allHistoryData })
      }
    })
  }  // Ends stb_setSimulationHistory THUNK function
}


export { 
  signUp,
  logUserIn,
  autoLogIn,
  logOut,
  stb_RollSum,
  stb_DiceRoll,
  stb_commitLosingGameToHistory,
  stb_commitWinningGameToHistory,
  stb_runSimulationWithVariables,
  stb_setSimulationHistory
}
import { combineReducers } from 'redux'

let defaultState = {
  loggedInUserObj: { first_name: "Guest", id: 1},
  stb_gameDiceRolls: { one: 0,two: 0,three: 0,four: 0,five: 0,six: 0 },
  stb_gameRollSums: {two: 0,three: 0,four: 0,five: 0,six: 0,seven: 0,eight: 0,nine: 0,ten: 0,eleven: 0,twelve: 0,totalRolls: 0},
  stb_sessionDiceRolls: { one: 0,two: 0,three: 0,four: 0,five: 0,six: 0 },
  stb_sessionRollSums: {two: 0,three: 0,four: 0,five: 0,six: 0,seven: 0,eight: 0,nine: 0,ten: 0,eleven: 0,twelve: 0,totalRolls: 0},
  stb_userDiceRolls: {one: 0,two: 0,three: 0,four: 0,five: 0,six: 0},
  stb_userRollSums: {two: 0,three: 0,four: 0,five: 0,six: 0,seven: 0,eight: 0,nine: 0,ten: 0,eleven: 0,twelve: 0,totalRolls: 0},
  stb_allDiceRolls: {one: 0,two: 0,three: 0,four: 0,five: 0,six: 0},
  stb_allRollSums: {two: 0,three: 0,four: 0,five: 0,six: 0,seven: 0,eight: 0,nine: 0,ten: 0,eleven: 0,twelve: 0,totalRolls: 0  },
//   stb_simulatorRoundDiceRolls: {one: 0,two: 0,three: 0,four: 0,five: 0,six: 0},
//   stb_simulatorRoundRollSums: {two: 0,three: 0,four: 0,five: 0,six: 0,seven: 0,eight: 0,nine: 0,ten: 0,eleven: 0,twelve: 0,totalRolls: 0  },
//   stb_simulatorHistoryDiceRolls: {one: 0,two: 0,three: 0,four: 0,five: 0,six: 0},
//   stb_simulatorHistoryRollSums: {two: 0,three: 0,four: 0,five: 0,six: 0,seven: 0,eight: 0,nine: 0,ten: 0,eleven: 0,twelve: 0,totalRolls: 0  },
  stb_simulatorRound: {numberOfGames: 0, single_tile_above_number: 0, innerOrOuter: "inner", numberOfWins: 0, numberOfLosses: 0},
  stb_simulatorHistory: []
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




function stb_gameDiceRollsReducer(state = defaultState.stb_gameDiceRolls, action) {
  switch (action.type) {
      case "ADD GAME ROLL":
          return {...state, ...action.payload}
        case "SET GAME ROLL":
            return { ...action.payload}
      default:
          return state
  }
} // ends stb_gameDiceRollsReducer

function stb_gameRollSumsReducer(state = defaultState.stb_gameRollSums, action) {
  switch (action.type) {
      case "ADD GAME SUM":
          return {...state, ...action.payload}
      case "SET GAME SUM":
          return { ...action.payload}
      default:
          return state
  }
} // ends stb_gameRollSumsReducer

function stb_sessionDiceRollsReducer(state = defaultState.stb_sessionDiceRolls, action) {
  switch (action.type) {
      case "ADD SESSION ROLL":
          return {...state, ...action.payload}
      default:
          return state
  }
} // ends stb_sessionDiceRollsReducer

function stb_sessionRollSumsReducer(state = defaultState.stb_sessionRollSums, action) {
  switch (action.type) {
      case "ADD SESSION SUM":
          return {...state, ...action.payload}
      case "SET SESSION SUM":
          return {...state, ...action.payload}
      default:
          return state
  }
} // ends stb_sessionRollSumsReducer

function stb_userDiceRollsReducer(state = defaultState.stb_userDiceRolls, action) {
  switch (action.type) {
      case "ADD USER ROLL":
          return {...state, ...action.payload}
      case "SET USER DICE ROLLS":
          return {...state, ...action.payload}
      default:
          return state
  }
} // ends stb_userDiceRollsReducer

function stb_userRollSumsReducer(state = defaultState.stb_userRollSums, action) {
  switch (action.type) {
      case "ADD USER SUM":
          return {...state, ...action.payload}
      case "SET USER ROLL SUM":
          return {...state, ...action.payload}
      default:
          return state
  }
} // ends stb_userRollSumsReducer

function stb_allDiceRollsReducer(state = defaultState.stb_allDiceRolls, action) {
  switch (action.type) {
      case "ADD ALL ROLL":
          return {...state, ...action.payload}
      case "SET ALL DICE ROLLS":
          return {...state, ...action.payload}
      default:
          return state
  }
} // ends stb_allDiceRollsReducer

function stb_allRollSumsReducer(state = defaultState.stb_allRollSums, action) {
  switch (action.type) {
      case "ADD ALL SUM":
          return {...state, ...action.payload}
      case "SET ALL ROLL SUM":
          return {...state, ...action.payload}
      default:
          return state
  }
} // ends stb_allRollSumsReducer

function stb_simulatorRoundReducer(state = defaultState.stb_simulatorRound, action) {
  switch (action.type) {
      case "SET SIMULATOR ROUND RESULTS":
          return {...state, ...action.payload}
      case "UNSET SIMULATOR ROUND RESULTS":
          return  {numberOfGames: 0}

      default:
          return state
  }
} // ends stb_allRollSumsReducer


function stb_simulatorHistoryReducer(state = defaultState.stb_simulatorHistory, action) {
  switch (action.type) {
      case "SET SIMULATOR HISTORY RESULTS":
          return action.payload
      default:
          return state
  }
} // ends stb_allRollSumsReducer





let reducer = combineReducers({
  loggedInUserObj: loggedInUserReducer,
  stb_gameDiceRolls: stb_gameDiceRollsReducer,
  stb_gameRollSums: stb_gameRollSumsReducer,
  stb_sessionDiceRolls: stb_sessionDiceRollsReducer,
  stb_sessionRollSums: stb_sessionRollSumsReducer,
  stb_userDiceRolls: stb_userDiceRollsReducer,
  stb_userRollSums: stb_userRollSumsReducer,
  stb_allDiceRolls: stb_allDiceRollsReducer,
  stb_allRollSums: stb_allRollSumsReducer,
  stb_simulatorRound: stb_simulatorRoundReducer,
  stb_simulatorHistory: stb_simulatorHistoryReducer
})

export default reducer
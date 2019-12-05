import { combineReducers } from 'redux'

let defaultState = {
  loggedInUserObj: {},
  stb_gameDiceRolls: { one: 0,two: 0,three: 0,four: 0,five: 0,six: 0 },
  stb_gameRollSums: {two: 0,three: 0,four: 0,five: 0,six: 0,seven: 0,eight: 0,nine: 0,ten: 0,eleven: 0,twelve: 0,totalRolls: 0},
  stb_userDiceRolls: {one: 0,two: 0,three: 0,four: 0,five: 0,six: 0},
  stb_userRollSums: {two: 0,three: 0,four: 0,five: 0,six: 0,seven: 0,eight: 0,nine: 0,ten: 0,eleven: 0,twelve: 0,totalRolls: 0},
  stb_allDiceRolls: {one: 0,two: 0,three: 0,four: 0,five: 0,six: 0},
  stb_allRollSums: {two: 0,three: 0,four: 0,five: 0,six: 0,seven: 0,eight: 0,nine: 0,ten: 0,eleven: 0,twelve: 0,totalRolls: 0  },
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
      default:
          return state
  }
} // ends stb_gameDiceRollsReducer

function stb_gameRollSumsReducer(state = defaultState.stb_gameRollSums, action) {
  switch (action.type) {
      case "ADD GAME SUM":
          return {...state, ...action.payload}
      case "SET GAME SUM":
          return {...state, ...action.payload}
      default:
          return state
  }
} // ends stb_gameRollSumsReducer

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





let reducer = combineReducers({
  loggedInUserObj: loggedInUserReducer,
  stb_gameDiceRolls: stb_gameDiceRollsReducer,
  stb_gameRollSums: stb_gameRollSumsReducer,
  stb_userDiceRolls: stb_userDiceRollsReducer,
  stb_userRollSums: stb_userRollSumsReducer,
  stb_allDiceRolls: stb_allDiceRollsReducer,
  stb_allRollSums: stb_allRollSumsReducer,
})

export default reducer
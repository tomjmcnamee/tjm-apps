
// let backendURL = "http://localhost:3000/api/v1/"
// let backendURL = "http://wethepromo-backend.herokuapp.com/api/v1/"
let backendURL = process.env.REACT_APP_FETCH_LOCATION


function stb_RollTotal(rollSum) {
  return { 
    type: "SET ROLL SUM", 
    payload: rollSum}
} // endfetchTopXCamoaig




export { 
    stb_RollTotal,
}
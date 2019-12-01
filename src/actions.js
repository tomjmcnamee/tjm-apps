
// let backendURL = "http://localhost:3000/api/v1/"
// let backendURL = "http://wethepromo-backend.herokuapp.com/api/v1/"
let backendURL = process.env.REACT_APP_FETCH_LOCATION


function fetchTopXCampaigns(path, count_of_returned_campaigns) {
    return function (dispatch) {
  ///---------------------------------
  //FIRST Variable is the number of campaigns you want back
  //Acceptable entries for SECOND variable is are as follows
    // FundsRaised
    // CountOfUniqueContributors
    // TotalContributions
      fetch(backendURL + path + "/" + count_of_returned_campaigns)
      .then(resp => resp.json())
      .then((data) => {
          dispatch({ type: "FETCH TOP CAMPAIGNS", payload: data.sort((a, b) => (a.created_at < b.created_at) ? 1 : -1) })
      })
    } 
} // endfetchTopXCamoaig

function addCampaignPost (path, campaignFromState, history) {
  return function (dispatch) {
    fetch(backendURL + path, {
      method: "POST",
      headers: {
          "content-type": "application/json",
          accepts: "application/json"
      },
      body: JSON.stringify(campaignFromState)
    })
    .then(resp => resp.json())
    .then((campaignObj) => {
      if (campaignObj.status === "error") {
      } else {
        // let newWorkingObj = data
        // dispatch({ type: "CREATE NEW CAMPAIGN", payload: newWorkingObj })
        
        let promo_details = { ...campaignFromState.promotion_details, campaign_id: campaignObj.id }
        fetch(backendURL + "createPromotionDetails", {
          method: "POST",
              headers: {
                  "content-type": "application/json",
                  accepts: "application/json"
              },
              body: JSON.stringify(promo_details)
            })
            .then(resp => resp.json())
            .then((promoData) => {
              if (promoData.status === "error") {
              } else {
                history.push('/ConfirmedCampaignCreated/' + campaignObj.id)
                
              let newWorkingObj_CampaignAndPromodetails = { ...campaignObj, promoData}
              let promo_specs = { ...campaignFromState.promotion_specs, promotion_detail_id: promoData.id }
                fetch(backendURL + "createPromotionSpecs", {
                  method: "POST",
                      headers: {
                          "content-type": "application/json",
                          accepts: "application/json"
                      },
                      body: JSON.stringify(promo_specs)
                    })
                    .then(resp => resp.json())
                    .then((promoSpecsData) => {
                      if (promoSpecsData.status === "error") {
                      } else {
                        let newWorkingObj_Campaign_PromoDetails_PromoSpecs = { ...newWorkingObj_CampaignAndPromodetails, promoSpecsData}
                        
                        
                        
                // this structures the data so the aray can be posted.  This can be simplified with build create
                        let geoDetails_Arr = []
                        let i = 0
                        switch (promo_details.intended_geographic_reach_id) {
                          case ("1"):
                              while (i < campaignFromState.geographic_reach_details.configured_towns_arr.length) {
                                geoDetails_Arr.push({promotion_detail_id: promoSpecsData.promotion_detail_id,
                                  intended_geographic_reach_id: promo_details.intended_geographic_reach_id,
                                    location: campaignFromState.geographic_reach_details.configured_towns_arr[i].city_name + ", " + campaignFromState.geographic_reach_details.configured_towns_arr[i].state,
                                    range: campaignFromState.geographic_reach_details.configured_towns_arr[i].radius})
                                i++
                              }
                              break
                            case ("2"):
                                while (i < campaignFromState.geographic_reach_details.configured_states_arr.length) {
                                  geoDetails_Arr.push({promotion_detail_id: promoSpecsData.promotion_detail_id,
                                    intended_geographic_reach_id: promo_details.intended_geographic_reach_id,
                                      location: campaignFromState.geographic_reach_details.configured_states_arr[i].state,
                                      range: campaignFromState.geographic_reach_details.configured_states_arr[i].radius})
                                      i++
                                }
                              break
                              case ("3"):
                                geoDetails_Arr = [ {promotion_detail_id: promoSpecsData.promotion_detail_id,
                                                    intended_geographic_reach_id: promo_details.intended_geographic_reach_id,
                                                    location: "United States",
                                                    range: "0"}]
                                                    break
                                                    defualt:
                            break
                          } // ends Intended Geographic Reach switch statement 
                          
                          // This loops through each of the Location/Range objects built immediately above and 
                          // posts them to the DB
                          let ind = 0
                          while (ind < geoDetails_Arr.length) {
                            
                          fetch(backendURL + "createGeoDetailsEntries", {
                            method: "POST",
                                headers: {
                                  "content-type": "application/json",
                                    accepts: "application/json"
                                },
                                body: JSON.stringify({ ...geoDetails_Arr[ind]})
                              })
                              .then(resp => resp.json())
                              .then((promoSpecsData) => {
                                if (promoSpecsData.status === "error") {
                                } else {
                                  let newWorkingObj = { ...newWorkingObj_Campaign_PromoDetails_PromoSpecs, geographic_reach_details_arr: geoDetails_Arr}
                                  dispatch({ type: "CREATE NEW CAMPAIGN", payload: newWorkingObj })
                                } // closes promotion Specs's final return error if statement
                              }) // Closes Create PromoSpec final Then
                              .catch((error) => {
                                console.log("Add Campaign Post action errors - ", error)
                              }) // closes Create Promotion Spec Catch
                              ind++
                            } // ends While Statement
                            
                            
                      } // closes promotion Specs's final return error if statement
                    }) // Closes Create PromoSpec final Then
                    .catch((error) => {
                      console.log("Add Campaign Post action errors - ", error)
                    }) // closes Create Promotion Spec Catch
              } // closes promotion detail's final THEN statment error if statement
            }) 
            .catch((error) => {
              console.log("Add Campaign Post action errors - ", error)
            }) // closes Create Promotion Details Catch
      } // closes Create Promotion error's IF statement
    })// closes Create Campaign final Then
    .catch((error) => {
      console.log("Add Campaign Post action errors - ", error)
    }) // closes Create Campaign catch
  } // ends initial dispatch
} //end addCampaignPost





function addCampaignToFavoritesFetch (campaignId, userId ) {
  return function (dispatch) {
    fetch(backendURL + "favorited_campaigns/", {
      method: "POST",
          headers: {
            "content-type": "application/json",
              accepts: "application/json"
          },
          body: JSON.stringify({ user_account_id: userId, campaign_id: campaignId})
        })
    .then( resp => resp.json())
    .then(( favorited ) => {
      if (favorited.status === "error") {
      } else {
        dispatch({ type: "ADD CAMPAIGN TO USER FAVORITES", payload: favorited })
        alert("Campaign Added To Your Favorites")
      }
    })
  } //end function dispatch
} // end addCampaignToFavoritesFetch function


function setSelectedCampaignAndContributions (campaignObj, history) {
  return function (dispatch) {
    fetch(backendURL + "selectedCampaignContributions/" + campaignObj.id)
    .then( resp => resp.json())
    .then(( response ) => {
      dispatch({ type: "SET SELECTED CAMPAIGN", payload: campaignObj })
      dispatch({ type: "SELECTED CAMPAIGN CONTRIBUTION OBJECTS", payload: response.selectedCampaignContributions })
      history.push('/ViewCampaignDetails/' + campaignObj.id)

    })
  } //end function dispatch
} // end setSelectedCampaignAndContributions function

function setSelectedCampaignObj (campaignObjId, history) {
  return function (dispatch) {
    fetch(backendURL + "campaigns/" + campaignObjId)
    .then( resp => resp.json())
    .then(( campaignObj ) => {
      fetch(backendURL + "selectedCampaignContributions/" + campaignObj.id)
      .then( resp => resp.json())
      .then(( response ) => {
        dispatch({ type: "SET SELECTED CAMPAIGN", payload: campaignObj })
        dispatch({ type: "SELECTED CAMPAIGN CONTRIBUTION OBJECTS", payload: response.selectedCampaignContributions })
      })
    })
  } //end function dispatch
} // end setSelectedCampaignAndContributions function

function addNewCampaignObj (campaignObjId, history) {
  return function (dispatch) {
    fetch(backendURL + "campaigns/" + campaignObjId)
    .then( resp => resp.json())
    .then(( campaignObj ) => {
      dispatch({ type: "SET SELECTED CAMPAIGN", payload: campaignObj })
      dispatch({ type: "ADD NEW CAMPAIGN TO TOP CAMPAIGNS ARR", payload: campaignObj })
      
    })
  } //end function dispatch
} // end setSelectedCampaignAndContributions function

function fetchCampaignFormDropdownOptions() {
  return function (dispatch) {
    fetch( backendURL + "campaigns/fetchcreatecampaignformdropdowns")
    .then(resp => resp.json())
    .then(arr => {
      dispatch({ type: "SET FORM DROPDOWN OPTIONS", payload: arr })
    })
  } //end function dispatch
} // end fetchCampaignFormDropdownOptions function


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
          dispatch({ type: "FETCH LOGGED IN USERS SUPPORTED CAMPAIGNS", payload: response.loggedInUserSupportedCampaignObjsArr })
          dispatch({ type: "FETCH LOGGED IN USERS CAMPAIGN CONTRIBUTION OBJS", payload: response.campaignContributionsOjbsArr })
          dispatch({ type: "LOGGED IN USERS FAVORITED CAMPAIGNS", payload: response.favoritedCampaigns[0] })
          history.push("/BrowseCampaigns")
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
              dispatch({ type: "FETCH LOGGED IN USERS SUPPORTED CAMPAIGNS", payload: response.loggedInUserSupportedCampaignObjsArr })
              dispatch({ type: "FETCH LOGGED IN USERS CAMPAIGN CONTRIBUTION OBJS", payload: response.campaignContributionsOjbsArr })
              dispatch({ type: "LOGGED IN USERS FAVORITED CAMPAIGNS", payload: response.favoritedCampaigns[0] })
            }
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

  function fetchAddNewCampaignContribution (path, campaign_id, loggedInUserId, contributionAmount, contributor_comment, history){
    return function (dispatch) {
      fetch(backendURL + path, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accepts: "application/json"
        },
        body: JSON.stringify({ campaign_id: campaign_id, account_id: loggedInUserId, contribution_amount: contributionAmount, contributor_comment: contributor_comment})
      })
        .then(resp => resp.json())
        .then(response => {
          if (response.errors) {
            alert(response.errors)
          } else {
            dispatch({ type: "ADD CAMPAIGN TO USER'S ARR", payload: response })
            dispatch({ type: "ADD NEW CONTRIBUTION CAMPAIGN'S STATE CONTRIBUTIONS ARRAY", payload: response })
            // dispatch({ type: "FETCH LOGGED IN USERS SUPPORTED CAMPAIGNS", payload: response.loggedInUserSupportedCampaignObjsArr })
            // dispatch({ type: "FETCH LOGGED IN USERS CAMPAIGN CONTRIBUTION OBJS", payload: response.campaignContributionsOjbsArr })
            // history.push("/userhome")
          } // ends IF statement
        }) // ends final THEN 
    } // ends Thunk Dispatch
  } // ends addNewCampaignContribution function


  function saveEditedFBPostDetails (path, newFBPostDetails, promotionDetailID) {
    return function (dispatch) {
      fetch(backendURL + path + promotionDetailID, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          accepts: "application/json"
        },
        body: JSON.stringify(newFBPostDetails)
      })
        .then(resp => resp.json())
        .then(updatedObj => {
          if (updatedObj.errors) {
            alert(updatedObj.errors)
          } else {
            dispatch({ type: "UPDATE WORKING CAMPOAIGN OBJ", payload: updatedObj })
            dispatch({ type: "UPDATE CHANGED CAMPAIGN OBJ IN TOPCAMPAIGNSARRAY", payload: updatedObj })
            // dispatch({ type: "FETCH LOGGED IN USERS SUPPORTED CAMPAIGNS", payload: response.loggedInUserSupportedCampaignObjsArr })
            // dispatch({ type: "FETCH LOGGED IN USERS CAMPAIGN CONTRIBUTION OBJS", payload: response.campaignContributionsOjbsArr })
            // history.push("/userhome")
          } // ends IF statement
        }) // ends final THEN 
    } // ends Thunk Dispatch
  } // ends saveEditedFBPostDetails function


  function signUp (userInfo, history) {
    return function (dispatch) {
    fetch(backendURL + "user_accounts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({ user_account: userInfo })
    })
      .then(resp => resp.json())
      .then(response => {
        if (response.errors) {
          alert(response.errors)
        } else {
          localStorage.setItem("token", response.token)
          dispatch({ type: "LOG USER IN", payload: response.userObj })
          dispatch({ type: "FETCH LOGGED IN USERS SUPPORTED CAMPAIGNS", payload: response.loggedInUserSupportedCampaignObjsArr })
          dispatch({ type: "FETCH LOGGED IN USERS CAMPAIGN CONTRIBUTION OBJS", payload: response.campaignContributionsOjbsArr })
          history.push("/BrowseCampaigns")
        }
      })
    }  // Ends SignUp THUNK function
  } // ends SignUp funciton


export { fetchTopXCampaigns, 
        fetchCampaignFormDropdownOptions,
        addCampaignPost, 
        logUserIn,
        setSelectedCampaignAndContributions,
        autoLogIn,
        signUp,
        logOut,
        fetchAddNewCampaignContribution,
        saveEditedFBPostDetails,
        setSelectedCampaignObj,
        addCampaignToFavoritesFetch,
        addNewCampaignObj
      }
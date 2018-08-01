import {REQUEST_LAST_MATCH_STATS, RECIEVE_LAST_MATCH_STATS, REQUEST_LAST_MATCH, RECIEVE_LAST_MATCH, RECIEVE_LAST_MATCH_INFO, RECEIVE_ITEMS, INVALIDATE_ITEMS, REQUEST_ITEMS, REQUEST_PROFILE, RECEIVE_PROFILE} from "./types";
import axios from 'axios';

function requestPosts(item) {
  return {
    type: REQUEST_ITEMS,
    item
  }
}

function requestProfile(item) {
  return {
    type: REQUEST_PROFILE,
    item
  }
}

function requestLastMatch(item) {
  return {
    type: REQUEST_ITEMS,
    item
  }
}

function requestLastMatchStats(item) {
  return {
    type: REQUEST_LAST_MATCH_STATS,
    item
  }
}

function receivePosts(data) {
  console.log(data)
  return {
    type: RECEIVE_ITEMS,
    data,
    // items: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export function invalidateItems(item) {
  return {
    type: INVALIDATE_ITEMS,
    item
  }
}

function receiveProfile(data) {
  console.log(data)
  return {
    type: RECEIVE_PROFILE,
    data,
    // items: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

function receiveLastMatch(data) {
  console.log(data)
  return {
    type: RECIEVE_LAST_MATCH,
    data,
    // items: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

function receiveLastMatchInfo(data) {
  console.log(data)
  return {
    type: RECIEVE_LAST_MATCH_INFO,
    data,
    // items: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

function receiveLastMatchStats(data) {
  return {
    type: RECIEVE_LAST_MATCH,
    data,
    // items: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

// Meet our first thunk action creator!
// Though its insides are different, you would use it just like any other action creator:
// store.dispatch(fetchPosts('reactjs'))
export function fetchPosts(item) {
  return function (dispatch) { 
    dispatch(requestPosts(item))

    const baseAPIURL = 'https://na1.api.riotgames.com/'
    const apiKey = "RGAPI-de2f4040-7b03-4737-bdec-c6894c2aa7fc";
    const championsEndPoint = `/lol/summoner/v3/summoners/by-name/${item}`;
    const baseEnd = '?api_key=' + apiKey;

    return axios({
         method: "GET",
         baseURL: baseAPIURL,
         url: championsEndPoint + baseEnd,
         responseType:"json",
         headers:{
          'crossDomain' : 'true',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
          //  "Content-Type": "application/json",
           'Content-Type': 'text/plain',
           "Accept": "application/json",
           "X-Custom-Header": "Get player"}
       })
      .then(
        response => dispatch(receivePosts(response.data)),
        error => console.log('An error occurred.', error)
      )
      .then(res => dispatch(getProfile(res.data.accountId, res.data.id)),
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.
      )
  }
}

export function getProfile(item, lore) {
  return function (dispatch) { 
    dispatch(requestProfile(item))

    const baseAPIURL = 'https://na1.api.riotgames.com/'
    const apiKey = "RGAPI-de2f4040-7b03-4737-bdec-c6894c2aa7fc";
    const matchEndPoint = `/lol/match/v3/matchlists/by-account/${item}`;
    const baseEnd = '?api_key=' + apiKey;

    return axios({
         method: "GET",
         baseURL: baseAPIURL,
         url: matchEndPoint + baseEnd,
         responseType:"json",
         headers:{
          'crossDomain' : 'true',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
          //  "Content-Type": "application/json",
           'Content-Type': 'text/plain',
           "Accept": "application/json",
           "X-Custom-Header": "Get player"}
       })
      .then(
        response => dispatch(receiveProfile(response.data)),
        error => console.log('An error occurred.', error)
      )
      .then(res => dispatch(getMatch(res.data.matches[0].gameId, lore))
      
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.
       
      )
  }
}


export function getMatch(match, lore) {
  console.log(lore)

  return function (dispatch) { 
    dispatch(requestLastMatch(match))
    const baseAPIURL = 'https://na1.api.riotgames.com/'
    const apiKey = "RGAPI-de2f4040-7b03-4737-bdec-c6894c2aa7fc";
    const matchEndPoint = `/lol/match/v3/matches/${match}`;
    const baseEnd = '?api_key=' + apiKey;

    return axios({
         method: "GET",
         baseURL: baseAPIURL,
         url: matchEndPoint + baseEnd,
         responseType:"json",
         headers:{
          'crossDomain' : 'true',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
          //  "Content-Type": "application/json",
           'Content-Type': 'text/plain',
           "Accept": "application/json",
           "X-Custom-Header": "Get player"}
       })
      .then(
        response => {
          response.data.participantIdentities.forEach((particpantID, playerID) => {
            if(particpantID.player.summonerId === lore ){
              let User = playerID
              dispatch(receiveLastMatch(response.data.participants[User]))
             // dispatch(getLastMatchStats(playerID))
            }
          }  
        );
        dispatch(receiveLastMatchInfo(response.data))
      },
        error => console.log('An error occurred.', error)
      )
  }
}

export function getLastMatchStats(player) {
  return function (dispatch) { 
    dispatch(requestLastMatchStats(player))
    const baseAPIURL = 'https://na1.api.riotgames.com/'
    const apiKey = "RGAPI-de2f4040-7b03-4737-bdec-c6894c2aa7fc";
    const matchEndPoint = `/lol/match/v3/matches/${player}`;
    const baseEnd = '?api_key=' + apiKey;

    return axios({
         method: "GET",
         baseURL: baseAPIURL,
         url: matchEndPoint + baseEnd,
         responseType:"json",
         headers:{
          'crossDomain' : 'true',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
          //  "Content-Type": "application/json",
           'Content-Type': 'text/plain',
           "Accept": "application/json",
           "X-Custom-Header": "Get player"}
       })
      .then(
        response => dispatch(receiveLastMatchStats(response.data)),
        error => console.log('An error occurred.', error)
      )
      .then(res => {
      //   res.data.participantIdentities.forEach((particpantID, playerID) => {
      //     if(particpantID.player.summonerId === lore ){
      //       dispatch(getPlayerID(playerID))
      //     }
      //   }  
      // )
    }
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.
        // const info = data.participantIdentities.forEach((particpantID) => {
        //   console.log(particpantID.player.summonerName)
        // })
      )
  }
}

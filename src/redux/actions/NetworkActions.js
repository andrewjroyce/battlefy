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
  return {
    type: RECEIVE_ITEMS,
    data,
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
  return {
    type: RECEIVE_PROFILE,
    data,
    receivedAt: Date.now()
  }
}

function receiveLastMatch(data) {
  return {
    type: RECIEVE_LAST_MATCH,
    data,
    receivedAt: Date.now()
  }
}

function receiveLastMatchInfo(data) {
  return {
    type: RECIEVE_LAST_MATCH_INFO,
    data,
    receivedAt: Date.now()
  }
}

function receiveLastMatchStats(data) {
  return {
    type: RECIEVE_LAST_MATCH,
    data,
    receivedAt: Date.now()
  }
}

export function fetchPosts(item) {
  return function (dispatch) { 
    dispatch(requestPosts(item))

    const baseAPIURL = 'https://cryptic-headland-94862.herokuapp.com/https://na1.api.riotgames.com/'
    const apiKey = "RGAPI-7e072959-8ce9-4e58-be2c-408ee7c43651";
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
        'Content-Type': 'text/plain',
        "Accept": "application/json",
        "X-Custom-Header": "Get player"}
    })
    .then(
      response => dispatch(receivePosts(response.data)),
      error => console.log('An error occurred.', error)
    )
      .then(res => dispatch(getProfile(res.data.accountId, res.data.id)),
    )
  }
}

export function getProfile(item, lore) {
  return function (dispatch) { 
    dispatch(requestProfile(item))

    const baseAPIURL = 'https://cryptic-headland-94862.herokuapp.com/https://na1.api.riotgames.com/'
    const apiKey = "RGAPI-7e072959-8ce9-4e58-be2c-408ee7c43651";
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
      'Content-Type': 'text/plain',
      "Accept": "application/json",
      "X-Custom-Header": "Get player"}
    })
    .then(
      response => dispatch(receiveProfile(response.data)),
      error => console.log('An error occurred.', error)
    )
    .then(res => dispatch(getMatch(res.data.matches[0].gameId, lore)))
  }
}


export function getMatch(match, lore) {
  return function (dispatch) { 
    dispatch(requestLastMatch(match))
    const baseAPIURL = 'https://cryptic-headland-94862.herokuapp.com/https://na1.api.riotgames.com/'
    const apiKey = "RGAPI-7e072959-8ce9-4e58-be2c-408ee7c43651";
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
            }
        });
        dispatch(receiveLastMatchInfo(response.data))
      },
      error => console.log('An error occurred.', error)
    )
  }
}

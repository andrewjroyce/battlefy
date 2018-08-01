import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

const baseAPIURL = 'https://cryptic-headland-94862.herokuapp.com/https://na1.api.riotgames.com/'
const apiKey = "RGAPI-7007356d-18e1-44a0-b2a8-b3e313768c5f"
const championsEndPoint = '/lol/static-data/v3/summoner-spells/'
const baseEnd = '?api_key=' + apiKey

    
class SpellItem extends Component {
state ={
    started: false,
    spell: ""
}

urlCall = (Spell) => { 
  axios({
    method: "GET",
    baseURL: baseAPIURL,
    url: championsEndPoint + Spell + baseEnd,
    responseType:"json",
    headers:{
    'crossDomain' : 'true',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    'Content-Type': 'text/plain',
    "Accept": "application/json",
    "X-Custom-Header": "Get champions"
    }
  })
  .then((response) =>{
    console.log(response)
      this.setState({spell: response.data.name, level: response.data.summonerLevel}) 
  })
  .catch(function (error) {
    console.log(error)
  })
};

  componentDidMount(){
    if(this.state.started === false) 
    {this.urlCall(this.props.spell), this.setState({started: true})}
  }

  render() {
    return (
      <Typography 
      color="textSecondary">
        {this.props.spell ? "Spell:" + this.state.spell + " Level" + this.state.level : null}
      </Typography>
    );
  }
}

export default SpellItem;

import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

const baseAPIURL = 'https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/'
const apiKey = "RGAPI-7e072959-8ce9-4e58-be2c-408ee7c43651"
const championsEndPoint = '/lol/static-data/v3/summoner-spells/'
const baseEnd = '?api_key=' + apiKey

    
class SpellItem extends Component {
state ={
    started: false,
    spell: ""
}

urlCall = (Spell) => { 
  let cast= Spell;
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
      this.setState({spell: response.data.name, level: response.data.summonerLevel}) 
  })
  .catch((error)=>{
    this.setState({spell: cast, level: "-"})
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

import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

const baseAPIURL = 'https://na1.api.riotgames.com/'
const apiKey = "RGAPI-7007356d-18e1-44a0-b2a8-b3e313768c5f"
const championsEndPoint = '/lol/static-data/v3/champions/'
const baseEnd = '?api_key=' + apiKey

class ListItem extends Component {
state ={
    started: false,
    champ: ""
}

urlCall = (Champ) => { 
    axios({
    method: "GET",
    baseURL: baseAPIURL,
    url: championsEndPoint + Champ + baseEnd,
    responseType:"json",
    headers:{
    'crossDomain' : 'true',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        'Content-Type': 'text/plain',
        "Accept": "application/json",
        "X-Custom-Header": "Get champions"}
    })
    .then((response) =>{
        this.setState({champ: response.data.name}) 
    })
    .catch(function (error) {
        console.log(error)
    })
};


  
componentDidMount(){
    if(this.state.started === false) 
    {this.urlCall(this.props.champ), this.setState({started: true})}
}

  render() {
    return (
      <Typography color="textSecondary">
        {this.props.champ ? "Champ:" + this.state.champ : null}
      </Typography>
    );
  }
}

export default ListItem;

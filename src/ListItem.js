import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

const baseAPIURL = 'https://cors-anywhere.herokuapp.com//https://na1.api.riotgames.com/'
const apiKey = "RGAPI-7e072959-8ce9-4e58-be2c-408ee7c43651"
const championsEndPoint = '/lol/static-data/v3/champions/'
const baseEnd = '?api_key=' + apiKey

class ListItem extends Component {
state ={
    started: false,
    champ: ""
}

urlCall = (Champ) => { 
    let Pro = Champ;  
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
    .catch((error)=>{
        this.setState({champ: Pro})
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

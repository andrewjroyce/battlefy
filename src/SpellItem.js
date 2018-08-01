import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

const baseAPIURL = 'https://na1.api.riotgames.com/'
const apiKey = "RGAPI-de2f4040-7b03-4737-bdec-c6894c2aa7fc"
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
        //  "Content-Type": "application/json",
         'Content-Type': 'text/plain',
         "Accept": "application/json",
         "X-Custom-Header": "Get champions"}
     })
       .then((response) =>{
         console.log(response)
           this.setState({spell: response.data.name, level: response.data.summonerLevel}) 
        //  this.setState({champ: response.data.name})
         // self.setState({loading: false});
         // response.status === 200 ? self.setState({ emailRegistered: true }) : null;
         // response.status === 400 ? self.setState({ emailValid: true}) : ({ emailRegistered: false});
         // console.log(response);
         // console.log(props.api.store.getState())
         // console.log(props)
         // console.log(props.storage.keys("key"))
         // return true;
       })
       .catch(function (error) {
         console.log(error)
         // self.setState({loading: false});
         // let code = JSON.stringify(error.response.data.Code);
         // if (error.response.data.Code === "ACTIVATION_REQUIRED"){
         //   self.setState({emailNeedsActivation: true})
         })
       };

//   renderChampion(Champion){
//         if (this.state.started == false ){
//         this.setState({started: true})
//         this.urlCall(Champion)
//     }
// }
  
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

import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

const baseAPIURL = 'https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/'
const apiKey = "RGAPI-de2f4040-7b03-4737-bdec-c6894c2aa7fc"
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
        //  "Content-Type": "application/json",
         'Content-Type': 'text/plain',
         "Accept": "application/json",
         "X-Custom-Header": "Get champions"}
     })
       .then((response) =>{
           this.setState({champ: response.data.name}) 
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
    {this.urlCall(this.props.champ), this.setState({started: true})}
}

  render() {
    console.log(this.props.champ)
    return (
      <Typography 
      color="textSecondary">
        {this.props.champ ? "Champ:" + this.state.champ : null}
      </Typography>
    );
  }
}

export default ListItem;

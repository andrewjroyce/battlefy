import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import RoundBox from './RoundBox';
import PlayerProfile from './PlayerProfile';
import './App.css';
import GameArea from './GameArea';
import GraphArea from './GraphArea';
import LowerPanel from './LowerPanel';
import SecondGraph from './SecondGraph';
import axios from 'axios';

const styles = {
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  root: {
    backgroundColor: "#DFDCE3",
  },
  gridCenter: {
    display: "flex", alignItems: "center"
  },
  mainContainer:{
    height: 120,
    border: "black solid 2px",
    margin: "9px 9px 0px 0px",
    borderRadius: "5px 5px 0px 0px"
  }
};


class PlayerCard extends Component {
  handleChange = (event, value) => {
    this.setState({ value });
  };
  

fetchUser(){
  const apiKey = "RGAPI-7007356d-18e1-44a0-b2a8-b3e313768c5f"
  const baseAPIURL = 'https://na1.api.riotgames.com'
  const championsEndPoint = '/lol/match/v3/matchlists/by-account/78294'
  const baseEnd = '?api_key=' + apiKey
  
  const urlCall = () => { 
    axios({
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
    .then((response) =>{
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
      })
    };
  urlCall()
}

fetchPositionSummoner(){
  const apiKey = "RGAPI-7007356d-18e1-44a0-b2a8-b3e313768c5f"
  const baseAPIURL = 'https://na1.api.riotgames.com'
  const championsEndPoint = '/lol/league/v3/positions/by-summoner/78294'
  const baseEnd = '?api_key=' + apiKey
  
  const urlCall = () => { 
    axios({
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
    .then((response) =>{
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
  };
  urlCall()
}
  
renderGameArea(){
  return (
    this.props.value ===2 ? 
    <div><GraphArea stats={this.props.stats}/></div> : 
    <GameArea stats={this.props.stats}/>
  )
}

renderLowerArea(){
  return (
    <LowerPanel stats={this.props.stats}/>
  )
}

renderSecondCol(){
 return (
    <RoundBox 
      firstRow={this.props.stats.stats ? this.props.stats.stats.kills + "/" + this.props.stats.stats.assists + "/" + this.props.stats.stats.deaths : "Click A Name"} 
      secondRow={this.props.stats.stats ? 
        (this.props.stats.stats.kills+(this.props.stats.stats.assists/3)/this.props.stats.stats.deaths) + ":1" : "To Fetch Stats"} 
    />
  )
}

renderFirstCol(){
  return (
    <RoundBox 
      firstRow={this.props.match ? this.props.match.gameMode : null}
      secondRow={this.props.match ?  this.props.match.gameCreation : null}
      thirdRow={"Defeat"}
      victory={this.props.stats.stats ? this.props.stats.stats.win : null}
      fourthRow={this.props.match ? this.props.match.gameDuration / 60 : null}
      hidden={this.props.value === 0 ? false : true}
    />
  )
}

  render() {
    return (
      <div style={styles.root}><Grid style={styles.mainContainer} container spacing={0}>
        <Grid item style={styles.gridCenter} >
        <PlayerProfile champion={this.props.stats.championID} name={this.props.title} />
          </Grid>
            <Grid item style={styles.gridCenter} >
          {this.props.value !== 2 ? this.renderFirstCol() : null }
          </Grid>
          <Grid item style={styles.gridCenter} >
            {this.props.value !== 2 ? this.renderSecondCol() : null }
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              {this.renderGameArea()}
            </Grid>
            <Grid item>
              {this.props.value !== 2 ? null : <SecondGraph /> }
            </Grid>
          </Grid>
        </Grid>
        {this.renderLowerArea()}
      </div>
    );
  }
}

export default PlayerCard;

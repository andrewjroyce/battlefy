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

  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  root: {
    backgroundColor: "#DFDCE3",
    
  },
  image: {
    width: 128,
    height: 128,
  },
  paper: {
    display: "flex",
    flex: 1
  },
  control: {
    padding: 2 * 2,
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

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class PlayerCard extends Component {
  handleChange = (event, value) => {
    this.setState({ value });
  };
  

  fetchUser(){
    const apiKey = "RGAPI-de2f4040-7b03-4737-bdec-c6894c2aa7fc"
    const baseAPIURL = 'https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com'
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
          //  "Content-Type": "application/json",
           'Content-Type': 'text/plain',
           "Accept": "application/json",
           "X-Custom-Header": "Get player"}
       })
         .then((response) =>{
          //  let player = response.data
           console.log(response)
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
         urlCall()
  }

  fetchPositionSummoner(){
    const apiKey = "RGAPI-de2f4040-7b03-4737-bdec-c6894c2aa7fc"
    const baseAPIURL = 'https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com'
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
     //      let player = response.data
           console.log(response)
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
         urlCall()
  }
  


renderGameArea(){
  
  return (
    this.props.value ===2 ? <div > <GraphArea stats={this.props.stats}/> </div> : 
    <GameArea stats={this.props.stats}/>

  )
}

componentWillReceiveProps(){
  
}


renderRightSide(){
  return(
    <Typography variant="subheading">Another</Typography>
  )
}

renderLowerArea(){
  return (
    <LowerPanel stats={this.props.stats}/>
  )
}


renderSecondCol(){
 return <RoundBox 
 firstRow={this.props.stats.stats ? this.props.stats.stats.kills + "/" + this.props.stats.stats.assists + "/" + this.props.stats.stats.deaths : "- / - / -"} 
 secondRow={"2.89 :1 KDA "} />
}
renderFirstCol(){
  console.log(this.props.match)
return <RoundBox 
          firstRow={this.props.match ? this.props.match.gameMode : null}
          secondRow={this.props.match ? this.props.match.gameCreation : null}
          thirdRow={"Defeat"}
          victory={this.props.stats.stats ? this.props.stats.stats.win : false}
          fourthRow={this.props.match ? this.props.match.gameDuration / 60 : null}
          hidden={this.props.value === 0 ? false : true}
        />
      }

  render() {
    console.log(this.props.stats)
    return (
      <div style={styles.root}><Grid style={styles.mainContainer} container spacing={0}>
      <Grid item style={styles.gridCenter} >
      <PlayerProfile champion={this.props.stats.championID} name={this.props.title} />
      <button onClick={() => this.fetchUser()} />
      <button onClick={() => this.fetchPositionSummoner()} />

        </Grid>
        
        <Grid item style={styles.gridCenter} >
        {this.props.value !== 2 ? this.renderFirstCol() : null }
        </Grid>
        <Grid item style={styles.gridCenter} >
          {this.props.value !== 2 ? this.renderSecondCol() : null }
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={16}>
            { this.renderGameArea()  }
          </Grid>
          <Grid item>
            {this.props.value !== 2 ? this.renderRightSide() : <SecondGraph /> }
          </Grid>
        </Grid>
      </Grid>
      {this.renderLowerArea()}
</div>
    );
  }
}

export default PlayerCard;

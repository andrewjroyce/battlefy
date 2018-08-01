import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem';
import SpellItem from './SpellItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
  },
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
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
    
  },

  root: {
    flexGrow: 1,
  },
  image: {
    width: 128,
    height: 128,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: 2 * 2,
  },
profileGrid: {
    marginLeft: "auto",
    marginRight: "auto",
    display: 'inline'
},
playerProfile:{
  // textAlign: 'left',
  margin: 10,
  display: 'flex',
  flexDirection: 'column', 
  alignItems: 'center',
  justifyContent:'space-around',
},
roundGrid: {
  marginLeft: "auto",
  marginRight: "auto",
  display: 'inline'
},
roundProfile:{
// textAlign: 'left',
margin: 10,
display: 'flex',
flexDirection: 'column', 
alignItems: 'center',
justifyContent:'space-around',
fontSize: 12
},
};


class GameArea extends Component {
  state = {
    champ: ""
  };

renderChampion(championId){
  return <ListItem champ={championId}/>
}
  
renderSpell1(spell){
  return <SpellItem spell={spell}/>
}

renderSpell2(spell){
  return <SpellItem spell={spell}/>
}

  UNSAFE_componentWillReceiveProps(nextProps){
    if(nextProps.stats!==this.props.stats){
      //Perform some operation
      this.setState({champ: this.props.stats.championId });
      this.renderChampion(this.state.champ);
    }

}

  render() {
    console.log(this.props.stats)
    return (
      <Grid item xs>
      <Typography gutterBottom variant="subheading">
      </Typography>
      <Typography gutterBottom> {this.props.stats ? this.renderSpell1(this.props.stats.spell1Id) : null} </Typography>
      <Typography gutterBottom> {this.props.stats ? this.renderSpell2(this.props.stats.spell2Id) : null} </Typography>
      <Typography color="textSecondary">{this.props.stats ? this.renderChampion(this.props.stats.championId) : null} {this.state.champ}</Typography>
      <Typography color="textSecondary">{this.props.stats ? "Champ level" + this.props.stats.stats.champLevel : null}</Typography>
   </Grid> 
    );
  }
}

export default GameArea;

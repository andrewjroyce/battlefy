import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem';
import SpellItem from './SpellItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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
    return (
      <Grid item xs>
        <Typography gutterBottom> {this.props.stats ? this.renderSpell1(this.props.stats.spell1Id) : null} </Typography>
        <Typography gutterBottom> {this.props.stats ? this.renderSpell2(this.props.stats.spell2Id) : null} </Typography>
        <Typography color="textSecondary">{this.props.stats ? this.renderChampion(this.props.stats.championId) : null} {this.state.champ}</Typography>
        <Typography color="textSecondary">{this.props.stats ? "Champ level" + this.props.stats.stats.champLevel : null}</Typography>
      </Grid> 
    );
  }
}

export default GameArea;

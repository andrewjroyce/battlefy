import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import axios from 'axios';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

const baseAPIURL = 'https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/'
const apiKey = "RGAPI-7007356d-18e1-44a0-b2a8-b3e313768c5f"
const itemEndPoint = '/lol/static-data/v3/items/'
const baseEnd = '?api_key=' + apiKey
    
class LowerPanel extends React.Component {
  state = {
    expanded: null,
    item: "",
    started: false
  };

  getItemName = (Item, Index) => {
    const Ind = Index; 
    axios({
       method: "GET",
       baseURL: baseAPIURL,
       url: itemEndPoint + Item + baseEnd,
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
    .then((response) => {
      console.log(Ind)
        this.setState({Ind: response.data.name}) 
    })
    .catch(function (error) {
      console.log(error)
    })
  };


  handleChange = panel => (event, expanded) => {
    this.setState({expanded: expanded ? panel : false});
    if (this.state.expanded !== 'panel1' && this.props.stats && this.state.started === false ){ 
      this.setState({started: true})
      this.getItemName(this.props.stats.stats.item0, "item0")
    }
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;
    return (
      <div style={{border: "solid black 2px", borderRadius: "0px 0px 5px 5px"}} >
        <ExpansionPanel style={{backgroundColor: "#DFDCE3"}} expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ArrowDropDown />}>
            <Typography className={classes.heading}>Items Used</Typography>
            <Typography className={classes.secondaryHeading}>Items and other Advanced Match Stats</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              {this.state.item0}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

LowerPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LowerPanel);
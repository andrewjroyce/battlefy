import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
// import axios from 'axios';

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

// const baseAPIURL = 'https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/'
// const apiKey = "RGAPI-de2f4040-7b03-4737-bdec-c6894c2aa7fc"
// const itemEndPoint = '/lol/static-data/v3/items/'
// const baseEnd = '?api_key=' + apiKey

    
class LowerPanel extends React.Component {
  state = {
    expanded: null,
    item: ""
  };


  // getItemName = (Item, Index) => {
  //   const Ind = Index; 
  //   axios({
  //      method: "GET",
  //      baseURL: baseAPIURL,
  //      url: itemEndPoint + Item + baseEnd,
  //      responseType:"json",
  //      headers:{
  //       'crossDomain' : 'true',
  //       'Access-Control-Allow-Origin': '*',
  //       'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
  //       'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
  //       //  "Content-Type": "application/json",
  //        'Content-Type': 'text/plain',
  //        "Accept": "application/json",
  //        "X-Custom-Header": "Get champions"}
  //    })
  //      .then((response) =>{
  //        console.log(Ind)
  //          this.setState({item: response.data.name}) 
  //       //  this.setState({champ: response.data.name})
  //        // self.setState({loading: false});
  //        // response.status === 200 ? self.setState({ emailRegistered: true }) : null;
  //        // response.status === 400 ? self.setState({ emailValid: true}) : ({ emailRegistered: false});
  //        // console.log(response);
  //        // console.log(props.api.store.getState())
  //        // console.log(props)
  //        // console.log(props.storage.keys("key"))
  //        // return true;
  //      })
  //      .catch(function (error) {
  //        console.log(error)
  //        // self.setState({loading: false});
  //        // let code = JSON.stringify(error.response.data.Code);
  //        // if (error.response.data.Code === "ACTIVATION_REQUIRED"){
  //        //   self.setState({emailNeedsActivation: true})
  //        })
  //      };


  handleChange = panel => (event, expanded) => {
    this.setState({expanded: expanded ? panel : false});
    if (this.state.expanded !== 'panel1' && this.props.stats){ 
      // this.getItemName(this.props.stats.stats.item0, 0)
      // this.getItemName(this.props.stats.stats.item1, 1)
      // this.getItemName(this.props.stats.stats.item2, 2)
      // this.getItemName(this.props.stats.stats.item3, 3)
      // this.getItemName(this.props.stats.stats.item4, 4)
      // this.getItemName(this.props.stats.stats.item5, 5)

      // var i;
      // for (i=0; i < 6; i++){
      //   var looped = this.props.stats.stats.item
      //   console.log(looped)
      // }
  }
};

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div style={{border: "solid black 2px", borderRadius: "0px 0px 5px 5px"}} >
        <ExpansionPanel style={{backgroundColor: "#DFDCE3"}} expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<AccessAlarmIcon />}>
            <Typography className={classes.heading}>General settings</Typography>
            <Typography className={classes.secondaryHeading}>I am an expansion panel</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
              maximus est, id dignissim quam.
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
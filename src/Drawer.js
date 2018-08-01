import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import {setTitle, fetchPosts} from './redux/actions';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    borderRight: "black solid 1px",
    marginRight: "5px",
    paddingRight: "32px"
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  toolbar:{
  },
  button:{
      width: "100%"
  }
});




class ClippedDrawer extends React.Component{

componentWillMount(){

  // const apiKey = "RGAPI-de2f4040-7b03-4737-bdec-c6894c2aa7fc"
  // const baseAPIURL = 'https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/'
  // const championsEndPoint = '/lol/platform/v3/champions'
  // const baseEnd = '?api_key=' + apiKey
  // const userNameCheck = /^[0-9\\p{L} _\\.]+$/;
  
  // const urlCall = () => { 
  //   axios({
  //      method: "GET",
  //      baseURL: baseAPIURL,
  //      url: championsEndPoint + baseEnd,
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
  //        let champs = response.data.champions
  //        console.log(champs)
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
  //      urlCall()
}
  render(){



    const { classes } = this.props;

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        classes={{paper: classes.drawerPaper,}}
      >
        <div className={classes.toolbar} />
        <List>
            <Button style={styles.button} onClick={() => (this.props.setTitle("Faker"), this.props.fetchPosts("Faker"))}>Faker</Button>
        </List>
        <Divider />
        <List>
            <Button style={styles.button} onClick={() => (this.props.setTitle("Doublelift"), this.props.fetchPosts("Doublelift"))}>Doublelift</Button>
        </List>
        <Divider />
        <List>
            <Button style={styles.button} onClick={() => (this.props.setTitle("Swordart"), this.props.fetchPosts("Swordart"))}>Swordart</Button>
        </List>
        <Divider />
        <List>
            <Button style={styles.button} onClick={() => (this.props.setTitle("Crown"), this.props.fetchPosts("Crown"))}>Crown</Button>
        </List>
        <Divider />
        <List>
            <Button style={styles.button} onClick={() => (this.props.setTitle("Wolf"), this.props.fetchPosts("Wolf"))}>Wolf</Button>
        </List>
        <Divider />
        <List>
        <Button style={styles.button} onClick={() => (this.props.setTitle("Clearlove"), this.props.fetchPosts("Clearlove"))}>Clearlove</Button>
        </List>
        <Divider />
        <List>
        <Button style={styles.button} onClick={() => (this.props.setTitle("Pawn"), this.props.fetchPosts("Pawn"))}>Pawn</Button>
        </List>
        <Divider />
        <List>
        <Button style={styles.button} onClick={() => (this.props.setTitle("Pray"), this.props.fetchPosts("Pray"))}>Pray</Button>
        </List>
        <Divider />
      </Drawer>
      
    </div>
  );
}
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    reduxState: state
  })

export default connect(mapStateToProps, {setTitle, fetchPosts})(withStyles(styles)(ClippedDrawer))
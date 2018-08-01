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
  button:{
    width: "100%"
  }
});

class ClippedDrawer extends React.Component{
  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Drawer variant="permanent" classes={{paper: classes.drawerPaper}}>
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
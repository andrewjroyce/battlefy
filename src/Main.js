import React, { Component } from 'react';
import logo from './logo.svg';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import './App.css';
import ClippedDrawer from './Drawer';
import PlayerCard from './PlayerCard';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {fetchPosts} from './redux/actions'

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#4ABDAC',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#FC4A1A',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    status: {
      danger: '#ffcc00',
    },
    background: {
      default: "#DFDCE3"
    },
    typography: {
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        'Roboto',
      ].join(','),
    },
  }
  });

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
    flexGrow: 1,
    backgroundColor: "#fff",
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
  display: "flex", 
  alignItems: "center"
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

class Main extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };



  render() {
console.log(this.props.reduxState)
    const { value } = this.state;
    return (
      <div className="App">
        <header  className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> - </h1>
        </header>
        <MuiThemeProvider theme={theme}>
        <div className="App-intro">
        <Paper style={styles.root}>
          <AppBar color="primary" position="static">
            <Tabs fullWidth value={value} onChange={this.handleChange}>
              <Tab label="Latest Game" />
              <Tab label="Lifetime Stats" />
              <Tab label="Background" href="#basic-tabs" />
            </Tabs>
          </AppBar>
          <div style={{display: "flex", flex: 1,}}>
            <ClippedDrawer />
            <div style={{width: "100%"}}>
              <PlayerCard match={this.props.reduxState.MatchInfo.info} stats={this.props.reduxState.LastMatch.last} title={this.props.reduxState.Title.title} value={this.state.value}/>
              <button onClick={() => this.props.fetchPosts(this.props.reduxState.Title.title)} />

           </div>
          </div>
        </Paper>
      </div>
      </MuiThemeProvider >
    </div>
    );
  }
}
const mapStateToProps = state => ({
  reduxState: state
})

export default connect(mapStateToProps, {fetchPosts})(Main)
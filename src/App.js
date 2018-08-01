import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import PropTypes from 'prop-types';

import './App.css';
import {  createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import Main from './Main';
import store from './redux/store';

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

class App extends Component {
  state = {
    value: 0,
    spacing: '16',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

renderRightSide(){
  return(
    <Typography variant="subheading">KDA</Typography>
  )
}


  render() {
    return (
      <Provider store={store}>
        <Main />
    </Provider>
    );
  }
}

export default App;

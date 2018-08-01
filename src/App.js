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
      main: '#4ABDAC',
    },
    secondary: {
      light: '#0066ff',
      main: '#FC4A1A',
      contrastText: '#ffcc00',
    },
    status: {
      danger: '#ffcc00',
    },
    background: {
      default: "#DFDCE3"
    },
    typography: {
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
  };

  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;

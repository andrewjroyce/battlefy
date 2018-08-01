import React, { Component } from 'react';
import {XYPlot, LineSeries} from 'react-vis';
import '../node_modules/react-vis/dist/style.css';
import './App.css';

const styles = {
  card: {
    minWidth: 275,
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

class GraphArea extends Component {
  state = {
    value: 0,
    spacing: '16',
  };



  render() {
    const data = [
      {x: 0, y: 8},
      {x: 1, y: 5},
      {x: 2, y: 4},
      {x: 3, y: 9},
      {x: 4, y: 1},
      {x: 5, y: 7},
      {x: 6, y: 6},
      {x: 7, y: 3},
      {x: 8, y: 2},
      {x: 9, y: 0}
    ];
    return(
      <div className="App">
      <XYPlot height={125} width={422}>
        <LineSeries data={data} />
      </XYPlot>
    </div>
    )
  }
}

export default GraphArea;

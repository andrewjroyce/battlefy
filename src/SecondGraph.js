import React, { Component } from 'react';
import {RadialChart} from 'react-vis';
import '../node_modules/react-vis/dist/style.css';
import './App.css';

const myData = [{angle: 1}, {angle: 5}, {angle: 2}]
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

class SecondGraph extends Component {
  state = {
    value: 0,
    spacing: '16',
  };



  render() {
    return(
      <div className="App">
        <RadialChart
          data={myData}
          width={125}
          height={125} 
        />
      </div>
    )
  }
}

export default SecondGraph;

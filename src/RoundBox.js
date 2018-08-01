import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import '../node_modules/react-vis/dist/style.css';

import './App.css';

const styles = {
roundGrid: {
  marginLeft: "auto",
  marginRight: "auto",
  display: 'inline',
},
roundProfile:{
// textAlign: 'left',
margin: 10,
display: 'flex',
flexDirection: 'column', 
alignItems: 'center',
justifyContent:'space-around',
fontSize: 12,

},
};




const RoundBox = function(props) {
  console.log(props)
    return (
        <div style={styles.roundGrid}>
          <List style={styles.roundProfile}> 
          <ListItem>
            <ListItemText primary={props.firstRow} secondary={props.secondRow}  />
           </ListItem>
            {props.thirdRow ?  <Divider /> : <br />}
            {props.thirdRow ? <ListItem>
            <ListItemText primary={props.victory === true ? "Victory" : "Fail"} secondary={Math.round(props.fourthRow) + " minutes"}  />
           </ListItem> : null 
            }
          </List>         
        </div>
    );
}

export default RoundBox;

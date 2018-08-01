import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './App.css';

const styles = {
profileGrid: {
    marginLeft: "auto",
    marginRight: "auto",
    display: 'inline',
    minWidth: '100px'
},
playerProfile:{
  // textAlign: 'left',
  margin: 10,
  display: 'flex',
  flexDirection: 'column', 
  alignItems: 'center',
  justifyContent:'space-around',
},
};


const PlayerProfile = function(props){
    return (
        <div style={styles.profileGrid}>
          <div style={styles.playerProfile}> 
            <Avatar alt={props.champion} src="https://api.adorable.io/avatars/285/abott@adorable.png" className={styles.avatar} />
             {props.name} <br />
          </div>         
          </div>
    );
  }


export default PlayerProfile;

import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from './firebase_config';
import { useState } from 'react'
import './App.css';
import Login from './Login';
import CreateGroups from './CreateGroups';
import SignOut from './SignOut';
import { Grid } from '@material-ui/core'
import GoBack from './GoBack';

function App() {

  const [user] = useAuthState(auth);
  const [collectionName, setCollectionName] = useState(null);

  return (
    <div className="App">
      
     { user ? <div>
        <header>
          <Grid container justify="space-between">
            <Grid>{collectionName && <GoBack style={{display: "inline"}} collectionName={collectionName} setCollectionName={setCollectionName} /> } </Grid>
           <Grid><h1>Mu-chat</h1></Grid> 
           <Grid><SignOut style={{display: "inline"}}/></Grid>
          </Grid>
        </header>
          
      </div> : null 
    }
      
       {user ? <CreateGroups collectionName={collectionName} setCollectionName={setCollectionName}/> : <Login/>}
    </div>
  );
}

export default App;

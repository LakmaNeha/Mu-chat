import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from './firebase_config';
import './App.css';
import Login from './Login';
import ChatRoom from './ChatRoom';
import SignOut from './SignOut';
import { Grid } from '@material-ui/core'
function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
     { user ? <div>
        <header>
          <Grid container justify="space-between">
           <Grid><h1>Mu-chat</h1></Grid> 
           <Grid><SignOut style={{display: "inline"}}/></Grid>
          </Grid>
        </header>
          
      </div> : null 
    }
      
       {user ? <ChatRoom/> : <Login/>}
    </div>
  );
}

export default App;

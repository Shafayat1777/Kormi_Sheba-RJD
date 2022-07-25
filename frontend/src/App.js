import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Users from './Users';
import UserPage from './UserPage';

import { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {

  const [info, setInfo] = useState({});
  const getUser = (t)=> {
    setInfo(t)
  }

  useEffect(()=>{
    if(info){
      const data = localStorage.getItem('user_data')
      setInfo(JSON.parse(data))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('user_data', JSON.stringify(info))
  })

  return (
    <Router>
    <div className="App">
      <Navbar  info={info} getUser={getUser}/>
      <div className="content">
        <Switch>
          <Route path="/" exact>
            <Home info={info}/>
          </Route>
          <Route path="/login">
            <Login getUser={getUser}/>
          </Route>
          <Route path="/signup">
            <Signup getUser={getUser}/>
          </Route>
          <Route path="/users">
            <Users/>
          </Route>
          <Route path="/userprofile">
            <UserPage info={info}/>
          </Route>
        </Switch>
      </div>
    </div>
    <p></p>
    </Router>
  );
}

export default App;

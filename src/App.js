
import './App.css';
import React from 'react';
import NavBar from "./Components/Common/NavBar"
import Login from "./Components/Auth/Login"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {getCookieData } from "./Components/CookiesFunc";
import Dashboard from "./Components/Dashboard/Dashboard"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        
        <Router>
          <Switch>
            <Route path={`/login`} component={Login} />
            <Route
            path="/"
            render={(props) =>
              
              getCookieData("userRole") === "U"?(
            <Dashboard {...props} /> // this is department routing
          ): (<>
            <NavBar />
            <Login {...props} />
          </>)
          }
            />
            <Redirect to={`/login`} />
          </Switch>
        </Router>

       
      

      </div>
    )
  }
}

export default App;

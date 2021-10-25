import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemDetails from "../Dashboard/index"
import SideBar from "../Common/SideBar"

class Dashboard extends Component {
    render() {
        return (
            <div>
                <SideBar/>
                 <Switch>
                   
                      <Route path="/dashboard/:pageName" exact component={ItemDetails} />
                     
                      </Switch>
            </div>
        );
    }
}

export default Dashboard;
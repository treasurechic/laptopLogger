import { BrowserRouter as Router, Route } from "react-router-dom";
import React,  {Component} from 'react';
import FrontPage from './../pages/FrontPage';
import DashboardLogger from './../pages/DashboardLogger';
import Today from './../pages/Today';
import Users from './../pages/Users';
import Report from './../pages/Report';
import Password from './../pages/Password';
import frontPage from './../pages/FrontPage';
import Modal from './../components/Modal';


class AppRouter extends Component {

    render(){
       return ( 
       <Router>
           <div>
            <Route exact path="/" component={FrontPage}/>
            <Route path="/dashboard" component={DashboardLogger}/>
            <Route path="/todayLog" component={Today}/>
            <Route path="/report" component={Report}/>
            <Route path="/users" component={Users}/>
            <Route path="/password" component={Password}/>
            <Route path="/FrontPage" component={frontPage}/>
            <Route path="/modalBg" component={Modal}/>
            </div>
        </Router>
       )
    }


}

export default AppRouter;
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';


class SideNav extends Component {

    users = (e) => {
        e.preventDefault();
         this.props.history.push('/users');
   
    }
    dashboard = (e) => {
        e.preventDefault();
         this.props.history.push('/dashboard');
   
    }
    today = (e) => {
        e.preventDefault();
         this.props.history.push('/todayLog');
   
    }
    report = (e) => {
        e.preventDefault();
         this.props.history.push('/report');
   
    }
   password = (e) => {
        e.preventDefault();
        this.props.history.push('/password');
   
    }
    home = (e) => {
        e.preventDefault();
         this.props.history.push('/FrontPage');
   
    }

    render() {
        return  (
            <nav id="sidebar">
            <div className="sidenavbutton">
             <ul className="list-unstyled components">
                 <li>
                     <button className="active" onClick={this.dashboard}> <a href="">Dashboard</a></button>    
                 </li>
                 <li>
                      <button onClick={this.today}>
                     <a href="" >Today's Log</a></button>    
                 </li>
                 <li>
                     <button onClick={this.report}><a href="">Report</a></button>
                 </li>
                 <li>
                     <button><a href="">Admin</a></button>
                 </li>
                 <li>
                     <button onClick={this.users} ><a href=""><span>-</span>Users</a></button>
                 </li>
                 <li>
                     <button><a href="#">Profile</a></button>
                 </li>
                 <li>
                     <button onClick={this.password}><a href=""><span>-</span> Change Password</a></button>
                 </li>
                 <li>
                     <button onClick={this.home}>
                     <a href=""><span>-</span> Log Out</a></button>
                 </li>
                 </ul>
             </div>
     </nav>
        )
    }
}


export default withRouter(SideNav);
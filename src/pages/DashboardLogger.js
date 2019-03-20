import React, {Component} from 'react';
import SideNav from "./../components/SideNav";
import Chart from "../components/Chart.js";

class DashboardLogger extends Component  {

    logOut = (e) => {
        e.preventDefault();
         this.props.history.push('/FrontPage');
   
    }



    render() {
        return (
            <div>
                <SideNav/>
            <section className="dashboard">
            <div className="top">
                <h1>Dashboard</h1>
                <span className="logOut"><a onClick={this.logOut} >Logout</a></span>
                <span className="name"><a>Oluwatosin Adesanya</a></span>
            </div>
            <div className="table1">
                 <h2>Logs Recorded Today</h2><br/>
                 
            <table>
                <tr>
                    <th>Visitor's Name</th>
                    <th>Model</th>
                    <th>Serial number</th>
                    <th>Time In</th>
                    <th>Time Out</th>
                </tr>
                <tr>
                    <td>Amos Ewejobi</td>
                    <td>Dell</td>
                    <td>7890-1213</td>
                    <td>7:45am</td>
                    <td>11:00am</td>
    
                </tr>
                <tr>
                    <td>Tunde Bello</td>
                    <td>Dell</td>
                    <td>1190-1213</td>
                    <td>2:15am</td>
                    <td>04:00am</td>
                </tr>
                <tr>
                    <td>Amos Ewejobi</td>
                    <td>Hp</td>
                    <td>7890-1213</td>
                    <td>7:45am</td>
                    <td>11:00am</td>
                </tr>
                <tr>
                    <td>Tunde Bello</td>
                    <td>Lenovo</td>
                    <td>7890-1213</td>
                    <td>7:45am</td>
                    <td>11:00am</td>
                </tr>
                <tr>
                    <td>Amos Ewejobi</td>
                    <td>Dell</td>
                    <td>7890-1213</td>
                    <td>7:45am</td>
                    <td>11:00am</td>
                </tr>
            </table>
                      
            </div>
            <div className="table2">
                <h2>Logging Trend - Past Week</h2>
                <div className="left "><Chart /></div>
                <div className="right">
                <table >
                    <tr>
                        <th>Visitor's Name</th>
                        <th>Time In</th>
                        <th>Time Out</th>
                    </tr>
                    <tr>
                        <td>Amos Ewejobi</td>
                        <td>7:45am</td>
                        <td>11:00am</td>
        
                    </tr>
                    <tr>
                        <td>Tunde Bello</td>
                        <td>2:15am</td>
                        <td>04:00am</td>
                    </tr>
                    <tr>
                        <td>Amos Ewejobi</td>
                        <td>7:45am</td>
                        <td>11:00am</td>
                    </tr>
                    <tr>
                        <td>Tunde Bello</td>
                        <td>7:45am</td>
                        <td>11:00am</td>
                    </tr>
                    <tr>
                        <td>Amos Ewejobi</td>  
                        <td>7:45am</td>
                        <td>11:00am</td>
                    </tr>
                </table>
                </div>
            </div>
            
            </section>
            </div>
        )
    }
}


export default DashboardLogger;
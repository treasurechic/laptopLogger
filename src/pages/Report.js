import React, {Component} from 'react';
import SideNav from "./../components/SideNav";
import Chart from "../components/Chart.js";


class report extends Component {

    logOut = (e) => {
        e.preventDefault();
         this.props.history.push('/FrontPage');
   
    }


    render(){
        return (
            <div>
                <SideNav/>
            <section className="report">
            <div className="top">
                <h1>Report</h1>
                <span className="logOut"><a onClick={this.logOut} >Logout</a></span>                
                <span className="name"><a>Oluwatosin Adesanya</a></span>
            </div>
        <div className="calender">
            <h2>Logging Report</h2>
            <span>PDF</span>
            <span>Print</span>
            <div className="clear-fix"> 
            <label>View Report from</label>
            <input type="month"/> to <input type="month"/>
            <button>Generate</button>
        </div>
    </div>
        <div className="graph-container">
        <Chart/>
        </div>
        <div className="table">
        <table >
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
        </section>
        </div>
        )
    }
}

export default report;
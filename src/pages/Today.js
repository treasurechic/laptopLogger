import React, {Component} from 'react';
import SideNav from "./../components/SideNav";


class Today extends Component {

    logOut = (e) => {
        e.preventDefault();
         this.props.history.push('/FrontPage');
   
    }


        render(){
            return (
                <div>
                    <SideNav/>
                    <section class="todayLog">
            <div class="top">
                <h1>Today's Logs (22nd August, 2015)</h1>
                <span className="logOut"><a onClick={this.logOut} >Logout</a></span>
                <span class="name"><a>Oluwatosin Adesanya</a></span>
            </div>
            <div class="input">
                <input type="text" placeholder="Quick Search"/>
            </div>
            <div class="first">
                <label>Visitor's Name</label>
                <input type="text" className="visitor"/><br/>
                <label>Laptop Make</label>
                <input type="text" className="lap"/><br/>
                <label class="model">Model</label>
                <input type="text" className="model"/><br/>
                <label>Serial Number</label>
                <input type="text"/><button>login</button>
            </div>
            <div class="second">
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

    export default Today;
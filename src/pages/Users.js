import React, {Component} from 'react';
import SideNav from "./../components/SideNav";

class users extends Component {

    logOut = (e) => {
        e.preventDefault();
         this.props.history.push('/FrontPage');
   
    }

    modal = (e) => {
        e.preventDefault();
         this.props.history.push('/modalBg');
   
    }

    render() {
        return  (
            <div>
            <SideNav/>
            <section className="users">
            <div className="top">
                <h1>Users</h1>
                <span className="logOut"><a onClick={this.logOut} >Logout</a></span>
                <span className="name"><a>Oluwatosin Adesanya</a></span>
            </div>
            
            <a href="" id="modal"><button onClick={this.modal}>Add User</button></a>
            <table >
                <tr>
                    <th>Email</th>
                    <th>Fullname</th>
                    <th>Last Login</th>
                    <th>Delete</th>
                </tr>
                <tr>
                    <td>Amos@gmail.com</td>
                    <td>Amos Tutuola</td>
                    <td>21- 08-2015 8:00am</td>
                    <td>delete</td>
                </tr>
                <tr>
                    <td>T0sin@yahoomail.com</td>
                    <td>Tosin Adebayo</td>
                    <td>20-08-2015 9:00pm</td>
                    <td>delete</td>
                </tr>
                <tr>
                    <td>Amos@gmail.com</td>
                    <td>Amos Tutuola</td>
                    <td>21- 08-2015 8:00am</td>
                    <td>delete</td>
                </tr>
                <tr>
                    <td>T0sin@yahoomail.com</td>
                    <td>Tosin Adebayo</td>
                    <td>20-08-2015 9:00pm</td>
                    <td>delete</td>
                </tr>
                <tr>
                    <td>T0sin@yahoomail.com</td>
                    <td>Tosin Adebayo</td>
                    <td>20-08-2015 9:00pm</td>
                    <td>delete</td>
                </tr>
            </table>
        </section>
        </div>
            );
        }
    }
    
    
    export default users;
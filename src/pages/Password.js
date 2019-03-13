import React, {Component} from "react";
import SideNav from "./../components/SideNav";



class password extends Component{

    logOut = (e) => {
        e.preventDefault();
         this.props.history.push('/FrontPage');
   
    }
    
    render(){
        return(
    <div>
        <SideNav/>
        <section className="password">
            <div className="top">
                <h1>Change Password</h1>
                <span className="logOut"><a onClick={this.logOut} >Logout</a></span>
                <span className="name"><a>Oluwatosin Adesanya</a></span>
            </div>
            <div className="pass">
            <form>
                <label>Old Password</label>
                <input type="text" className="old"/><br/>
                <label>New Password</label>
                <input type="text" className="new"/><br/>
                <label>Confirm Password</label>
                <input type="text"/>
                <button>Change Password</button>
            </form>
            </div>
        </section>
    </div>
        )
    }
}

export default password;
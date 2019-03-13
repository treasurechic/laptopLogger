
import React, {Component}from "react"
import {withRouter} from 'react-router-dom';


class Modal extends Component {

    users = (e) => {
        e.preventDefault();
         this.props.history.push('/users');
   
    }


    render(){
        return(
            <div className="modalBg">
            <div className="modal-content">
            <button type="button" className="close"  aria-hidden="true" onClick={this.users}>X</button>
                <h3>Please fill this form</h3>
                <input type="text" placeholder="Your Email"/><br/>
                <input type="text" placeholder="First Name"/><br/>
                <input type="text" placeholder="Last Name"/><br/>
                <input type="password" placeholder="password"/><br/>
                <input type="submit" className="blue" onClick={this.users}/>
        </div>
        </div>
        )
    }      
}
export default withRouter(Modal);
import React, {Component} from 'react';



class FrontPage extends Component {

    constructor(props){
        super(props);
      
    }

    submit = (e) => {
        e.preventDefault();
         this.props.history.push('/dashboard');
   
    }

    render(){
        return (
            <div>
            <div className="FrontPage">
            <div className="laptop">
                <h2>Laptop Logger</h2>
                <p>A simple app to automatic visitor's laptop logbooks</p>
                <input type="text" placeholder="Username"/><input type="text" placeholder="Password"/>
                <button type="submit" onClick={this.submit} className="submit">Log in  </button><br/>
                Or <button className="sign">Sign in with Google</button>
            </div>
            <div className="year">
                (c) 2015
            </div>
        </div>
        <footer>
            <span>//</span>
        </footer>
        </div>
        );
    }
}


export default FrontPage;


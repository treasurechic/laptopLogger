import React, { Component } from 'react';
import AppRoutes from "./routes/router";
import './styles/laptop-logger.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <AppRoutes/>
        
      </div>
    );
  }
}

export default App;

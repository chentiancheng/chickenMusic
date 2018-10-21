import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Link} from "react-router-dom"
import './App.css';
import Home from "./page/home"
import Singer from "./page/singer"
import State from "./page/state"
import Reload from "./page/reload"
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
         <div>
        <Route exact path="/" component={Home}/>
        <Route path="/singer" component={Singer}/>
        <Route path="/state/:singer_mid" component={State}/>
        <Route path="/reload/:singer_mid/:songmid" component={Reload}/>
         </div>
        </Router>
      </div>
    );
  }
}

export default App;

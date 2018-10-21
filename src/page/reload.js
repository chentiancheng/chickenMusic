import React, { Component } from 'react';
import './index.css';
import "../App.css"
import axios from "axios";
import {Link} from "react-router-dom"
class Reload extends Component {
  constructor(){
    super()
  };
   render(){
       return(
         <div>
            <Link to={"/state/"+this.props.match.params.singer_mid}>返回</Link>
            <audio src={'http://ws.stream.qqmusic.qq.com/C100'+this.props.match.params.songmidsongmid+'.m4a?fromtag=0&guid=126548448'} controls="controls" autoPlay="autoPlay" ></audio>
         </div>
       )
   }



 
}

export default Reload;

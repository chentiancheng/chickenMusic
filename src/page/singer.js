import React, { Component } from 'react';
import './index.css';
import "../App.css"
import Navbar from "../component/navbar";
import axios from "axios";
import {Link} from "react-router-dom"
class Singer extends Component {
  constructor(){
    super()
    this.state={
         songerList:[]
    }
  };
  componentDidMount(){
        const that=this
        axios.get(" http://gaohui628.top:8899/api/getSingerListData").then((res)=>{
          console.log(res.data.singerList.data.singerlist)
          that.setState({
              songerList:res.data.singerList.data.singerlist
          })
        })
  }
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <div className="songerList">
              <p className="songerListTitle">热门</p>
              {
                this.state.songerList.map((item,index)=>{
                    return(
                      <Link to={"/state/"+item.singer_mid}>
                      <dl>
                      <dt><img src={item.singer_pic}/></dt>  
                      <dd>{item.singer_name}</dd>
                      </dl>
                      </Link>     
                    )
                })
              }
                
        </div>
      </div>
    );
  }
}

export default Singer;

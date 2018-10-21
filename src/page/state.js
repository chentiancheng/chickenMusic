import React, { Component } from 'react';
import './index.css';
import "../App.css"
import axios from "axios";
import {Link} from "react-router-dom"
class State extends Component {
  constructor(){
    super()
    this.state={
        singerinfo:[],
        singersList:[],
        songerList:[]
    }
  };
  componentDidMount(){
     const that=this
     axios.get("http://gaohui628.top:8899/api/getSingerDetailData?singer_mid="+this.props.match.params.singer_mid)
     .then((res)=>{
                console.log(res.data.data)
               that.setState({
                singerinfo:res.data.data,
                singersList:res.data.data.list
               })
         })
         axios.get(" http://gaohui628.top:8899/api/getSingerListData").then((res)=>{
            console.log(res.data.singerList.data.singerlist)
            that.setState({
                songerList:res.data.singerList.data.singerlist
            })
          })    
  }
  render() {
      console.log(this.props.match.params.singer_pic)
    return (
      <div className="singerstate">
            <div className="singerTitle">
                <Link to="/singer">
                <img src={require("../image/未标题-1.jpg")}/>
                </Link>
                <h3>{this.state.singerinfo.singer_name}</h3>
            </div>
            <div className="singerImg">
            {
                this.state.songerList.map((item,index)=>{
                   
                        if(item.singer_mid==this.props.match.params.singer_mid){
                            return( 
                                <img src={item.singer_pic}/>
                            )
                        }
                       
                   
                })

            }
           
            </div>
            {
                this.state.singersList.map((item,index)=>{
                    return(
                        <Link to={"/reload/"+this.props.match.params.singer_mid+"/"+item.musicData.songmid}>
                          <dl>
                        <dt>{item.musicData.songname}</dt>
                        <dd>{item.musicData.albumname}</dd>
                        </dl>
                        </Link>
                      
                    )
                })
            }
           
          
      </div>
    );
  }
}

export default State;

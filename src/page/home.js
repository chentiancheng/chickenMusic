import React, { Component } from 'react';
import { Carousel } from 'antd';
import './index.css';
import Navbar from "../component/navbar"
import axios from "axios";
class Home extends Component {
   constructor(){
        super()
        this.state={
            silder:[],
            datalist:[]
        }



   };
  componentDidMount(){
      const that=this
        axios.get("http://gaohui628.top:8899/api/getSlideList").then((res)=>{
            that.setState({
            
                silder:res.data.data.slider
            })
        });
        axios.get("http://gaohui628.top:8899/api/getDiscList").then((res)=>{
            console.log(res.data.data.list)
            that.setState({
            
                datalist:res.data.data.list
            })
        }) 
  } 
  render() {
    return (
      <div className="songsHome">
        <Navbar></Navbar>
        <div className="songSection">
        <Carousel autoplay>
        {
             this.state.silder.map((item,inder)=>{
                return(
                    <div className="Musicsilder"><img src={item.picUrl}/></div>
                )
             })   

        }
         </Carousel>
         <div className="songsList">
                <h3>热门歌单推荐</h3>  
            {
                this.state.datalist.map((item,index)=>{
                    return(

                <dl>
                <dt><img src={item.imgurl}/></dt>
                <dd>
                    <h4>{item.dissname}</h4>
                    <p>{item.creator.name}</p>    
                </dd>   
                </dl> 
                    )
                })    



            }    
           
         </div>
        </div>
      </div>
    );
  }
}

export default Home;

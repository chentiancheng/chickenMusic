import React, { Component } from 'react';
import "../../node_modules/antd/dist/antd.css";
import './navbar.css';
import { Icon,Menu } from 'antd';
import Home from "../page/home";
import Singer from "../page/singer";
import {Link} from "react-router-dom"
class Navbar extends Component {
    constructor(){
        super()
        this.state = {
            current: 'index',
          }
    };
    //导航点击事件
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      }
  render() {
    const SubMenu = Menu.SubMenu;
    const MenuItemGroup = Menu.ItemGroup;
    return (
      <div className="navbar">
          <header className="HeaderLogo">
              <div className="div">
              <img src={require("../image/图片1_03.jpg")}/>
              <b>ChickenMusic</b>
              </div>
              <div  className="iconuser">
              <Icon type="user" theme="outlined" outlinedColor="#fff" />
              </div>
          </header>
          <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal" 
        className="songType"
      >
        <Menu.Item key="index" >
        <Link to="/">推荐</Link>
        </Menu.Item>
        <Menu.Item key="singer">
        <Link to="/singer">歌手</Link>                        
        </Menu.Item>
        <Menu.Item>排行</Menu.Item>
        <Menu.Item>搜索</Menu.Item>
       
      </Menu>

      </div>
    );
  }
}

export default Navbar;

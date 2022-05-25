import React, {useEffect, useState} from 'react';
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import {
  MenuOutlined,
  FundOutlined,
  BulbOutlined,
  HomeOutlined,
} from '@ant-design/icons'

import icons from '../images/cryptocurrency.png'

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true)
  const [screenSize, setScreenSize] = useState(1368)

  useEffect(()=>{
    const handleResize = ()=> setScreenSize(window.innerWidth)
    window.addEventListener('resize', handleResize)

    handleResize()

    return ()=> window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(()=>{
    if(screenSize < 768){
      setActiveMenu(false)
    }else {
      setActiveMenu(true)
    }
  }, [screenSize])



  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icons} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="#" >Cryptoerse</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={()=> setActiveMenu(!activeMenu)}
        >
          <MenuOutlined/>
        </Button>
      </div>
      {activeMenu && (
        <Menu theme="dark">
          <Menu.Item key="home" icon={<HomeOutlined/>}>
            <Link to="/" >Home</Link>
          </Menu.Item>
          <Menu.Item key="cryptocurrencies" icon={ <FundOutlined/> }>
            <Link to="/cryptocurrencies" >Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item key="news" icon={<BulbOutlined />}>
            <Link to="/news" >News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  )
};

export default Navbar;
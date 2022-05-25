import React from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import {Layout, Typography, Space} from "antd";
import {Navbar, Homepage, Cryptocurrencies, CryptoDetail, News} from "./components";
import './app.scss'
import 'antd/dist/antd.min.css'

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetail />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Text level={5} style={{color: "white", textAlign: "center"}}>
            Cryptoverse<br/>
            All rights reversed
          </Typography.Text>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  )
};

export default App;
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout, Typography } from 'antd';

import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css';

const App = () => (
<div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/exchanges">
              <Exchanges />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
          </Switch>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021 
       <a href="https://kssn.netlify.app/">Sabar_I</a>.     
          <br />
          All Rights Reserved.
        </Typography.Title>
      </div>
    </div>
  </div>
);

export default App;

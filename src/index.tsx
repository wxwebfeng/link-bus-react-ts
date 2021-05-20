/*
 * @Author: your name
 * @Date: 2021-05-13 09:50:04
 * @LastEditTime: 2021-05-13 17:16:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /link-bus-ract-ts/src/index.tsx
 */
import React from 'react';
import ReactDOM from 'react-dom';

import '@/assets/css/index.less'
import Home from '@/view/home/home'
import HostrList from '@/view/hostrList/'
import ExceptionPage404 from '@/view/exception/404'

const { HashRouter, Route, Switch, Redirect } = require('react-router-dom');

ReactDOM.render(
  (<HashRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/hostrList" component={HostrList}/>
      <Route path="/404" component={ExceptionPage404}/>
      <Redirect from="/*" to="/404" />
    </Switch>
  </HashRouter>),
  document.getElementById('root')
);

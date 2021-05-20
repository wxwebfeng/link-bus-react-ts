/*
 * @Author: miaojf
 * @Date: 2021-05-13 12:47:16
 * @LastEditTime: 2021-05-19 18:24:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /link-bus-ract-ts/src/view/hostrList/index.tsx
 */
import React, { Component } from 'react'

import styles from  './index.module.less'
import Nav from '@/components/Nav/index'
import List from './components/list/list'

export default class HostrList extends Component {

  state = {
    navList: [
      { id: 'n1', name: '未乘车' },
      { id: 'n2', name: '已乘车' }
    ],
    selected: {}
  }

  componentDidMount () {
    const { navList } = this.state
    const selected = navList[0]
    this.setState({
      selected
    })
  }

  selectFun = (selected: object) => {
    this.setState({
      selected
    })
  }

  render() {
    const { navList, selected } = this.state
    return (
      <div className={ styles.hostr_list }>
        <Nav navList={ navList } selected={ selected } selectFun={ this.selectFun }/>
        <div className={ styles.hostr_list_content }>
          <List />
        </div>
      </div>
    )
  }
}

/*
 * @Author: your name
 * @Date: 2021-05-19 11:32:15
 * @LastEditTime: 2021-05-19 16:49:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /link-bus-ract-ts/src/view/hostrList/components/item-content.tsx
 */
import React, { Component } from 'react'

import ItemList from '../item-list/item-list'

export default class ItemContent extends Component {
  render() {
    return (
      <div className="item-content">
        item content
        <ItemList />
      </div>
    )
  }
}

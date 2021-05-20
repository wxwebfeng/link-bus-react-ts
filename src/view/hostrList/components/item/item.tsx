/*
 * @Author: miaojf
 * @Date: 2021-05-19 11:29:31
 * @LastEditTime: 2021-05-19 16:52:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /link-bus-ract-ts/src/view/hostrList/components/item.tsx
 */
import React, { Component } from 'react'

import ItemHeader from '../item-header/item-header'
import ItemContent from '../item-content/item-content'

export default class Item extends Component {
  render() {
    return (
      <div
        className="list_item">
        <ItemHeader />
        <ItemContent />
      </div>
    )
  }
}

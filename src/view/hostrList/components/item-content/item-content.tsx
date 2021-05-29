/*
 * @Author: your name
 * @Date: 2021-05-19 11:32:15
 * @LastEditTime: 2021-05-20 11:17:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /link-bus-ract-ts/src/view/hostrList/components/item-content.tsx
 */
import React, { Component } from 'react'
import { Button } from 'antd-mobile';

import ItemList from '../item-list/item-list'

export default class ItemContent extends Component {
  render() {
    return (
      <div className="item-content">
        <div className="list_item_prompt" v-if="navItemId === '1'">
          <div className="list_item_prompt_title">
            乘车时请展示预约凭证给司机，取消预约有效时间
            <p className="color_34ACDB">
              倒计时:
            </p>
          </div>
        </div>
        <ItemList />
      </div>
    )
  }
}

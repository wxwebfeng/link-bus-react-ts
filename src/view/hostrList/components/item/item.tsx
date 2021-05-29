/*
 * @Author: miaojf
 * @Date: 2021-05-19 11:29:31
 * @LastEditTime: 2021-05-20 10:26:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /link-bus-ract-ts/src/view/hostrList/components/item.tsx
 */
import React, { Component } from 'react'
import styled from 'styled-components'

import ItemHeader from '../item-header/item-header'
import ItemContent from '../item-content/item-content'

const ListItem = styled.div`
  background-color: rgba(255, 255, 255, 1);
  padding: 0 0 .3rem;
  border-radius: .1rem;
  box-shadow: 0 .05rem .1rem 0 rgb(0 0 0 / 30%);
  margin-bottom: .15rem;
`

export default class Item extends Component {
  render() {
    return (
      <ListItem
        className="list_item">
        <ItemHeader />
        <ItemContent />
      </ListItem>
    )
  }
}

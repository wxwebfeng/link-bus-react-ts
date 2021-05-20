/*
 * @Author: miaojf
 * @Date: 2021-05-19 11:27:16
 * @LastEditTime: 2021-05-19 17:27:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /link-bus-ract-ts/src/view/hostrList/components/list.tsx
 */
import React, { Component } from 'react'
import styled from 'styled-components'

import Item from '../item/item'

const ListDiv = styled.div`
  padding: .15rem;
`

export default class List extends Component {
  render() {
    return (
      <ListDiv className="list">
        <Item />
      </ListDiv>
    )
  }
}


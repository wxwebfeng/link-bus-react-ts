/*
 * @Author: Tiffin
 * @Date: 2021-05-13 17:58:52
 * @LastEditTime: 2021-05-19 16:43:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /link-bus-ract-ts/src/components/Nav/index.tsx
 */
import React, { Component } from 'react'

import './index.less'

interface IProps {
  navList: {
    id: string,
    name: string
  }[],
  selected: {
    id?: string|number,
    name?: string
  },
  selectFun: Function
}

export default class Nav extends Component<IProps> {

  selectedItem = (selected: Object) => {
    this.props.selectFun(selected)
  }

  render() {
    const { selected, navList } = this.props
    return (
      <div className="header_nav">
        {
          navList.map(item => (
            <div className={['header_nav_item', item.id === selected.id ? 'selected' : null].join(' ')} onClick={() => this.selectedItem(item)} key={item.id}>
              <span>{ item.name }</span>
            </div>
          ))
        }
      </div>
    )
  }
}

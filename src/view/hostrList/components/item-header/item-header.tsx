/*
 * @Author: miaojf
 * @Date: 2021-05-19 11:30:29
 * @LastEditTime: 2021-05-20 10:51:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /link-bus-ract-ts/src/view/hostrList/components/item-header.tsx
 */
import React, { Component } from 'react'

import styles from './item-header.module.less'

export default class ItemHeader extends Component {

  render() {
    return (
      <div className={ styles.item_header }>
        <div className={ `${styles.item_header_main} ${styles.animationBgHZ}` }>
          <div className={ styles.item_header_time }>
            05月21日
          </div>
          <div className={ styles.item_header_info }>
            <div className={ styles.item_header_info_text }>
              <p className={ styles.item_name }>蛇口沃尔玛</p>
              <p>6:00验票</p>
            </div>
            <div className={ styles.direction_right }>
              <p className={ styles.icon_column }></p>
              <i className={ styles.icon_triangle }></i>
            </div>
            <div className={ styles.item_header_info_text }>
              <p className={ styles.item_name }>TCL科技大厦</p>
              <p>预计09:41到达</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

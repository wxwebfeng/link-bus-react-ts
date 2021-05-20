/*
 * @Author: Tiffin
 * @Date: 2021-05-13 17:06:36
 * @LastEditTime: 2021-05-13 18:17:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /link-bus-ract-ts/src/view/exception/404.tsx
 */
import React, { Component } from 'react'
import { Result, Icon, Button } from 'antd-mobile'
import { RouteComponentProps } from 'react-router-dom'

interface IProps {}
type Page404Props = IProps & RouteComponentProps

export default class ExceptionPage404 extends Component<Page404Props> {

  public goBack = () => {
    this.props.history.go(-1)
  }

  public render() {
    return (
      <div className="exception-page-404">
        <Result
          img={<Icon type="cross-circle-o" className="spe" style={{ fill: '#F13642' }} />}
          title="404"
          message="页面不存在"
        />
        <Button type="primary" inline onClick={this.goBack}>返回</Button>
      </div>
    )
  }
}

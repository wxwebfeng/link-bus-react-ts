/*
 * @Author: your name
 * @Date: 2021_05_13 12:44:54
 * @LastEditTime: 2021-05-19 16:42:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /link_bus_ract_ts/src/view/home/home.tsx
 */
import React, { Component } from 'react'
import { RouteComponentProps } from "react-router-dom";

import './home.less'

interface IProps {}
type HomeProps = IProps & RouteComponentProps;

interface IState {
  list: Array<object>
}

export default class Home extends Component<HomeProps, IState> {
  
  public state = {
    list: [
      {
        id: 'bus_SH',
        title: '深惠班车',
        list: [
          {
            id: 'goShenZhen',
            url: '/companyShuttle/1',
            local: '1',
            name: '去深圳',
            iconUrl: require('../../assets/img/shen.png').default
          },
          {
            id: 'goHuizhou',
            local: '2',
            url: '/companyShuttle/2',
            name: '去惠州',
            iconUrl: require('@/assets/img/hui.png').default
          },
          {
            id: 'my_hostr_list',
            url: '/hostrList',
            name: '我的预约',
            iconUrl: require('@/assets/img/reservation.png').default
          }
        ]
      },
      {
        id: 'bus_SH_Z',
        title: '深惠班车',
        list: [
          {
            id: 'bus_SH_Z_guidance',
            name: '深惠班车指引',
            url: 'https://open.work.weixin.qq.com/wwopen/mpnews?mixuin=72WVCAAABwCVWfvVAAAUAA&mfid=WW0309_j86SygAABwCfZzQ9bbmcYg_I0rh4b&idx=0&sn=570380fc7aa01166f7a7de0a8feb44a6&pass_ticket=9zoPHAoWBkW5ADkzBLC4GQwivyUjQsdftncsUTQyz2MkKJb0fvlL2chkyc8rfPKA',
            iconUrl: require('@/assets/img/bus2_guide.png').default
          }
        ]
      }
    ]
  }

  public goPage = (pathname: string) => {
    if (pathname.startsWith('http')) {
      window.open(pathname)
      return
    }
    this.props.history.push({
      pathname
    })
  }

  public render() {
    const { list } = this.state
    return (
      <div className="home">
        {
          list.map((item) => (
            <div className="home_sub" key={item.id}>
              <div className="home_sub_header">
                { item.title }
              </div>
              <div className="home_sub_list">
                {
                  item.list.map((item) => (
                    <div className="home_sub_item" key={item.id} onClick={() => this.goPage(item.url)}>
                      <img className="item_icon" src={item.iconUrl} alt="icon"/>
                      <p className="text">{ item.name }</p>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

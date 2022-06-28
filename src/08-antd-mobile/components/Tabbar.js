import React from 'react';
import style from './Tabbar.module.css'
import {TabBar} from "antd-mobile";
import {
  AppOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'
import {withRouter} from "react-router-dom";
function kerwinTabbar(props) {
  const tabs = [
    {
      key: '/films',
      title: '电影',
      icon: <AppOutline />
    },
    {
      key: '/cinemas',
      title: '影院',
      icon: <UnorderedListOutline />
    },
    {
      key: '/Center',
      title: '我的',
      icon: <UserOutline />,
    },
  ]
  return (
    <div className={style.tabbar}>
      <TabBar onChange={value=>{
        props.history.push(value)
      }} activeKey={'/' + props.location.pathname.split('/')[1]}>
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  );
}

export default withRouter(kerwinTabbar);

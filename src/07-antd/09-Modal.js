import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import {Button, Layout, Menu, Modal} from 'antd';
import React, { useState } from 'react';
import './css/03-layout.css'
const { Header, Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Button type="primary" onClick={()=>{
            setIsModalVisible(!isModalVisible)
          }}>
            Open Modal
          </Button>
          <Modal title="Basic Modal" visible={isModalVisible} onOk={()=>{
            console.log('确定')
            setIsModalVisible(!isModalVisible)
          }} onCancel={()=>{
              console.log('取消')
            setIsModalVisible(!isModalVisible)
          }}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;

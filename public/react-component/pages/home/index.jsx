import React, { Fragment } from 'react'
import List from './components/List'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


function Home(props) {
  return (
    <Fragment>
      <Layout style={{ height: '100%' }}>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    合同管理
              </span>
                }
              >
                <Menu.Item key="1">所有合同</Menu.Item>
                <Menu.Item key="2">即将过期合同</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              {
                //<Breadcrumb.Item>Home</Breadcrumb.Item>
                //<Breadcrumb.Item>List</Breadcrumb.Item>
                //<Breadcrumb.Item>App</Breadcrumb.Item>
              }

            </Breadcrumb>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <List />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Fragment>
  )
}


export default Home


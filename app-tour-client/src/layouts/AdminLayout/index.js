import React, {useState} from 'react';
import {Link, Redirect, Route, Switch} from "react-router-dom";
import 'antd/dist/antd.css';
import {Layout, Menu, Breadcrumb} from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    AppstoreOutlined,
    ApartmentOutlined
} from '@ant-design/icons';
import Dashboard from "../../pages/Dashboard";
import Users from "../../pages/Users";
const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

const AdminLayout = (props) => {

    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
                <div className="layout-logo text-center bg-white py-4 mb-3">
                    <a href="#" target="_blank"><img src="/logo.png" alt="logo.svg"/></a>
                </div>
                <Menu theme="dark" defaultSelectedKeys={[props.history.location.pathname]} mode="inline">
                    <Menu.Item key="/admin/dashboard" icon={<PieChartOutlined/>}>
                        <Link to="/admin/dashboard" className="text-decoration-none">Dashboard</Link>
                    </Menu.Item>
                    <Menu.Item key="/admin/users" icon={<TeamOutlined/>}>
                        <Link to="/admin/users" className="text-decoration-none">Users</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{padding: 0}}/>
                <Content style={{margin: '0 16px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        {props.history.location.pathname.split("/").filter(item => item.length > 0).map(item => (
                            <Breadcrumb.Item>{item}</Breadcrumb.Item>
                        ))}
                    </Breadcrumb>
                    <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                        <Switch>
                            <Route exact path="/admin"><Redirect to="/admin/dashboard" /></Route>
                            <Route path="/admin/dashboard" exact component={Dashboard}/>
                            <Route path="/admin/users" exact component={Users}/>
                        </Switch>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>Travel Box Admin ©2022 Created by <a href="https://cosmos-soft.uz"
                                                                                       target="_blank">Cosmos
                    Soft</a></Footer>
            </Layout>
        </Layout>
    );
};

export default AdminLayout;
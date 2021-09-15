import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';

const { Header, Content, Footer } = Layout;

class CustomLayout extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu 
            theme="dark" 
            mode="horizontal" 
            defaultSelectedKeys={['2']}
          >
          {
              this.props.isAuthenticated ?

              <Menu.Item key="2" onClick={this.props.logout}>
                <Link to="/login">Logout</Link>
              </Menu.Item>

              :

              <Menu.Item key="2">
                <Link to="/login">Login</Link>
              </Menu.Item>
          }
  
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>

          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item><Link to='/'>Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to='/'>Reports</Link></Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            {this.props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>DeepMed 2021</Footer>
      </Layout>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));
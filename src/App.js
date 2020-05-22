import React from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { Menu, Row, Col, Button } from 'antd';
import routes from './router/index.js'
import '@/App.less'
const { SubMenu } = Menu;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Button type="primary">Primary</Button>
        <Row className="server-app-content">
          <Router>
            <Col span={5}>
              <Menu
                mode="inline"
                theme="dark"
                inlineCollapsed={this.state.collapsed}
                className="left-menu"
              >
                {
                  routes.map( (firstRouter,index) => {
                    return firstRouter.children ?
                      (
                        <SubMenu key={index} title={firstRouter.name}>
                          {
                            firstRouter.children.map( (secondRouter,i) => {
                                return <Menu.Item key={i}><Link to={secondRouter.path}>{secondRouter.name}</Link ></Menu.Item>
                            })
                          }
                        </SubMenu>
                      ) 
                      :
                      (
                        <Menu.Item key={index}>
                          <Link to={firstRouter.path}>{firstRouter.name}</Link >
                        </Menu.Item>
                      )
                  })
                }
              </Menu>
            </Col>
            <Col span={19}>
              <Switch>
                {
                  routes.map( (firstRouter,index) => {
                    return firstRouter.children ?       
                      (
                        firstRouter.children.map( (secondRouter,i) => {
                          return <Route key={i} path={secondRouter.path}>{secondRouter.component}</Route>
                        })
                      ) 
                      :
                      (
                        <Route key={index} path={firstRouter.path}>{firstRouter.component}</Route>
                      )
                  })
                }
              </Switch>
            </Col>
          </Router>
        </Row>
      </React.Fragment>
    );
  }
}
export default App;

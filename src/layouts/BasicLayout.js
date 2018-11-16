import React from 'react';
import { Layout } from 'antd';
import logo from '@/assets/logo.svg';
import DocumentTitle from 'react-document-title';
import { ContainerQuery } from 'react-container-query';
import Context from './MenuContext';
import classNames from 'classnames';
import { getMenuData } from '@/utils/menu';
import SiderMenu from '@/components/SiderMenu';
import Header from './Header';
import { connect } from 'dva';

const { Content } = Layout;

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
    maxWidth: 1599,
  },
  'screen-xxl': {
    minWidth: 1600,
  },
}

@connect(({ global }) => ({
  collapsed: global.collapsed,
}))
class BasicLayout extends React.Component {

  handleMenuCollapse = collapsed => {
    const { dispatch } = this.props;
    dispatch({
      type: 'global/changeLayoutCollapsed',
      payload: collapsed,
    });
  };

  getPageTitle = pathname => {
    // const currentRouterDate = this
    return `Ironic Admin`;
  }

  getLayoutStyle = () => {
    return {
      paddingTop: 64,
      paddingLeft: 0,
    };
  }

  getLayoutMinHeight = () => {
    return 'calc(100vh - 64px)'
  }

  getContentLayoutStyle = () => {
    const { collapsed } = this.props;

    return {
      // margin: '24px 24px 0',
      paddingLeft: collapsed ? '80px' : '256px',
    };
  }

  getContentStyle = () => {
    return {
      margin: '24px 24px 0',
      // paddingLeft: collapsed ? '80px' : '256px',
    };
  }

  getContext() {
    const { location } = this.props;
    return {
      location,
      breadcrumbNameMap: this.breadcrumbNameMap,
    };
  }

  render() {
    const { 
      navTheme,
      children,
      location: { pathname },
    } = this.props;


    const layout = (
      <Layout>
        <Header
          logo={logo}
          handleMenuCollapse={this.handleMenuCollapse}
          {...this.props}
        />
        <Layout
          style={{
            ...this.getLayoutStyle(),
            minHeight: this.getLayoutMinHeight(),
            maxHeight: this.getLayoutMinHeight(),
          }}
        >
          {/** sidebar */}
          <SiderMenu 
            logo={logo}
            theme="dark"
            fixSiderbar={true}
            onCollapse={this.handleMenuCollapse}
            menuData={getMenuData()}
            {...this.props}
          />
          <Layout
            style={{
              ...this.getContentLayoutStyle(),
            }}
          >
            <Content style={this.getContentStyle()}>
              {children}
            </Content>
          </Layout>
          
        </Layout>
      </Layout>
    )

    return (
      <React.Fragment>
        <DocumentTitle title={this.getPageTitle(pathname)}>
          <ContainerQuery query={query}>
            {params => (
              <Context.Provider value={this.getContext()}>
                <div className={classNames(params)}>{layout}</div>
              </Context.Provider>
            )}
          </ContainerQuery>
        </DocumentTitle>
      </React.Fragment>
    );
  }
}

export default BasicLayout;
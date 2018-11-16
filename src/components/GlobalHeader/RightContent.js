import React, { PureComponent } from 'react';
import { FormattedMessage } from 'umi/locale';
import { Menu, Icon, Dropdown, Avatar } from 'antd';
import styles from './index.less';

export default
class RightContent extends PureComponent {
  render() {

    const { 
      theme,
      onMenuClick,
    } = this.props;

    let className = styles.right;
    if (theme === 'dark') {
      className = `${styles.right} ${styles.search}`
    }

    const menu = (
      <Menu className={styles.menu} onClick={onMenuClick}>
        <Menu.Item key="userCenter">
          <Icon type="user" />
          <FormattedMessage id="menu.account.center" defaultMessage="account center" />
        </Menu.Item>
        <Menu.Item key="userinfo">
          <Icon type="setting" />
          <FormattedMessage id="menu.account.settings" defaultMessage="account settings" />
        </Menu.Item>
        <Menu.Item key="triggerError">
          <Icon type="close-circle" />
          <FormattedMessage id="menu.account.trigger" defaultMessage="Trigger Error" />
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <Icon type="logout" />
          <FormattedMessage id="menu.account.logout" defaultMessage="logout" />
        </Menu.Item>
      </Menu>
    )

    return (
      <div className={className}>
        
        <Dropdown overlay={menu}>
          <span className={`${styles.action} ${styles.account}`}>
            <Avatar
              size="small"
              className={styles.avatar}
              src='https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
              alt="avatar"
            />
            <span className={styles.name}>Iron Man</span>
          </span>
        </Dropdown>
      </div>
    );
  }
}
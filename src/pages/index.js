/**
 * title: 首页
 * authority:
 *   - admin
 */

import styles from './index.css';
import { Menu, Icon, Avatar, Dropdown } from 'antd';
import { FormattedMessage } from 'umi/locale';


export default function() {

  const menu = (
    <Menu className={styles.menu} selectedKeys={[]}>
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
    <div className={styles.normal}>
     
    </div>
  );
}

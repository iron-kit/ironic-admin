import React, { PureComponent } from 'react';
import { Icon } from 'antd';
import Link from 'umi/link';
import Debounce from 'lodash-decorators/debounce';
import RightContent from './RightContent';
import styles from './index.less';

export default
class GlobalHeader extends PureComponent {

  /* eslint-disable*/
  @Debounce(600)
  triggerResizeEvent() {
    // eslint-disable-line
    const event = document.createEvent('HTMLEvents');
    event.initEvent('resize', true, false);
    window.dispatchEvent(event);
  }

  toggle = () => {
    const { collapsed, onCollapse } = this.props;
    onCollapse(!collapsed);
    this.triggerResizeEvent();
  }

  render() {
    const { logo, collapsed } = this.props;
    return (
      <div className={`${styles.header} ${styles.dark}`}>
        <div className={`${styles.logo} ${styles.left}`} key="logo" id="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
            <h1>Ironic Admin</h1>
          </Link>
        </div>
        {/* <Icon 
          className={styles.trigger}
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        /> */}
        <RightContent {...this.props} />
      </div>
    )
  }
}
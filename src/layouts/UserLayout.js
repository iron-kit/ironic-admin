import React, { Fragment } from 'react';
import { Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';
import { formatMessage } from 'umi/locale';
import styles from './UserLayout.less';
import logo from '@/assets/logo.svg';
import Link from 'umi/link';

const links = [
  {
    key: 'help',
    title: formatMessage({ id: 'layout.user.link.help'}),
    href: '',
  },
  {
    key: 'privacy',
    title: formatMessage({ id: 'layout.user.link.privacy' }),
    href: '',
  },
  {
    key: 'terms',
    title: formatMessage({ id: 'layout.user.link.terms' }),
    href: '',
  },
];

const copyright = (
  <Fragment>
    Copyright <Icon type="copyright" /> 2018 
  </Fragment>
)

export default
class UserLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              <Link to="/">
                <img alt="logo" className={styles.logo} src={logo} />
                <span className={styles.title}>Ironic Admin</span>
              </Link>
            </div>
            <div className={styles.desc}>Cloud Data Manager</div>
          </div>
          {children}
        </div>
        <GlobalFooter style={{ color: '#fff' }} links={links} copyright={copyright} />
      </div>
    )
  }
}
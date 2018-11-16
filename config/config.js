import path from 'path';
import ironicTheme from './themes/ironic';

const plugins = [
  ['umi-plugin-react', {
    antd: true,
    dva: {
      hmr: true,
    },
    targets: {
      ie: 11,
    },
    locale: {
      enable: true, // default false
      default: 'zh-CN', // default zh-CN
      baseNavigator: true, // default true, when it is true, will use `navigator.language` overwrite default
    },
    dynamicImport: false,
    title: 'ironic-admin',
    dll: false,
    routes: {
      exclude: [],
    },
    hardSource: false,
  }],
]


// ref: https://umijs.org/config/
export default {
  plugins,
  targets: {
    ie: 11,
  },
  theme: ironicTheme,
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  // cssLoaderOptions: {
  //   modules: true,
  //   getLocalIdent: (context, localIdentName, localName) => {
  //     if (
  //       context.resourcePath.includes('node_modules') ||
  //       context.resourcePath.includes('ant.design.pro.less') ||
  //       context.resourcePath.includes('global.less')
  //     ) {
  //       return localName;
  //     }
  //     const match = context.resourcePath.match(/src(.*)/);
  //     if (match && match[1]) {
  //       const ironicAdminPath = match[1].replace('.less', '');
  //       const arr = ironicAdminPath
  //         .split('/')
  //         .map(a => a.replace(/([A-Z])/g, '-$1'))
  //         .map(a => a.toLowerCase());
  //       return `ironic-admin${arr.join('-')}-${localName}`.replace(/--/g, '-');
  //     }
  //     return localName;
  //   },
  // },
}

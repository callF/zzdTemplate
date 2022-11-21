const env = process.env.TARO_ENV;

const weappConfig = {
  pages: ['pages/index/index'],
  subpackages: [
    {
      root: 'pages/packageA',
      pages: ['home/index', 'webview/index'],
    },
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#154AD8',
  },
};

const h5Config = {
  pages: [
    'pages/index/index',
    'pages/packageA/home/index',
    'pages/packageA/webview/index',
  ],
};

export default env === 'weapp' ? weappConfig : h5Config;

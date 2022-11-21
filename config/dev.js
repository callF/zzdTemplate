module.exports = {
  env: {
    NODE_ENV: '"development"',
  },
  defineConstants: {},
  mini: {},
  h5: {
    devServer: {
      // 匹配开头的path
      proxy: {
        '/client': {
          target: 'http://111.0.123.139:43039', // 服务端地址
          changeOrigin: true,
          pathRewrite: {
            '^/client': '',
          },
        },
      },
    },
  },
};

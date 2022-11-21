import amapFile from './amap-wx.130';

export async function getWeather(callBack) {
  const amapsdk = new amapFile.AMapWX({
    key: '37c5754b58db213ab3bea11b894dbb11',
  });

  amapsdk.getWeather({
    type: 'live',
    success(data) {
      callBack(data);
    },
    fail(info) {
      // 失败回调
    },
  });
}

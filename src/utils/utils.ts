import Taro from '@tarojs/taro';
/**
 * 展示操作成功的弹窗
 * @param cb 当弹窗消失后的回调
 */
export const showSucToast = (cb?: any) => {
  Taro.showToast({
    icon: 'success',
    title: '操作成功',
    duration: 1000,
  });
  setTimeout(() => {
    cb && cb();
  }, 1000);
};

export const getUrlParam = (url, name) => {
  let pattern = new RegExp('[?&]' + name + '=([^&]+)', 'g');
  let matcher = pattern.exec(url);
  let items = '';
  if (matcher != null) {
    try {
      items = decodeURIComponent(decodeURIComponent(matcher[1]));
    } catch (e) {
      try {
        items = decodeURIComponent(matcher[1]);
      } catch (e) {
        items = matcher[1];
      }
    }
  }
  return items;
};

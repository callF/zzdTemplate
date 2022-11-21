import dd from 'dingtalk-jsapi';
import Taro from '@tarojs/taro';
import { getMyEnv, IS_H5, IS_WEAPP } from '@/constants';

// 判断是钉钉还是其他环境
export const IS_DD = dd.env.platform !== 'notInDingTalk';

// 扫码
export async function scan() {
  let res;
  const { isZwd } = await getMyEnv();
  if (IS_WEAPP) {
    // 微信
    res = await Taro.scanCode({});
  } else if (IS_H5) {
    if (IS_DD) {
      res = await dd.biz.util.scan({
        type: 'all',
      });
    } else if (isZwd) {
      // 浙政钉
      // 放到上面weapp里面会异常
      const zzdd = (await import('gdt-jsapi')).default;
      res = await zzdd.scan({ type: 'all' });
    }
  }
  return res;
}

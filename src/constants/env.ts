import { urlUtils } from '@szsk/utils';
import dd from 'dingtalk-jsapi';

// app编译类型
// 判断是钉钉还是其他环境
const appEnv = process.env.TARO_ENV;
export const IS_DD = dd.env.platform !== 'notInDingTalk';
export const IS_H5 = appEnv === 'h5';
export const IS_WEAPP = appEnv === 'weapp';

export const getMyEnv = async (): Promise<{
  myEnv: IMyEnv;
  isZwd: boolean;
}> => {
  let myEnv: IMyEnv = 'other';
  let isZwd = false;
  let zzdd;
  if (IS_WEAPP) {
    myEnv = 'weapp';
  } else if (IS_H5) {
    zzdd = (await import('gdt-jsapi')).default;
    window.zzd = zzdd;
    isZwd = !!(zzdd.getUserAgent() as any);
    if (IS_DD) {
      myEnv = 'dd';
    } else if (isZwd) {
      // 专有钉钉或者浙政钉
      if (urlUtils.getQueryString('userId')) {
        // 接入内控菜单
        myEnv = 'zzd_nk';
      } else {
        // 接入大数据局
        myEnv = 'zzd_sjj';
      }
    } else {
      myEnv = 'h5';
    }
  }
  return { myEnv, isZwd };
};

import { useEffect, useState } from 'react';
import Taro from '@tarojs/taro';
// import userStore from '@/store/user';
import { getMyEnv, PATH_CONFIG } from '@/constants';
/**
 * 防止被刷新之后登陆信息失效（将userInfo存储于store是不是必要，为什么不存于localStorage？）
 * @param isSelf 表示本页不跳转
 */
export const useProtectLogin = (isSelf?: boolean) => {};

// Env
export const useMyEnv = () => {
  const [myEnv, setEnv] = useState<IMyEnv>();
  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const { myEnv: _myEnv } = await getMyEnv();
    setEnv(_myEnv);
  };
  return [myEnv];
};

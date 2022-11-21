import { useEffect } from 'react';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';

import './index.less';
import { PATH_CONFIG } from '@/constants';

const Index = () => {
  useEffect(() => {
    Taro.reLaunch({ url: PATH_CONFIG.HOME });
  }, []);

  return <View className="g-index" />;
};
export default Index;

import { View } from '@tarojs/components';
import React, { useEffect, useState } from 'react';
import Taro from '@tarojs/taro';
import { getBottomLeft } from '@/utils/screen';
import './index.less';

interface Props {
  children: React.ReactNode;
}

const MyFooter = (props: Props) => {
  const { children } = props;
  const [bottomLeft, setBottomLeft] = useState('');

  useEffect(() => {
    setBottomLeft(Taro.pxTransform(getBottomLeft()));
  }, []);
  return (
    <View className="g-MyFooter">
      <View className="u-block" style={{ paddingBottom: bottomLeft }} />
      <View className="m-MyFooter" style={{ paddingBottom: bottomLeft }}>
        {children}
      </View>
    </View>
  );
};
export default React.memo(MyFooter);

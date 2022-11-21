import { View } from '@tarojs/components';
import React from 'react';
import './index.less';

interface Props {
  children: React.ReactNode;
  num?: number;
}

const Badge = (props: Props) => {
  const { children, num } = props;
  return (
    <View className="g-badge">
      {num ? <View className="u-num">{num}</View> : ''}
      {children}
    </View>
  );
};
export default React.memo(Badge);

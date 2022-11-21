import { View } from '@tarojs/components';
import React from 'react';
import './index.less';

interface Props {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section = (props: Props) => {
  const { title, children, className } = props;
  return (
    <View className={`g-section ${className || ''}`}>
      <View className="u-title">{title}</View>
      <View className="m-c">{children}</View>
    </View>
  );
};
export default React.memo(Section);

import { View, Image } from '@tarojs/components';
import React from 'react';
import './index.less';

interface IProps {
  type?: 'normal' | 'list';
}

const Empty = (props: IProps) => {
  const { type = 'normal' } = props;
  const getIconUrl = () => {
    switch (type) {
      case 'normal':
        return 'https://szzw001.oss-cn-hangzhou.aliyuncs.com/assetControl/app/empty.png';
      case 'list':
        return 'https://szzw001.oss-cn-hangzhou.aliyuncs.com/assetControl/app/empty2.png';
      default:
        return '';
    }
  };
  return (
    <View className={`g-empty f-${type}`}>
      <Image className="u-icon" src={getIconUrl()} />
      <View className="u-text">暂无内容</View>
    </View>
  );
};
export default React.memo(Empty);

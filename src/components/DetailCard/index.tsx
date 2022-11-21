import { View } from '@tarojs/components';
import React, { useState } from 'react';
import { AtIcon } from 'taro-ui';
import './index.less';

interface Props {
  title?: string;
  foldCb?: any; // 开启折叠，折叠回调
  children?: React.ReactNode;
  className?: string;
}

const DetailCard = (props: Props) => {
  const { title, className, children, foldCb } = props;
  // 如果有回调方法则是开启，默认折叠
  const [isFold, setIsFold] = useState(!!foldCb);

  const onFold = () => {
    setIsFold(!isFold);
    foldCb && foldCb();
  };
  return (
    <View className={`g-detailCard ${className || ''}`}>
      <View className="u-edge" />
      {foldCb && (
        <View className="m-fold" onClick={onFold}>
          <View className="u-text">{isFold ? '展开' : '收起'}</View>
          <AtIcon
            value={isFold ? 'chevron-down' : 'chevron-up'}
            className="u-icon"
            color="#909399"
          />
        </View>
      )}
      {title && <View className="u-title">{title}</View>}
      <View className="m-l">{children}</View>
    </View>
  );
};
export default React.memo(DetailCard);

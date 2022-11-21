import { View } from '@tarojs/components';
import React from 'react';
import './index.less';

interface Props {
  title: string;
  btnText?: string;
  onClickBtn?: any;
  className?: string;
}

const Title = (props: Props) => {
  const { title, btnText, onClickBtn, className } = props;
  return (
    <View className={`g-title ${className || ''}`}>
      <View className="u-title">{title}</View>
      {btnText ? (
        <View className="u-btn" onClick={onClickBtn}>
          {btnText}
        </View>
      ) : (
        ''
      )}
    </View>
  );
};
export default React.memo(Title);

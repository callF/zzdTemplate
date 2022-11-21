import { View } from '@tarojs/components';
import { AtFloatLayout, AtIcon, AtList, AtListItem } from 'taro-ui';
import Taro from '@tarojs/taro';
import './index.less';
import React, { useEffect, useState } from 'react';

interface Props {
  title: string;
  hasChanged?: boolean;
  onSuccess?: () => any;
}

const MyHeader = (props: Props) => {
  const { title, onSuccess, hasChanged } = props;
  const [barH, setBarH] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [barContentH, setBarContentH] = useState('');
  const [paddingT, setPaddingT] = useState('');
  useEffect(() => {
    setBarHeight();
  }, []);

  const setBarHeight = () => {
    const { statusBarHeight } = Taro.getSystemInfoSync();
    const { bottom, top } = Taro.getMenuButtonBoundingClientRect();
    setBarH(Taro.pxTransform(bottom + top - statusBarHeight));
    setBarContentH(Taro.pxTransform(statusBarHeight));
    setPaddingT(Taro.pxTransform(top));
  };

  const onBack = () => {
    if (hasChanged) {
      setIsOpen(true);
    } else {
      Taro.navigateBack();
    }
  };

  return (
    <View className="g-myHeader" style={{ height: barH }}>
      <View className="u-block" style={{ height: barH }} />
      <View
        className="m-myHeader"
        style={{ height: barH, paddingTop: paddingT }}
      >
        <AtIcon
          className="u-back-btn"
          customStyle={{ lineHeight: barContentH }}
          value="chevron-left"
          color="#fff"
          onClick={() => onBack()}
        />
        <View className="u-title" style={{ lineHeight: barContentH }}>
          {title}
        </View>
      </View>
      <AtFloatLayout onClose={() => setIsOpen(false)} isOpened={isOpen}>
        <AtList>
          <AtListItem
            thumb="https://szzw001.oss-cn-hangzhou.aliyuncs.com/assetControl/app/draft-icon.png"
            title="保存草稿"
            onClick={onSuccess}
          />
          <AtListItem
            thumb="https://szzw001.oss-cn-hangzhou.aliyuncs.com/assetControl/app/delete-icon.png"
            title="放弃更改"
            onClick={() => Taro.navigateBack()}
          />
          <AtListItem
            className="m-cancel"
            thumb="https://szzw001.oss-cn-hangzhou.aliyuncs.com/assetControl/app/close-icon.png"
            title="取消"
            onClick={() => setIsOpen(false)}
          />
        </AtList>
      </AtFloatLayout>
    </View>
  );
};
export default React.memo(MyHeader);

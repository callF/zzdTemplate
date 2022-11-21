import { View } from '@tarojs/components';
// import { AtFloatLayout, AtList, AtListItem } from 'taro-ui';
// import Taro, { useDidShow } from '@tarojs/taro';
import './index.less';
import React from 'react';

interface Props {
  // 跳的地方
  jumpUrl?: string;
  // 是否做了变更
  hasChanged?: boolean;
  onSuccess?: () => any;
}

const MyHeader = (props: Props) => {
  // const { onSuccess, hasChanged, jumpUrl = '', createTwo } = props;
  // const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   window.addEventListener('popstate', myBack, false);
  //   return () => {
  //     window.removeEventListener('popstate', myBack, false);
  //   };
  // }, [hasChanged]);

  // useDidShow(() => {
  //   setIsOpen(false);
  // });

  // useEffect(() => {
  //   window.history.pushState(null, '', document.URL);
  // }, []);

  // const myBack = () => {
  //   // 防止hide的时候出问题
  //   if (window.location.hash.includes(jumpUrl)) {
  //     onBack();
  //   }
  // };

  // const onBack = () => {
  //   debugger
  //   if (hasChanged) {
  //     setIsOpen(true);
  //   } else {
  //     Taro.navigateBack();
  //   }
  // };

  // const onCancle = () => {
  //   setIsOpen(false);
  //   window.history.pushState(null, '', document.URL);
  // };

  return (
    <View className="g-myHeader">
      {/* <AtFloatLayout onClose={onCancle} isOpened={isOpen}>
        <AtList>
          <AtListItem
            thumb="https://szzw001.oss-cn-hangzhou.aliyuncs.com/assetControl/app/draft-icon.png"
            title="保存草稿"
            onClick={onSuccess}
          />
          <AtListItem
            thumb="https://szzw001.oss-cn-hangzhou.aliyuncs.com/assetControl/app/delete-icon.png"
            title="放弃更改"
            onClick={() => {
              if (createTwo) {
                Taro.navigateBack();
              }
              Taro.navigateBack();
            }}
          />
          <AtListItem
            className="m-cancel"
            thumb="https://szzw001.oss-cn-hangzhou.aliyuncs.com/assetControl/app/close-icon.png"
            title="取消"
            onClick={onCancle}
          />
        </AtList>
      </AtFloatLayout> */}
    </View>
  );
};
export default React.memo(MyHeader);

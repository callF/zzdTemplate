import { View } from '@tarojs/components';
import React from 'react';
import { IS_H5 } from '@/constants';
import MyHeader from '../MyHeader';
import MyHeaderWeapp from '../MyHeaderWeapp';
import './index.less';

interface IProps {
  title: string;
  onSuccess: () => any;
  hasChanged: boolean;
  jumpUrl: string;
}

const BCommonHeader = (props: IProps) => {
  const renderMyHeader = () => {
    if (!IS_H5) {
      return <MyHeaderWeapp {...props} />;
    }
    return <MyHeader {...props} />;
  };
  return <View className="g-common-header">{renderMyHeader()}</View>;
};
export default React.memo(BCommonHeader);

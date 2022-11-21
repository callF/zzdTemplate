import { View } from '@tarojs/components';
import React from 'react';
import { AtAvatar } from 'taro-ui';
import './index.less';

export interface ITag extends ICommon {
  icon?: string;
  children?: string;
}

interface Props {
  data: ITag[];
  onClick?: any;
}

const TagList = (props: Props) => {
  const { data = [], onClick } = props;
  const onC = (record: ITag) => {
    onClick && onClick(record);
  };
  return (
    <View className="g-tagList">
      {data.map((item: ITag) => {
        const { icon, name, id } = item;
        return (
          <View key={id} className="m-tag" onClick={() => onC(item)}>
            <AtAvatar circle className="u-icon" image={icon} />
            <View className="u-name">{name}</View>
          </View>
        );
      })}
    </View>
  );
};
export default React.memo(TagList);

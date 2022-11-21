import { View } from '@tarojs/components';
import React, { useState } from 'react';
import { PAGE_SIZE } from '@/constants';
import Badge from '../Badge';
import './index.less';

export interface ITab {
  name: string;
  key: string | number;
  badgeNum?: number;
}

interface Props {
  // 目前仅支持3个以下的
  tabConfigs: ITab[];
  keyName: string;
  onChange: any;
}

const Tabs = (props: Props) => {
  const { tabConfigs = [], onChange, keyName } = props;
  const [activeKey, setActiveKey] = useState(tabConfigs[0].key);
  const onClick = (key: string | number) => {
    if (key === activeKey) {
      return;
    }
    setActiveKey(key);
    onChange && onChange({ [keyName]: key, pageSize: PAGE_SIZE });
  };
  return (
    <View className="g-tabs">
      {tabConfigs.map((item: ITab) => {
        const { name, key, badgeNum } = item;
        return (
          <View
            className={`m-tab ${activeKey === key ? 'f-active' : ''}`}
            key={key}
            onClick={() => onClick(key)}
          >
            <Badge num={badgeNum}>
              <View className="u-text">{name}</View>
            </Badge>
          </View>
        );
      })}
    </View>
  );
};
export default React.memo(Tabs);

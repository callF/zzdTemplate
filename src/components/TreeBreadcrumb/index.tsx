import { View } from '@tarojs/components';
import React from 'react';
import { AtIcon } from 'taro-ui';
import './index.less';

interface Props {
  config: ICommon[];
  onChange?: any;
  className?: string;
}

const TreeBreadcrumb = (props: Props) => {
  const { config = [], onChange, className } = props;
  const onClick = (record: ICommon, idx: number) => {
    if (idx === config.length - 1) {
      return;
    }
    onChange && onChange(record, idx);
  };
  return (
    <View className={`g-treeBreadcrumb ${className || ''}`}>
      {config.map((item, idx: number) => {
        const { name, id } = item;
        return (
          <View
            key={id}
            className={`m-item ${idx === config.length - 1 ? 'f-last' : ''}`}
            onClick={() => onClick(item, idx)}
          >
            <View className="u-name f-ellipsis">{name}</View>
            {idx !== config.length - 1 ? (
              <AtIcon
                size={16}
                color="#909399"
                className="u-icon"
                value="chevron-right"
              />
            ) : (
              ''
            )}
          </View>
        );
      })}
    </View>
  );
};
export default React.memo(TreeBreadcrumb);

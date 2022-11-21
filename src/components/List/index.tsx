import { Picker, View } from '@tarojs/components';
import React from 'react';
import { AtIcon } from 'taro-ui';
import './index.less';

export interface IListItem {
  label: string;
  value: React.ReactNode;
  type?: 'picker' | 'normal';
  options?: string[]; // picker下选项
  onChange?: any; // picker下onChange
  hasArrow?: boolean;
  onClick?: any;
}

interface Props {
  list: IListItem[];
}

const List = (props: Props) => {
  const { list = [] } = props;
  return (
    <View className="g-list">
      {list.map((item: IListItem, idx: number) => {
        const {
          label,
          value,
          hasArrow,
          onClick,
          type = 'normal',
          options = [],
          onChange,
        } = item;
        return (
          <View key={idx} className="m-item" onClick={onClick}>
            <View className="u-label">{label}</View>
            <Picker
              className="m-value"
              mode="selector"
              disabled={type !== 'picker'}
              range={options}
              value={options.indexOf(value as string)}
              onChange={onChange}
            >
              <View className="m-value">
                <View className="u-value">{value}</View>
                {hasArrow ? (
                  <AtIcon
                    className="u-right-arrow"
                    color="grey"
                    value="chevron-right"
                  />
                ) : (
                  ''
                )}
              </View>
            </Picker>
          </View>
        );
      })}
    </View>
  );
};
export default React.memo(List);

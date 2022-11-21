import { View } from '@tarojs/components';
import React from 'react';
import { AtAvatar, AtIcon } from 'taro-ui';
import './index.less';

interface IRadioItem {
  id: string;
  name: string;
  avatar?: string;
  extraText?: string;
  [key: string]: any;
}

interface Props {
  data: IRadioItem[];
  selectKeys: string[];
  onChange?: any;
  className?: string;
}

const RadioList = (props: Props) => {
  const { data = [], selectKeys, onChange, className } = props;
  const onClick = (record: any) => {
    onChange && onChange(record);
  };
  return (
    <View className={`g-radioList ${className || ''}`}>
      {data.map((item) => {
        const { id, name, extraText, avatar, children } = item;
        return !(children || []).length ? (
          <View
            key={id}
            className={`m-radio ${
              (selectKeys || []).includes(id) ? 'f-active' : ''
            }`}
            onClick={() => onClick(item)}
          >
            <View className="m-check-icon">
              <AtIcon className="u-check-icon" value="check" color="white" />
            </View>
            <View className="m-label">
              {avatar ? (
                <AtAvatar size="normal" className="u-img" image={avatar} />
              ) : (
                ''
              )}
              <View className="u-name">{name}</View>
            </View>
            <View className="u-extra">{extraText}</View>
          </View>
        ) : (
          ''
        );
      })}
    </View>
  );
};
export default React.memo(RadioList);

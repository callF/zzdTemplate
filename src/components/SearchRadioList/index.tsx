import { View, Text } from '@tarojs/components';
import React from 'react';
import { AtIcon } from 'taro-ui';
import './index.less';

interface IRadioItem {
  id: string;
  name: string;
  extraText?: string;
}

interface Props {
  data: IRadioItem[];
  selectKeys: string[];
  searchName: string;
  onChange?: any;
  className?: string;
}

const SearchRadioList = (props: Props) => {
  const { data = [], selectKeys, onChange, className, searchName } = props;

  const onClick = (record: any) => {
    onChange && onChange(record);
  };
  const getHighLightText = (name: string) => {
    let matchName = searchName.toLowerCase();
    let idx = name.indexOf(matchName);
    if (idx === -1) {
      matchName = searchName.toUpperCase();
      idx = name.indexOf(matchName);
    }
    const text1 = name.slice(0, idx);
    const text2 = matchName;
    return (
      <>
        <Text className="u-hide-text">{text1}</Text>
        <Text>{text2}</Text>
      </>
    );
  };
  return (
    <View className={`g-searchRadioList ${className || ''}`}>
      {(data || []).map((item) => {
        const { id, name, extraText } = item;
        return (
          <View
            key={id}
            className={`m-radio ${selectKeys.includes(id) ? 'f-active' : ''}`}
            onClick={() => onClick(item)}
          >
            <View className="m-check-icon">
              <AtIcon
                className="u-check-icon"
                value="check"
                color="white"
                size="12"
              />
            </View>
            <View className="m-label">
              <View className="u-name f-ellipsis">{name}</View>
              <View className="u-highlight-name f-ellipsis">
                {getHighLightText(name)}
              </View>
            </View>
            <View className="u-extra f-ellipsis">{extraText}</View>
          </View>
        );
      })}
    </View>
  );
};
export default React.memo(SearchRadioList);

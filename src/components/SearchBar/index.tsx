import { View, Input } from '@tarojs/components';
import { AtIcon } from 'taro-ui';
import './index.less';
import { funcUtils } from '@szsk/utils';
import React from 'react';
import { PAGE_SIZE } from '@/constants';

interface Props {
  onChange: any;
  keyName: string;
  placeholder?: string;
  className?: string;
}

const SearchBar = (props: Props) => {
  const { onChange, className, keyName, placeholder } = props;
  const onInput = funcUtils.debounce((e) => {
    onChange({ [keyName]: e.detail.value, pageSize: PAGE_SIZE });
  }, 500);
  return (
    <View className={`g-searchBar ${className || ''}`}>
      <Input className="u-input" onInput={onInput} placeholder={placeholder} />
      <AtIcon className="u-icon" value="search" size="22" color="white" />
    </View>
  );
};
export default React.memo(SearchBar);

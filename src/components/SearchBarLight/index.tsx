import { View, Input } from '@tarojs/components';
import { AtIcon } from 'taro-ui';
import './index.less';
import { funcUtils } from '@szsk/utils';
import React, { useState } from 'react';
import { PAGE_SIZE } from '@/constants';

interface Props {
  onChange: any;
  keyName: string;
  placeholder?: string;
  className?: string;
}

const SearchBarLight = (props: Props) => {
  const { onChange, className, keyName, placeholder } = props;
  const [isFocused, setIsFocused] = useState(false);
  const onInput = funcUtils.debounce((e) => {
    onChange({ [keyName]: e.detail.value, pageSize: PAGE_SIZE });
  }, 500);
  const onFocus = () => {
    setIsFocused(true);
  };
  const onBlur = () => {
    setIsFocused(false);
  };
  return (
    <View
      className={`g-searchBarLight ${className || ''} ${
        isFocused ? 'f-focus' : ''
      }`}
    >
      <View className="m-input">
        <Input
          className="u-input"
          onInput={onInput}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <AtIcon className="u-icon" value="search" color="#555555" />
      </View>
    </View>
  );
};
export default React.memo(SearchBarLight);

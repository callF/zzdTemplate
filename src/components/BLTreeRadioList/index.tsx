import { View } from '@tarojs/components';
import React, { useEffect, useState } from 'react';
import './index.less';

interface Props {
  data: ILocation[];
  selectLocation: ILocation;
  onChange: any;
  className?: string;
}

const BLTreeRadioList = (props: Props) => {
  const { className, onChange, selectLocation, data = [] } = props;
  const { id: lId } = selectLocation;
  const [activeKey, setActiveKey] = useState('');

  useEffect(() => {
    selectActiveKey();
  }, [data, selectLocation]);

  const selectActiveKey = () => {
    let _activeKey = '';
    const searchTopParentKey = (_l: ILocation[], topId?: string) => {
      _l.forEach((item: ILocation) => {
        const { children, placeNo: _Id } = item;
        if (lId === _Id) {
          _activeKey = topId || _Id;
        }
        if (children && children.length) {
          searchTopParentKey(children, topId || _Id);
        }
      });
    };
    searchTopParentKey(data);
    setActiveKey(_activeKey);
  };

  const onClick = (record: ILocation) => {
    onChange && onChange(record);
  };
  return (
    <View className={`g-lTreeRadioList ${className || ''}`}>
      {data.map((item) => {
        const { placeName, id, children } = item;
        return (children || []).length ? (
          <View
            key={id}
            className={`m-tree-radio ${activeKey === id ? 'f-active' : ''}`}
            onClick={() => onClick(item)}
          >
            <View className="u-name f-ellipsis">{placeName}</View>
            <View className="m-rightC">
              <View className="u-menu-icon" />
            </View>
          </View>
        ) : (
          ''
        );
      })}
    </View>
  );
};
export default React.memo(BLTreeRadioList);

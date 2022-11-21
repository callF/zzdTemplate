import { View } from '@tarojs/components';
import React, { useEffect, useState } from 'react';
import { getBottomLeft } from '@/utils/screen';
import RadioList from '../RadioList';
import './index.less';

interface Props {
  menuData: ICommon[];
  menu2Data: ICommon[];
  radioData: ICommon[];
  selectKey: string;
  onCheck: any;
  onMenuClick: any;
  onMenuChange: any;
}

const MenuTreeRadioList = (props: Props) => {
  const {
    menuData,
    menu2Data,
    radioData,
    onCheck,
    onMenuClick,
    selectKey,
    onMenuChange,
  } = props;
  const [activeMenu, setActiveMenu] = useState<ICommon>();
  useEffect(() => {
    setActiveMenu(menuData[0]);
  }, [menuData]);

  const onMenuC = (record: ICommon) => {
    if (activeMenu?.id === record.id) {
      return;
    }
    onMenuChange && onMenuChange(record);
    setActiveMenu(record);
  };

  return (
    <View className="g-menuTreeRadioList">
      {menuData.length && (
        <View
          className="m-left-l"
          style={{ height: `calc(100vh - ${196 + getBottomLeft()}px)` }}
        >
          {menuData.map((item) => {
            const { id, name } = item;
            return (
              <View
                key={id}
                className={`m-menu f-ellipsis ${
                  activeMenu?.id === id ? 'f-active' : ''
                }`}
                onClick={() => onMenuC(item)}
              >
                {name}
              </View>
            );
          })}
        </View>
      )}
      {menu2Data.length && (
        <View
          className="m-right-ml"
          style={{ height: `calc(100vh - ${196 + getBottomLeft()}px)` }}
        >
          {menu2Data.map((item, idx: number) => {
            const { id, name } = item;
            return (
              <View
                key={id}
                className={`m-menu ${activeMenu?.id === id ? 'f-active' : ''}`}
                onClick={() => {
                  onMenuClick(activeMenu, idx);
                  setTimeout(() => {
                    setActiveMenu(item);
                  }, 50);
                }}
              >
                {name}
              </View>
            );
          })}
        </View>
      )}
      {radioData.length && (
        <View
          className="m-right-l"
          style={{ height: `calc(100vh - ${196 + getBottomLeft()}px)` }}
        >
          <RadioList
            onChange={onCheck}
            data={radioData}
            selectKeys={selectKey ? [selectKey] : []}
          />
        </View>
      )}
    </View>
  );
};
export default React.memo(MenuTreeRadioList);

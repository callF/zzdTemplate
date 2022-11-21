import { View } from '@tarojs/components';
import React, { useEffect, useState } from 'react';
import { AtAvatar } from 'taro-ui';
import { DEFAULT_AVATAR } from '@/constants';
import './index.less';

interface Props {
  data: IOrg[];
  selectPersons: IUser[];
  onChange: any;
  className?: string;
}

const BPTreeRadioList = (props: Props) => {
  const { className, onChange, selectPersons, data = [] } = props;
  const [activeKeys, setActiveKeys] = useState<IUser[]>([]);

  useEffect(() => {
    selectActiveKey();
  }, [data, selectPersons]);

  // 寻找选中人员中这一级的位置
  const selectActiveKey = () => {
    const _activeKeys: IUser[] = [];
    const searchTopParentKey = (_l: IOrg[], topId?: string) => {
      _l.forEach((item: IOrg) => {
        const { zcyUserPos = [], children, id: orgId } = item;
        if (zcyUserPos && zcyUserPos.length) {
          zcyUserPos.forEach((user: IUser) => {
            const { userId } = user;
            selectPersons.forEach((p) => {
              const { id: uId, orgId: uOId } = p;
              if (userId === uId && uOId === orgId) {
                // 找到一样的id和一样的orgId，人员可能有多个部门
                _activeKeys.push({ ...p, activeKey: topId || orgId });
              }
            });
          });
        }
        if (children && children.length) {
          searchTopParentKey(children, topId || orgId);
        }
      });
    };
    searchTopParentKey(data);
    setActiveKeys(_activeKeys);
  };

  const onClick = (record: IOrg) => {
    onChange && onChange(record);
  };
  return (
    <View className={`g-treeRadioList ${className || ''}`}>
      {data.map((item) => {
        const { agencyName, id, personNum = 0 } = item;
        const actives = activeKeys.filter((p) => p.activeKey === id);
        return (
          <View
            key={id}
            className={`m-tree-radio ${actives.length ? 'f-active' : ''}`}
            onClick={() => onClick(item)}
          >
            <View className="u-name f-ellipsis">{agencyName}</View>
            <View className="u-num">（{personNum}人）</View>
            <View className={`m-rightC ${actives.length > 1 ? 'f-mult' : ''}`}>
              {actives.map((a) => {
                const { userPhoto, id: uId } = a;
                return (
                  <AtAvatar
                    className="u-avatar"
                    circle
                    key={uId}
                    size="small"
                    image={userPhoto || DEFAULT_AVATAR}
                  />
                );
              })}
              <View className="u-menu-icon" />
            </View>
          </View>
        );
      })}
    </View>
  );
};
export default React.memo(BPTreeRadioList);

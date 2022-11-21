import React, { useEffect, useState } from 'react';
import { ScrollView, View, Image } from '@tarojs/components';
import { hookUtils } from '@szsk/utils';
import moment from 'moment';
import { PAGE_SIZE, APPROVE_TYPE, APPROVE_CARD_TYPE } from '@/constants';
import './index.less';
import Empty from '../Empty';

export interface IListCard {
  // code
  id: string;
  // 名称
  name: string;
  // 时间
  time: string;
  // 单据类型
  type?: number;
  // 是否展示删除
  showDel?: boolean;
  // 是否阅读了
  notRead?: boolean;
  // 按钮类型
  btnType?: string;
}

interface Props {
  // 列表数据
  list: IListCard[];
  // 总条数
  total: number;
  // scrollView距顶
  top: number;
  // 参数变更
  onParamsChange: any;
  // height
  height: string;
  // 卡片点击
  onCardClick?: any;
  // 卡片长按删除回调
  onCardPress?: any;
  // 容器自定义class
  className?: string;
}

const BCardList = (props: Props) => {
  const {
    onParamsChange,
    total,
    top,
    list: data = [],
    height,
    onCardClick,
    onCardPress,
    className,
  } = props;
  const [current, setCurrent] = useState(1);
  const [list, setList] = useState(data);

  useEffect(() => {
    setList(data);
  }, [data]);

  // 上拉加载
  const onScrollToLower = hookUtils.useThrottle(() => {
    // 到达最大条数则不再去获取数据
    if (total > PAGE_SIZE * current) {
      // 每次用+页面的形式去获取数据，前端就不用去拼接数据了
      onParamsChange({ pageSize: PAGE_SIZE * (current + 1) });
      setCurrent(current + 1);
    }
  }, 200);

  const onClick = (item: IListCard) => {
    const { showDel } = item;
    !showDel && onCardClick && onCardClick(item);
  };

  const onLongPress = (_idx: number) => {
    if (onCardPress) {
      list[_idx].showDel = true;
      setList([...list]);
    }
  };

  const onDel = (record: IListCard, _idx: number) => {
    onCardPress && onCardPress(record);
  };
  return (
    <View className={`g-bCardList ${className || ''}`}>
      <ScrollView
        scroll-top={top}
        scrollY
        className="m-scroll-c"
        style={{ height }}
        lowerThreshold={200}
        onScrollToLower={onScrollToLower}
      >
        {list.length ? (
          list.map((item, idx: number) => {
            const { name, time, id, notRead, btnType, type, showDel } = item;
            return (
              <View
                onLongPress={() => onLongPress(idx)}
                className={`m-card ${showDel ? 'f-showDel' : ''} ${
                  type ? `f-${APPROVE_CARD_TYPE.toKey(type)}` : ''
                } ${notRead ? 'f-not-read' : ''}`}
                key={id}
                onClick={() => onClick(item)}
              >
                <View className="g-del">
                  <View className="u-mask" />
                  <View className="m-del" onClick={() => onDel(item, idx)}>
                    删除
                  </View>
                </View>
                <View className="m-title">
                  <View className="u-title">
                    {type
                      ? `资产${APPROVE_CARD_TYPE.toString(type)}单`
                      : '单据编号'}
                  </View>
                  <View className="u-time">
                    {moment(time).format('MM/DD HH:mm:ss')}
                  </View>
                </View>
                <View className="u-id">{id}</View>
                <View className="m-footer">
                  <Image
                    className="u-icon"
                    src="https://szzw001.oss-cn-hangzhou.aliyuncs.com/assetControl/app/default-avatar1.png"
                  />
                  <View className="u-name">{name}</View>
                </View>
                <View className={`u-btn f-${btnType}`}>
                  {btnType === 'wait' ? '去审批' : ''}
                </View>
              </View>
            );
          })
        ) : (
          <Empty type="list" />
        )}
      </ScrollView>
    </View>
  );
};
export default React.memo(BCardList);

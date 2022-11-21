import React, { useEffect, useState } from 'react';
import { ScrollView, View, Image } from '@tarojs/components';
import { hookUtils } from '@szsk/utils';
import moment from 'moment';
import { PAGE_SIZE } from '@/constants';
import './index.less';
import Empty from '../Empty';

export interface IListCard {
  // code
  name: string;
  time: string;
  id: string;
  number: string;
  type: string;
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
  // 容器自定义class
  className?: string;
}

const PatrolList = (props: Props) => {
  const {
    onParamsChange,
    total,
    top,
    list: data = [],
    height,
    onCardClick,
    // onCardPress,
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
    onCardClick && onCardClick(item);
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
            // const { name, time, id, type } = item;
            const { id, time, name, number, type, url = '' } = item;

            return (
              <View className="m-card" key={id} onClick={() => onClick(item)}>
                <View className="m-title">
                  <View className="u-title">{number}</View>
                  <View className="u-time">
                    {moment(time).format('MM/DD HH:mm:ss')}
                  </View>
                </View>
                <View className="u-id">{name}</View>
                {url && <Image className="u-image" src={url} />}

                <View className="m-footer">
                  <View className="u-name">巡检类型：{type}</View>
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
export default React.memo(PatrolList);

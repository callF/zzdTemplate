import { View, Image } from '@tarojs/components';
import './index.less';

interface IProps {
  spinning: boolean; // 是否加载状态
}

const Loading = (props: IProps) => {
  const { spinning } = props;
  return (
    <View className={`g-loading ${spinning ? 'f-spinning' : ''}`}>
      <Image
        className="u-gif"
        src="https://szzw001.oss-cn-hangzhou.aliyuncs.com/assetControl/app/loading.gif"
      />
    </View>
  );
};
export default Loading;

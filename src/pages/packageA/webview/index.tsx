import { urlUtils } from '@szsk/utils';
import { WebView } from '@tarojs/components';
import Taro from '@tarojs/taro';
import PageWrapper from '@/components/PageWrapper';

const Webview = () => {
  let url = Taro.getStorageSync('scanUrl');
  url = urlUtils.addQueryParams(url, {
    accessToken: Taro.getStorageSync('accessToken') || 'noLogin',
  });

  return (
    <PageWrapper>
      <WebView src={url} />
    </PageWrapper>
  );
};
export default Webview;

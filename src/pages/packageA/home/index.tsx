import { View } from '@tarojs/components';
import './index.less';
import PageWrapper from '@/components/PageWrapper';
import { useEffect } from 'react';
import zzd from 'gdt-jsapi';
import { UserService } from '@/service';

const jumpUrl = 'https://scad.gongshu.gov.cn/ad#/recordsgongshu';
const Home = () => {
  useEffect(() => {
    zzd.getAuthCode({}).then(async (res) => {
      const { auth_code = '', code = '' } = res;
      const [err, data] = await UserService.zzdLogin(auth_code || code);
      if (!err) {
        const { data: token } = data;
        window.location.replace(`${jumpUrl}?token=${token}`);
      }
    });
  }, []);
  return (
    <PageWrapper className="g-home" disableProtect>
      <View>加载中...</View>
    </PageWrapper>
  );
};

export default Home;

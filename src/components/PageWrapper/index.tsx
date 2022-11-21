import { noop } from '@szsk/utils/lib/func';
import { View } from '@tarojs/components';
import React, { useEffect } from 'react';
import { getCurrentInstance } from '@tarojs/taro';
import { useProtectLogin } from '@/utils/hook';
import { flowBuryPoints } from '@/utils/buryPoints';

interface IProps {
  className?: string;
  children?: React.ReactNode;
  disableProtect?: boolean;
  onClick?: () => any;
}

const PageWrapper = (props: IProps) => {
  const { className, children, onClick, disableProtect } = props;
  const { router } = getCurrentInstance();
  const { path = '' } = router || {};
  const pathArr = path.split('/');
  const pageName = `${pathArr[3]}_${pathArr[4]}`;
  // 登陆保护(这里没用处)
  useProtectLogin(disableProtect);

  useEffect(() => {
    // 浙政钉基础埋点
    flowBuryPoints({ pageId: pageName, pageName, pageUrl: path });
  }, []);

  return (
    <View className={`g-page-wrapper ${className}`} onClick={onClick || noop}>
      {children}
    </View>
  );
};
export default React.memo(PageWrapper);

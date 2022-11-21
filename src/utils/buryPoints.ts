interface IPageInfo {
  pageId: string;
  pageName: string;
  pageUrl: string;
}

// 流量埋点
export const flowBuryPoints = (pageInfo: IPageInfo) => {
  if (!window || !window.aplus_queue) {
    return;
  }
  // eslint-disable-next-line camelcase
  const { aplus_queue } = window;
  const { pageId, pageName, pageUrl } = pageInfo;
  const u = navigator.userAgent;
  const isAndroid = u.indexOf('Android') > -1;
  const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

  // 单页应用路由切换后 或 在异步获取到pv日志所需的参数后再执行sendPV：
  aplus_queue.push({
    action: 'aplus.setMetaInfo',
    arguments: ['aplus-waiting', 'MAN'],
  });
  aplus_queue.push({
    action: 'aplus.sendPV',
    arguments: [
      {
        is_auto: false,
      },
      {
        sapp_id: '32890', // isv根据实际填写自己应用的参数
        sapp_name: 'hz_gs_wjj', // isv根据实际填写自己应用的参数
        page_id: pageId, // isv根据实际填写自己应用的参数
        page_name: pageName, // isv根据实际填写自己应用的参数
        page_url: pageUrl, // isv根据实际填写自己应用的参数
        x: 111,
        y: 222,
      },
    ],
  });

  // 用户信息埋点
  // 如采集用户信息是异步行为需要先执行这个BLOCK埋点
  aplus_queue.push({
    action: 'aplus.setMetaInfo',
    arguments: ['_hold', 'BLOCK'],
  });

  // 设置会员昵称
  aplus_queue.push({
    action: 'aplus.setMetaInfo',
    arguments: ['_user_nick', '昵称1'],
  });
  // 设置会员ID
  aplus_queue.push({
    action: 'aplus.setMetaInfo',
    arguments: ['_user_id', '78334402'],
  });
  aplus_queue.push({
    action: 'aplus.setMetaInfo',
    arguments: ['_dev_id', 'yourDeviceId'],
  });

  // 如采集用户信息是异步行为，需要先设置完用户信息后再执行这个START埋点
  // 此时被block住的日志会携带上用户信息逐条发出
  aplus_queue.push({
    action: 'aplus.setMetaInfo',
    arguments: ['_hold', 'START'],
  });
};

export const PATROL_LIST_TYPE = {
  WAIT: 0,
  DONE: 1,
  VALUES: [0, 1],
  toString: (v) => {
    switch (v) {
      case PATROL_LIST_TYPE.WAIT:
        return '待巡检';
      case PATROL_LIST_TYPE.DONE:
        return '已巡检';
      default:
        return '未知';
    }
  },
};

export const REPAIR_LIST_TYPE = {
  WAIT: 0,
  DONE: 1,
  VALUES: [0, 1],
  toString: (v) => {
    switch (v) {
      case REPAIR_LIST_TYPE.WAIT:
        return '草稿';
      case REPAIR_LIST_TYPE.DONE:
        return '已提交';
      default:
        return '未知';
    }
  },
};

export const WORK_LIST_TYPE = {
  WAIT: 0,
  DONE: 1,
  VALUES: [0, 1],
  toString: (v) => {
    switch (v) {
      case REPAIR_LIST_TYPE.WAIT:
        return '待处理工单';
      case REPAIR_LIST_TYPE.DONE:
        return '历史工单';
      default:
        return '未知';
    }
  },
};

// 详情tab类型
export const ORDER_DETAIL_TYPE = {
  DETAIL: 1,
  APPROVE: 2,
  VALUES: [1, 2],
  toString: (v) => {
    switch (v) {
      case ORDER_DETAIL_TYPE.DETAIL:
        return '维修信息';
      case ORDER_DETAIL_TYPE.APPROVE:
        return '流转信息';
      default:
        return '未知';
    }
  },
};

//APP_DISTRIBUTED:'0-1',//待分派      需要对图标
//APP_RETURN:'0-2',//退回      需要对图标

export const WORK_ORDER_TYPE_URL = {
  APP_TEMPORARY_STORAGE: '0-0', //APP草稿
  APP_DISTRIBUTED: '0-1', //待分派 APP提交     需要对图标
  APP_RETURN: '0-2', //退回      需要对图标
  COMPANY_TEMPORARY_STORAGE: '1-0', //暂存(pc唯一草稿)
  COMPANY_PENDING_AUDIT: '1-1', //提交（待审核）
  COMPANY_AUDIT_FALLBACK: '1-2', //审核回退
  COMPANY_AUDIT_CENCEL: '1-3', //审核作废
  COMPANY_AUDIT_PASS: '1-4', //审核通过
  COMPANY_CANCEL: '1-5', //取消
  COMPANY_DISTRIBUTE_PROVIDER: '1-6', //派发到维修商
  COMPANY_PASS: '1-7', //核查通过
  COMPANY_NO_PASS: '1-8', //核查不通过
  COMPANY_DISTRIBUTE_PLATFORM: '1-9', //派发至平台
  PLATFORM_FALLBACK: '1-10', //平台回退
  PROVIDER_FALLBACK: '2-0', //维修商回退
  PROVIDER_SEND: '2-1', //已下派工程师 ,待处理状态 已提交展示
  ENGINEER_FALLBACK: '3-0', //工程师回退
  ENGINEER_ACCEPT: '3-1', //工程师接单
  ENGINEER_SIGNED: '3-2', //工程师签到
  ENGINEER_COMPLETE: '3-3', //工程师维修完成
  ENGINEER_NO_PASS: '3-4', //工程师维修未通过
  IS_END: '4', //已结束

  VALUES: [
    '0-0',
    '0-1',
    '0-2',
    '1-0',
    '1-1',
    '1-2',
    '1-3',
    '1-4',
    '1-5',
    '1-6',
    '1-7',
    '1-8',
    '1-9',
    '1-10',
    '2-0',
    '2-1',
    '3-0',
    '3-1',
    '3-2',
    '3-3',
    '3-4',
    '4',
  ],
  toString: (v) => {
    switch (v) {
      case WORK_ORDER_TYPE_URL.APP_TEMPORARY_STORAGE:
        return 'https://szzw001.oss-cn-hangzhou.aliyuncs.com/assetControl/app/abolition-tag1.png';
      case WORK_ORDER_TYPE_URL.APP_DISTRIBUTED:
        return 'https://szzw001.oss-cn-hangzhou.aliyuncs.com/assetControl/app/wait-dispatch.png';
      case WORK_ORDER_TYPE_URL.APP_RETURN:
        return 'https://szzw001.oss-cn-hangzhou.aliyuncs.com/assetControl/app/return-tag1.png';
      case WORK_ORDER_TYPE_URL.COMPANY_TEMPORARY_STORAGE:
        return 'https://szzw001.oss-cn-hangzhou.aliyuncs.com/assetControl/app/abolition-tag1.png';
      case WORK_ORDER_TYPE_URL.COMPANY_PENDING_AUDIT:
        return 'https://szzw001.oss-cn-hangzhou.aliyuncs.com/assetControl/app/wait-approve-tag1.png';
      case WORK_ORDER_TYPE_URL.COMPANY_AUDIT_FALLBACK:
        return 'https://szzw001.oss-cn-hangzhou.aliyuncs.com/assetControl/app/return-tag1.png';
      case WORK_ORDER_TYPE_URL.COMPANY_AUDIT_CENCEL:
        return 'https://szzw001.oss-cn-hangzhou.aliyuncs.com/assetControl/app/abolition-tag1.png'; //
      case WORK_ORDER_TYPE_URL.COMPANY_AUDIT_PASS:
        return 'https://szzw001.oss-cn-hangzhou.aliyuncs.com/assetControl/app/abolition-tag1.png';
      case WORK_ORDER_TYPE_URL.COMPANY_CANCEL:
        return 'https://szzw001.oss-cn-hangzhou.aliyuncs.com/assetControl/app/cancel-tag1.png'; //
      case WORK_ORDER_TYPE_URL.COMPANY_DISTRIBUTE_PROVIDER:
        return 'https://szzw001.oss-cn-hangzhou.aliyuncs.com/assetControl/app/dispatch-tag1.png'; //
      case WORK_ORDER_TYPE_URL.COMPANY_PASS:
        return 'https://szzw001.oss-cn-hangzhou.aliyuncs.com/assetControl/app/abolition-tag1.png';
      case WORK_ORDER_TYPE_URL.COMPANY_NO_PASS:
        return 'https://szzw001.oss-cn-hangzhou.aliyuncs.com/assetControl/app/abolition-tag1.png';
      case WORK_ORDER_TYPE_URL.COMPANY_DISTRIBUTE_PLATFORM:
        return 'https://szzw001.oss-cn-hangzhou.aliyuncs.com/assetControl/app/dispatch-tag1.png'; //
      case WORK_ORDER_TYPE_URL.PLATFORM_FALLBACK:
        return 'https://szzw001.oss-cn-hangzhou.aliyuncs.com/assetControl/app/return-tag1.png'; //
      case WORK_ORDER_TYPE_URL.PROVIDER_FALLBACK:
        return 'https://szzw001.oss-cn-hangzhou.aliyuncs.com/assetControl/app/return-tag1.png'; //
      case WORK_ORDER_TYPE_URL.PROVIDER_SEND:
        return 'https://szzw001.oss-cn-hangzhou.aliyuncs.com/assetControl/app/dispatch-tag1.png'; //
      case WORK_ORDER_TYPE_URL.ENGINEER_FALLBACK:
        return 'https://szzw001.oss-cn-hangzhou.aliyuncs.com/assetControl/app/return-tag1.png'; //
      case WORK_ORDER_TYPE_URL.ENGINEER_ACCEPT:
        return 'https://szzw001.oss-cn-hangzhou.aliyuncs.com/assetControl/app/orders-tag1.png'; //
      case WORK_ORDER_TYPE_URL.ENGINEER_SIGNED:
        return 'https://szzw001.oss-cn-hangzhou.aliyuncs.com/assetControl/app/signed-tag1.png'; //
      case WORK_ORDER_TYPE_URL.ENGINEER_COMPLETE:
        return 'https://szzw001.oss-cn-hangzhou.aliyuncs.com/assetControl/app/ok-tag1.png'; //
      case WORK_ORDER_TYPE_URL.ENGINEER_NO_PASS:
        return 'https://szzw001.oss-cn-hangzhou.aliyuncs.com/assetControl/app/undone-tag1.png'; //
      case WORK_ORDER_TYPE_URL.IS_END:
        return 'https://szzw001.oss-cn-hangzhou.aliyuncs.com/assetControl/app/over-tag1.png'; //
      default:
        return '';
    }
  },
};

export const WORK_ORDER_TYPE = {
  APP_TEMPORARY_STORAGE: '0-0', //APP草稿
  APP_DISTRIBUTED: '0-1', //待分派
  APP_RETURN: '0-2', //退回
  COMPANY_TEMPORARY_STORAGE: '1-0', //暂存(pc唯一草稿)
  COMPANY_PENDING_AUDIT: '1-1', //提交（待审核）
  COMPANY_AUDIT_FALLBACK: '1-2', //审核回退
  COMPANY_AUDIT_CENCEL: '1-3', //审核作废
  COMPANY_AUDIT_PASS: '1-4', //审核通过
  COMPANY_CANCEL: '1-5', //取消
  COMPANY_DISTRIBUTE_PROVIDER: '1-6', //派发到维修商
  COMPANY_PASS: '1-7', //核查通过
  COMPANY_NO_PASS: '1-8', //核查不通过
  COMPANY_DISTRIBUTE_PLATFORM: '1-9', //派发至平台
  PLATFORM_FALLBACK: '1-10', //平台回退
  PROVIDER_FALLBACK: '2-0', //维修商回退
  PROVIDER_SEND: '2-1', //已下派工程师 ,待处理状态 已提交展示
  ENGINEER_FALLBACK: '3-0', //工程师回退
  ENGINEER_ACCEPT: '3-1', //工程师接单
  ENGINEER_SIGNED: '3-2', //工程师签到
  ENGINEER_COMPLETE: '3-3', //工程师维修完成
  ENGINEER_NO_PASS: '3-4', //工程师维修未通过
  IS_END: '4', //已结束
  VALUES: [
    '0-0', //APP草稿
    '0-1', //待分派
    '0-2', //退回
    '1-0', //暂存
    '1-1', //待审核
    '1-2', //审核回退
    '1-3', //审核作废
    '1-4', //审核通过
    '1-5', //工单取消
    '1-6', //已下派至服务商
    '1-7', //核查通过
    '1-8', //核查不通过
    '1-9', //已下派至运营平台
    '1-10', //退回
    '2-0', //服务商回退
    '2-1', //已下派工程师
    '3-0', //工程师退回
    '3-1', //工程师接单
    '3-2', //工程师签到
    '3-3', //已完成
    '3-4', //未通过
    '4', //已结束
  ],
  toString: (v) => {
    switch (v) {
      case WORK_ORDER_TYPE_URL.APP_TEMPORARY_STORAGE:
        return 'APP草稿';
      case WORK_ORDER_TYPE_URL.COMPANY_TEMPORARY_STORAGE:
        return '暂存';
      case WORK_ORDER_TYPE_URL.APP_DISTRIBUTED:
        return '待分派';
      case WORK_ORDER_TYPE_URL.COMPANY_PENDING_AUDIT:
        return '待审核';
      case WORK_ORDER_TYPE_URL.COMPANY_AUDIT_FALLBACK:
        return '审核回退';
      case WORK_ORDER_TYPE_URL.COMPANY_AUDIT_CENCEL:
        return '审核作废'; //
      case WORK_ORDER_TYPE_URL.COMPANY_AUDIT_PASS:
        return '审核通过';
      case WORK_ORDER_TYPE_URL.COMPANY_CANCEL:
        return '工单取消'; //
      case WORK_ORDER_TYPE_URL.COMPANY_DISTRIBUTE_PROVIDER:
        return '已下派至服务商'; //
      case WORK_ORDER_TYPE_URL.COMPANY_PASS:
        return '核查通过';
      case WORK_ORDER_TYPE_URL.COMPANY_NO_PASS:
        return '核查不通过';
      case WORK_ORDER_TYPE_URL.COMPANY_DISTRIBUTE_PLATFORM:
        return '已下派至运营平台'; //
      case WORK_ORDER_TYPE_URL.APP_RETURN:
        return '提交退回'; //
      case WORK_ORDER_TYPE_URL.PLATFORM_FALLBACK:
        return '平台回退'; //
      case WORK_ORDER_TYPE_URL.PROVIDER_FALLBACK:
        return '服务商回退'; //
      case WORK_ORDER_TYPE_URL.PROVIDER_SEND:
        return '已下派工程师'; //
      case WORK_ORDER_TYPE_URL.ENGINEER_FALLBACK:
        return '工程师退回'; //
      case WORK_ORDER_TYPE_URL.ENGINEER_ACCEPT:
        return '工程师接单'; //
      case WORK_ORDER_TYPE_URL.ENGINEER_SIGNED:
        return '工程师签到'; //
      case WORK_ORDER_TYPE_URL.ENGINEER_COMPLETE:
        return '已完成'; //
      case WORK_ORDER_TYPE_URL.ENGINEER_NO_PASS:
        return '未通过'; //
      case WORK_ORDER_TYPE_URL.IS_END:
        return '已结束'; //
      default:
        return '';
    }
  },
};

export const WORK_ORDER_GET_FLOW = (flow) => {
  switch (flow.flowState) {
    case '1-0':
      return '暂存';
    case '0-1':
      return '【' + flow.customerName + '】发起了【维修上报】操作';
    case '0-2':
      return '【' + flow.maintainName + '】发起了【退回】操作';
    case '1-1':
      if (flow.dispatchMethod == 0) {
        return (
          '【' +
          flow.customerName +
          '】选择【选择服务商】发起了【提交工单】操作'
        );
      } else if (flow.dispatchMethod == 1) {
        return (
          '【' + flow.customerName + '】选择【平台叫修】发起了【提交工单】操作'
        );
      } else if (flow.dispatchMethod == 2) {
        return (
          '【' + flow.customerName + '】选择【内部报修】发起了【提交工单】操作'
        );
      }
    case '1-2':
      return (
        '【' +
        flow.customerName +
        '】对维修工单进行了【审批】操作，【退回】提交工单'
      );
    case '1-3':
      return (
        '【' +
        flow.customerName +
        '】对维修工单进行了【审批】操作，【作废】提交工单'
      );
    case '1-4':
      return (
        '【' +
        flow.customerName +
        '】对维修工单进行了【审批】操作，【同意】提交工单'
      );
    case '1-5':
      return '【' + flow.customerName + '】发起了【取消工单】操作';
    case '1-6': //小程序没有此状态
      if (flow.dispatchMethod == 0) {
        return '派发到【' + flow.providerName + '】';
      } else if (flow.dispatchMethod == 1) {
        return '运营平台对工单进行了【派单】操作';
      }
    case '1-7':
      return (
        '【' +
        flow.customerName +
        '】对工单进行了【维修核查】操作，核查【通过】'
      );
    case '1-8':
      return (
        '【' +
        flow.customerName +
        '】对工单进行了【维修核查】操作，核查【不通过】'
      );
    case '1-10':
      return '运营平台对维修工单发起了【退回】操作';
    case '2-0':
      return '【' + flow.providerName + '】发起了【回退工单】操作';
    case '2-1':
      return (
        '【' +
        flow.providerName +
        '】发起了【派单】操作，工单派遣至【' +
        flow.maintainName +
        '】'
      );
    case '3-0':
      return '【' + flow.maintainName + '】发起了【回退工单】操作';
    case '3-1':
      return '【' + flow.maintainName + '】发起了【接单工单】操作';
    case '3-2':
      return '【' + flow.maintainName + '】发起了【签到工单】操作';
    case '3-3':
      return '【' + flow.maintainName + '】进行了【工单完成】操作';
    case '3-4':
      return (
        '【' + flow.maintainName + '】对工单进行了【维修核查】操作,核查未通过'
      );
    case '4':
      return '工单已结束';
  }
};

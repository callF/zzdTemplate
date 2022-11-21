// 通用列表tab类型
export const LIST_TYPES = {
  DRAFT: 1,
  SUBMIT: 2,
  APPROVED: 3,
  VALUES: [1, 2, 3],
  toString: (v) => {
    switch (v) {
      case LIST_TYPES.DRAFT:
        return '草稿';
      case LIST_TYPES.SUBMIT:
        return '已提交';
      case LIST_TYPES.APPROVED:
        return '已审批';
      default:
        return '未知';
    }
  },
};

// 审核人为空时通过类型
export const APPROVER_PASS_TYPE = {
  PASS: 1,
  SELECT: 2,
  VALUES: [1, 2],
  toString: (v: number) => {
    switch (v) {
      case APPROVER_PASS_TYPE.PASS:
        return '自动通过';
      case APPROVER_PASS_TYPE.SELECT:
        return '指定人员审批';
      default:
        return '';
    }
  },
};

// 是否信创
export const IS_XC = {
  NO: '0',
  YES: '1',
  VALUES: ['0', '1'],
  toString: (v: string) => {
    switch (v) {
      case IS_XC.NO:
        return '否';
      case IS_XC.YES:
        return '是';
      default:
        return '';
    }
  },
};

// 卡片锁定状态
export const CARD_LOCK_STATUS = {
  SPLIT: '06',
  CHANGE: '07',
  TRANSFER: '08',
  DISPOSE: '09',
  OFF: '10',
  BORROW: '11',
  VALUES: ['06', '07', '08', '09', '10', '11'],
};

// 借阅状态
export const BORROW_STATUS = {
  ING: 0,
  EXPIRED: 1,
  VALUES: [0, 1],
  toString: (v: number) => {
    switch (v) {
      case BORROW_STATUS.ING:
        return '借用中';
      case BORROW_STATUS.EXPIRED:
        return '超期';
      default:
        return '';
    }
  },
  toKey: (v: number) => {
    switch (v) {
      case BORROW_STATUS.ING:
        return 'ing';
      case BORROW_STATUS.EXPIRED:
        return 'expired';
      default:
        return '';
    }
  },
};

// 审批状态类型
export const APPROVE_TYPE = {
  NOT_ACTIVE: 0, // 未激活
  SUBMIT: 1, // 提交
  APPROVE: 4, // 审核
  NO_APPROVE: 5, // 撤回
  RETURN: 2, // 退回
  REJECT: 6, // 拒绝
  OK: 3, // 审核成功
  toString: (v) => {
    switch (v) {
      case APPROVE_TYPE.SUBMIT:
        return '提交审批';
      case APPROVE_TYPE.APPROVE:
        return '处理中';
      case APPROVE_TYPE.RETURN:
        return '退回';
      case APPROVE_TYPE.REJECT:
        return '拒绝';
      case APPROVE_TYPE.OK:
        return '同意';
      case APPROVE_TYPE.NOT_ACTIVE:
        return '未激活';
      case APPROVE_TYPE.NO_APPROVE:
        return '无需审批';
      default:
        return '未知';
    }
  },
  toColor: (v) => {
    switch (v) {
      case APPROVE_TYPE.APPROVE:
        return 'blue';
      case APPROVE_TYPE.OK:
        return 'green';
      case APPROVE_TYPE.REJECT:
        return 'red';
      case APPROVE_TYPE.RETURN:
        return 'yellow';
      case APPROVE_TYPE.NO_APPROVE:
        return 'blue';
      default:
        return '';
    }
  },
  toKey: (v) => {
    switch (v) {
      case APPROVE_TYPE.APPROVE:
        return 'approve';
      case APPROVE_TYPE.RETURN:
        return 'return';
      case APPROVE_TYPE.REJECT:
        return 'reject';
      case APPROVE_TYPE.OK:
        return 'ok';
      case APPROVE_TYPE.NO_APPROVE:
        return 'approve';
      default:
        return '';
    }
  },
  checkIsFinish: (v) => {
    if (v === 3 || v === 6) {
      return true;
    }
    return false;
  },
};

// 数量类型
export const NUM_TYPE = {
  SUBMIT: 0,
  APPROVED: 1,
};

// 是否阅读
export const IS_READ = {
  READED: 1,
  NOT: 0,
};

// 提交类型
export const SUBMIT_TYPE = {
  DRAFT: 0,
  REAL: 1,
};

// 详情tab类型
export const DETAIL_TYPE = {
  DETAIL: 1,
  APPROVE: 2,
  VALUES: [1, 2],
  toString: (v) => {
    switch (v) {
      case DETAIL_TYPE.DETAIL:
        return '详情';
      case DETAIL_TYPE.APPROVE:
        return '审批流程';
      default:
        return '未知';
    }
  },
};

// 使用状态
export const USE_STATUS: ICommon[] = [
  {
    id: '',
    name: '全部',
  },
  {
    id: '704030476381196288',
    name: '未使用',
  },
  {
    id: '704030476876124160',
    name: '出借',
  },
  {
    id: '704030477341691904',
    name: '出租',
  },
  {
    id: '704030477836619776',
    name: '领用',
  },
  {
    id: '704030478268633088',
    name: '自用',
  },
  {
    id: '704030478738395136',
    name: '维修',
  },
  {
    id: '704030479224934400',
    name: '停用',
  },
  {
    id: '704030479711473664',
    name: '已淘汰',
  },
  {
    id: '745614571389063168',
    name: '待处置',
  },
  {
    id: '750773373256077312',
    name: '借用',
  },
  {
    id: '750777037706235904',
    name: '使用中',
  },
  {
    id: '798953810406936576',
    name: '可共享',
  },
  {
    id: '798953810784423936',
    name: '共享中',
  },
];

// 同步状态
export const SYNC_STATUS = {
  NOT: 1,
  ING: 2,
  DONE: 3,
  FAIL: 4,
  toString: (v) => {
    switch (v) {
      case SYNC_STATUS.NOT:
        return '未同步';
      case SYNC_STATUS.ING:
        return '同步中';
      case SYNC_STATUS.DONE:
        return '已同步';
      case SYNC_STATUS.FAIL:
        return '同步失败';
      default:
        return '';
    }
  },
};

// 取得方式map
export const GET_WAYS = {
  '570379025063612417': '盘盈',
  '570379025441099777': '其他',
  '570379024321220609': '调拨',
  '570379024509964289': '接受捐赠',
  '570379024698707969': '自建',
  '570379025235578881': '自行研制',
  '570379024069562369': '新购',
  '570379024887451649': '置换',
};

export const DEFAULT_ATTRS = [
  'ZICHANBH',
  'ZICHANFLID', // 之前是BH
  'ZICHANMC',
  'CUNFANGDDID',
  'GUIGEXH',
  'PINPAI',
];

export const APPROVE_LIST_TYPE = {
  WAIT: 4,
  DONE: 5,
  VALUES: [4, 5],
  toString: (v) => {
    switch (v) {
      case APPROVE_LIST_TYPE.WAIT:
        return '待审核';
      case APPROVE_LIST_TYPE.DONE:
        return '已审核';
      default:
        return '未知';
    }
  },
};

// 多人审批方式
export const MUTI_APPROVER_WAYS = {
  OR: 1,
  AND: 2,
  VALUES: [1, 2],
  toString: (v: number) => {
    switch (v) {
      case MUTI_APPROVER_WAYS.OR:
        return '或签（一名审批人同意、不同意或退回即可）';
      case MUTI_APPROVER_WAYS.AND:
        return '会签（须所有审批人同意）';
      default:
        return '';
    }
  },
  toName: (v: number) => {
    switch (v) {
      case MUTI_APPROVER_WAYS.OR:
        return '或签';
      case MUTI_APPROVER_WAYS.AND:
        return '会签';
      default:
        return '';
    }
  },
};

// 申请卡片类型
export const APPROVE_CARD_TYPE = {
  CLAIM: 1,
  SUBSCIRBE: 4,
  CHANGE: 2,
  DISPOSE: 3,
  TRANSFER: 5,
  BORROW: 8,
  RETURN: 9,
  HAND_OVER: 10,
  VALUES: [1, 4, 2, 3, 5],
  toString: (v) => {
    switch (v) {
      case APPROVE_CARD_TYPE.CLAIM:
        return '申领';
      case APPROVE_CARD_TYPE.SUBSCIRBE:
        return '申购';
      case APPROVE_CARD_TYPE.CHANGE:
        return '变动';
      case APPROVE_CARD_TYPE.DISPOSE:
        return '处置';
      case APPROVE_CARD_TYPE.TRANSFER:
        return '移交';
      case APPROVE_CARD_TYPE.BORROW:
        return '借用';
      case APPROVE_CARD_TYPE.RETURN:
        return '归还';
      case APPROVE_CARD_TYPE.HAND_OVER:
        return '交回';
      default:
        return '';
    }
  },
  toKey: (v) => {
    switch (v) {
      case APPROVE_CARD_TYPE.CLAIM:
        return 'claim';
      case APPROVE_CARD_TYPE.SUBSCIRBE:
        return 'subscribe';
      case APPROVE_CARD_TYPE.CHANGE:
        return 'change';
      case APPROVE_CARD_TYPE.DISPOSE:
        return 'dispose';
      case APPROVE_CARD_TYPE.TRANSFER:
        return 'transfer';
      case APPROVE_CARD_TYPE.BORROW:
        return 'borrow';
      case APPROVE_CARD_TYPE.RETURN:
        return 'return';
      case APPROVE_CARD_TYPE.HAND_OVER:
        return 'handOver';
      default:
        return '';
    }
  },
};

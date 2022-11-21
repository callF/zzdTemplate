// 个人盘点任务状态,0:未完成;1:已完成
export const CHECK_TYPE_PERSON = {
  WAIT: 0,
  DONE: 1,
  VALUES: [0, 1],
  toKey: (v) => {
    switch (v) {
      case CHECK_TYPE_PERSON.WAIT:
        return 'wait';
      case CHECK_TYPE_PERSON.DONE:
        return 'done';
      default:
        return '';
    }
  },
};

// 盘点任务状态-整体
export const CHECK_TYPE = {
  CHECK: 1,
  DONE: 2,
  toKey: (v) => {
    switch (v) {
      case CHECK_TYPE.CHECK:
        return 'check';
      case CHECK_TYPE.DONE:
        return 'done';
      default:
        return '';
    }
  },
};

// 盘点资产状态
export const CHECK_ASSET_TYPE = {
  WAIT: 0,
  OK: 1,
  LOSE: 2,
  VALUES: [0, 1, 2],
  toString: (v) => {
    switch (v) {
      case CHECK_ASSET_TYPE.WAIT:
        return '未盘点';
      case CHECK_ASSET_TYPE.OK:
        return '盘存';
      case CHECK_ASSET_TYPE.LOSE:
        return '盘亏';
      default:
        return '未知';
    }
  },
};

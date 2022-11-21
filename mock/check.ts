module.exports = {
  'POST /check/assets': {
    code: 200,
  },
  'GET /check/assets': {
    data: [
      {
        id: 'ZCGL20210909000003',
        assetName: '戴尔笔记本1',
        price: '2999.99',
      },
      {
        id: 'ZCGL20210909000004',
        assetName: '戴尔笔记本2',
        price: '2999.99',
      },
      {
        id: 'ZCGL20210909000005',
        assetName: '戴尔笔记本1',
        price: '2999.99',
      },
      {
        id: 'ZCGL20210909000006',
        assetName: '戴尔笔记本2',
        price: '212999.99',
      },
    ],
  },
  'GET /check/assets/detail': {
    data: {
      id: '1',
      assetName: '资产1',
      price: '2334.34',
      recipients: {
        id: '31',
        name: '王武1',
        org: {
          name: '杭州市局派出所部门111',
          id: '11',
        },
      },
      category: {
        id: '13111',
        name: '主机',
      },
      num: 2,
      model: '3kw',
      brand: '我是品牌',
      location: {
        id: '22222',
        name: '抽屉2',
      },
    },
  },
  'GET /check/list': {
    total: 30,
    data: [
      {
        id: 'ZCGL20210909000003',
        name: '盘点任务1',
        updateTime: '2021-12-02T02:54:53.302Z',
        status: 1,
      },
      {
        id: 'ZCGL20210909000004',
        name: '盘点任务1',
        updateTime: '2021-12-02T02:54:53.302Z',
        status: 2,
      },
      {
        id: 'ZCGL20210909000005',
        name: '盘点任务1',
        updateTime: '2021-12-02T02:54:53.302Z',
        status: 2,
      },
      {
        id: 'ZCGL20210909000006',
        name: '盘点任务1',
        updateTime: '2021-12-02T02:54:53.302Z',
        status: 2,
      },
      {
        id: 'ZCGL20210909000007',
        name: '盘点任务1',
        updateTime: '2021-12-02T02:54:53.302Z',
        status: 2,
      },
      {
        id: 'ZCGL20210909000008',
        name: '盘点任务1',
        updateTime: '2021-12-02T02:54:53.302Z',
        status: 2,
      },
      {
        id: 'ZCGL20210909000009',
        name: '盘点任务1',
        updateTime: '2021-12-02T02:54:53.302Z',
        status: 2,
      },
      {
        id: 'ZCGL20210909000010',
        name: '盘点任务1',
        updateTime: '2021-12-02T02:54:53.302Z',
        status: 2,
      },
    ],
  },
  'GET /check/assets/nums': {
    data: {
      num1: 0,
      num2: '999+',
      num3: 5,
    },
  },
  'POST /check/assets/all': {
    code: 200,
  },
};

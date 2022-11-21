module.exports = {
  'GET /subscribe/id': {
    data: 'ZCGL20210909000011',
  },
  'POST /subscribe/add/draft': {
    code: 200,
  },
  'POST /subscribe/add/real': {
    code: 200,
  },
  'GET /subscribe/detail': {
    data: {
      id: 'ZCGL20210909000012',
      reason: '休闲鞋',
      updateTime: '2021-12-09T09:45:43.032Z',
      status: 1,
      submitName: '张三',
      disposeType: {
        id: '1',
        name: '报废',
      },
      auditFlow: [
        {
          status: 0,
          time: '2021-12-09T09:45:43.032Z',
          name: '张三',
          position: '前端开发',
          remark: '',
        },
        {
          status: 4,
          time: '2021-12-09T09:45:43.032Z',
          name: '李四',
          position: '部门主管',
          remark: '领导审批',
        },
        {
          status: 4,
          time: '2021-12-09T09:45:43.032Z',
          name: '王武',
          position: '上级主管',
        },
        {
          status: 3,
          time: '2021-12-09T09:45:43.032Z',
          name: '王武',
          position: '上级主管',
        },
      ],
      list: [
        {
          id: '1',
          assetName: '资产1',
          fundId: '1',
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
        {
          id: '2',
          fundId: '2',
          assetName: '资产2',
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
      ],
    },
  },
  'GET /subscribe/list': {
    total: 30,
    data: [
      {
        id: 'ZCGL20210909000003',
        recipients: '张三',
        updateTime: '2021-12-02T02:54:53.302Z',
      },
      {
        id: 'ZCGL20210909000004',
        recipients: '张三1',
        updateTime: '2021-12-02T02:54:53.302Z',
        status: 1,
        notRead: 1,
      },
      {
        id: 'ZCGL20210909000005',
        recipients: '张三2',
        updateTime: '2021-12-02T02:54:53.302Z',
        status: 2,
      },
      {
        id: 'ZCGL20210909000006',
        recipients: '张三3',
        updateTime: '2021-12-02T02:54:53.302Z',
        status: 3,
      },
      {
        id: 'ZCGL20210909000007',
        recipients: '张三',
        updateTime: '2021-12-02T02:54:53.302Z',
        status: 4,
      },
      {
        id: 'ZCGL20210909000008',
        recipients: '张三1',
        updateTime: '2021-12-02T02:54:53.302Z',
      },
      {
        id: 'ZCGL20210909000009',
        recipients: '张三2',
        updateTime: '2021-12-02T02:54:53.302Z',
      },
      {
        id: 'ZCGL20210909000010',
        recipients: '张三3',
        updateTime: '2021-12-02T02:54:53.302Z',
      },
    ],
  },
  'GET /subscribe/nums': {
    data: {
      num1: 0,
      num2: '999+',
      num3: 5,
    },
  },
};

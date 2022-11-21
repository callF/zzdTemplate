module.exports = {
  'GET /dispose/id': {
    data: 'ZCGL20210909000011',
  },
  'POST /dispose/add/draft': {
    code: 200,
  },
  'POST /dispose/add/real': {
    code: 200,
  },
  'GET /dispose/detail': {
    data: {
      id: 'ZCGL20210909000012',
      reason: '休闲鞋',
      disposeType: '1',
      updateTime: '2021-12-09T09:45:43.032Z',
      status: 1,
      submitName: '张三',
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
          price: 23.23,
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
          assetName: '资产2',
          price: 13.23,
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
  'GET /dispose/list': {
    total: 30,
    data: [
      {
        id: 'ZCGL20210909000003',
        updateTime: '2021-12-02T02:54:53.302Z',
        submitName: '张三',
      },
      {
        id: 'ZCGL20210909000004',
        updateTime: '2021-12-02T02:54:53.302Z',
        status: 1,
        notRead: 1,
        submitName: '张三',
      },
      {
        id: 'ZCGL20210909000005',
        updateTime: '2021-12-02T02:54:53.302Z',
        status: 2,
        submitName: '张三',
      },
      {
        id: 'ZCGL20210909000006',
        updateTime: '2021-12-02T02:54:53.302Z',
        status: 3,
        submitName: '张三',
      },
      {
        id: 'ZCGL20210909000007',
        updateTime: '2021-12-02T02:54:53.302Z',
        status: 4,
        submitName: '张三',
      },
      {
        id: 'ZCGL20210909000008',
        updateTime: '2021-12-02T02:54:53.302Z',
        submitName: '张三',
      },
      {
        id: 'ZCGL20210909000009',
        updateTime: '2021-12-02T02:54:53.302Z',
        submitName: '张三',
      },
      {
        id: 'ZCGL20210909000010',
        updateTime: '2021-12-02T02:54:53.302Z',
        submitName: '张三',
      },
    ],
  },
  'GET /dispose/nums': {
    data: {
      num1: 0,
      num2: '999+',
      num3: 5,
    },
  },
};

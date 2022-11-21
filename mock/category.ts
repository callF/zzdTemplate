module.exports = {
  'GET /category/search': {
    data: [
      {
        id: '13111',
        name: '主机',
      },
      {
        id: '13112',
        name: '显示器',
      },
      {
        id: '21',
        name: '土地使用权',
      },
    ],
  },
  'GET /category/tree': {
    data: [
      {
        id: '1',
        name: '固定资产',
        children: [
          {
            id: '11',
            name: '房屋及建筑物',
          },
          {
            id: '12',
            name: '车辆',
          },
          {
            id: '13',
            name: '通用设备',
            children: [
              {
                id: '131',
                name: '计算机设备/软件',
                children: [
                  {
                    id: '1311',
                    name: '计算机',
                    children: [
                      {
                        id: '13111',
                        name: '主机',
                      },
                      {
                        id: '13112',
                        name: '显示器',
                      },
                    ],
                  },
                  {
                    id: '1312',
                    name: '网络',
                  },
                ],
              },
              {
                id: '132',
                name: '办公设备',
              },
              {
                id: '133',
                name: '车辆设备',
              },
            ],
          },
        ],
      },
      {
        id: '2',
        name: '无形资产',
        children: [
          {
            id: '21',
            name: '土地使用权',
          },
        ],
      },
      {
        id: '3',
        name: '在建工程',
      },
      {
        id: '4',
        name: '长期股权投资',
      },
      {
        id: '5',
        name: '流动资产',
      },
      {
        id: '6',
        name: '保障性住房',
      },
      {
        id: '7',
        name: '公共基础设施',
      },
      {
        id: '8',
        name: '文物文化',
      },
      {
        id: '9',
        name: '政府储备',
      },
    ],
  },
};

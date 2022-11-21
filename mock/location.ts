module.exports = {
  'GET /location/search': {
    data: [
      {
        id: '11111',
        name: '抽屉1',
      },
      {
        id: '22222',
        name: '抽屉2',
      },
      {
        id: '33333',
        name: '抽屉3',
      },
    ],
  },
  'GET /location/tree': {
    data: [
      {
        id: '0',
        name: '视在数科',
        children: [
          {
            id: '1',
            name: '大楼1',
            children: [
              {
                id: '11',
                name: '楼层1',
                children: [
                  {
                    id: '11111',
                    name: '抽屉1',
                  },
                  {
                    id: '22222',
                    name: '抽屉2',
                  },
                  {
                    id: '33333',
                    name: '抽屉3',
                  },
                ],
              },
            ],
          },
          {
            id: '2',
            name: '大楼2',
          },
          {
            id: '3',
            name: '大楼3',
          },
        ],
      },
    ],
  },
};

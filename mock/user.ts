module.exports = {
  'GET /user/list': {
    data: [
      {
        id: '1',
        orgId: '1',
        name: '张三辣妈奋',
        orgName: '',
        orgList: [],
        avatar: '',
      },
      {
        id: '31',
        name: '王武1',
        orgName: '杭州市局派出所部门111',
        orgList: [
          {
            id: '11',
            name: '杭州市局派出所部门1',
          },
          {
            id: '111',
            name: '杭州市局派出所部门111',
          },
        ],
        avatar: '',
        orgId: '111',
      },
      {
        id: '5',
        name: '王武',
        orgName: '财务部',
        avatar: '',
        orgList: [
          {
            id: '12',
            name: '财务部',
          },
        ],
        orgId: '1',
      },
    ],
  },
  'GET /org/list': {
    data: [
      {
        id: '1',
        parentId: '',
        name: '杭州市局派出所',
        personnels: [
          {
            id: '1',
            orgId: '1',
            name: '张三',
            orgName: '杭州市局派出所',
            avatar: '',
          },
          {
            id: '2',
            name: '李四',
            avatar: '',
            orgName: '杭州市局派出所',
            orgId: '1',
          },
          {
            id: '17',
            name: '喇叭',
            avatar: '',
            orgName: '杭州市局派出所',
            orgId: '1',
          },
        ],
        children: [
          {
            id: '11',
            name: '杭州市局派出所部门1',
            parentId: '1',
            children: [
              {
                id: '111',
                name: '杭州市局派出所部门111',
                parentId: '11',
                personnels: [
                  {
                    id: '31',
                    name: '王武1',
                    orgName: '杭州市局派出所部门111',
                    avatar: '',
                    orgId: '11',
                  },
                  {
                    id: '43',
                    name: '小刘2',
                    orgId: '11',
                    orgName: '杭州市局派出所部门111',
                    avatar: '',
                  },
                ],
              },
            ],
            personnels: [
              {
                id: '3',
                name: '王武',
                orgName: '杭州市局派出所部门1',
                avatar: '',
                orgId: '11',
              },
              {
                id: '4',
                orgName: '杭州市局派出所部门1',
                name: '小刘',
                orgId: '11',
                avatar: '',
              },
            ],
          },
          {
            id: '12',
            parentId: '1',
            name: '财务部',
            personnels: [
              {
                id: '5',
                name: '王武',
                orgId: '12',
                avatar: '',
              },
              {
                id: '6',
                name: '小刘',
                orgId: '12',
                avatar: '',
              },
            ],
          },
        ],
      },
    ],
  },
  'GET /user/assets': {
    data: {
      totalValue: '3213.34',
      totalNum: '32',
      list: [
        {
          id: '1',
          price: '233.5',
          assetName: '戴尔1号',
          num: 2,
          gmsCode: 'zs12321312312312',
          brand: '戴尔',
          model: '格里',
          getTime: '2021-12-09T09:45:43.032Z',
        },
        {
          id: '2',
          price: '233.5',
          assetName: '戴尔1号',
          num: 2,
          gmsCode: 'zs12321312312312',
        },
        {
          price: '233.5',
          id: '3',
          assetName: '戴尔1号',
          num: 2,
          gmsCode: 'zs12321312312312',
        },
        {
          price: '233.5',
          id: '4',
          assetName: '戴尔1号',
          num: 2,
          gmsCode: 'zs12321312312312',
        },
        {
          price: '233.5',
          id: '5',
          assetName: '戴尔1号',
          num: 2,
          gmsCode: 'zs12321312312312',
        },
      ],
    },
  },
  'POST /client/authority/login': {
    id: '12312312',
    orgName: '大众化',
    name: '张师傅',
    avatar: 'https://jdc.jd.com/img/200',
  },
  'GET /client/authority/getUserInfo': {
    id: '12312312',
    orgName: '大众化',
    name: '周师傅',
    avatar: 'https://jdc.jd.com/img/200',
  },
  'GET /user/logout': {
    code: 200,
  },
  'POST /user/changePwd': {
    id: '12312312',
  },
  'POST /upload': {
    code: 200,
  },
};

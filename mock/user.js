const Mock = require('mockjs')

module.exports = {
  'POST /user/login': {
    code: 200,
    msg: '登陆成功',
    data: {
      accessToken: Mock.mock('@guid'),
      userInfo: {
        id: Mock.mock('@id'),
        name: Mock.mock('@first'),
        sex: '男',
        age: 23,
        email: Mock.mock('@email'),
        phone: '15659980000'
      },
      role: 'guest',
      authRoutes: [
        {
          id: '1',
          name: 'dashboard'
        },
        {
          id: '2',
          name: 'components',
          children: [
            {
              id: '3',
              name: 'icon'
            }
          ]
        }
      ]
    }
  }
}

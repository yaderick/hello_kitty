/* eslint-disable */

import fetch from './fetch';

export default {
  // 获取所有学生列表
  list(params) {
    return fetch.get('/user/list')
  },
}

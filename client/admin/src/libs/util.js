import axios from 'axios';

const util = {};

const ajaxUrl = process.env.NODE_ENV === 'development'
  // 测试环境api接口
  ? 'http://localhost:5000/'
  // 线上环境api接口
  : 'http://localhost:5000/';

util.ajax = axios.create({
  baseURL: ajaxUrl,
  timeout: 30000,
});

util.api = ajaxUrl;
util.oauthUrl = ajaxUrl;

export default util;

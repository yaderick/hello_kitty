/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  scrollBehavior(to, from, savedPosition) {
    // 兼容
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/user/list',
          name: 'userList',
          meta: {
            name: '用户列表',
            icon: 'md-lock',
          },
          component: () => import(/* webpackChunkName: "User" */ './views/User'),
        },
        {
          path: '/user/creat',
          name: 'creatUser',
          meta: {
            name: '新增学生',
            icon: 'md-lock',
          },
          component: () => import(/* webpackChunkName: "User" */ './views/User/creat'),
        },
        {
          path: 'class/list',
          name: 'classList',
          meta: {
            name: '班级列表',
            icon: 'md-list',
          },
          component: () => import(/* webpackChunkName: "Class-List" */ './views/Class/list'),
        },
        {
          path: '/class/create',
          name: 'classCreate',
          meta: {
            name: '新增班级',
            icon: 'md-list',
          },
          component: () => import(/* webpackChunkName: "Class-Create" */ './views/Class/create'),
        },
        {
          path: '/attend/list',
          name: 'attendList',
          meta: {
            name: '打卡列表',
            icon: 'md-list',
          },
          component: () => import(/* webpackChunkName: "Attend-List" */ './views/Attend/list'),
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "Login" */ './views/Login'),
    },
  ],
});

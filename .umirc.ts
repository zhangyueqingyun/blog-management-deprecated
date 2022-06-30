import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'Z-Blog Management',
    locale: false
  },
  routes: [
    {
      path: '/',
      redirect: '/blog',
      access: 'admin'
    },
    {
      name: '博客',
      path: '/blog',
      component: './Blog',
      access: 'admin',
    },
    {
      name: '类别',
      path: '/category',
      component: './Category',
      access: 'admin'
    },
    {
      name: '标签',
      path: '/sign',
      component: './Sign',
      access: 'admin'
    },
    {
      name: '简介',
      path: '/profile',
      component: './Profile',
      access: 'admin'
    },
    // {
    //   name: '权限演示',
    //   path: '/access',
    //   component: './Access',
    // },
    // {
    //     name: ' CRUD 示例',
    //     path: '/table',
    //     component: './Table',
    // },
  ],
  npmClient: 'pnpm',
});


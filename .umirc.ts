import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'Z-Blog Management',
  },
  routes: [
    {
      path: '/',
      redirect: '/blog',
    },
    {
      name: '博客',
      path: '/blog',
      component: './Blog',
    },
    {
      name: '类别',
      path: '/category',
      component: './Category',
    },
    {
      name: '标签',
      path: '/sign',
      component: './Sign',
    },
    {
      name: '简介',
      path: '/profile',
      component: './Profile',
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


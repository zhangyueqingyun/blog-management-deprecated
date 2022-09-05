import { defineConfig } from '@umijs/max';

export default defineConfig({
  base: 'management',
  publicPath: '/management/',
  antd: {},
  access: {},
  model: {},
  initialState: {
  },
  request: {},
  layout: {
    title: 'Z-Blog Management',
    locale: false,
  },
  routes: [{
      path: '/user',
      layout: false,
      routes: [
        {
          path: '/user/login',
          layout: false,
          name: 'login',
          component: './Login',
        },
        {
          path: '/user',
          redirect: '/user/login',
        },
      ],
    },
    {
      name: '博客管理',
      path: '/category',
      icon: 'ReadOutlined',
      component: './Category',
      access: 'admin'
    },
    {
      path: '/',
      redirect: '/management/category',
    }
  ],
  npmClient: 'pnpm',
});


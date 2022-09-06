import { history } from '@umijs/max';
import { message } from 'antd'; 
const loginPath = '/management/user/login';

export async function getInitialState() {
  if (history.location.pathname !== loginPath && !sessionStorage['access_token']) {
    message.error('请先登录！');
    window.location.href = '/management/user/login';
  }
}


export const layout = () => {
  return {
    logo: 'https://zblog-images.oss-cn-hangzhou.aliyuncs.com/avatar.jpeg',
    rightRender() {
      return false;
    },
    rightContentRender() {
      return false;
    }
  };
};
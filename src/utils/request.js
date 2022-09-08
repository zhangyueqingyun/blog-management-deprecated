import { request, history } from '@umijs/max';
import { message } from 'antd';

const req = async function(url, options) {
  try {
    const result = await request(url,options);
    return result
  } catch (e) {
    const {response} = e;
    if(response?.status == 401 && response.data?.statusCode == 401 ) {
      sessionStorage.removeItem('access_token');
      message.error('用户身份验证失败，请重新登录！');
      window.location.href = '/management/user/login';
    }
  }
}

const BASE_URL = 'https://zhangyueqingyun.tech/api';

export const add = post;

export const update = post;

export async function del(path) {
  const {data} = await req<any>(`${BASE_URL}/${path}`, {
    headers: {
      'Authorization': `Bearer ${sessionStorage['access_token']}`,
    },
    method: 'POST',
  });

  return data
}

export async function get(path) {
  const {data} = await req(`${BASE_URL}/${path}`)
  return data
}

export async function post (path, json) {
  const {data} = await req<any>(`${BASE_URL}/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage['access_token']}`,
    },
    data: json
  });

  return data;
}


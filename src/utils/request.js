import { request } from '@umijs/max';

const BASE_URL = 'http://localhost:9000/api';

export const add = post;

export const update = post;

export async function del(path) {
  const {data} = await request<any>(`${BASE_URL}/${path}`, {
    method: 'POST',
  });

  return data
}

export async function get(path) {
  const {data} = await request(`${BASE_URL}/${path}`)
  return data
}

async function post (path, json) {
  const {data} = await request<any>(`${BASE_URL}/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: json
  });

  return data;
}


import { request } from '@umijs/max';

export async function add(url: string, json: any) {
    const {data} = await request<any>(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: json
    });

    return data
}

export async function get(url: string) {
  const {data} = await request(url)
  return data
}

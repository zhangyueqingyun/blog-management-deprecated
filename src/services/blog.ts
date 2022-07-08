import {request} from '@umijs/max'
import {add} from '@/utils/request'
export function getBlogs() {
    return request('/api/blogs')
}

export async function addBlog(blog: any) {
    return add('/api/blog/add', blog)
}
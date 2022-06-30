import {request} from '@umijs/max'

export function getBlogs() {
    return request('/api/blogs')
}
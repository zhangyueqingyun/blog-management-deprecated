import {post} from '@/utils/request'

export function login(user) {
    return post(`auth/login`, user);
}

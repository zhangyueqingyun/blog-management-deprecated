import {get} from '@/utils/request'
export function getSigns() {
    return get('/api/signs')
}
import {get} from '@/utils/request'
export function getCategories() {
    return get('/api/categories')
}
import {get} from '@/utils/request'

export function getCategories(parentId) {
    return get(`category/${parentId}`);
}
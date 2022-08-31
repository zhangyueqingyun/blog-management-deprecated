import {get, add, del} from '@/utils/request'

export function getCategories(parentId) {
    return get(`category/${parentId}`);
}

export function addCategory(category) {
    return add(`category/add`, category);
}

export function deleteCategory(id) {
    return del(`category/delete/${id}`);
}
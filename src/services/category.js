import {get, add, del, update} from '@/utils/request'

export function getCategories(parentId) {
    return get(`category/${parentId}`);
}

export function addCategory(category) {
    return add(`category/add`, category);
}

export function editCategory(category) {
    return update(`category/edit`, category);
}

export function deleteCategory(id) {
    return del(`category/delete/${id}`);
}
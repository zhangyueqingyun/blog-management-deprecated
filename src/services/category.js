import {get, add, del, update} from '@/utils/request'

export function getCategories(parentId) {
    return get(`category/${parentId}`);
}

export function addCategory(category) {
    return add(`category/add`, category);
}

export function addBlog(blog) {
    return add(`blog/add`, blog);
}

export function editBlog(blog) {
    return add(`blog/edit`, blog);
}

export function editCategory(category) {
    return update(`category/edit`, category);
}

export function deleteCategory(id) {
    return del(`category/delete/${id}`);
}

export function deleteBlog(id) {
    return del(`blog/delete/${id}`);
}
import http from "./httpCommon";

const baseURL = '/book';

const getListBook = () => {
    return http.get(`${baseURL}`)
}

const getBookById = (id) => {
    return http.get(`${baseURL}/${id}`)
}

export { getListBook, getBookById }
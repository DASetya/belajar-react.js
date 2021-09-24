import http from "./httpCommon";

const baseURL = "/book";

const getListBook = () => {
  return http.get(`${baseURL}`);
};

const getBookById = (id) => {
  return http.get(`${baseURL}/${id}`);
};

const createBook = (payload) => http.post(`${baseURL}`, payload); //one liner javascript

const updateBook = (id, payload) => http.put(`${baseURL}/${id}`, payload);

const deleteBook = (id) => http.delete(`${baseURL}/${id}`)

export { getListBook, getBookById, createBook, updateBook, deleteBook };

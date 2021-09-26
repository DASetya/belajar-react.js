import http from "./httpCommon";

const baseURL = "/member";

const getListMember = () => http.get(`${baseURL}`);

const createMember = (payload) => http.post(`${baseURL}`, payload);

const deleteMember = (id) => http.delete(`${baseURL}/${id}/0`);

export {
  getListMember,
  createMember,
  deleteMember,
};

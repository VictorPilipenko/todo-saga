import API from '../config/axios';

export const createAPI = post => API.post("todos", post)
export const getAPI = () => API.get("todos")
export const markDoneAPI = ({ id, done }) => API.patch(`todos/${id}`, { done })
export const deleteAPI = id => API.delete(`todos/${id}`)

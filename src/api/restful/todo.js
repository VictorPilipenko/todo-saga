import API from '../../config/restful'

export const createAPI = post => API.post("660/todos", post)
export const getAPI = payload => API.get(`660/todos?_page=${payload.page}&_limit=${payload.pageSize}`, { useCache: true })
export const markDoneAPI = ({ id, done }) => API.patch(`660/todos/${id}`, { done })
export const deleteAPI = ({ id }) => API.delete(`660/todos/${id}`)

import API from '../../config/restful'

export const createAPI = post => API.post("todos", post)
export const getAPI = payload => API.get(`todos?_page=${payload.page}&_limit=${payload.pageSize}`, { useCache: true })
export const markDoneAPI = ({ id, done }) => API.patch(`todos/${id}`, { done })
export const deleteAPI = ({ id }) => API.delete(`todos/${id}`)

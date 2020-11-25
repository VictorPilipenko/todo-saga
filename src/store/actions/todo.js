import { createAction } from "redux-actions"
import * as TYPES from '../types'
import {
  createAPI,
  markDoneAPI,
  deleteAPI
} from "../../api/todo";

export const stopHandle = createAction(TYPES.STOP_HANDLE) 

export const createTodo = createAction(TYPES.CREATE_TODO_REQUEST) // post
export const createTodoSuccess = createAction(TYPES.CREATE_TODO_SUCCESS)
export const createTodoFailure = createAction(TYPES.CREATE_TODO_FAILURE)

export const getTodos = createAction(TYPES.GET_TODOS_REQUEST)
export const getTodosSuccess = createAction(TYPES.GET_TODOS_SUCCESS)
export const getTodosFailure = createAction(TYPES.GET_TODOS_FAILURE)

export const markTodoDone = createAction(TYPES.MARK_TODO_DONE_REQUEST) // id
export const markTodoDoneSuccess = createAction(TYPES.MARK_TODO_DONE_SUCCESS)
export const markTodoDoneFailure = createAction(TYPES.MARK_TODO_DONE_FAILURE)

export const deleteTodo = createAction(TYPES.DELETE_TODO_REQUEST) // id
export const deleteTodoSuccess = createAction(TYPES.DELETE_TODO_SUCCESS)
export const deleteTodoFailure = createAction(TYPES.DELETE_TODO_FAILURE)

export const getAnother = createAction(TYPES.GET_ANOTHER_REQUEST)


const combinedActions = {
  create: {
    api: createAPI,
    success: createTodoSuccess,
    failure: createTodoFailure
  },
  mark: {
    api: markDoneAPI,
    success: markTodoDoneSuccess,
    failure: markTodoDoneFailure
  },
  delete: {
    api: deleteAPI,
    success: deleteTodoSuccess,
    failure: deleteTodoFailure
  }
}

export default combinedActions

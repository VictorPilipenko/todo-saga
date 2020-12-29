import * as TYPES from './types'
import { LOCATION_CHANGE } from 'connected-react-router'

export const initialState = {
  loading: false,
  items: [
    // {
    //   details: {
    //     id: 1,
    //     text: 'text',
    //     done: true,
    //   },
    //   fetchingError: null,
    //   areFetching: false
    // }
  ],
  pagination: {
    currentPage: 1,
    pageSize: 5,
    totalPages: 1,
    totalCount: 1,
  },
  error: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.QUERIES_SET_CURRENT_PAGE:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          currentPage: action.payload || state.pagination.currentPage,
        },
      }
    case TYPES.QUERIES_SET_PAGE_SIZE:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          pageSize: action.payload || state.pagination.pageSize,
        },
      }
    case LOCATION_CHANGE:
      return {
        ...state,
        loading: initialState.loading,
        error: initialState.error,
      }
    case TYPES.GET_TODOS_REQUEST:
    case TYPES.CREATE_TODO_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case TYPES.DELETE_TODO_REQUEST:
    case TYPES.MARK_TODO_DONE_REQUEST:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.details.id === action.payload.id) {
            return {
              ...item,
              areFetching: true,
              fetchingError: '',
            }
          }
          return item
        }),
      }
    case TYPES.CREATE_TODO_SUCCESS:
      return {
        ...state,
        loading: initialState.loading,
        error: initialState.error,
      }
    case TYPES.DELETE_TODO_SUCCESS:
      return {
        ...state,
        items: state.items.filter(
          (item) => item.details.id !== action.payload.id
        ),
        loading: initialState.loading,
        error: initialState.error,
      }
    case TYPES.MARK_TODO_DONE_SUCCESS:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.details.id === action.payload.id) {
            return {
              ...item,
              details: {
                ...item.details,
                done: action.payload.done,
              },
              areFetching: false,
              fetchingError: '',
            }
          }
          return item
        }),
        loading: initialState.loading,
        error: initialState.error,
      }
    case TYPES.GET_TODOS_SUCCESS:
      return {
        ...state,
        loading: initialState.loading,
        error: initialState.error,
        items: action.payload.items,
        pagination: action.payload.pagination,
      }
    case TYPES.GET_TODOS_FAILURE:
    case TYPES.CREATE_TODO_FAILURE:
      return {
        ...state,
        loading: initialState.loading,
        error: action.payload.message,
      }
    case TYPES.DELETE_TODO_FAILURE:
    case TYPES.MARK_TODO_DONE_FAILURE:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.details.id === action.payload.id) {
            return {
              ...item,
              areFetching: false,
              fetchingError: action.payload.message,
            }
          }
          return item
        }),
        loading: initialState.loading,
        error: initialState.error,
      }
    default:
      return state
  }
}

export default reducer

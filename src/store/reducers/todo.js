import * as TYPES from '../types'

const initialState = {
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
    pageSize: 2,
    totalPages: 1,
  },
  err: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.STOP_HANDLE:
      return {
        ...state,
        loading: false,
      };
    case TYPES.GET_TODOS_REQUEST:
    case TYPES.CREATE_TODO_REQUEST:
      return {
        ...state,
        loading: true
      };
    case TYPES.DELETE_TODO_REQUEST:
    case TYPES.MARK_TODO_DONE_REQUEST:
      return {
        ...state,
        items: state.items.map(item => {
          if (item.details.id === action.payload.id) {
            return {
              ...item,
              areFetching: true,
              fetchingError: null
            };
          }
          return item;
        })
      };
    case TYPES.CREATE_TODO_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case TYPES.DELETE_TODO_SUCCESS:
      return {
        ...state,
        items: state.items.filter(item => item.details.id !== action.payload.id)
      };
    case TYPES.MARK_TODO_DONE_SUCCESS:
      return {
        ...state,
        items: state.items.map(item => {
          if (item.details.id === action.payload.id) {
            return {
              ...item,
              details: {
                ...item.details,
                done: true,
              },
              areFetching: false,
              fetchingError: null
            };
          }
          return item;
        })
      };
    case TYPES.GET_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.items,
        pagination: action.payload.pagination
      };
    case TYPES.GET_TODOS_FAILURE:
    case TYPES.CREATE_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        err: action.payload.message
      };
    case TYPES.DELETE_TODO_FAILURE:
    case TYPES.MARK_TODO_DONE_FAILURE:
      return {
        ...state,
        items: state.items.map(item => {
          if (item.details.id === action.payload.id) {
            return {
              ...item,
              areFetching: false,
              fetchingError: action.payload.message
            };
          }
          return item;
        })
      };
    default:
      return state;
  }
}

export default reducer

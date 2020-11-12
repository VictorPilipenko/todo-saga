import * as TYPES from '../types'

const initialState = {
  loading: false,
  data: [],
  err: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_TODOS_REQUEST:
    case TYPES.CREATE_TODO_REQUEST:
    case TYPES.DELETE_TODO_REQUEST:
    case TYPES.MARK_TODO_DONE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case TYPES.CREATE_TODO_SUCCESS:
    case TYPES.DELETE_TODO_SUCCESS:
    case TYPES.MARK_TODO_DONE_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case TYPES.GET_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case TYPES.GET_TODOS_FAILURE:
    case TYPES.CREATE_TODO_FAILURE:
    case TYPES.DELETE_TODO_FAILURE:
    case TYPES.MARK_TODO_DONE_FAILURE:
      return {
        ...state,
        loading: false,
        err: action.payload
      };
    default:
      return state;
  }
}

export default reducer

import * as TYPES from '../../types/local'

const initialState = {
  name: localStorage.getItem("theme-name") || 'light'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.CHANGE_APP_THEME:
      return {
        ...state,
        name: action.payload
      }
    default:
      return state
  }
}

export default reducer

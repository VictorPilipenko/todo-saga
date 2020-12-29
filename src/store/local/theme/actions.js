import { createAction } from 'redux-actions'
import * as TYPES from './types'

export const appTheme = createAction(TYPES.THEME_SAGA)
export const changeAppTheme = createAction(TYPES.CHANGE_APP_THEME)

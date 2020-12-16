import { createAction } from "redux-actions"
import * as TYPES from '../../types/local'

export const appLocale = createAction(TYPES.LOCALE_SAGA)
export const changeAppLocale = createAction(TYPES.CHANGE_APP_LOCALE)

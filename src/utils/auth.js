const getAccessToken = () => {
  return JSON.parse(localStorage.getItem('access_token')) || ""
}

const setAccessToken = (token) => {
  localStorage.setItem('access_token', `Bearer ${JSON.stringify(token)}`)
}

const removeAccessToken = () => {
  localStorage.removeItem('access_token')
}

const getRefreshToken = () => {
  return JSON.parse(localStorage.getItem('refresh_token')) || ""
}

const setRefreshToken = (token) => {
  localStorage.setItem('refresh_token', `Bearer ${JSON.stringify(token)}`)
}

const removeRefreshToken = () => {
  localStorage.removeItem('refresh_token')
}

const getRecoveryPasswordConfirmToken = () => {
  return JSON.parse(localStorage.getItem('recovery_password_confirm_token')) || ""
}

const setRecoveryPasswordConfirmToken = (token) => {
  localStorage.setItem('recovery_password_confirm_token', `Bearer ${JSON.stringify(token)}`)
}

const removeRecoveryPasswordConfirmToken = () => {
  localStorage.removeItem('recovery_password_confirm_token')
}

export {
  getAccessToken,
  setAccessToken,
  removeAccessToken,
  getRefreshToken,
  setRefreshToken,
  removeRefreshToken,
  getRecoveryPasswordConfirmToken,
  setRecoveryPasswordConfirmToken,
  removeRecoveryPasswordConfirmToken,
}

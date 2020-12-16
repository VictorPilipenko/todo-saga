const getBrowserLanguage = () => {
  const language = window.navigator.language || window.navigator.userLanguage

  if (language) return language.split("-")[0]

  return "en"
}

const getConnectionSpeed = () => {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection

  if (connection) return connection.downlink

  return "none"
}


export { 
  getBrowserLanguage,
  getConnectionSpeed
}

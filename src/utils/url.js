const createURLParams = (...params) => {
  const filteredParams = params.filter(param => param)
  const hasParams = params && params.length && params.some(param => param)

  return hasParams ? `?${filteredParams.join("&")}` : ""
}

export {
  createURLParams
}

const removeElementByIndex = (index, array) =>
  array.slice(0, index).concat(array.slice(index + 1, array.length))

const cloneEntry = (entry) => JSON.parse(JSON.stringify(entry))

const localeComparingSort = (array, key) => {
  if (key) {
    return array.sort((a, b) => a[key].localeCompare(b[key]))
  }

  return array.sort((a, b) => a.localeCompare(b))
}

const removeDuplicates = (key, list, duplicates) => {
  list.filter(
    (item) => !duplicates.some((duplicate) => duplicate[key] === item[key])
  )
}

const sortByKey = (array, key) => {
  array.sort((a, b) => (a[key] > b[key] ? 1 : -1))
}

const makeStringOfValues = (list, key) => {
  return list ? list.map((el) => el[key]).join(', ') : ''
}

export {
  removeElementByIndex,
  cloneEntry,
  localeComparingSort,
  removeDuplicates,
  sortByKey,
  makeStringOfValues,
}

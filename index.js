const allQueryStrings = url => {
  const data = url || location.search || {}
  const checkFirstChar = data.charAt(0) === '?'
  const finalString = checkFirstChar ? data : `?${data}`
  return parseString(finalString)
}

const parseString = data => 
  data
    .substr(1)
    .split('&')
    .reduce((acc, item) => {
      const arr = item.split('=')
      acc[decodeURIComponent(arr[0])] = decodeURIComponent(arr[1])
      return acc
    }, {})

const queryString = (name, url) => allQueryStrings(url)[name]

module.exports = { queryString, allQueryStrings }

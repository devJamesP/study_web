// query string
// format : address?property=value&property=value...

// 간단한 영화 검색 api
const basicUrl = 'https://www.omdbapi.com/'
const apiKey = '198b039'
const searchWord = 'frozen'
const requestUrl = basicUrl
  .concat('?apikey=')
  .concat(apiKey)
  .concat('&s=')
  .concat(searchWord)

console.log(requestUrl)


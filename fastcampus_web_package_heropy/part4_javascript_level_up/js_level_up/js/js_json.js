// JSON (JavaScript Object Notation)
// 자바스크립트의 객체 표기법
// json객체는 주석 x, json파일은 일종의 데이터이므로 123, [] 만 넣어도 데이터로 취급되지만 둘 다 넣으면 x


import myData from './myData.json'

// myData(json object)
console.log('myData', myData)
console.log(typeof myData)

const user = {
  name: 'James',
  age: 85,
  emails: [
    'thesecon@gmail.com',
    'asdf@asdf.com'
  ],
}

// user(json object)
console.log('user', user)
console.log(typeof user)



// str(String)
const strUser = JSON.stringify(user)
console.log('strUser', strUser)
console.log(typeof strUser)

const objParseUser = JSON.parse(strUser)
console.log('objParseUser', objParseUser)
console.log(typeof objParseUser)


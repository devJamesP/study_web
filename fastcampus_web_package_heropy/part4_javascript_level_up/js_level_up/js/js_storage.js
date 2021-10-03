const user = {
  name: 'james',
  age: 123,
  emails: [
    'znzldh12@naver.com',
    'znzldh1234@gmail.com'
  ]
}

localStorage.setItem('user', JSON.stringify(user))
console.log(JSON.parse(localStorage.getItem('user')))

const strUser = localStorage.getItem('user')
const obj = JSON.parse(strUser)
obj.age = 22
console.log(obj)

localStorage.setItem('user', JSON.stringify(obj)) 
localStorage.removeItem('user')
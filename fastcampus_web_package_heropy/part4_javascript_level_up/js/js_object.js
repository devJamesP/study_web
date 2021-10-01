// object
const userAge = {
  // key: value
  name: 'James',
  age: 123
}

const userEmail = {
  name: 'James',
  eamil: 'asdf@gmail.com'
}

// .assign(target, source) target에 source의 다른 속성들을 추가, 같은 속성은 수정함.
// 반환값은 타겟 객체와 출처 객체의 머지 결과
// 이렇게 하면 userAge는 타겟 객체, userEmail은 출처 객체
const target = Object.assign(userAge, userEmail)
console.log(target)
console.log(userEmail)
console.log(userAge)
console.log(target === userAge)
console.log(userAge === userEmail)

// 이렇게 하면 {}이 타겟 객체이고 userAge, userEmail은 출처 객체
// 따라서 출처객체의 원본을 손상하지 않고 생성 가능함.
const target2 = Object.assign({}, userAge, userEmail)
console.log(userAge)
console.log(target2)

const target3 = Object.assign({}, userEmail)
// 이런식으로 새로운 매모리에 할당된 객체를 복사하여 생성하는 용도로도 사용됨.
console.log(target3 === userEmail) // false


// .keys
const user = {
  name: 'James',
  age: 123,
  email: 'askdf@aslkdfj.clkasd',
}

const keys = Object.keys(user)
console.log(keys)

console.log(user['email'])

const values = keys.map((key, index) => `${key}, ${index}`)
console.log(values)


// 구조 분해 할당 (Destructuring assignment)
const {
  name: myname,
  age,
  email,
  address = 'korea'
} = user
// E.g, user.address

console.log(`사용자의 이름은 ${myname}입니다.`);
console.log(`${myname}의 나이는 ${age}세입니다.`);
console.log(`${myname}의 이메일 주소는 ${email}입니다.`);
console.log(address)

const fruits = ['Apple', 'Banana', 'Cherry', 'Orange']
const [, b, , d] = fruits // 위치를 비워놔두 됨.
console.log(b, d)


// 전개 연산자 (Spread)
console.log(...fruits)

// ...c는 0, 1번째 인수를 제외하고 나머지 파라미터를 전부 받아냄
// 이를 rest parameter라고 함.
function toObject(a, b, ...c) {
  return {
    a: a,
    b: b,
    c: c,
  }
}

// 속성의 name과 변수의 이름이 같은 경우 축약 가능함.
function toObject2(a, b, ...c) {
  return {a, b, c }
}

// 객체데이터가 함수 블록과 겹치는 경우에는 ()사용
const toObject3 = (a, b, ...c) => ({a, b, c}) 

console.log(toObject(...fruits))
console.log(toObject2(...fruits))
console.log(toObject3(...fruits))
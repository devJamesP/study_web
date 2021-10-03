import _ from 'lodash'

// 중복된 배열의 요소를 제거하여 새로운 배열로 반환
// _.uniqWith(array, [comparator])
// _.unionBy([arrays], [iteratee=_.identity])

const userA = [
  { userId: '1', name: 'James', },
  { userId: '2', name: 'Neo', },
]

const userB = [
  { userId: '1', name: 'James', },
  { userId: '3', name: 'Amy', },
]

// uniqBy는 하나의 배열에서 고유한 속성값이 같은 중복 요소를 제거하여 새로운 배열을 반환
const usersC = userA.concat(userB)
console.log('concat', usersC)
console.log('uniqBy', _.uniqBy(usersC, 'userId'))

// unionBy는 여러개의 배열에서 고유한 속성값이 같은 중 요소를 제거하여 새로운 배열을 반환
const usersD = _.unionBy(userA, userB, 'userId')
console.log('unionBy', usersD)


const users = [
  { userId: '1', name: 'HEROPY' },
  { userId: '2', name: 'Neo' },
  { userId: '3', name: 'Amy' },
  { userId: '4', name: 'James' },
  { userId: '5', name: 'Evan' },
]

const foundUser = _.find(users, { name: 'James'} ) // 조건에 맞는 첫번째 요소 반환
console.log(foundUser)
const foundUserIndex = _.findIndex(users, { name: 'Amy'} ) // 조건에 맞는 첫번째 요소의 인덱스 반환
console.log(foundUserIndex)

_.remove(users, { userId: '4'}) // 삭제
console.log(users)


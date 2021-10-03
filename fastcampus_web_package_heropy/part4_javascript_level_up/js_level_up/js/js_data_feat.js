import _ from 'lodash' // 이렇게 하는걸 권장함. lowdash이니깐

// 데이터 불변성(Immutablility)
// 원시 데이터: String, Number, Boolean, undefined, null
// 참조형 데이터: Object, Array, Function

/**
 * a=1이라는 원시 데이터가 메모리에 할당
 * b=4라는 원시데이터도 메모리에 할당
 * 서로 비교했을 때는 당연히 다르다.
 * 
 * 그러나 b=1이라고 바꿔주면
 * a와 b의 값이 같으므로 같다고 봐야할까? (절반만 맞는 소리)
 * 정확하게는 컴파일러가 해석 할 때 자동적으로 b=4라는 데이터는 지우고
 * 메모리에 1이라는 데이터가 있으므로 b변수 역시 a=1의 1값을 가리킨다는것.
 * 결국 a와 b는 변수만 다를 뿐 서로 메모리에 1 이 할당된 주소를 가리킨다는 것.
 * 
 * 여기서 Immutability라는 말이 나옴.
 * 원시 데이터는 동일한 데이터를 변수에 할당하는 경우
 * 기존의 메모리에 존재한다면 해당 주소를 변수에 할당한다.
 * 
 * 
 * 사실상 원시데이터는 값 자체가 같거나 다르다로 판단 해도 됨. 
 */

let a = 1
let b = 4
console.log(a, b, a === b)

b = a
console.log(a, b, a === b)

a = 7
console.log(a, b, a === b)

let c = 1
console.log(b, c, b === c)


/** 단, 참조형 데이터의 경우 다름.
 * 
 * 매번 새로운 참조형 데이터를 생성 할 때마다 메모리에 할당
 * 따라서 동일한 참조를 하고있는 인스턴스가 있다면
 * 포함하고 있는 데이터를 변경 할 때 동일하게 변경이 일어남.
 */

let r = { k: 1 }
let o = { k: 1 }

console.log(r, o, r === o)

r.k = 7
o = r
console.log(r, o, r === o)

r.k = 2
console.log(r, o, r === o)

let n = o
console.log(r, o, n, r === n)

r.k = 9
console.log(r, o, n, r === n)



/** 얕은 복사(Shallow Copy), 깊은 복사(Deep Copy)
* 
* 
* shallow copy, deep copy라는 용어를 씀
* shallow copy(얕은 복사) : 참조형 데이터의 참조 값(메모리 주소)를 전달하여
메모리에 할당 된 동일한 데이터를 서로 공유.

* deep copy(깊은 복사) : 데이터를 복사 순간에만 복사하여 새롭게 메모리에 할당.
결국 서로 다른 객체임.

javascript에서....
그러나 Object.assign, spread를 통한 깊은 복사는
원시 데이터는 깊은 복사가 됬지만
2차원 이상의 참조형 데이터(객체 내부의 객체 그 이상)에서는 깊은 복사가 이루어지지 않는다.
따라서 이러한 경우 여러 방법이 있겠지만(직접 구현이라든지...)
lodash 패키지(모듈)을 사용해서 깊은 복사를 할 수 있다., 
*/

const user = {
  name: 'James',
  age: 85,
  emails: ['asdfsdf@sadkfj.com']
}

console.log('------reference-shallowCopy------')

const copyUser = user
user.emails.push('normalCopy@test.com')
console.log(user === copyUser)
console.log(user)
console.log(copyUser)


console.log('------Object.assign-DeepCopy------')

const copyAssignUser = Object.assign({}, user)
user.emails.push('Object.assign@test.com')
console.log(user === copyAssignUser)
console.log(user)
console.log(copyAssignUser)


console.log('------spread-DeepCopy------')

const spreadCopyUser = {...user}
user.emails.push('spreadCopy@test.com')
console.log(user === spreadCopyUser)
console.log(user)
console.log(spreadCopyUser)


console.log('------lodash-DeepCopy------')

// deep copy
const lodashCloneDeepCopyUser = _.cloneDeep(user)
console.log(lodashCloneDeepCopyUser === user)

user.emails.push('deepCopyTest@test.com')
console.log('2차원 참조형 데이터에도 깊은 복사가 적용 됨: ',user.emails === lodashCloneDeepCopyUser.emails)
console.log(user)
console.log(lodashCloneDeepCopyUser)

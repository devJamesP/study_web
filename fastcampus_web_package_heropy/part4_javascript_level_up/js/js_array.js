// array
const numbers = [1, 2, 3, 4];
const fruits = ['Apple', 'Banana', 'Cherry'];

console.log(numbers[1]);
console.log(fruits[2]);
console.log([1,2].length);

console.log([].length);

// .concat()
// 원본 배열은 수정되지 않음.
console.log(numbers.concat(fruits))
console.log(numbers)
console.log(fruits)

fruits.forEach(function (fruit, index, array) {
  console.log(fruit, index, array)
})


.map()
const a = fruits.forEach((fruit, index) => {
  console.log(`${fruit}-${index}`)
})
console.log(a)

const b = fruits.map( (fruit, index) => {
  return {
    id: index,
    name: fruit
  }
})

const c = fruits.map(function(fruit, index) {
  return {
    id: index,
    name: fruit
  }
})
console.log(b)

// map, filter 원본 배열에 영향을 주지 않음.
const a = numbers.map ( (number) => number < 3)
console.log(a)

const b = numbers.filter(number => number < 3)
console.log(b)

console.log(numbers)


.find() /findIndex()
const a = fruits.find( fruit => /^B/.test(fruit) )
console.log(a)

const b = fruits.findIndex( fruit => /^B/.test(fruit) )
console.log(b)

const c = fruits.find( fruit => fruit === 'Banana')
console.log(c)



.includes()
const a = numbers.includes(3)
console.log(a)

const b = fruits.includes('Melon')
console.log(b)


// .push(), .unshift() 원본이 수정됨.
numbers.push(5) // 가장 마지막 부분에 데이터를 추가
console.log(numbers)

numbers.unshift(0) // 가장 처음 부분에 데이터를 추가
console.log(numbers)

// .reverse() 원본이 수정됨.
numbers.reverse()
fruits.reverse()
console.log(numbers)
console.log(fruits)

// .splice() 원본이 수정됨.
numbers.splice(2, 1) // start: 2, delecount: 1 2번째 index위치에서 아이템 1을 지움
console.log(numbers)

numbers.splice(2,1,999) // start: 2, delecount: 1, insert as start: 999
console.log(numbers)


fruits.splice(0, 0, 'Orange')
console.log(fruits)

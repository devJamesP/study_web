const person1 = { name: 'Mark', age: 30 } // object literal

// Object 전역 객체를 통해 런타임에 객체를 생성
const person2 = Object.create({name: 'Mark', age: 30 })

/**
 * Object타입?
 * non-primitive type이다. (number, string, boolean, symbol, null, undefined)
 */

let testObj: object
testObj = { name: 'James' }
testObj = [{ name: 'James' }]
// testObj = 39 // error
// testObj = 'James' // error
// testObj = true // error
// testObj = 100n // error
// testObj = Symbol() // error
// testObj = null // error
// testObj = undefined // error

declare function create(o: object | null): void;
create({ prop: 0 })
create(null)
// create(42) // error
// create('string') // error
// create(false) // error
// create(undefined) // error

// Object.create(0) // error
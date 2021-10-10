"use strict";
var person1 = { name: 'Mark', age: 30 }; // object literal
// Object 전역 객체를 통해 런타임에 객체를 생성
var person2 = Object.create({ name: 'Mark', age: 30 });
/**
 * Object타입?
 * non-primitive type이다. (number, string, boolean, symbol, null, undefined)
 */
var testObj;
testObj = { name: 'James' };
testObj = [{ name: 'James' }];
create({ prop: 0 });
create(null);
// create(42) // error
// create('string') // error
// create(false) // error
// create(undefined) // error
// Object.create(0) // error

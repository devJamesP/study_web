"use strict";
// Symbol?
/** ECMAScript 2015의 Symbol
 * new Symbol처럼 생성자 함수로 객체 생성 불가
 * Symbol을 함수로 사용해서 symbol 타입을 만들 수 있음 */
var _a;
console.log(Symbol('foo') === Symbol('foo'));
/** Symbol은 언제 쓸까?
 * 프리미티브 타입의 값을 담아서 사용하고
 * 고유하고 수정불가능한 값으로 만들어줌
 * 그래서 주로 접근을 제어하는데 쓰는 경우가 많음
 */
var sym = Symbol();
var obj = (_a = {},
    // sym: 'value' // 이렇게 하면 단순 속성 값 sym이지만...
    _a[sym] = 'value2' // 이렇게하면 Symbol값이 속성 이름이 되므로 사용 불가(고유값)
,
    _a);
// obj['sym'] // value
obj[sym]; // value2
// TMI : 함수로 사용할 때는 Symbol, 타입으로 사용할 때는 symbol

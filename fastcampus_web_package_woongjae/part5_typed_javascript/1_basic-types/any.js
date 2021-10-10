"use strict";
// 어떤 것이든 들어갈 수 있다.
// stricts를 true로 하면 자동적으로
// noInplicitAny기능이 켜져서 묵시적 any를 허용하지 않음.
function returnAny(message) {
    console.log(message);
}
var any1 = returnAny('리턴은 아무거나');
any1.toString(); // Cannot read property 'toString' of undefined
/**
 * any
 * any는 계속해서 객체를 통해 전파됨. (반환자료형을 any로 놓으면
 * 해당 값을 다루는 모든곳에서 any로 받아야 하기 때문에 않좋음)
 * 결국, 모든 편의는 타입 안정성을 잃는 대가로 온다.
 * 타입 안정성은 TypeScript를 사용하는 주요 동기 중 하나이며
 * 필요하지 않은 경우에는 any를 사용하지 않도록 해야함.
 */
var looselyTyped = {};
var d = looselyTyped.a.b.c.d.e.d.s.a.e.s.e; // 전부 any
function leakingAny(obj) {
    var a = obj.num; // num은 이름처럼 숫자지만 타입은 any
    var b = a + 1; // 이래도 any
    return b;
}
var c = leakingAny({ num: 0 }); // c도 any~
c.indexOf('0');

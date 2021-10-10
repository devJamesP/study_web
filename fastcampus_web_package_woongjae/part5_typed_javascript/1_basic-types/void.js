"use strict";
// 일반적으로 void형태로 타입 추론 됨.
function returnVoid(message) {
    console.log(message);
    return undefined; // 유일하게 undefined만 할당 가능
}
var r = returnVoid("return이 없다.");
// 이렇게 void를 이용하면 일종의 반환된 값으로 아무것도 안한다라는 것을 의미함.
var r2 = undefined; // 유일하게 할당 가능

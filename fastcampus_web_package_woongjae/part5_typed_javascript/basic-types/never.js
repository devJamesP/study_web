"use strict";
function error(message) {
    // never의 의미처럼 아무것도 반환하지 않는다는 의미
    // 즉, message를 throw함으로써 throw 코드 밑은 동작하지 않음.
    throw new Error(message);
    // not working area
}
// error함수를 사용하므로 반환값으로 never를 추론하게 됨.
function fail() {
    return error("failed");
}
function infiniteLoop() {
    while (true) {
    }
    // not working area
}
if (typeof a !== "string") {
    // 이러면 a는 number 타입
    a;
}
// const b: Indexable<{}> = ''; 
// 이런식으로 never타입일 경우 값을 할당하는 것을 방지
/**
 * never 특징
 * - never 타입은 모든 타입의 subtype이다. 모든 타입에 할당 할 수 있다.
 * 하지만, never에는 그 어떤 것도 할당 할 수 없다.
 * - any조차도 never에 할당 할 수 없다.
 * - 잘못된 타입을 넣는 실수를 막고자 할 때 사용하기도 함.
 */

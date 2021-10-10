"use strict";
/**
 * 응용 프로그램을 작성할 때 모르는 변수의 타입을 묘사해야 할 수도 있다.
 * 보통 이런 값은 동적인 값
 * 이 경우, 컴파일러와 미래의 코드를 읽는 사람에게 unknown형태로 제공
 *  */
if (maybe === true) {
    // 이렇게 타입을 한정하면 블록 내부는 true타입이거나 boolean타입
    var aBoolean = maybe;
    // const aString: string = maybe;
}
if (typeof maybe === 'string') {
    // 타입은 string
    var aString = maybe;
    // const aBoolean: boolean = maybe;
}
if (typeof maybe === 'number') {
    var aNumber = maybe;
}
/**
 * unknown
 * TypeScript 3.0부터 지원
 * any와 짝으로 any보다 Type-safe한 타입
 * - any와 같이 아무거나 할당할 수 있음.
 * - 컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁히거나
 * - 타입을 확정해주지 않으면 다른 곳에 할당 할 수 없고, 사용 할 수 없음.
 *
 * unknown 타입을 사용하면 runtime error를 줄일 수 있음.
 * - 사용 전에 데이터의 일부 유형의 검사를 수행해야 함을 알리는 API에 사용 가능
 */ 

function error(message: string): never {
  // never의 의미처럼 아무것도 반환하지 않는다는 의미
  // 즉, message를 throw함으로써 throw 코드 밑은 동작하지 않음.
  throw new Error(message);
  // not working area
}

// error함수를 사용하므로 반환값으로 never를 추론하게 됨.
function fail() {
  return error("failed");
}

function infiniteLoop(): never {
  while(true) { 

  }
  // not working area
}

// let a: string = "hello";

// if (typeof a !== "string") {
//   // type이 string인데 string이 아니면 이라고 했으니
//   // 블록 내부의 a타입은 never임.
//   a;
// }

declare const a: string | number;

if (typeof a !== "string") {
  // 이러면 a는 number 타입
  a;
}

// 이건 타입 정의임.
// 해석 해보면
/**
 * 제네릭 타입이 string 이면, T를 {[index: string]: any}형태의 타입이고
 * string이 아니면 never 타입
 * {[index: string]: any}은?
 * 객체 타입인데
 * 내부 프로퍼티인 index는 반드시 string이고
 * 프로퍼티 index에 해당하는 값은 any이다.
 */
type Indexable<T> = T extends string ? T & {[index: string]: any } : never

// ex
type ObjectIndexable = Indexable<{}>;
// const b: Indexable<{}> = ''; 
// 이런식으로 never타입일 경우 값을 할당하는 것을 방지



/**
 * never 특징
 * - never 타입은 모든 타입의 subtype이다. 모든 타입에 할당 할 수 있다.
 * 하지만, never에는 그 어떤 것도 할당 할 수 없다.
 * - any조차도 never에 할당 할 수 없다.
 * - 잘못된 타입을 넣는 실수를 막고자 할 때 사용하기도 함.
 */


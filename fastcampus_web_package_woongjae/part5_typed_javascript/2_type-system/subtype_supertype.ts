let sub1: 1 = 1;
let sup1: number = sub1;
// sub1 = sup1; // error : 1타입에 number타입 할당 불가

let sub2: number[] = [1];
let sup2: object = sub2;
// sub2 = sup2 // error : array에 구현된 메소드 16개가 object타입에는 없음.

let sub3: [number, number] = [1,2];
let sup3: number[] = sub3;
// sub3 = sup3; // error : tuple형식보다 요소가 적을 수 있음.

let sub4: number = 1;
let sup4: any = sub4;
sub4 = sup4; // any는 error가 안나네?(예외적인 사항)

let sub5: never = 0 as never;
let sup5: number = sub5;
// sub5 = sup5; // error: never에는 never만 할당 가능.

class Animal {}
class Dog extends Animal {
  eat() {}
}

let sub6: Dog = new Dog()
let sup6: Animal = sub6;
// sub6 = sup6; // eat()메소드가 없음


/** 규칙
 * 1. 같거나 서브 타입인 경우, 할당이 가능하다 => 공변성
 */
// primitive type
let sub7: string = ''
let sup7: string|number = sub7;

// object - 각각의 프로퍼티가 대응하는 프로퍼티와 같거나 서브타입이어야 함.
let sub8: { a: string; b: number } = {a: '', b: 1 };
let sup8: { a: string | number; b: number } = sub8;

// array - object와 마찬가지
let sub9: Array<{ a: string, b: number }> = [{ a: '', b: 1}];
let sup9: Array<{ a: string | number, b: number }> = sub9;

/* 2. 함수의 매개변수 타입만 같거나 슈퍼타입인 경우, 할당이 가능하다. => 반공변성 */
class Person {}
class Developer extends Person {
  coding() {} 
}
class StartupDeveloper extends Developer {
  burning() {}
}

function tellme(f: (d: Developer) => Developer) {}

// 타입만 보자
/* Developer => Developer 에다가 Developer => Developer를 할당하는 경우 */
tellme(function dToD(d: Developer): Developer {
  return new Developer()
 });

 /* Developer => Developer 에대가 Person => Developer를 할당하는 경우 */
 tellme(function pToD(d: Person): Developer {
   return new Developer();
 })


 /* Developer => Developer 에다가 StartupDeveloper => Developer를 할당하는 경우 */
 /* error : 함수의 인수를 받는 경우 인수 타입은 반공변성이다. */
// tellme(function sToD(d: StartupDeveloper): Developer { 
//   return new Developer();
// })


import getType from './getType'
import random from './getRandom'

/** 1. 데이터 타입 확인 */
console.log(typeof 'hello world!');
console.log(typeof 1234);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof {});
console.log(typeof []);
console.log(typeof null);

console.log(getType(123));
console.log(getType(false));
console.log(getType(null));
console.log(getType({}));
console.log(getType([]));


/** 2. 산술, 할당 연산자 */

// 산술 연산자
console.log(1 + 2);
console.log(5 - 7);
console.log(3 * 4);
console.log(10 / 2);
console.log(10 % 2);

// 할당 연산자
const a = 2;
console.log(a);

let b = 2;
b = 5;
console.log(b);

b += 1;
console.log(b);

// 비교 연산자(compareison operator)
const a1 = 1;
const a2 = 1;
console.log(a1 === a2);

function isEqual(x, y) {
  return x === y
}
console.log(isEqual(1, 2));
console.log(isEqual(1, '1'));

const b1 = 1;
const b2 = 3;
console.log(b1 !== b2);
console.log(b1 < b2);
console.log(b1 >= b2);

const c1 = 1 === 1;
const c2 = 'ab' === 'ab';
const c3 = true;

console.log(c1);
console.log(c2);
console.log(c3);

console.log('&&: ', c1 && c2 && c3);
console.log('||: ', c1 || c2 || c3);

// 삼항 연산자
const d1 = 1 > 2;
const d2 = 1 < 2;

console.log(d1 ? '참' : '거짓');
console.log(d2 ? '참' : '거짓');


// 조건문
const rd = random();

if (rd === 0) {
  console.log('rd is 0');
} else if (rd === 1) {
  console.log('rd is 1');
} else {
  console.log('rest...');
}

switch (rd) {
  case 0:
    console.log('rd is 0');
    break;
  case 1:
    console.log('rd is 1');
    break;
  case 3:
    console.log('rd is 3');
    break;
  default:
    console.log('rest...');
    break;
}


const ulEl = document.querySelector('ul');

// 반복문
for (let i = 0; i < 10; i += 1) {
  const li = document.createElement('li');
  li.textContent = `list-${i + 1}`
  if ((i + 1) % 2 === 0) {
    li.addEventListener('click', function () {
      console.log(li.textContent);
    });
  }
  ulEl.appendChild(li);
}


// 변수 유효 범위
// var(선언한 함수 범위), let(블록 범위), const(블록 범위)

function scope() {
  console.log(aaaa);
  if (true) {
    var aaaa = 123;
  }
}
scope();

// 형 변환 (Type conversion)

const nA = 1;
const sA = '1';

// 동등 연산자(==)는 자동으로 2개의 데이터를 비교 할 때 형 변환이 일어나므로
// 값이 같다는 의도치 않은 결과가 나옴.
// 따라서 == 보다는 ===을 권장함.
console.log(nA === sA);
console.log(nA == sA);

// Truthy (참 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14' ...

// Falsy(거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN ...

if ('') {
  console.log(123);
}

if ([]) {
  console.log('aslkdfjasdlk');
}
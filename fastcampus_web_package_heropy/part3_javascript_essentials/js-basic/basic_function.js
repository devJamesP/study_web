// function


const a = sum(1, 3);
const b = sum(4, 12);

const c = function (x, y) {
  return x + y;
}


function sum() {
  console.log(arguments[0] + arguments[1]);
  return arguments[0] + arguments[1];
}


console.log(sum(7, 3));



// right arrow function
// () => { } vs function () { }
const double = function (x) {
  return x * 2;
}
console.log('double: ', double(7));


const doubleArrow = (x) => x * 2;
console.log('doubleArrow: ', doubleArrow(7));

// 객체 데이터를 반환할때는??
const doubleArrowObj = (x) => ({
  name: "JamesPark"
});
console.log('doubleArrowObj: ', doubleArrowObj(7));


// 즉시 실행 함수
// IIFE, Immediately-Invoke Function Expression
const t = 7;
function test() {
  console.log(t * 2);
}
test();

// 1. 익명 함수로 함수를 생성 소괄호로 감싸고
// 2. 뒤에 ()를 추가
(function () {
  console.log(t * 2);
})();

(function () {
  console.log(t * 2);
})();


// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
const h = 7;

testHoisting();

// 함수 표현 -> 함수 선언
// const testHoisting = function () {
//   console.log(h * 2);
// }

// 이를 호이스팅이라 하며, 함수 선언부는 run타임에 상단으로 끌어올려 지므로 
// testHoisting()메소드를 호출하더라도 제대로 실행 됨.
function testHoisting() {
  console.log(h * 2);
}


// 타이머 함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료

// const h1El = document.querySelector('h1');
// h1El.addEventListener('click', function () {
//   clearTimeout(timer);
//   clearInterval(intervalTimer);
// });

// setTimeout(function () {
//   console.log('JamesPark!');
// }, 3000);

// const timer = setTimeout(() => {
//   console.log('JamesPark!')
// }, 3000);

// const intervalTimer = setInterval(() => {
//   console.log('interval JamesPark');
// }, 3000);
 


// 콜백(Callback)
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)
function timeout(callback) {
  setTimeout(() => {
    callback();
  }, 3000);
}

timeout(() => {
  console.log('Done!');
});



// 리터럴 방식으로 객체를 생성
const jamesPark = {
  firstName: "James",
  lastName: "Park",
  age: 26,
  job: "Android Junior Developer",
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }
}

console.log(jamesPark.getFullName());


// 파스칼 케이스
// js개발자들이 암묵적으로 해당 함수가 new키워드와 함께 인스턴스로 사용되는 생성자함수 라는 것을 의미함.
function User(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}

// prototype :: 동일한 내용, user객체의 firstName, lastName, age는 변하므로
// getFullName은 메모리에 한번 생성된 메소드를 참조해서 사용함.
// 프로토타입 언어라고도 함. js는
user.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}


// 함수 방식으로 객체를 생성
const james = new user('James', 'Park', 26);
const amy = new user('Amy', 'Clarke', 30);
const neo = new user('Neo', 'Smith', 20);


console.log(james.getFullName());
console.log(amy.getFullName());
console.log(neo);

// 배열도 프로토타입으로 되어있음.


// this
// 일반(Normal) 함수는 호출 위치에서 따라 this 정의!
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!


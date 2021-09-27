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
User.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}


// 함수 방식으로 객체를 생성
const james = new User('James', 'Park', 26);
const amy = new User('Amy', 'Clarke', 30);
const neo = new User('Neo', 'Smith', 20);


console.log(james.getFullName());
console.log(amy.getFullName());
console.log(neo);

// 배열도 프로토타입으로 되어있음.


// this
// 일반(Normal) 함수는 호출 위치에서 따라 this 정의!
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!
const jamesP = {
  name: 'James',
  normal: function () {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  }
}

jamesP.normal();
jamesP.arrow();

const amyT = {
  name: 'Amy',
  normal: jamesP.normal,
  arrow: jamesP.arrow 
}

// 일반 함수는 함수 호출부에서 this 정의
// 화살표 함수는 함수 선언부에서 this 정의
amyT.normal();
amyT.arrow();


function User2(name) {
  this.name = name;
}

User2.prototype.normal = function () {
  console.log(this.name);
}

User2.prototype.arrow = () => {
  console.log(this.name);
}

const James2 = new User2('james');

James2.normal();
James2.arrow();

const timer = {
  name: 'james!',
  timeout: function () {
    // setTimeout(함수, 시간)
    // 여기서의 this.name은 setTimeout함수에서 callback 함수를 실행하는데 일반 함수를 
    // 인수로 넘겼기 때문에 setTimeout내에서의 this.name을 의미함.
    setTimeout(function() {
      console.log(this.name);
    } ,2000);
  },
  // 여기서의 this.name은 function() { ... } 범위 내에서 정의된 this.name
  // 그리고 function() { }일반 함수에서 정의되었으므로 일반함수는 호출 되는 부분에서
  // this가 정의됨. 따라서 timer객체에 속성 name값인 james!가 출력됨.
  timeoutArrow: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 2000);
  }
}
timer.timeout();
timer.timeoutArrow();


// ES6 Classes

const james3 = {
  name: 'James!!',
  normal() { // 이런식으로 축약 가능
    console.log(this.name); 
  },
  arrow: () => {
    console.log(this.name);
  }
}

james3.normal();
james3.arrow();

// 이를 객체지향 언어의 클래스의 모습과 유사하게 ES6 Classes에서 제공
function User3 (first, last) {
  this.firstName = first;
  this.lastName = last;
}

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

class User4 {
  constructor (first, last) {
    this.firstName = first;
    this.lastName = last;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const test1 = new User3('James', 'Park');
const test2 = new User4('Amy','Clarke');
const test3 = new User('Neo', 'Smith');

console.log(test1);
console.log(test2);
console.log(test3);



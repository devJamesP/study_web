"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var sub1 = 1;
var sup1 = sub1;
// sub1 = sup1; // error : 1타입에 number타입 할당 불가
var sub2 = [1];
var sup2 = sub2;
// sub2 = sup2 // error : array에 구현된 메소드 16개가 object타입에는 없음.
var sub3 = [1, 2];
var sup3 = sub3;
// sub3 = sup3; // error : tuple형식보다 요소가 적을 수 있음.
var sub4 = 1;
var sup4 = sub4;
sub4 = sup4; // any는 error가 안나네?(예외적인 사항)
var sub5 = 0;
var sup5 = sub5;
// sub5 = sup5; // error: never에는 never만 할당 가능.
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.eat = function () { };
    return Dog;
}(Animal));
var sub6 = new Dog();
var sup6 = sub6;
// sub6 = sup6; // eat()메소드가 없음
/** 규칙
 * 1. 같거나 서브 타입인 경우, 할당이 가능하다 => 공변성
 */
// primitive type
var sub7 = '';
var sup7 = sub7;
// object - 각각의 프로퍼티가 대응하는 프로퍼티와 같거나 서브타입이어야 함.
var sub8 = { a: '', b: 1 };
var sup8 = sub8;
// array - object와 마찬가지
var sub9 = [{ a: '', b: 1 }];
var sup9 = sub9;
/* 2. 함수의 매개변수 타입만 같거나 슈퍼타입인 경우, 할당이 가능하다. => 반공변성 */
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Developer.prototype.coding = function () { };
    return Developer;
}(Person));
var StartupDeveloper = /** @class */ (function (_super) {
    __extends(StartupDeveloper, _super);
    function StartupDeveloper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StartupDeveloper.prototype.burning = function () { };
    return StartupDeveloper;
}(Developer));
function tellme(f) { }
// 타입만 보자
/* Developer => Developer 에다가 Developer => Developer를 할당하는 경우 */
tellme(function dToD(d) {
    return new Developer();
});
/* Developer => Developer 에대가 Person => Developer를 할당하는 경우 */
tellme(function pToD(d) {
    return new Developer();
});
/* Developer => Developer 에다가 StartupDeveloper => Developer를 할당하는 경우 */
/* error : 함수의 인수를 받는 경우 인수 타입은 반공변성이다. */
// tellme(function sToD(d: StartupDeveloper): Developer { 
//   return new Developer();
// })

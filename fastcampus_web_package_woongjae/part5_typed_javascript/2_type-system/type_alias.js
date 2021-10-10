"use strict";
var str = 'world';
var myStr = 'hello';
myStr = str;
/* 별 의미가 없음 */
/// Aliasing Union Type
var personUnion = 0;
personUnion = 'Mark';
var anotherUnion = 0;
anotherUnion = 'Alan';
/* 유니온 타입은 A도 가능하고, B도 가능한 타입, 길게 쓰는걸 짧게! */
/// Aliasing Tuple
var personTuple = ['Mark', 45];
var anotherTuple = ['James', 33];

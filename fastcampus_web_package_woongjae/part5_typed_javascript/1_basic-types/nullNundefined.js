"use strict";
/**
 * TypeScript에서 undefined와 null은 실제로 각각
 * undefined및 null이라는 타입을 갖음.
 */
// undefined와 null은 모든 타입의 서브 타입이다.
/**
 * 설정을 하지 않으면 그러하다.
 * number에 null 또는 undefined를 할당 할 수 있다.
 * 컴파일 옵션에서 --strictNullChecks를 사용하면 null과 undefined는
 * void나 자기 자신들에게만 할당 할 수 있다.
 * 이 경우,
 * null과 undefined를 할당할 수 있게 하려면, union type을 이용해야 함.
 * = 일반적으로 null과 undefined타입을 허용하지 않는게 안정적임.
 *
 * tsconfig.json의 stricts 옵션이 활성화되고 있음
 *
 * [null vs undefined]
 *
 * null은 런타임에서 typeof연산자를 이용해서 알아내면 object임.
 *
 * undefined는 무언가가 없는 상태
 * object의 property가 없을 때도 undefined임.
 * undefined는 런타임에서 typeof연산자를 이용해서 알아내면 undefined임.
 */
// let MyName: number = undefined
// let u: undefined = null
var v = undefined;
// union 타입 : |를 사용해서 타입 지정
var union = null;
union = 'mark';

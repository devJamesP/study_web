/// Aliasing Primitive
type MyStringType = string;
const str = 'world';
let myStr: MyStringType = 'hello';
myStr = str;
/* 별 의미가 없음 */


/// Aliasing Union Type
let personUnion: string | number = 0;
personUnion = 'Mark';

type StringOrNumber = string | number;
let anotherUnion : StringOrNumber = 0;
anotherUnion = 'Alan';
/* 유니온 타입은 A도 가능하고, B도 가능한 타입, 길게 쓰는걸 짧게! */


/// Aliasing Tuple
let personTuple: [string, number] = ['Mark', 45];
type PersonTuple = [string, number]
let anotherTuple: PersonTuple = ['James', 33];
/* 튜플 타입에 별칭을 줘서 여러군데에서 사용할 수 있게 함. */


/// Aliasing Function
type EatType = (food: string) => void;


// 순서, 타입, 길이도 일치해야 함.
let x: [string, number] = ['james', 11];

x = ['hello', 321];

let y: [number, null, string] = [30, null, 'james'];

const tuplePerson: [string, number] = ['James', 33];

// 디스트럭쳐링
const [first, second] = tuplePerson;

// Array는 동일한 타입의 요소들의 모임이고
// Tuple은 정해진 길이의 정해진 타입의 요소로 이루어진 모임
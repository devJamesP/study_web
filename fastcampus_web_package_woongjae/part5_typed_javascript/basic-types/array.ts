// 권장
// let list: number[] = [1, 2, 3];

// 사용 자제 해야함.
// let list: Array<number> = [1,2,3];

// 별로 좋지 못한 것 같음.
let list: (number | string)[] = [1,2,3,'4'];

// 위를 해결하기 위해 tuple이라는 타입을 만듬.


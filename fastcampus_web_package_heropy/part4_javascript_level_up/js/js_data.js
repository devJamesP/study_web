// JS 데이터

const str = '0123';
console.log(str.length); // return 4

const str2 = 'Hello world!';
console.log(str2.indexOf('Hello') !== -1);

console.log(str2.slice(0, -1));
console.log(str2.slice(6, 11));
console.log(str2.slice(-6, -1));

console.log(str2.replace('world', 'James'));
console.log(str2.replace(' world!', ''));


const str3 = 'hello@gmail.com'
// match는 특정 표현식을 통해 매칭되는 배열의 값을 가져옴.
console.log(str3.match(/.+(?=@)/)[0]); // 정규 표현식

const str4 ='    hello world     ';
console.log(str4);
console.log(str4.trim());
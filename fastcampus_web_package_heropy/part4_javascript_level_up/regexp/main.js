const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=198b039&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://www.dfkdf.com
동해물과 백두산이 마르고 닳도록
`

// 생성자 함수 방식으로 (정규표현식) 생성
// the라는 문자열이 str의 최초 일치 패턴(the) 정보 반환
const regexp = new RegExp('the', '')
console.log(str.match(regexp))

// g flag를 추가하면 패턴(the) 일치 정보 반환
const regexp2 = new RegExp('the', 'g')

console.log(str.match(regexp2))

// i옵션(플래그)는 대,소문자 구분 하지 않음.
const regexp3 = new RegExp('the', 'gi')
console.log(str.match(regexp3))

// 리터럴 방식으로 (정규표현식) 생성
const regexp4 = /the/gi
console.log(str.match(regexp4))

// 예제
const regexp5 = /fox/gi
// console.log(regexp5.test(str))

// 원본 데이터 손상 x
console.log(str.replace(regexp5, 'AAA'))
console.log(str)

// \이스케이프를 추가하면 문자열로 해석
// $sign은 문자열의 끝부분을 의미함.
// 해석해보면 .$은 문자열의 끝부분이 .으로 끝나는지를 match
const regexp6 = /\.$/
console.log(str.match(regexp6))

// multiline flag를 추가했으므로
// 줄바꿈하는 부분이 마지막부분으로 해석
const regexp7 = /\.$/m
console.log(str.match(regexp7))

console.log(
  str.match(/d$/gm)
)

// 시작 줄에 일치 여부
console.log(
  str.match(/^t/gim)
)

// 줄 끝에 일치 여부
console.log(
  str.match(/t$/gim)
)

// .을 이스케이프를 추가하지 않으면
// 정규표현식 패턴으로 작용
// 임의의 한 문자
console.log(
  str.match(/h..p/g)
)

// a | b
console.log(
  str.match(/fox|dog/g)
)

// 뒤에 ?를 붙이면 바로 앞 문자가
// 있을수도 있고 없을수도 있는 문자를 찾음.
console.log(
  str.match(/https?/g)
)


// ddd일치하는 패턴 검색
console.log(
  str.match(/d{3}/)
)

// d가 2개 이상 연속일치하는 패턴 검색
console.log(
  str.match(/d{2,}/)
)

// d가 3개 이상 5개 이하 패턴 일치 검색
console.log(
  str.match(/d{3,5}/)
)

// 모든 2개의 문자, 3개의 문자
// \w는 숫자를 포함한 알파벳


// 전체 영역에서 특수문자를 제외한
// 2~3개의 문자를 끊어서 찾음.
console.log(
  str.match(/\w{2,3}/g)
)
 
// \b는 경계, 
// \b를 추가하면 특수문자를 기준으로만 찾음.
console.log(
  str.match(/\b\w{2,3}\b/g)
)

console.log(
  str.match(/[fox]/g)
)

console.log(
  str.match(/[0-9]/g)
)

console.log(
  str.match(/[0-9]{1,}/g)
)

console.log(
  str.match(/[가-힣]{1,}/g)
)

console.log(
  str.match(/\w/g)
)

console.log(
  str.match(/\bf\w{1,}\b/g)
)

console.log(
  str.match(/\d/g)
)

let h = `  the hello  world   !`
console.log(h)
h = h.replace(/\s{2,}/g, ' ')
console.log(h.match(/(?=)/g))
// h = h.replace(/\s(?=)/)

console.log(
  str.match(/.{1,}(?=@)/g),
  str.match(/(?<=@).{1,}/g)
)


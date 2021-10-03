// default로 export 시 이름을 않붙여두 됨.
export default function(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
} 
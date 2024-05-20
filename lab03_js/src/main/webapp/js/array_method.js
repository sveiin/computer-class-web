/**
 * array_method.html에 포함
 * 
 * JS array 객체의 함수(머세드)들
 */

const arr = [1, 2, 3];
// arr = [1, 2, 3, 4]; 불가능
console.log(arr);

// 새로운 원소를 배열 끝에 추가:
arr.push(100); // push(): 원본 배열의 끝에 새로운 원소를 추가. 원본 배열이 바뀜
console.log(arr);

let result = arr.concat(200);
// concat(): 원본 배열을 변경하지 않고, 원소가 추가된 새로운 배열을 리턴
console.log(arr);
console.log(result);

// 배열의 마지막 원소를 삭제:
arr.pop(); // pop(): 원본 배열의 마지막 원소를 삭제. 원본 배열의 내용이 바뀜
console.log(arr);

result = arr.slice(0, -1);
// slice(start, end): 배열에서 start 인덱스부터 end 인덱스까지를 잘라낸 새로운 배열을 리턴
// -> 원본 배열이 변경되지 않음
console.log(arr);
console.log(result);

const arr2 = [10, 100, -1, 90];
console.log(arr2);

// toSorted(): 
// - 배열의 원소들을 문자열로 변환해서 크기 비교를 함
// - 오름차순 정렬된 새로운 배열을 리턴
// - 원본 배열은 변경되지 않음
// toSorted(callback): 배열 원소들의 크기 비교를 할 때 사용할 콜백을 아규먼트로 전달
result = arr2.toSorted((x, y) => x - y); // 원본 배열을 오름차순 정렬한 새로운 배열을 리턴
console.log(arr2); // toSorted() 메서드는 원본 배열을 변경하지 않음
console.log(result);

// sort():
// - 배열의 원소들을 문자열로 변환해서 크기 비교
// - 원본 배열의 원소 순서를 오름차순으로 변경. 원본 배열이 바뀜
// sort(callback): 배열 원소의 크기 비교에서 사용하는 콜백을 아규먼트로 전달
arr2.sort((x, y) => x - y);
console.log(arr2);

// forEach, filter, map, reduce:
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers);

// 배열 numbers의 원소들 중에서 홀수들로만 이루어진 새로운 배열 만드세요
const odds = []; // let odds = [];
for (let x of numbers) {
    if (x % 2) {
        odds.push(x); // odds = odds.concat(x);
    }
}
console.log(odds);

result = numbers.filter(function (x) {
    return x % 2;
})
result = numbers.filter((x) => x % 2);
console.log(result);

// 배열 numbers의 원소들의 제곱을 원소로 갖는 새로운 배열을 만드세요
const squares = [];
for (let x of numbers) {
    squares.push(x * x);
}
console.log(squares);

result = numbers.map((x) => x * x);
console.log(result);

numbers.forEach((x) => console.log(x));

// 배열 numbers의 모든 원소들의 합계
let sum = 0;
for (let value of numbers) {
    sum += value; // sum = sum + value;
}

console.log(`sum = ${sum}`);

sum = numbers.reduce((acc, cur) => acc + cur, 0);
// reduce(callback, initialValue)
console.log(`sum = ${sum}`);

// numbers의 모든 원소들의 곱: 1 x 2 x ... x 5 x 6
result = 1;
for (let value of numbers) {
    result = result * value; // result *= value;
}
console.log(`result = ${result}`);

result = numbers.reduce((acc, cur) => acc * cur, 1);
console.log(`result = ${result}`);

// numbers의 원소들 중에서 짝수들의 합: 2 + 4 + 6
result = numbers.filter((x) => x % 2 === 0)
                .reduce((acc, cur) => acc + cur, 0);
console.log(`result = ${result}`);

// numbers의 원소들의 제곱의 합: 1 + 4 + 9 + 16 + 25 + 36
result = numbers.map((x) => x * x)
                .reduce((acc, cur) => acc + cur, 0);
console.log(`result = ${result}`);

// numbers의 원소들 중에서 짝수들의 제곱의 합: 4 + 16 + 36
result = numbers.filter((x) => x % 2 === 0)
                .map((x) => x * x)
                .reduce((acc, cur) => acc + cur, 0);
console.log(`result = ${result}`);
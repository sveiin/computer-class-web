/**
 * for.html에 포함
 */

// 아이디가 result인 HTML 요소를 찾음
const result = document.getElementById('result');

// result 요소에 추가할 HTML 코드를 저장하기 위한 문자열 변수
let html = '';

for(let i = 1; i < 10; i++) {
    html += `2 x ${i} = ${2 * i} <br />`; // ``: 문자열 템플릿
}
result.innerHTML += html;

result.innerHTML += '<hr />';


// result에 구구단 3단 ~ 9단까지 덧붙임(append)
html = '';

for(let i = 3; i < 10; i++) {
    for(let j = 1; j < 10; j++) {
        html += `${i} x ${j} = ${i * j} <br />`;
    }
    html += '<hr />';
}

result.innerHTML += html;

// break를 사용해서 2단은 2x2까지, 3단은 3x3까지, ..., 9단은 9x9까지 출력
html = '';

for (let i = 2; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        html += `${i} x ${j} = ${i * j} <br />`;
        if (j == i) {
            break;
        }
    }
    html += '<hr />';
}

result.innerHTML += html;

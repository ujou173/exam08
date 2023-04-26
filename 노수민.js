// 1. npm install inquirer
// 2. EMS 방식으로만 동작하는 외부 CLI 라이브러리
import inquirer from 'inquirer';
import { last } from 'rxjs';

// inquirer 라이브러리의 .prompt() 메서드는 프로미스를 반환하도록 작성되어 있습니다.
// then() 메서드로 입력 받은 데이터를 전달 할 수 있습니다.

function exampleOne(array) {
  let suffledArray = array;
  let lastValue = array[array.length - 1];
  // console.log(lastValue)
  for(let i = array.length - 2; i > -1; i--) {
    let j = random(i + 1);
    // console.log("i: " + i);
    // console.log("j: " + j);
    [suffledArray[i], suffledArray[j]] = [suffledArray[j], suffledArray[i]];
  }
  suffledArray[array.length - 1] = lastValue;

  // Q.1 랜덤으로 배열의 인덱스를 셔플하는 함수 로직을 작성하시오
  // 단, 마지막 confirm은 항상 마지막 인덱스여야 합니다.
  return suffledArray;
}

function random(max) {
  return Math.floor(Math.random() * max) ;
}
// console.log(random(3));

const basicData = [
  {
    type: 'input',
    name: 'name',
    message: '당신의 이름은 무엇입니까?',
  },
  {
    type: 'list',
    name: 'like food',
    message: '당신이 좋아하는 음식은 무엇입니까?',
    choices: ['바나나우유', '딸기우유', '초코우유', '그냥우유'],
  },
  {
    type: 'list',
    name: 'like subject',
    message: '당신이 좋아하는 음식은 무엇입니까?',
    choices: ['수학', '과학', '국어', '역사'],
  },
  {
    type: 'confirm',
    name: 'confirm',
    message: '확실합니까?',
  },
];

// console.log(exampleOne(basicData));

// Q.2 아래에 작성 된 .prompt()는 인자로 배열을 요구하므로,
// 위의 작성한 exampleOne을 활용하여 입력 데이터를 실행 할 때 마다 섞어서 출력하시오.
// 공부법으로 유명한 flash card의 주요 코어 로직입니다.
inquirer
  .prompt(exampleOne(basicData))
  .then((answers) => {
    console.log('Answers: ', answers)
  });
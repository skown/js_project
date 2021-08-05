export function message() {
  const NazwaZmiennej = 'Raz Dwa Trzy Hello Siema';
  console.log(NazwaZmiennej);
}

const funkcjaB = (a, b) => a(b);
const lowerCase = a => a.toLowerCase();
const upperCase = a => a.toUpperCase();
const text = 'druga dupa';

// const funkcjaA = (a, b) => a + b;

// const funkcjaC = x => `>>tutaj funkcja ${x} b<<`;

// console.log(funkcjaA(1, 2));
// console.log(funkcjaB(funkcjaC, 'dupa'));

const opcje = {
  lower: lowerCase,
  upper: upperCase,
};

/*
// przyklad z HTML

<select>
  <option value="lower" />
  <option value="upper" />
</select>

const output = funkcjaB(opcje[select.value], input.value);
*/

funkcjaB(opcje['lower'], text);

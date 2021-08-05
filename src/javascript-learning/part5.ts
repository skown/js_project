function myCallback() {
  console.log('hello');
}

console.log('hello1');

// setTimeout(() => {
//   console.log('hello2');

//   setTimeout(() => {
//     console.log('hello3');

//     setTimeout(() => {
//       console.log('hello4');

//       setTimeout(() => {
//         console.log('hello5');

//         setTimeout(() => {
//           console.log('hello6');
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('hello_old'), 1000);
});

function old() {
  myPromise.then(message => {
    console.log(message);
  });
}

// ------------------

function stop(delay) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

async function fancy() {
  await stop(1000);
  return 'hello_fancy';
}

old();
fancy().then(info => console.log(info));

async function initialize() {
  console.log(await fancy());
}

initialize();

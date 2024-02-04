const body = document.body;

const main = document.createElement('div');

const root = document.querySelector(':root');
let pro = getComputedStyle(root);

// console.log(pro.getPropertyValue('--leftPos'));

main.setAttribute('id', 'main');

body.appendChild(main);

let Balls = [];

for (let i = 0; i < 3; i++) {
  Balls.push(document.createElement('div'));

  Balls[i].setAttribute('id', `Ball${i + 1}`);

  main.append(Balls[i]);
}

// setInterval(() => {
//   Balls.forEach((ball) => {
//      ball.style.left = `${Math.random() * (400 - 20) + 10}px`;

// 	ball.style.top = `${Math.random() * (400 - 20) + 10}px`;
//    pro.setProperty('--leftPos', `${Math.random() * (400 - 20) + 10}px`);

//     console.log(pro.getPropertyValue('--leftPos'));
//   });
// }, 100);
let oldPos = {
  top: `${Math.random() * (400 - 20) + 10}px`,
  left: `${Math.random() * (400 - 20) + 10}px`,
};
setInterval(() => {
  let newPos = {
    top: `${Math.random() * (400 - 20) + 10}px`,
    left: `${Math.random() * (400 - 20) + 10}px`,
  };
  Balls.forEach((e) => {
    e.animate(
      [oldPos, newPos],

      {
        duration: 2000,
        iterations: Infinity,
      }
    );
    oldPos = newPos;
  });
}, 2100);

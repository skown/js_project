import './styles.css';

class MyCar {
  element: HTMLElement;
  velocityX: number = 0;
  velocityY: number = 0;
  x: number = 0;
  y: number = 0;

  constructor(element: HTMLElement) {
    this.element = element;
  }

  drive() {
    this.x += this.velocityX;
    this.y += this.velocityY;
    this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
  }
}

const element = document.querySelector<HTMLElement>('.my-speed-car');

if (element) {
  const myCar = new MyCar(element);

  document.addEventListener('keydown', event => {
    switch (event.code) {
      case 'ArrowRight':
        myCar.velocityX += 0.5;
        break;
      case 'ArrowLeft':
        myCar.velocityX -= 0.5;
        break;
      case 'ArrowDown':
        myCar.velocityY += 0.5;
        break;
      case 'ArrowUp':
        myCar.velocityY -= 0.5;
    }
  });

  setInterval(() => {
    myCar.drive();
  }, 16);

  console.log(myCar);
}

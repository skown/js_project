class Car {
  protected maxSpeed = 10;
  public color;
  public engine;

  constructor(initialColor: string, initialEngine: string) {
    this.color = initialColor;
    this.engine = initialEngine;
  }

  sayColor() {
    console.log(this.color + this.maxSpeed + this.engine);
  }
}

class ChildCar extends Car {
  constructor(color: string) {
    super(color, 'v10');

    this.maxSpeed = 100;
  }
}

const instanceA = new Car('old_color', 'v6');
const instanceB = new Car('blue', 'v7');
const instanceChild = new ChildCar('pink');

instanceA.color = 'red';
// instanceA.maxSpeed = 200; error
instanceA.sayColor();
instanceB.sayColor();
instanceChild.sayColor();

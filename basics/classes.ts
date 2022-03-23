class Vehicle {
  constructor(public color: string) {}

  protected drive() {
    console.log('Driving!!!')
  }

  public horn() {
    console.log('Horn!!')
  }
}

class CarClass extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color)
  }
  //   getAcc = () => {
  //     this.drive()
  //   }

  drive(): void {
    console.log('Redefining Drive!!')
  }
}
// const vehicle = new Vehicle('red')
// console.log(vehicle.color)

const vehicle2 = new CarClass(1, 'red')
console.log(vehicle2.color)
// vehicle.horn()

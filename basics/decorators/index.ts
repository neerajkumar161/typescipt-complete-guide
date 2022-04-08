@classDecorator
class Boat {
  color: string = 'red'

  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`
  }

  @logError('Oops boat was sunk in ocean!')
  pilot(@paramDecorator speed: string): void {
    if (speed === 'fast') console.log('Boat is running fast!')
    else console.log('Boat is running slow!')
  }

  sink(): void {
    console.log('Ship is sinking!')
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor)
}

function paramDecorator(target: any, key: string, index: Number) {
  console.log(key)
  console.log(index)
}

function testDecorator(target: any, key: string) {
  // console.log(target)
  // console.log(key)
}

function logError(errMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value
    desc.value = function () {
      try {
        method()
      } catch (error) {
        console.log(errMessage)
      }
    }
  }
}
// new Boat().pilot()

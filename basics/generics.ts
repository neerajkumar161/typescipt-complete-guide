class GenericCollcetion<T> {
  constructor(public collection: T[]) {}

  get(index: number) {
    return this.collection[index]
  }
}

const numberCollection = new GenericCollcetion([1, 2, 3, 4])
const stringCollection = new GenericCollcetion(['a', 'b', 'c', 'd'])
const mixedCollection = new GenericCollcetion(['a', 'b', 'c', 'd', 1, 2, 3])

// Generics with Functions
const printAnyThing = <T>(array: T[]) => {
  for (let index = 0; index < array.length; index++) {
    console.log(array[index])
  }
}

printAnyThing([1, 2, 34, 5])

// Generic Constraints
class Car {
  print() {
    console.log('Im a Car!')
  }
}

class House {
  print() {
    console.log('Im a House!')
  }
}

interface Printable {
  print(): void
}

const printHouseOrCars = <T extends Printable>(array: T[]) => {
  for (let index = 0; index < array.length; index++) {
    array[index].print()
  }
}

printHouseOrCars<House>([new House()]) // It is recommended to add type annotation in Generic
printHouseOrCars<Car>([new Car()])

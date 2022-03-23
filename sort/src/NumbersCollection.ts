import { Sorter } from './Sorter'
export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super() // ref to Sorter Constructor
  }

  get length() {
    return this.data.length
  }

  compare = (leftIndex: number, rightIndex: number): boolean => {
    return this.data[leftIndex] > this.data[rightIndex]
  }

  swap = (leftIndex: number, rightIndex: number) => {
    const leftHand = this.data[leftIndex]
    this.data[leftIndex] = this.data[rightIndex]
    this.data[rightIndex] = leftHand
  }
}

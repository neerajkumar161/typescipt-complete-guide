import { Sorter } from './Sorter'

class Node {
  next: Node | null = null

  constructor(public value: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null

  // constructor(public data: number) {}

  add = (data: number) => {
    const newNode = new Node(data)
    if (!this.head) {
      this.head = newNode
      return
    }

    let tail = this.head
    while (tail.next) {
      tail = tail.next
    }
    tail.next = newNode
  }

  get length(): number {
    if (!this.head) return 0

    let length = 1
    let node = this.head
    while (node.next) {
      length++
      node = node.next
    }
    return length
  }

  at = (index: number): Node => {
    if (!this.head) {
      throw new Error('Index out of bound!')
    }

    let counter = 0
    let node: Node | null = this.head
    while (node) {
      if (counter === index) {
        return node
      }

      counter++
      node = node.next
    }
    throw new Error('Index out of bounds!')
  }

  compare = (leftIndex: number, rightIndex: number) => {
    if (!this.head) throw new Error('List is empty')

    return this.at(leftIndex).value > this.at(rightIndex).value
  }

  swap = (leftIndex: number, rightIndex: number) => {
    const leftNode = this.at(leftIndex)
    const rightNode = this.at(rightIndex)

    // we're replacing values rather than , changing nodes pointers
    const leftHand = leftNode.value
    leftNode.value = rightNode.value
    rightNode.value = leftHand
  }

  print = () => {
    if (!this.head) return

    let nodesList = []
    let node: Node | null = this.head
    while (node) {
      nodesList.push(node.value)
      node = node.next
    }
    console.log(nodesList)
  }
}

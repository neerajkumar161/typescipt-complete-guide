import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'
import { NumbersCollection } from './NumbersCollection'

const numbers = new NumbersCollection([10, 3, -5, 0])
const characters = new CharactersCollection('zyXdxcba')
const linkedList = new LinkedList()

linkedList.add(500)
linkedList.add(-10)
linkedList.add(510)
linkedList.add(-3)
linkedList.add(1)
// Reusable Sorter Classes - That's the whole idea about reusing code
// const sort = new Sorter(numbersCollection)
// const sortChars = new Sorter(charactersCollection)
// const linkedListSorter = new Sorter(linkedList)

numbers.sort()
characters.sort()
linkedList.sort()

console.log(numbers.data)
console.log(characters.data)

linkedList.print()

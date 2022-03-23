const carMakers = ['maruti', 'honda', 'tata']

const dates = [new Date(), new Date()]

const carsByMake = [['f150'], ['cormolla'], ['shelby']]

// Helps with inference when extracting values
const car1 = carMakers[1] // string

// carMakers.push(true) // invalid

const flexible: (string | number | boolean | Date)[] = ['hello', 12, true, new Date()]

const drink = {
  color: 'Red',
  carbonated: true,
  sugar: 40
}

// and Tuple will be like
const drinkTuple = ['Red', true, 40] // order is important here

type Drink = [string, boolean, number]
// TO convert this for specific order then Tuple will be
const drinkTuple1: Drink = ['he', false, 50] // valid tuple

// drinkTuple1[0] = false      // invalid

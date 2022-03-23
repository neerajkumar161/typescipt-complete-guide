interface Reportable {
  //   name: string
  //   year: Date
  //   broken: boolean
  summary(): string
}

const oldCivic = {
  name: 'Civic',
  year: new Date(),
  broken: false,
  summary() {
    return this.name
  }
}

const newDrink = {
  color: 'brown',
  carbonated: false,
  sugar: 40,
  summary(): string {
    return 'New Drink summary'
  }
}

const printSummary = (item: Reportable) => {
  console.log(item.summary())
}

printSummary(oldCivic)
printSummary(newDrink) // reuse- summary also exists in oject

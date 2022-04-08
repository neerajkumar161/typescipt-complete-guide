import 'reflect-metadata'

@controller
class Plane {
  color: string = 'red'

  @get('/login')
  fly(): void {
    console.log('Vrrrrr')
  }
}

function get(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('path', path, target, key)
  }
}

function controller(target: typeof Plane) {
  for (const key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key)
    // const method = target.prototype[key]
    console.log(path)

    // router.get(path, targe.prototype[key])
  }
}
// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly')

// console.log(secret)
// const plane = {
//   color: 'red'
// }

// Reflect.defineMetadata('note', 'hi there!', plane)
// Reflect.defineMetadata('height', 10, plane)
// Reflect.defineMetadata('colorr', 'yellow', plane, 'color')

// const res = Reflect.getMetadata('note', plane)
// const height = Reflect.getMetadata('height', plane)
// const colorrr = Reflect.getMetadata('colorr', plane, 'color')
// console.log(res, height, colorrr)

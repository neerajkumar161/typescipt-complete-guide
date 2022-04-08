import { NextFunction, Request, RequestHandler, Response } from 'express'
import 'reflect-metadata'
import { AppRouter } from '../../AppRouter'
import { MetadatKeys } from './MetadataKeys'
import { Methods } from './Methods'

function bodyValidators(keys: string[]): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction) {
    console.log('Body validators', req.body, keys)
    if (!req.body) {
      res.status(422).send('Invalid Request!')
      return
    }

    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send('Invalid Request')
        return
      }
    }

    next()
  }
}
export function controller(routerPrefix: string) {
  return function (target: Function) {
    for (const key in target.prototype) {
      const router = AppRouter.getInstance()

      const routeHandler = target.prototype[key]

      const path = Reflect.getMetadata(MetadatKeys.path, target.prototype, key)
      const method: Methods = Reflect.getMetadata(MetadatKeys.method, target.prototype, key)
      const middlewares = Reflect.getMetadata(MetadatKeys.middleware, target.prototype, key) || []

      const requiredBodyKeys = Reflect.getMetadata(MetadatKeys.validator, target.prototype, key) || []
      const validator = bodyValidators(requiredBodyKeys)

      // console.log(key)
      // console.log(method)
      // console.log(middlewares)
      // console.log(validator)
      if (path) {
        // router.get('/auth/login', middleware, routerHanler)
        router[method](`${routerPrefix}${path}`, ...middlewares, validator, routeHandler)
      }
    }
  }
}

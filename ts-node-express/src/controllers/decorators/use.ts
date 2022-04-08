import { RequestHandler } from 'express'
import 'reflect-metadata'
import { MetadatKeys } from './MetadataKeys'

// Factory Decorator
export function use(middleware: RequestHandler) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    const middlewares = Reflect.getMetadata(MetadatKeys.middleware, target, key) || []

    Reflect.defineMetadata(MetadatKeys.middleware, [...middlewares, middleware], target, key)
  }
}

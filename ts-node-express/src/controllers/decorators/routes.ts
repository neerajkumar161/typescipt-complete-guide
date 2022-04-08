import { RequestHandler } from 'express'
import 'reflect-metadata'
import { MetadatKeys } from './MetadataKeys'
import { Methods } from './Methods'

// TypeCheck for Controllers of type RequestHandler
interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler
}

function routerBinder(method: string) {
  return function get(path: string) {
    return function (target: any, key: string, desc: RouteHandlerDescriptor) {
      Reflect.defineMetadata(MetadatKeys.path, path, target, key)
      Reflect.defineMetadata(MetadatKeys.method, method, target, key)
    }
  }
}

export const get = routerBinder(Methods.get)
export const post = routerBinder(Methods.post)
export const put = routerBinder(Methods.put)
export const del = routerBinder(Methods.del)
export const patch = routerBinder(Methods.del)

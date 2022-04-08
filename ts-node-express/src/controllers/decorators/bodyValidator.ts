import 'reflect-metadata'
import { MetadatKeys } from './MetadataKeys'

export function bodyValidator(...keys: string[]) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata(MetadatKeys.validator, keys, target, key)
  }
}

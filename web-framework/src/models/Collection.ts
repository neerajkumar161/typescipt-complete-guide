import axios, { AxiosResponse } from 'axios'
import { Eventing } from './Eventing'

export class Collection<T, K> {
  models: T[] = []
  events: Eventing = new Eventing()

  constructor(public baseUrl: string, public deserialize: (json: K) => T) {}
  get on() {
    return this.events.on
  }

  get trigger() {
    return this.events.trigger
  }

  fetch(): void {
    axios.get(`${this.baseUrl}`).then((resp: AxiosResponse) => {
      resp.data.forEach((el: K) => {
        this.models.push(this.deserialize(el))
      })
      this.trigger('change')
    })
  }
}

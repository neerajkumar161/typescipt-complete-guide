import { AxiosPromise, AxiosResponse } from 'axios'

interface ModelAttributes<T extends HasId> {
  get<K extends keyof T>(key: K): T[K]
  set(value: T): void
  getAll(): T
}

interface Sync<T> {
  fetch(id: number): AxiosPromise
  save(data: T): AxiosPromise
}

interface Events {
  on(eventName: string, callback: () => void): void
  trigger(eventName: string): void
}

interface HasId {
  id?: number
}

export class Model<T extends HasId> {
  constructor(private attributes: ModelAttributes<T>, private sync: Sync<T>, private events: Events) {}

  on = this.events.on
  trigger = this.events.trigger
  get = this.attributes.get

  set(update: T) {
    this.attributes.set(update)
    this.events.trigger('change')
  }

  fetch = () => {
    const id = this.get('id')
    if (!id) throw new Error('No Id exists!')

    this.sync.fetch(id).then((response: AxiosResponse) => {
      this.set(response.data)
    })
  }

  save = () => {
    const user = this.attributes.getAll()
    this.sync
      .save(user)
      .then((response: AxiosResponse) => {
        this.trigger('save')
      })
      .catch((err) => this.trigger('error'))
  }
}

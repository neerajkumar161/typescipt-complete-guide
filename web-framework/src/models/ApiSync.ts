import axios, { AxiosPromise } from 'axios'

interface HasId {
  id?: number
}
export class ApiSync<T extends HasId> {
  constructor(public baseUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.baseUrl}/${id}`)
  }

  save(data: T): AxiosPromise {
    const { id } = data
    if (id) {
      return axios.put(`${this.baseUrl}/${id}`, data)
    }
    return axios.post(this.baseUrl, data)
  }
}

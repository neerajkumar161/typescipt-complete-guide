import { User } from '../models/User'
import { UserProps } from './../models/User'
import { View } from './View'

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-random-age': this.onSetRandomAge,
      'click:.set-user-name': this.onSetUserName,
      'click:.save-model': this.onSaveUser
    }
  }

  onSetRandomAge = (): void => {
    this.model.setRandomAge()
  }

  onSetUserName = (): void => {
    const input = this.parent.querySelector('input')

    if (input) {
      this.model.set({ name: input.value })
    }
  }

  onSaveUser = (): void => {
    this.model.save()
  }

  template(): string {
    return `
      <div>
        <input placeholder="${this.model.get('name')}"/>
        <button class="set-user-name">Change User Name</button> 
        <button class="set-random-age">Set Random Age</button> 
        <button class="save-model">Save</button> 
      </div>
    `
  }
}

import { Collection } from './models/Collection'
import { User, UserProps } from './models/User'
import { UserList } from './views/UserList'
// import { User } from './models/User'
// import { UserEdit } from './views/UserEdit'

// const user = User.buildUser({ name: 'Test User 2', age: 23 })

// const rootEl = document.getElementById('root')

// if (rootEl) {
//   const userEdit = new UserEdit(rootEl, user)
//   userEdit.render()
//   console.log(userEdit)
// } else {
//   throw new Error('Root Element Not Found!')
// }

const users = new Collection('http://localhost:3000/users', (json: UserProps) => {
  return User.buildUser(json)
})

users.on('change', () => {
  const rootEl = document.getElementById('root')
  if (rootEl) {
    const userList = new UserList(rootEl, users)
    userList.render()
    console.log(userList)
  } else {
    throw new Error('Root Element Not Found!')
  }
})
users.fetch()

import axios from 'axios'

const url = `https://jsonplaceholder.typicode.com/todos/1`

interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

axios
  .get(url)
  .then((res) => {
    const result = res.data as Todo
    logTodo(result.id, result.title, result.completed)
  })
  .catch((err) => console.log(err))

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log({ id, title, completed })
}

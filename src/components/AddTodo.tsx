import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../store'

export function AddTodo() {
  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()

  function handleAddTodo(e: FormEvent) {
    e.preventDefault()

    dispatch(add({ todo }))

    setTodo('')
  }

  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        placeholder="Novo todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <button type="button">Add</button>
    </form>
  )
}

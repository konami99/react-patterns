interface TodoListProps {
  todo: {
    id: number
    title: string
    completed: boolean
  }
}

const TodoList = ({ todo }: TodoListProps) => {
  const { id, title } = todo || {}

  return todo ? (
    <div>
      <h1>TodoList</h1>
      <p>{id}</p>
      <p>{title}</p>
    </div>
  ) : (
    <div>Loading...</div>
  )
}

export default TodoList

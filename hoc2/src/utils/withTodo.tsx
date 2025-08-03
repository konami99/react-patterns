import { useEffect, useState } from "react"

export const withTodo = <T extends object>(Component: React.ComponentType<T>, todoId: string) => {
  return (props: T) => {
    const [todo, setTodo] = useState(null)

    useEffect(() => {
      ;(async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
        const data = await response.json()
        setTodo(data)
      })()
    }, [])

    return <Component {...props} todo={todo} />
  }
}

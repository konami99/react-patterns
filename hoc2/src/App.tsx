import TodoList from "./components/TodoList"
import { withTodo } from "./utils/withTodo"
import "./App.css"

const TodoListWrapper = withTodo(TodoList, "2")

function App() {
  return <TodoListWrapper />
}

export default App

import { useEffect, useId, useState } from "react"
import TodoList from "./components/TodoList/TodoList"
import AddTodo from "./components/AddTodo/AddTodo"
import {TodoProvider} from './context/todoContext'


function App() {
  const [todos, setTodos] = useState([])
  const addTodo = (todo) =>{
    setTodos((prev) => [{id: Date.now(),...todo},...prev])
  }
  const updateTodo = (id, todo) =>{
    setTodos((prev)=> prev.map((prevtodo)=>(
      prevtodo.id === id ? todo : prevtodo
    )))
  }
  const deleteTodo = (id) =>{
    setTodos((prev)=> prev.filter((todo)=> todo.id !== id))
  }
  const todoComplete = (id) =>{
    setTodos((prev)=> prev.map((todo)=>(
      todo.id === id ? {...todo, completed: !todo.completed}: todo )
    ))
  }
  useEffect(()=>{
  const todo = JSON.parse(localStorage.getItem("todo"))
  if(todo && todo.length > 0){
    setTodos(todo)
  }
  },[])
  useEffect(()=>{
    localStorage.setItem("todo", JSON.stringify(todos))
  },[todos])
  return (
  <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, todoComplete}}>
  <div className="w-full h-screen flex flex-col items-center bg-black/50">
    <div className="w-[700px]">
    <AddTodo />
    {todos.map((todo) =>(
      <div key={todo.id}>
      <TodoList todo={todo} />
  </div>
    ))}
    
  </div>
  </div>
  </TodoProvider>
  )
}

export default App

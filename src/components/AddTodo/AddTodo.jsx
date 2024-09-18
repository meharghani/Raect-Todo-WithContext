import React, { useState } from 'react'
import useTodo from '../../context/todoContext'

const AddTodo = () => {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()
    
    const submitTodo = (e) =>{
        e.preventDefault()
        addTodo({todo, completed: false})
        setTodo("")

    }

  return (
    <form onSubmit={submitTodo}>
    <div className="flex justify-center w-full mt-28">
      <input 
      type="text" 
      className="w-[80%] p-2 outline-none rounded-l-md" 
      placeholder="Todo"
      value={todo}
      onChange={(e)=>setTodo(e.target.value)}
      />
      <button type='submit' className="bg-blue-600 text-white px-4 py-3 cursor-pointer rounded-r-md">Add Todo</button>

    </div>
    </form>  
  )
}

export default AddTodo
import { createContext, useContext } from "react";

const todoContext = createContext({
    todos:[{
        id: 1,
        todo: "todo msg",
        completed: false,
}],
    addTodo:(todo)=>{},
    updateTodo:(id, todo)=>{},
    deleteTodo:(id)=>{},
    todoComplete:(id)=>{}
})

export const TodoProvider = todoContext.Provider

export default function useTodo() {
    return useContext(todoContext)
}
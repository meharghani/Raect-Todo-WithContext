import React, { useState } from "react";
import DeleteButton from "../DleteButton";
import EditButton from "../EditButton";
import SaveButton from "../SaveButton";
import useTodo from "../../context/todoContext";

const TodoList = ({ todo }) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTod, todoComplete } = useTodo();
  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };
  const markTodo = () => {
    todoComplete(todo.id);
  };

  return (
    <div className="w-full flex justify-center mt-3 px-5">
      <div className="flex w-full bg-pink-300 px-2 py-1 justify-between rounded-md">
        <div className="flex">
          <input
            type="checkbox"
            className="rounded-md w-4 h-4 mt-2.5"
            checked={todo.completed}
            onChange={markTodo}
          />
          <div id="swapEdit">
            <input
              type="text"
              value={todoMsg}
              onChange={(e) => setTodoMsg(e.target.value)}
              readOnly={!isTodoEditable || todo.completed}
              className={`bg-inherit p-2 outline-none ${
                todo.completed ? "line-through"  : ""
              } ${isTodoEditable ? "pl-4" : ""}`}
            />
          </div>
        </div>
        <div className="p-2 flex">
          {isTodoEditable ? (
            <SaveButton 
          className="mr-4" 
          setIsTodoEditable={setIsTodoEditable}
          editTodo={editTodo}
          />
          ) :(
<EditButton
            className="mr-4"
            todo={todo}
            setIsTodoEditable={setIsTodoEditable}
          />

          )}
          
          

          <DeleteButton todo={todo} />
        </div>
      </div>
    </div>
  );
};

export default TodoList;

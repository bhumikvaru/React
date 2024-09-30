import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../features/todo/todoSlice";
const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <li className="flex justify-between items-center p-2 border-b border-gray-200">
      <span
        style={{ textDecoration: todo.complete ? "line-through" : "none" }}
        onClick={() => dispatch(toggleTodo(todo.id))}
      >
        {todo.text}
      </span>
      <button
        onClick={() => dispatch(removeTodo(todo.id))}
        className="ml-2 p-1 bg-red-500 text-white rounded"
      >
        Remove
      </button>
    </li>
  );
};

export default TodoItem;

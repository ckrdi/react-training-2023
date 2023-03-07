import Button from "./Button"
import { useDispatch } from "react-redux"
import { useState } from "react";
import { addTodo } from '../features/todo/todoSlice'

export default function TodoAdd() {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const [add, setAdd] = useState("");
  const handleAddTodo = (title) => {
    let todoToBeAdded = {};
    todoToBeAdded.index = count;
    todoToBeAdded.name = title;
    
    dispatch(addTodo(todoToBeAdded));
    setCount(count + 1);
    setAdd("");
  }
  return (
    <div>
      <input type="text" value={add} onChange={e => setAdd(e.target.value)} />
      <span>{" "}</span>
      <Button label="Add to do" onClick={() => {handleAddTodo(add)}} />
    </div>
  )
}
import { useSelector, useDispatch } from "react-redux"
import { deleteTodo } from '../features/todo/todoSlice'
export default function Todo() {
  const todo = useSelector(state => state.todo.value);
  const dispatch = useDispatch();

  return (
    <div>
      {todo.map(d => {
        return (
          <div className="list" key={d.index}>
            <input type="checkbox" onChange={() => dispatch(deleteTodo(d.index))} />
            <span>{" "}</span>
            <span>{d.name}</span>
          </div>
        )
      })}
    </div>
  )
}
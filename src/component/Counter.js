import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../features/post/postSlice'
import Button from './Button';
import Posts from './Posts';

export default function Counter() {
  const count = useSelector((state) => state.post.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState('1');

  return (
    <div>
      <div>Post number: {count}</div>
      <span>
        <Button onClick={() => dispatch(decrement())} label="Previous post" />
        <span>{" "}</span>
        <Button onClick={() => dispatch(increment())} label="Next post" />
      </span>
      <div>
        <input value={amount} onChange={e => setAmount(e.target.value)} />
        <span>{" "}</span>
        <Button onClick={() => dispatch(incrementByAmount(Number(amount)))} label="Go to post" />
      </div>
      <Posts number={count} />
    </div>
  );
}
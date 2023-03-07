import './App.css';
import RandomText from './component/RandomText';
import Todo from './component/Todo';
import TodoAdd from './component/TodoAdd';
import Counter from './component/Counter';

function App() {
  return (
    <div className="App">
      <section className="posts">
        <RandomText text="Posts" />
        <Counter />
      </section>
      <section className="todo">
        <RandomText text="To Do App" />
        <TodoAdd />
        <Todo />
      </section>
    </div>
  );
}

export default App;

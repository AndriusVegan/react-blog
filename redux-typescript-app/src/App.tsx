import React, { useState, useEffect, useRef  } from 'react';
// import logo from './logo.svg';
import { useDispatch, useSelector} from 'react-redux';
import './App.module.css';
import Todo from './Todo';
import { selectTodos, addATodo } from './features/todoSlice';


function App() {

  const [input, setInput] = useState<string>('')
  const todos = useSelector(selectTodos)
  const dispatch = useDispatch()
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    //when the app component  loads...
   if (inputRef.current !== null) {
     inputRef.current.focus()
    }
  }, [] )

  const addTodo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (!input) return; // prevent blank entries


    dispatch(addATodo({
      title: input
    }))
    setInput('')
  }

  return (
    <div className="App">
      <h2>Add your todo</h2>
      <Todo title='Go to make vegan promotion'/>

      {todos.map((todo) => (
        <Todo title={todo.title} isDone={todo.isDone} />
        ))}

        <form>
          <input ref={inputRef} value={input} onChange={e => setInput
            (e.target.value)} />

          <button type='submit' onClick={addTodo}>Add todo</button>
        </form>
        
        

          </div>
  );
}

export default App;

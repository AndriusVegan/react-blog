import React from 'react';
import { Todo as TodoProp } from './features/todoSlice'

import styles from './Todo.module.css';
// interface Props = {
//     title: string
// }
function Todo(todo: TodoProp) {
   
    return (
        <div className={styles.todo}>
            {/* <h3>Vegan error</h3> */}
            <p className="todo__title">{todo.title}</p>
           
            {todo.isDone && (
            <h2> You've done it</h2>)}

             {/* <h3 className={style.error}>Go vegan error occured</h3> */}
        </div>
    )
}

export default Todo

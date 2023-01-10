import React from "react";
import TodoItem from "./TodoItem";

function TodoBoard(props) {

    return (
        <div className="todo-Box">
            {/* <img src="https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxIRnctR0pscmxnSXx8ZW58MHx8fHw%3D&w=1000&q=80"/> */}
            <h1>Todo List</h1>
          {props.todoList.map((item)=><TodoItem item={item}/>)}

        </div>
    )

}

export default TodoBoard
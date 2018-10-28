import React, { Component } from 'react'
class TodoList extends Component {


    render() {
        const fakeTodos = [
            { id: 1, text: "buy a car", completed: false, todoClick: () => console.log("clicked!") },
            { id: 2, text: "play the guitar", completed: true, todoClick: () => console.log("clicked!") },
            { id: 3, text: "play with cat", completed: false, todoClick: () => console.log("clicked!") }
        ];
        return (
            <div>
                <ul>
                    {fakeTodos.map(todo =>
                        <li
                            key={todo.id}
                            onClick={everything.allClick}
                            style={{
                                textDecoration: todo.completed ? 'line-through' : 'none'
                            }}
                        >
                            {todo.text}
                        </li>
                    )}
                </ul>      </div>
        )
    }
}

export default TodoList;
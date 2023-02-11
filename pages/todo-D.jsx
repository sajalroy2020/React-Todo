import classes from "../styles/style.module.css";
import { useState } from "react";
import React from "react";
// import { useForm } from 'react-hook-form';


export default function Todo() {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");
    const [editTodo, setEditTodo] = useState(null);
    const [editText, setEditText] = useState('');


    function handleSubmit(event) {
        event.preventDefault();
        const newTodo = {
            id: new Date().getTime(),
            text: todo,
        }
        setTodos([...todos, newTodo])
        setTodo("")
    }

    function deleteTodo(id) {
        const deleteTodos = todos.filter((todo) => todo.id != id);
        setTodos(deleteTodos);
    }

    const UpdatetTodo = (id) => {
        const y = [...todos].map((todo) => {
            if (todo.id == id) {
                todo.text = editText;
            }
            return todo;
        })
        setTodos(y);
        setEditTodo(null);
        setEditText("");
    }


    return (
        <div>
            <div className={classes.card}>
                <h1>CRUD-Todo</h1>
                <form onSubmit={handleSubmit}>
                    <div className={classes.inputBox}>
                        <label>Enter your name:</label>
                        <input type="text" name="name" onChange={(event) => setTodo(event.target.value)} value={todo} />
                    </div>
                    <button type="submit" className={classes.btn}>Save</button>
                </form>
                {todos.map((todo) => <div className={classes.editList} key={todo.id}>
                    {editTodo == todo.id ? (<input type="text" onChange={(e) => setEditText(e.target.value)} value={editText} />) : (<div>{todo.text}</div>)}

                    {editTodo === todo.id ? (<button onClick={() => UpdatetTodo(todo.id)} className={classes.todo_edit}>Update</button>) :
                        (<button onClick={() => setEditTodo(todo.id)} className={classes.todo_edit}>Edit</button>)}

                    {/* <input className={classes.todo_chackBOx} type="checkbox" /> */}

                    <button onClick={() => deleteTodo(todo.id)} className={classes.todo_delete}>delete</button>

                </div>
                )
                }
            </div>
        </div>
    )
}
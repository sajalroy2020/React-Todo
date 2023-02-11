import classes from "../styles/style.module.css";
import { useState } from "react";
import React from "react";


export default function todo(){

    const [todos, setTodos]=useState([]);
    const [todo, setTodo]=useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        let allInput={
            id:1,
            name: todo,
        }

        if(allInput.name.length >= 1){
            setTodos([...todos, allInput]);
        }

        setTodo("");
    }

    return(
        <div>
            <div className={classes.card}>
            <h1>CRUD-Todo</h1>
                <form onSubmit={handleSubmit}>
                    <div className={classes.inputBox}>
                        <label>Enter your name:</label>
                        <input type="text" onChange={(e)=>setTodo(e.target.value)} value={todo} />
                    </div>
                    <button type="submit" className={classes.btn}>Save</button>
                </form>
                {
                   todos.map((todo)=><div className={classes.editList}>{todo.name}</div>) 
                }
            </div>
        </div>
    )
}
import { useState } from "react";

export default function index2(){

    const [todo, setTodo]= useState(0);

    const handelPlass = () => {
        setTodo(todo + 1);
    }

    const handelMinas = () =>{
        if(todo == 0){
            todo;
        }else{
            setTodo(todo - 1);
        }
    }
    

    return(
        <>
            <div>
                <button onClick={handelMinas}>-</button>
                    <h3>{todo}</h3>
                <button onClick={handelPlass}>+</button>
            </div>
        </>
    )
}
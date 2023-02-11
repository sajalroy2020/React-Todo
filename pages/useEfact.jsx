import { useState, useEffect } from "react"

export default function Effacting(){

    const [todos, setTodos]=useState(0);


    useEffect(()=>{
        if (todos > 1){
            document.title = `Chats (${todos})`
        }else{
            document.title = `Chats`;
        }
    }, [todos])

    const counting=()=>{
        setTodos(todos+1);
    };

    return(
        <div>
            <button onClick={counting}>Click me {todos}</button>
        </div>
    )
}
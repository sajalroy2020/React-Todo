import { useState, useEffect } from "react";

export default function DataFatch(){

    const [todos, setTodos]=useState(null);

    useEffect(()=>{
            setTimeout(()=>{
                fetch('https://jsonplaceholder.typicode.com/todos')
                .then((res)=>{
                    return res.json();
                })
                .then((data)=>{
                    setTodos(data);
                    console.log(todos);
                }, []);
        }, 2000);
    })

    return(
        <div>
            <h1>Fatch API Data</h1>
            <div>
                {
                   todos && todos.map((todo)=>{
                        return <p key={todo.id}>{todo.title}</p>;
                    })
                }
            </div>
        </div>
    )
}
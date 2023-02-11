import { useState } from "react";

export default function index1(){

    const [todo, setTodo]= useState('');
    const [worning, setWorning]=useState('');

    const handelInput = (e) => {
        const inputValue = e.target.value;

        const updateWorning = inputValue.includes('.js') ? 'worning you write .js': null;

        setTodo(inputValue);
        setWorning(updateWorning);
    }

    return(
        <>
        <div>
            <p>{todo}</p>
            <p>
                <textarea name="todo" value={todo} onChange={handelInput} cols="30" rows="10"></textarea>
            </p>
            <h3>{worning || 'Good writing'}</h3>
        </div>
        </>
    )
}
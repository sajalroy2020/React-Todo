import { useEffect, useState } from "react"

export default function Effecting(){
    const [counts, setCounts]=useState(0);
    const [count, setCount]=useState(0);

    useEffect(()=>{
        // alert('click me')
    }, [])

    return(
        <>
            <button onClick={()=>setCount(count + 1)}>Click me = {count}</button>
            <br />
            <br />
            <button onClick={()=>setCounts(counts + 1)}>Click me = {counts}</button>
        </>
    )
}
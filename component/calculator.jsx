import EggBoil from "./eggVoill";
import { useState } from "react";

export default function Calculator(){

    const [temperature, setTemperature]=useState('');
    const getNumber =(e) => {
       let x = e.target.value;
       setTemperature(x);
    }

    return(
        <>
            <h4>Enter your temperature number: </h4>
            <input type="text" onChange={getNumber} />

            <EggBoil number={parseFloat(temperature)}/>
        </>
    )
}
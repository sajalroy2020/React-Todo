import classes from "../styles/style.module.css";
import { useState } from "react";

export default function todo() {

    const [data, setData] = useState({
        name: "",
        roll: "",
        deperment: "",
        father: "",
        mother: "",
        namber: "",
        nid: "",
    });

    function allInput(event, fildName) {
        setData({
            ...data,
            [fildName]: event.target.value
        })
    }


    return (
        <div>
            <div className={classes.card}>
                <h1>Student Todo List</h1>
                <h5>Student Name : {data.name}</h5>
                <h5>Roll : {data.roll}</h5>
                <h5>Deperment : {data.deperment}</h5>
                <h5>Father Name : {data.father}</h5>
                <h5>Mother Name : {data.mother}</h5>
                <h5>NID Namber : {data.nid}</h5>
                <h5>Phone Number : {data.namber}</h5>

                <div className={classes.inputBox}>
                    <label>Enter your name:</label>
                    <input
                        onChange={(event) => { allInput(event, 'name') }}
                        type="text" name="" id=""
                    />
                </div>
                <div className={classes.inputBox}>
                    <label>Enter roll no:</label>
                    <input
                        onChange={(event) => { allInput(event, 'roll') }}
                        type="text" name="" id=""
                    />
                </div>
                <div className={classes.inputBox}>
                    <label>Enter your deperment:</label>

                    <input
                        onChange={(event) => { allInput(event, 'deperment') }}
                        type="text" name="" id=""
                    />
                </div>

                <div className={classes.inputBox}>
                    <label>Enter your father name:</label>
                    <input
                        onChange={(event) => { allInput(event, 'father') }}
                        type="text" name="" id=""
                    />
                </div>
                <div className={classes.inputBox}>
                    <label>Enter mother name:</label>
                    <input
                        onChange={(event) => { allInput(event, 'mother') }}
                        type="text" name="" id=""
                    />
                </div>
                <div className={classes.inputBox}>
                    <label>Enter your NID number:</label>
                    <input
                        onChange={(event) => { allInput(event, 'nid') }}
                        type="text" name="" id=""
                    />
                </div>
                <div className={classes.inputBox}>
                    <label>Enter your phone number:</label>
                    <input
                        onChange={(event) => { allInput(event, 'number') }}
                        type="text" name="" id=""
                    />
                </div>
            </div>
        </div>
    )
}
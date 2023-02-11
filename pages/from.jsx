import classes from "../styles/style.module.css";
import { useState } from "react";
// import React from "react";
import { useForm } from 'react-hook-form';


export default function from(){

    const [todo, setTodo]= useState("");

    const { register, handleSubmit, formState: { errors } } = useForm();
    function onSubmit (data){
        const name = data.fullname;
        setTodo(name);
    }


    // const allInput = (e,fildName) =>{
    //     setTodo({
    //         ...todo,
    //       [fildName]: e.target.value
    //     })
    // }

    

    return(
        <div>
            <div className={classes.card}>
                <h1>Student Todo List</h1>
                <h5>Student Name : {todo}</h5>
                <h5>Roll : </h5>
                <h5>Deperment : </h5>

                <form onSubmit={onSubmit= handleSubmit(onSubmit)}>
                    <div className={classes.inputBox}>
                        <label>Enter your name:</label>
                        <input type="text" onChange={(e)=> setTodo(e, target.value)} {...register('fullname', {required:true})} />
                        {errors.fullname && errors.fullname.type == 'required' && <p className={classes.alert_text}>Enter the full name</p>}
                    </div>
                    <div className={classes.inputBox}>
                        <label>Enter roll no:</label>
                        <input type="text" {...register('roll', {required:true})} />
                        {errors.roll && errors.roll.type == 'required' && <p className={classes.alert_text}>Enter the roll</p>}
                    </div>
                    <div className={classes.inputBox}>
                        <label>Enter your deperment:</label>
                        <input type="text" {...register('deperment', {required:true, minLength:3})} />
                        {errors.deperment && errors.deperment.type === 'required' && <p className={classes.alert_text}>Enter the deperment name</p>}
                        {errors.deperment && errors.deperment.type === 'minLength' && <p className={classes.alert_text}>Plase enter minimam 3 carecter</p>}
                    </div>
                    <button className={classes.btn}>Submit</button>
                </form>
            </div>
        </div>
    )
}
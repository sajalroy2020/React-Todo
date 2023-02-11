import React, {useState } from "react";
import { useForm } from "react-hook-form";
import LoaderIcon from "react-loader-icon";


const ReuseFrom = () => {

    const [loginBtn, setLoginBtn] = useState(true);
    const { register, handleSubmit } = useForm();

    const handleLogin = (data) => {
        if (data == data){
            console.log(data);
            setLoginBtn(false);
            setTimeout(()=>setLoginBtn(true), 3000);
            console.log(loginBtn);
        }
    }

  return (
    <>
        <h1>Login Form</h1>
    
        <form onSubmit={handleSubmit(handleLogin)}>
            <div>
                <label>Name</label>
                <input name="name" {...register('name')} />
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" {...register('email')} />
            </div>
            <div>
                <label>Range</label>
                <input type="range" name="range" {...register('email')} />
            </div>
            {!loginBtn ? <button className="form_button"><LoaderIcon type={"spin"} /></button> : <button>Submit</button>}
        </form>
    </>
  );
};
export default ReuseFrom;
import ReuseableFrom from "../component/ReuseableForm";
import { useForm } from 'react-hook-form';

export default function LoginFrom(){
    const {handleSubmit, register, formState: { errors } } = useForm();
    const handleLForm = (e) => {
        e.preventDefault();
        console.log(e);
    }
    return(
        <>
            <br />
            <br />
            <form onSubmit={handleSubmit(handleLForm)}>
                <ReuseableFrom 
                    name='email'
                    id='email'
                    lableName='Email'
                    type='email' 
                    // validMsg='email is recureed'
                    register = {register}
                />
                <br />
                <button type="button">Submit</button>
            </form>
        </>
    )
}
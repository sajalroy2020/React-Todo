import { useForm } from 'react-hook-form';

export default function ReuseableFrom(prop){
    const {lableName, name, type, id, minLengthNum, maxLengthNum ,register,} = prop;
    // minLengthText, maxLengthText, validMsg

    return(
        <>
            <div>
                <label>{lableName}</label>
                <input type={type} id={id} {...register(name, {required:true, minLength:{minLengthNum}, maxLength:{maxLengthNum}})} />
                {/* {errors.name && errors.name.type === 'required' && <p>{validMsg}</p>}
                {errors.name && errors.name.type === 'minLength' && <p>{minLengthText}</p>}
                {errors.name && errors.name.type === 'maxLength' && <p>{maxLengthText}</p>} */}
            </div>
        </>
    )
}